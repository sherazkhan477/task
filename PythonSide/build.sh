#!/bin/bash

# Don't cd anywhere — run from repo root

# Install backend dependencies (pyproject.toml is at repo root)
poetry install

# Run Django commands from PythonSide
poetry run python PythonSide/manage.py migrate

# Optional: collect static
# poetry run python PythonSide/manage.py collectstatic --noinput
