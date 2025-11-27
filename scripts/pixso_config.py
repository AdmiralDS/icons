from __future__ import annotations

import os
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent

ENV_FILE_NAME = ".env.secret"
ENV_FILE_PATH = REPO_ROOT / ENV_FILE_NAME

PIXSO_APP_ID_KEY = "PIXSO_APP_ID"
PIXSO_SECRET_KEY = "PIXSO_SECRET"
PIXSO_API_BASE_KEY = "PIXSO_API_BASE"

DEFAULT_PIXSO_API_BASE = os.environ.get(PIXSO_API_BASE_KEY, "https://pixso.t1-pixso.ru")


def load_env_from_file(path: Path | None = None) -> None:
    env_path = path or ENV_FILE_PATH
    if not env_path.is_file():
        return

    try:
        with env_path.open("r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if not line or line.startswith("#"):
                    continue
                if "=" not in line:
                    continue

                key, value = line.split("=", 1)
                key = key.strip()
                value = value.strip().strip('"').strip("'")

                if key and key not in os.environ:
                    os.environ[key] = value
    except OSError:
        return


def require_pixso_credentials() -> tuple[str, str]:
    app_id = os.environ.get(PIXSO_APP_ID_KEY)
    secret = os.environ.get(PIXSO_SECRET_KEY)

    if not app_id or not secret:
        raise RuntimeError(
            "Pixso credentials are not configured. "
            f"Set {PIXSO_APP_ID_KEY} and {PIXSO_SECRET_KEY} (e.g. in {ENV_FILE_NAME})."
        )

    return app_id, secret



