from server.server import app
from flask import jsonify,send_file
from flask import request
from models import database

@app.route('/login', methods=['POST', 'GET'])
def  login():
	email = request.form['email']
	password = request.form['password']
	print (email)
	countSql = "select count(email) from user where email = '%s'" % email
	count = database.Database.execute(countSql)
	'''
	errorcode:0表示正确，1表示用户不存在，2表示查询数据库错误
	'''
	if(count[0][0]):
		pwdSql = "select password from user where email = '%s'" % email
		result = database.Database.execute(pwdSql)
		print (result)
		data = {
			'message':'success',
			'errorcode':0
		}
	else:
		data = {
			'message':'faile',
			'errorcode':1
		}
	return jsonify(data)
	