from server.server import app
from flask import jsonify,send_file
from flask import request,session
from models import database

@app.route('/diary', methods=['POST', 'GET'])
def  diary():
	uID = session.get('user_id')
	print(uID)
	title = request.form['title']
	content = request.form['content']
	category = request.form['category']
	isNewCategory = request.form['isNewCategory']
	# print (title)
	# print (content)
	# print (category)
	print (isNewCategory)
	# add new category
	# 实际上应该判断有无cookie，即登录态
	# 未解决：编码问题
	if(isNewCategory == 'true'):
		addCategorySql = "insert into dia_category(title,user_id) values('%s','%s')" % (category,uID)
		cateResult = database.Database.execute(addCategorySql)
		# 获取新增的该category ID
		# categoryID = database.Database.get_last_insert_id()
		# print(categoryID)
	# insert diary，同时关联类表该类文章数+1
		if(cateResult is not ()):
			data = {
				'message':'add category faile',
				'errorcode':2
			}

	categoryID = database.Database.execute("select ID from dia_category where title = '%s' and user_id = '%s'" % (category, uID))[0][0]
	print(categoryID)
	print(uID)
	sql = "insert into diary(title,content,user_id,category_id) values('%s','%s','%s','%s')" % (title,content,uID,categoryID)
	result = database.Database.execute(sql)
	# insert diary success
	if(result is ()):
		data = {
			'message':'success',
			'errorcode':0
		}
		dia_id = database.Database.get_last_insert_id()
		print(dia_id)
		addDiaNumSql = "update dia_category set diaNum = diaNum + 1 where ID = '%s'" % (categoryID)
		if(database.Database.execute(addDiaNumSql) is not ()):
			data = {
				'message':'update diaNum faile',
				'errorcode':3
			}
	else:
		data = {
			'message':'faile',
			'errorcode':1
		}
	'''
	errorcode:0表示插入成功，1表示插入失败
	'''

	return jsonify(data)

@app.route('/get_categories', methods=['POST', 'GET'])
def  get_categories():
	uID = session.get('user_id')
	print(uID)
	
	categories = database.Database.execute("select title from dia_category where user_id = '%s'" % (uID))
	# print(len(categories))
	categoriesArr = []
	for i in range(len(categories)):
		categoriesArr.append(categories[i][0])
	return jsonify(categoriesArr)