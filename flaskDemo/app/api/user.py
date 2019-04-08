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
		res = database.Database.execute("SELECT * from user WHERE ID = '%s' AND password = '%s';" % (uID,oldPwd))
		print(res)
		if res:
			# True oldPwd
			result = database.Database.execute("UPDATE user SET password='%s' WHERE ID = '%s';" % (newPwd,uID))
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
		result = database.Database.execute("UPDATE user SET username='%s' WHERE ID = '%s';" % (newUsername,uID))
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

# 判断用户是否登录
@app.route("/user",methods=['POST','GET'])
def user():
	uID = session.get('user_id')
	print(uID)
	if(uID):
		username = database.Database.execute("select username from user where ID = '%s';" % (uID))
		print(username)
		return jsonify(username)
	else:
		print("no user!!!!")
		return jsonify("none")