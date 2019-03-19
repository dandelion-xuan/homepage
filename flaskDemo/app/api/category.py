from server.server import app
from flask import jsonify,send_file
from flask import request,session
from models import database

@app.route('/get_categoryList',methods=['POST','GET'])
def get_categoryList():
	uID = session.get('user_id')
	categories = database.Database.execute("SELECT * FROM dia_category WHERE user_id = '%s';" % (uID))
	return jsonify(categories)

@app.route('/get_category_diaries',methods=['POST','GET'])
def get_category_diaries():
	category_id = request.values['category_id']
	diaries = database.Database.execute("SELECT A.ID AS dia_id,uploadDate,A.title,content,commentNum,B.title AS category_name from diary AS A,dia_category AS B WHERE A.category_id = B.ID AND A.category_id='%s' order by dia_id desc;" % (category_id))
	return jsonify(diaries)	