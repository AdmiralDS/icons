from __future__ import annotations

import urllib.parse
from typing import Any, Dict, Optional

import requests

class PixsoClient:
    def __init__(self, app_id: str, secret: str, api_base: str) -> None:
        self.app_id = app_id
        self.secret = secret
        self.api_base = api_base.rstrip("/")
        self._access_token: Optional[str] = None

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



