#!/bin/bash

cd PythonSide  # move into the Django app directory (where settings.py is)

pip install -r ../requirements.txt

python manage.py migrate
python manage.py collectstatic --no-input
