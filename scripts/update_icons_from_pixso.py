import os
import re
import shutil
import sys
import zipfile
from pathlib import Path

# === Настройки путей ===
repo_root = Path(__file__).resolve().parent.parent
source_path = repo_root / "inputZIP"
dst_root_path = repo_root / "public" / "icons"

if not source_path.is_dir():
    sys.exit(f"source path is not a directory: {source_path}")
if not dst_root_path.is_dir():
    sys.exit(f"destination path is not a directory: {dst_root_path}")

# === Основная логика ===
for category_dir in source_path.iterdir():
    if not category_dir.is_dir():
        continue
    print(f"\n=== Processing category: {category_dir.name} ===")

    # 1. Поиск zip-файла
    zip_files = list(category_dir.glob("*.zip"))
    if zip_files:
        zip_file = zip_files[0]
        print(f"Found ZIP: {zip_file.name}")
        try:
            with zipfile.ZipFile(zip_file, 'r') as zip_ref:
                zip_ref.extractall(category_dir)
            print("Unpacked ZIP (archive kept)")
        except Exception as e:
            print(f"Failed to extract {zip_file.name}: {e}")
            continue
    else:
        print("No ZIP found in", category_dir.name)

    # 2. Поиск SVG после распаковки
    svg_files = list(category_dir.rglob("*.svg"))
    print(f"Found {len(svg_files)} SVG files")

    # 3. Папка назначения
    dst_dir = dst_root_path / category_dir.name.strip()
    dst_dir.mkdir(parents=True, exist_ok=True)

    # 4. Удаляем старые SVG в целевой папке
    for old_svg in dst_dir.rglob("*.svg"):
        old_svg.unlink()

    # 5. Копируем и переименовываем
    for file in svg_files:
        new_name = file.name.strip()
        dst_file = dst_dir / new_name
        dst_file.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(file, dst_file)

    # 6. Очистка исходной папки
    for item in category_dir.iterdir():
        if item.name == ".gitkeep":
            continue
        try:
            if item.is_file():
                item.unlink()
            elif item.is_dir():
                shutil.rmtree(item)
        except Exception as e:
            print(f"⚠️ Could not delete {item}: {e}")

print("\nDone. Icons updated and source cleaned.")
