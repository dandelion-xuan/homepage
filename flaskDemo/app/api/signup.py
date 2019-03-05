from server.server import app
from flask import jsonify,send_file
from flask import request
from models import database

@app.route('/signup', methods=['POST', 'GET'])
def  signup():
	username = request.form['username']
	email = request.form['email']
	password = request.form['password']
	countSql = "select count(username) from user where username = '%s'" % username
	count = database.Database.execute(countSql)
	# print (result[0][0])
	'''
	errorcode:0表示正确，1表示用户已存在，2表示插入数据库错误
	'''
	if(count[0][0]):
		data = {
			'message':'faile',
			'errorcode':1
		}
	else:
		insertSql = "insert into user(username,password,email) values('%s','%s','%s')" % (username,password,email)
		result = database.Database.execute(insertSql)
		# print(result)
		if(result is ()):
			# print ("hhh")
			data = {
				'message':'success',
				'errorcode':0
			}
		else:
			data = {
				'message':'faile',
				'errorcode':2
			}
	# print (data)
	return jsonify(data)
	