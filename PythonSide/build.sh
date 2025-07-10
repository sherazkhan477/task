#!/bin/bash

cd "$(dirname "$0")"

# Install dependencies from requirements.txt
pip install -r requirements.txt

# Apply migrations
python manage.py migrate

# (Optional)
# python manage.py collectstatic --noinput
