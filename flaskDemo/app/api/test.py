from server.server import app
from flask import Blueprint,send_file
from flask import jsonify

# test_api = flask.Blueprint('test', __name__, url_prefix='/test')

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/test/<name>/<words>',methods=['GET'])
def test(name,words):
	# return send_file("../../app/test.html")
	return jsonify({'name':name,'words':words})

@app.route('/demo/',methods=['GET'])
def gotoDemo():
    return send_file('E:\lx\homepage\src_frontent\demo\index.html')


@app.route('/sendjson2',methods=['POST'])
def sendjson2():
	# 接收前端发来的数据,转化为Json格式,我个人理解就是Python里面的字典格式
	data = json.loads(request.get_data())
	# 然后在本地对数据进行处理,再返回给前端
	name = data["name"]
	age = data["age"]
	location = data["location"]
	data["time"] = "2016"
	# Output: {u'age': 23, u'name': u'Peng Shuang', u'location': u'China'}
	# print data
	return jsonify(data)