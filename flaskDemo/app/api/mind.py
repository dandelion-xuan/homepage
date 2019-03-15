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
	minds = database.Database.execute("select content, uploadDate, commentNum, ID from mind where user_id = '%s' order by ID desc" % (uID))
	# print(len(minds))
	return jsonify(minds)

@app.route('/mind/write_comment', methods=['POST', 'GET'])
def  write_comment():
	critic_id = session.get('user_id')
	print(critic_id)
	mindId = request.values['mindId']
	content = request.values['content']
	print (content)
	sql = "insert into mind_comment(critic_id,mind_id,content) values('%s','%s','%s')" % (critic_id,mindId,content)
	result = database.Database.execute(sql)
	'''
	errorcode:0表示插入成功，1表示插入失败
	'''
	if(result is ()):
		# print ("hhh")
		commentId = database.Database.get_last_insert_id()
		addCommentNumSql = "update mind set commentNum = commentNum + 1 where ID = '%s'" % (mindId)
		if(database.Database.execute(addCommentNumSql) is not ()):
			data = {
				'commentId':commentId,
				'message':'update CommentNum faile',
				'errorcode':2
			}
		else:
			data = {
				'commentId':commentId,
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
	# uID = session.get('user_id')
	mindId = request.values['mindId']
	# print(uID)
	comments = database.Database.execute("select * from mind_comment where mind_id = '%s'" % (mindId))
	critic_name = database.Database.execute("select username from user where ID = '%s'" % (comments[0][4]))
	commentId = comments[0]
	postDate = comments[1]
	content = comments[2]
	commentArgs = [commentId,postDate,content,critic_name]
	print(comments)
	print(commentArgs)
	return jsonify(comments)
