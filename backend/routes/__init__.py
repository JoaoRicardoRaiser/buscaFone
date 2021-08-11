from flask import Flask
import os

from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = '*'

host = os.getenv("POSTGRESQL_HOST")
database = os.getenv("POSTGRESQL_DATABASE")
username = os.getenv("POSTGRESQL_USERNAME")
password = os.getenv("POSTGRESQL_PASSWORD")

app.config[
    'SQLALCHEMY_DATABASE_URI'
] = f'postgresql://{username}:{password}@{host}:5432/{database}'

