from server.server import app
from flask import jsonify,send_file
from flask import request,session
from models import database

@app.route('/mind', methods=['POST', 'GET'])
def  mind():
	uID = session.get('user_id')
	print(uID)
	content = request.form['content']
	print (content)
	sql = "insert into mind(user_id,content) values('%s','%s')" % (uID,content)
	result = database.Database.execute(sql)
	'''
	errorcode:0表示插入成功，1表示插入失败
	'''
	if(result is ()):
		# print ("hhh")
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
	