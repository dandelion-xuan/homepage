from werkzeug.utils import secure_filename
from flask import Flask, render_template, jsonify, request, make_response, send_from_directory, abort
import time
import os
from strUtil import Pic_str
import base64
 
app = Flask(__name__)
UPLOAD_FOLDER = 'upload'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
basedir = os.path.abspath(os.path.dirname(__file__))
# basedir path ::: F:\xuan\four\myfix\homepage\flaskDemo\demo
# os.path.dirname(__file__) :::: is null
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'JPG', 'PNG', 'gif', 'GIF'])
 
def allowed_file(filename):
    # return '.' in filename and filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS
    if(filename.rsplit('.',1)[1] in ALLOWED_EXTENSIONS):
    	print("fileName in allowFunc::::" + filename)
    	return True
    else:
    	return False
 
 
@app.route('/upload')
def upload_test():
    return render_template('up.html')


# 上传文件
@app.route('/up_photo', methods=['POST'], strict_slashes=False)
def api_upload():
    file_dir = os.path.join(basedir, app.config['UPLOAD_FOLDER'])
    # file_dir is ::::F:\xuan\four\myfix\homepage\flaskDemo\demo\upload
    if not os.path.exists(file_dir):
        os.makedirs(file_dir)
    f = request.files['photo']
    # f = secure_filename(request.files['photo'].filename)
    print("fileName f is :::::" + f.filename)
    if f and allowed_file(f.filename):
        # fname = secure_filename(f.filename)
        ext = f.filename.rsplit('.', 1)[1]
        new_filename = Pic_str.create_uuid() + '.' + ext
        f.save(os.path.join(file_dir, new_filename))
 
        return jsonify({"success": 0, "msg": "上传成功"})
    else:
        return jsonify({"error": 1001, "msg": "上传失败"})

@app.route('/download/<string:filename>', methods=['GET'])
def download(filename):
    if request.method == "GET":
        if os.path.isfile(os.path.join('upload', filename)):
            return send_from_directory('upload', filename, as_attachment=True)
        pass
    
    
# show photo
@app.route('/show/<string:filename>', methods=['GET'])
def show_photo(filename):
    file_dir = os.path.join(basedir, app.config['UPLOAD_FOLDER'])
    if request.method == 'GET':
        if filename is None:
            pass
        else:
            image_data = open(os.path.join(file_dir, '%s' % filename), "rb").read()
            response = make_response(image_data)
            response.headers['Content-Type'] = 'image/png'
            return response
    else:
        pass
 
 
if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=8881,
        debug=True
    )