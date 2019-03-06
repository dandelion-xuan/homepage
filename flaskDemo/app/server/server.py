from flask import Flask
from flask_cors import CORS
from config import config

app = Flask(__name__)
CORS(app, supports_credentials=True)
app.config['SECRET_KEY'] = config.SECRET_KEY
# app.register_blueprint(api.test.test_api)