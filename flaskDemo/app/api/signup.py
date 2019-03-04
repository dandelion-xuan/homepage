from server.server import app
from flask import jsonify,send_file
from flask import request

@app.route('/signup', methods=['POST', 'GET'])
def  signup():
	print(request.form['username'])
	return jsonify({'ok':'yes'})
	