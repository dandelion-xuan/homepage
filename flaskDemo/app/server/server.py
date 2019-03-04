import api.signup
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app, supports_credentials=True)
# app.register_blueprint(api.test.test_api)