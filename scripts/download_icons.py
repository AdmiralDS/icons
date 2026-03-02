import argparse
import os
import sys
from typing import Any, Dict, List

from pixso_client import PixsoClient
from pixso_config import load_env_from_file, require_pixso_credentials
from pixso_utils import collect_icons_from_library, parse_design_url, sanitize_filename

API_BASE = os.environ.get("PIXSO_API_BASE", "https://api.pixso.net")

class _PixsoClientLegacy:
    def __init__(self, app_id: str, secret: str, api_base: str = API_BASE) -> None:
        self.app_id = app_id
        self.secret = secret
        self.api_base = api_base.rstrip("/")
        self._access_token: str | None = None

    def authenticate(self) -> str:
        if self._access_token:
            return self._access_token

        url = f"{self.api_base}/api/oauth/oauth/token"
        resp = requests.post(
            url,
            data={
                "grant_type": "client_credentials",
                "scope": "all_scopes",
                "client_id": self.app_id,
                "client_secret": self.secret,
            },
            timeout=30,
        )
        resp.raise_for_status()
        data = resp.json()
        token = data.get("access_token")
        if not token:
            raise RuntimeError(f"Auth response does not contain access_token: {data}")
        self._access_token = token
        return token

    @property
    def headers(self) -> Dict[str, str]:
        token = self.authenticate()
        return {"Authorization": f"Bearer {token}"}

    def get_file_library(self, file_key: str) -> Dict[str, Any]:
        url = f"{self.api_base}/openapi/v1/file/library"
        resp = requests.get(
            url,
            headers=self.headers,
            params={"file_key": file_key},
            timeout=60,
        )
        resp.raise_for_status()
        return resp.json()

    def get_page_document(self, file_key: str, page_id: str) -> Dict[str, Any]:
        url = f"{self.api_base}/openapi/v1/file/library"
        resp = requests.get(
            url,
            headers=self.headers,
            params={"file_key": file_key},
            timeout=60,
        )
        resp.raise_for_status()
        data = resp.json()

        document = data.get("document", data)

        target = None
        if page_id:
            queue = [document]
            while queue:
                node = queue.pop(0)
                if node.get("id") == page_id:
                    target = node
                    break
                children = node.get("children") or []
                queue.extend(children)

        if target is None:
            target = document

        return {"document": target}

    def export_node_png(self, file_key: str, node_id: str) -> bytes:

        node_id_encoded = urllib.parse.quote(node_id, safe="")
        url = f"{self.api_base}/api/files/{file_key}/nodes/{node_id_encoded}/export"
        resp = requests.get(url, headers=self.headers, timeout=60)
        resp.raise_for_status()
        return resp.content

    def download_component_thumbnail(self, component_id: str) -> tuple[bytes, str]:
        url = f"{self.api_base}/api/pix/component/{component_id}/thumb"
        resp = requests.get(url, timeout=60)
        resp.raise_for_status()
        content_type = resp.headers.get("Content-Type", "")
        return resp.content, content_type


def _parse_design_url_legacy(url: str) -> tuple[str, str]:
    parsed = urllib.parse.urlparse(url)
    parts = parsed.path.strip("/").split("/")
    try:
        design_index = parts.index("design")
    except ValueError:
        raise ValueError(f"URL does not look like Pixso design URL: {url}")
    try:
        file_key = parts[design_index + 1]
    except IndexError:
        raise ValueError(f"Cannot extract file_key from URL path: {parsed.path}")

    qs = urllib.parse.parse_qs(parsed.query)
    page_raw_list = qs.get("page-id") or qs.get("page_id")
    page_id = urllib.parse.unquote(page_raw_list[0]) if page_raw_list else ""

    return file_key, page_id


def _find_icon_nodes_legacy(node: Dict[str, Any]) -> List[Dict[str, Any]]:
    icons: List[Dict[str, Any]] = []

    node_type = node.get("type")
    name = node.get("name", "") or ""

    is_vector = node_type == "VECTOR"
    name_lower = str(name).lower()
    name_looks_like_icon = "icon" in name_lower or "икон" in name_lower

    if is_vector or name_looks_like_icon:
        icons.append(node)

    for child in node.get("children", []) or []:
        icons.extend(find_icon_nodes(child))

    return icons


def _collect_icons_from_page_legacy(page_json: Dict[str, Any]) -> List[Dict[str, Any]]:
    document = page_json.get("document")
    if not document:
        raise RuntimeError("Unexpected page JSON: missing 'document' field")

    icons: List[Dict[str, Any]] = []
    if "children" in document:
        for child in document["children"] or []:
            icons.extend(find_icon_nodes(child))
    else:
        icons.extend(find_icon_nodes(document))

    return icons


def _sanitize_filename_legacy(name: str) -> str:
    invalid = '<>:"/\\|?*'
    result = "".join(c if c not in invalid else "_" for c in name)
    result = result.strip()
    return result or "icon"


def _extract_component_id_from_thumbnail_legacy(thumbnail_url: str) -> Any:
    parsed = urllib.parse.urlparse(thumbnail_url)
    path = parsed.path or thumbnail_url
    parts = path.strip("/").split("/")
    try:
        idx = parts.index("component")
        return parts[idx + 1]
    except (ValueError, IndexError):
        return None


def _collect_icons_from_library_legacy(library_json: Dict[str, Any]) -> List[Dict[str, Any]]:
    icons: List[Dict[str, Any]] = []

    def walk(node: Any) -> None:
        if isinstance(node, dict):
            thumb = node.get("thumbnail_url")
            if isinstance(thumb, str) and "/pix/component/" in thumb:
                comp_id = extract_component_id_from_thumbnail(thumb)
                if comp_id:
                    name = node.get("name") or comp_id
                    icons.append({"id": comp_id, "name": name})
            for value in node.values():
                walk(value)
        elif isinstance(node, list):
            for item in node:
                walk(item)

    walk(library_json)

    unique: Dict[str, Dict[str, Any]] = {}
    for icon in icons:
        unique[icon["id"]] = icon

    return list(unique.values())


def download_icons(design_url: str, output_dir: str) -> None:
    load_env_from_file()
    app_id, secret = require_pixso_credentials()

    file_key, page_id, api_base = parse_design_url(design_url)
    print(f"Parsed URL:\n  file_key={file_key}\n  page_id={page_id}\n  api_base={api_base}")

    client = PixsoClient(app_id=app_id, secret=secret, api_base=api_base)

    print("Fetching file library JSON via OpenAPI...")
    library_json = client.get_file_library(file_key)

    print("Searching for icon components (with thumbnails)...")
    icons = collect_icons_from_library(library_json)
    print(f"Found {len(icons)} components with thumbnails.")

    os.makedirs(output_dir, exist_ok=True)

    for idx, node in enumerate(icons, start=1):
        comp_id = node.get("id")
        comp_name = node.get("name") or f"icon_{idx}"

        if not comp_id:
            continue

        safe_name = sanitize_filename(str(comp_name))

        try:
            content, content_type = client.download_component_thumbnail(comp_id)
        except Exception as exc:
            print(f"  Failed to download thumbnail for component {comp_id}: {exc}", file=sys.stderr)
            continue

        if "png" in content_type:
            ext = "png"
        elif "jpeg" in content_type or "jpg" in content_type:
            ext = "jpg"
        elif "webp" in content_type:
            ext = "webp"
        else:
            ext = "png"

        filename = f"{idx:03d}_{safe_name}.{ext}"
        filepath = os.path.join(output_dir, filename)

        print(f"Saving component {comp_id} thumbnail as {filename}...")

        with open(filepath, "wb") as f:
            f.write(content)

    print(f"Done. Icons saved to: {output_dir}")


def main() -> None:
    parser = argparse.ArgumentParser(
        description=(
            "Download icon nodes from a Pixso design page URL using Pixso OpenAPI.\n\n"
            "Example:\n"
            "  PIXSO_APP_ID=... PIXSO_SECRET=... python pixso_icons_downloader.py "
            "\"https://preprod-pixso.t1-pixso.ru/app/design/rvpAW0vlqupCkCPt5TN_EA?icon_type=1&page-id=204%3A1\" "
            "-o icons"
        ),
        formatter_class=argparse.RawTextHelpFormatter,
    )
    parser.add_argument("design_url", help="Pixso design URL for the page with icons.")
    parser.add_argument(
        "-o",
        "--output",
        dest="output_dir",
        default="icons",
        help="Directory to save exported icons (default: icons)",
    )
    args = parser.parse_args()

    download_icons(args.design_url, args.output_dir)


if __name__ == "__main__":
    main()


