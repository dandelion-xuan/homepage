$("#changePwdForm").validate({
    rules:{
        newPwd: {
            required: true,
            minlength: 5
          },
          confirm_pwd: {
            required: true,
            minlength: 5,
            equalTo: "#newPwd"
          }
    },
    messages:{
        newPwd: {
            required: "请输入密码",
            minlength: "密码长度不能小于 5 个字母"
          },
          confirm_pwd: {
            required: "请输入密码",
            minlength: "密码长度不能小于 5 个字母",
            equalTo: "两次密码输入不一致"
          }
    }
})

$("#changeUsernameForm .btn-yes").click(function(e){
    e.preventDefault();
    var newUsername = $("#usernameText").val();
    if(typeof newUsername == "undefined" || newUsername == null || newUsername == "" || newUsername.trim() == ""){
        alert("新用户名不能为空");
    }else{
        // console.log(newUsername)
        $.ajax({
            type: "post",
			url: "http://localhost:8888/userModify",
            xhrFields: {
                withCredentials: true
			},
			crossDomain: true,
			dataType: "json",
			data:{ newUsername: newUsername,oldPwd: null, newPwd:null },
            success: function(data){
                if(data.errorCode == 0){
                    alert("修改成功");
                    window.location.href = "/";
                }else if(data.errorCode == 1){
                    alert("修改失败")
                }else if(data.errorCode == 2){
                    alert("原密码不正确")
                }
            },
            error:function(data){
                console.log("request error:" + data)
            }
        })
    }
})

$("#changePwdForm .btn-yes").click(function(e){
    e.preventDefault();
    var oldPwd = $("#oldPwd").val();
    if(typeof oldPwd == "undefined" || oldPwd == null || oldPwd == ""){
        alert("旧密码不能为空");
    }else{
        var newPwd = $("#newPwd").val();
        // console.log(newPwd)
        $.ajax({
            type: "post",
			url: "http://localhost:8888/userModify",
            xhrFields: {
                withCredentials: true
			},
			crossDomain: true,
			dataType: "json",
			data:{ newUsername: null,oldPwd: oldPwd, newPwd:newPwd },
            success: function(data){
                if(data.errorCode == 0){
                    alert("修改成功");
                    window.location.href = "/";
                }else if(data.errorCode == 1){
                    alert("修改失败")
                }else if(data.errorCode == 2){
                    alert("原密码不正确")
                    $("#oldPwd").val("");
                }
            },
            error:function(data){
                console.log("request error:" + data)
            }
        })
    }
})

$(".btn-cancel").click(function(e){
    window.location.href = "/"
})