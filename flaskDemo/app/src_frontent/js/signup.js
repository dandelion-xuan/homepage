$.validator.setDefaults({
    submitHandler: function() {
      alert("提交事件!");
    }
});
$(function(){
    $("#signupForm").validate({
      rules: {
        username: {
          required: true,
          minlength: 2
        },
        password: {
          required: true,
          minlength: 5
        },
        confirm_pwd: {
          required: true,
          minlength: 5,
          equalTo: "#password"
        },
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        username: {
          required: "请输入用户名",
          minlength: "用户名必需由两个字母组成"
        },
        password: {
          required: "请输入密码",
          minlength: "密码长度不能小于 5 个字母"
        },
        confirm_pwd: {
          required: "请输入密码",
          minlength: "密码长度不能小于 5 个字母",
          equalTo: "两次密码输入不一致"
        },
        email: "请输入一个正确的邮箱",
      }
    });

    $("#signupSubmit").click(function(){
    var username=$('#username').val();
    var email=$('#email').val();
    var password=$('#password').val();
    //这里实现对 username和password格式的判断
    //........

    //发送ajax请求 使用post方式发送json字符串给后台login
    $.ajax({
        type: "post",
        url: "http://localhost:8888/sigup",
        dataType: "json",
        data:{ username: username,email: email,password: password },
        success: function(data){
          aler(data)
        //接受返回的数据，前端判断采取的动作
            if(data){
               if(data.errorcode==1){
                   alert('该用户名已存在，请重新输入');
                   // window.location.href="login";
               }else(data.errorcode == 0){
                   alert('注册成功');
                   // window.location.href="index";
               }
            } else{
                alert('插入失败')
            }
        }
    });
});
    // ajax部分
    // var xhr = new XMLHttpRequest()
    // xhr.open('POST','../html/signup.html')
    // xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
  });