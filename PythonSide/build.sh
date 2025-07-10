#!/usr/bin/env bash

# Install Python dependencies
poetry install --no-root

# Navigate to React frontend (if exists)
cd ../frontend || exit

# Install Node dependencies and build React
npm install
npm run build

# Back to Django project root
cd ../PythonSide || exit

# Run migrations and collectstatic
poetry run python manage.py migrate
poetry run python manage.py collectstatic --noinput
