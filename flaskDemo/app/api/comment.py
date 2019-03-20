from server.server import app
from flask import jsonify,send_file
from flask import request,session
from models import database


@app.route('/<mindOrDiary>/write_comment', methods=['POST', 'GET'])
def  write_comment(mindOrDiary):
	critic_id = session.get('user_id')
	print(mindOrDiary)
	# mind or diary ID
	Id = request.values['Id']
	content = request.values['content']
	print (content)
	critic_name = database.Database.execute("select username from user where ID = '%s'" % (critic_id))[0][0]
	if(mindOrDiary == 'mind'):
		sql = "insert into mind_comment(critic_id,critic_name,mind_id,content) values('%s','%s','%s','%s')" % (critic_id,critic_name,Id,content)
	else:
		sql = "insert into dia_comment(critic_id,critic_name,dia_id,content) values('%s','%s','%s','%s')" % (critic_id,critic_name,Id,content)
	result = database.Database.execute(sql)
	'''
	errorcode:0表示插入成功，1表示插入失败
	'''
	if(result is ()):
		# print ("hhh")
		commentId = database.Database.get_last_insert_id()
		addCommentNumSql = "update %s set commentNum = commentNum + 1 where ID = '%s'" % (mindOrDiary,Id)
		if(database.Database.execute(addCommentNumSql) is not ()):
			data = {
				# 'commentId':commentId,
				'message':'update CommentNum faile',
				'errorcode':2
			}
		else:
			if(mindOrDiary == 'mind'):
				comment = database.Database.execute("select * from mind_comment where ID = '%s'" % (commentId))
			else:
				comment = database.Database.execute("select * from dia_comment where ID = '%s'" % (commentId))
			print("new comment:")
			print(comment)
			data = {
				'comment':comment,
				'message':'success',
				'errorcode':0
			}
	else:
		data = {
			'message':'faile',
			'errorcode':1
		}
	return jsonify(data)


@app.route('/<mindOrDiary>/get_comments', methods=['POST','GET'])
def get_comments(mindOrDiary):
	# uID = session.get('user_id')
	Id = request.values['Id']
	# print(uID)
	if (mindOrDiary == 'mind'):
		comments = database.Database.execute("select * from mind_comment where mind_id = '%s'" % (Id))
	else:
		comments = database.Database.execute("select * from dia_comment where dia_id = '%s'" % (Id))
	print("comments hhh:")
	print(comments)
	return jsonify(comments)