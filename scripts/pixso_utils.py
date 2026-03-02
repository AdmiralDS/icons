import re
import urllib.parse
from typing import Any, Dict, List


def parse_design_url(url: str) -> tuple[str, str, str]:
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

    api_base = f"{parsed.scheme}://{parsed.netloc}"

    return file_key, page_id, api_base


def find_icon_nodes(node: Dict[str, Any]) -> List[Dict[str, Any]]:
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


def collect_icons_from_page(page_json: Dict[str, Any]) -> List[Dict[str, Any]]:
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


def sanitize_filename(name: str) -> str:
    invalid = '<>:"/\\|?*'
    result = "".join(c if c not in invalid else "_" for c in name)
    result = result.strip()
    return result or "icon"


def extract_component_id_from_thumbnail(thumbnail_url: str) -> Any:
    parsed = urllib.parse.urlparse(thumbnail_url)
    path = parsed.path or thumbnail_url
    parts = path.strip("/").split("/")
    try:
        idx = parts.index("component")
        return parts[idx + 1]
    except (ValueError, IndexError):
        return None


def collect_icons_from_library(library_json: Dict[str, Any]) -> List[Dict[str, Any]]:
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




