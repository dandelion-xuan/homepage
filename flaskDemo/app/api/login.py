from server.server import app
from flask import jsonify,send_file
from flask import request,session
from models import database

@app.route('/login', methods=['POST', 'GET'])
def  login():
	email = request.form['email']
	password = request.form['password']
	# print (email)
	countSql = "select count(email) from user where email = '%s'" % email
	count = database.Database.execute(countSql)
	'''
	errorcode:0表示正确，1表示用户不存在，2表示密码错误
	'''
	if(count[0][0]):
		pwdSql = "select password,ID from user where email = '%s'" % email
		result = database.Database.execute(pwdSql)
		uID = result[0][1]
		dbpwd = result[0][0]
		if(password == dbpwd):
			session['user_id'] = uID
			data = {
				'message':'success',
				'errorcode':0
			}
		else:
			data = {
				'message':'faile',
				'errorcode':2
			}
	else:
		data = {
			'message':'faile',
			'errorcode':1
		}
	return jsonify(data)
	