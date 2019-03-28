// $.validator.setDefaults({
//   submitHandler: function() {
//     alert("提交事件!");
//   }
// });
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

  $("#signupSubmit").click(function(e){
    e.preventDefault();
  var username=$('#username').val();
  var email=$('#email').val();
  var password=$('#password').val();

  //发送ajax请求 使用post方式发送json字符串给后台login
  $.ajax({
      type: "post",
      url: host + "signup",
      xhrFields: {
          withCredentials: true
      },
      crossDomain: true,
      dataType: "json",
      data:{ username: username,email: email,password: password },
      success: function(data){
      //接受返回的数据，前端判断采取的动作
          if(data){
             if(data.errorcode==1){
                 alert('该用户名已存在，请重新输入');
                 // window.location.href="login";
             }else if(data.errorcode == 0){
                 alert('注册成功');
                 window.location.href="/";
             }
           else{
              alert('插入失败')
          }
      }
    }
  });
});

});