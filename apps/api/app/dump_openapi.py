import json

from app.main import app


def dump_openapi() -> None:
    with open("openapi.json", "w", encoding="utf-8") as f:
        json.dump(app.openapi(), f, indent=2)


if __name__ == "__main__":
    dump_openapi()
