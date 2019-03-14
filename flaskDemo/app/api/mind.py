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
		mindId = database.Database.get_last_insert_id()
		data = {
			'mindId':mindId,
			'message':'success',
			'errorcode':0
		}
	else:
		data = {
			'message':'faile',
			'errorcode':1
		}
	return jsonify(data)

@app.route('/get_minds', methods=['POST', 'GET'])
def  get_minds():
	uID = session.get('user_id')
	print(uID)
	minds = database.Database.execute("select content, uploadDate, commentNum from mind where user_id = '%s'" % (uID))
	# print(len(minds))
	contentArr = []
	uploadDateArr = []
	commentNumArr = []
	for i in range(len(minds)):
		print(minds[i][1])
		contentArr.append(minds[i][0])
		uploadDateArr.append(minds[i][1])
		commentNumArr.append(minds[i][2])
	return jsonify(minds)

@app.route('/mind/write_comment', methods=['POST', 'GET'])
def  write_comment():
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

@app.route('/mind/get_comments', methods=['POST','GET'])
def get_comments():
	uID = session.get('user_id')
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