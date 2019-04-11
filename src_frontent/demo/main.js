host = "127.0.0.1:8881/"
$(function(){
	$('#submit').click(function(){
		$.ajax({
			type: "post",
			dataType: "json",
			url: host + "upload_pic",
			xhrFields: {
				withCredentials: true
			},
			crossDomain: true,
			success: function (data) {
				
			},
			error: function (data) { console.log("error:" + data) }
		})
	})
});