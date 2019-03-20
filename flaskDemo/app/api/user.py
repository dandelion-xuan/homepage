from server.server import app
from flask import jsonify,send_file
from flask import request,session
from models import database

@app.route("/userModify",methods=['POST','GET'])
def userModify():
	uID = session.get('user_id')
	newUsername = request.form['newUsername']
	oldPwd = request.form['oldPwd']
	newPwd = request.form['newPwd']
	print(newUsername)
	print(oldPwd)
	print(newPwd)
	if not newUsername.strip():
		print("---用户名为空，修改密码---")
		res = database.Database.execute("SELECT * from user WHERE ID = %d AND password = '%s';" % (int(uID),oldPwd))
		print(res)
		if res:
			# True oldPwd
			result = database.Database.execute("UPDATE user SET password='%s' WHERE ID = %d;" % (newPwd,int(uID)))
			print(result)
			if(result is ()):
				data = {
					'message':'password change success',
					'errorCode':0
				}
			else:
				data = {
					'message':'password change faile',
					'errorCode':1
				}
		else:
			data = {
				'message':'oldPwd faile',
				'errorCode':2
			}

	else:
		print("---修改用户名---")
		result = database.Database.execute("UPDATE user SET username='%s' WHERE ID = %d;" % (newUsername,int(uID)))
		print(result)
		if(result is ()):
			data = {
				'message':'username change success',
				'errorCode':0
			}
		else:
			data = {
				'message':'username change faile',
				'errorCode':1
			}
	return jsonify(data)

@app.route("/user",methods=['POST','GET'])
def user():
	uID = session.get('user_id')
	username = database.Database.execute("select username from user where ID = %d" % (int(uID)))
	print(username)
	return jsonify(username)