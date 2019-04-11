# 使用扩展实现上传文件
# -*- coding: utf-8 -*-
import os
from flask import Flask, request
from flask_uploads import UploadSet, configure_uploads, IMAGES,patch_request_class

app = Flask(__name__)
app.config['UPLOADED_PHOTOS_DEST'] = os.path.join(os.getcwd(),'upload')  # 文件储存地址
# print("app.config['UPLOADED_PHOTOS_DEST']:::::" + app.config['UPLOADED_PHOTOS_DEST']) #F:\xuan\four\myfix\homepage\flaskDemo\demo\upload
photos = UploadSet('photos', IMAGES) #创建一个set，通过实例化UploadSet()实现
configure_uploads(app, photos) #使用configure_uploads()方法注册并完成相应的配置
patch_request_class(app)  # 文件大小限制，默认为16MB
# patch_request_class(app, 32 * 1024 * 1024)  # 或是从配置里读取大小，32MB

html = '''
    <!DOCTYPE html>
    <title>Upload File</title>
    <h1>图片上传</h1>
    <form method=post enctype=multipart/form-data>
         <input type=file name=photo>
         <input type=submit value=上传>
    </form>
    '''


@app.route('/', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST' and 'photo' in request.files:
    	filename = photos.save(request.files['photo'])
    	print("filename::::" + filename)
    	file_url = photos.url(filename)
    	print("file_url::::" + file_url) #http://127.0.0.1:8883/_uploads/photos/1.png
    	return html + '<br><img src=' + file_url + '>'
    return html


if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=8883,
        debug=True)