from server.server import app
from flask import jsonify,send_file
from flask import request,session
from models import database

@app.route('/signup', methods=['POST', 'GET'])
def  signup():
	username = request.form['username']
	email = request.form['email']
	password = request.form['password']
	countSql = "select count(email) from user where email = '%s'" % email
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
			uID = database.Database.get_last_insert_id()
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
	# print (data)
	return jsonify(data)
	