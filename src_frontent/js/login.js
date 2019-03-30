

$(function(){
	/**
 * login
 */
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
	$('#password').togglePassword({
		el: '#togglePassword'
});
// showUser()

	$("#loginSubmit").click(function(e){
		e.preventDefault();
		var email=$('#email').val();
		var password=$('#password').val();
		//发送ajax请求 使用post方式发送json字符串给后台login
		$.ajax({
			type: "post",
			url: host + "login",
            xhrFields: {
                withCredentials: true
			},
			crossDomain: true,
			dataType: "json",
			data:{ email: email,password: password },
			success: function(data){
			//接受返回的数据，前端判断采取的动作
				if(data){
				   if(data.errorcode==1){
					alert('该用户名不存在，请重新输入');
					$('#email').val('')
					$('#password').val('')
					// mailError()
				   }else if(data.errorcode == 0){
					  //  alert('login成功');
					$('#email').val('')
					$('#password').val('')
					window.location.href="/";
				   }
				 	else{
					alert('密码错误')
					$('#email').val('')
					$('#password').val('')
					}
				}
			  },
			  error:function(data){
				  alert('fffff');
			  }	
		});
	});
});