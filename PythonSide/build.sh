#!/bin/bash

# Move into PythonSide
cd "$(dirname "$0")"

# Install Python dependencies
poetry install

# Run migrations
poetry run python manage.py migrate

# Optional: Collect static files
# poetry run python manage.py collectstatic --noinput
