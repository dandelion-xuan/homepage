

$(function(){
	/**
 * login
 */
 	$("#login_submit").click(function(){
    var username=$('#username').val();
    var password=$('#password').val();
    //这里实现对 username和password格式的判断
    //........

    //发送ajax请求 使用post方式发送json字符串给后台login
    $.ajax({
        type: "post",
        url: "http://localhost:3000/login",
        dataType: "json",
        data:{ username: username, password: password },
        success: function(data){
        //接受返回的数据，前端判断采取的动作
            if(data){
               if(data.message=="false"){
                   alert('密码错误，请重新输入');
                   window.location.href="login";
               }else{
                   alert('登陆成功');
                   window.location.href="index";
               }
            } else{


            }
        }
    });
});
 	
	function mailError(){
		$('#email').parent().addClass("has-error");
		$('#inputStatus1').addClass('glyphicon-remove').removeClass('glyphicon-ok').css('visibility','visible');
		$("#email").siblings('.error').css('visibility','visible');
	}
	// mailError();
	function mailSuccess(){
		$('#email').parent().addClass('has-success');
		$('#inputStatus1').addClass('glyphicon-ok').removeClass('glyphicon-remove').css('visibility','visible');
	}
	// mailSuccess();
	function pwdError(){
		$('#password').parent().addClass('has-error');
		$('#inputStatus2').addClass('glyphicon-remove').removeClass('glyphicon-ok').css('visibility','visible');
		$("#password").siblings('.error').css('visibility','visible');
	}
	// pwdError();
	function pwdSuccess(){
		$('#password').parent().addClass('has-success');
		$('#inputStatus2').addClass('glyphicon-ok').removeClass('glyphicon-remove').css('visibility','visible');
		// console.log($('#inputError2Status').siblings('span'));
	}
	// pwdSuccess();
});