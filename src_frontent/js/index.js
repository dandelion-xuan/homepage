$(function () {
	$("#album .img-thumbnail").mouseenter(function () {
		$(this).css("height", "130px");
	}).mouseleave(function () {
		$(this).css("height", "100px");
	});
	// 固定头部栏
	// (function(){
	// 	//获取要定位元素距离浏览器顶部的距离  
	//        var navH = $("#header").offset().top;

	//        //滚动条事件  
	//        $(window).scroll(function(){  
	//            //获取滚动条的滑动距离  
	//            var scroH = $(this).scrollTop();  
	//            //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定  
	//            if(scroH>=navH){  
	//                $("#header").css({"position":"fixed","top":0});  
	//                }else if(scroH < navH){  
	//                $("#header").css({"position":"static"});  
	//            }  
	//        })
	// })();

	var mindsArr = []
	var showNum = 3
	$.ajax({
		type: 'get',
		datatype: 'json',
		url: 'http://localhost:8888/get_minds',
		xhrFields: {
			withCredentials: true
		},
		crossDomain: true,
		success: function (data) {
			if (data) {
				if (data.length == 0) {
					$('#outline .mind').css('background-color', 'none')
					$('.comment').css('visibility', 'hidden')
				} else {
					var content;
					var uploadDate;
					var commentNum;
					var userId;
					for (i = 0; i < 3; i++) {
						// content, uploadDate, commentNum, userID
						content = data[i][0]
						uploadDate = data[i][1]
						commentNum = data[i][2]
						userId = data[i][3]
						showMind(content, uploadDate, commentNum, userId)
						if(commentNum == 0){
							// 
						}
					}
					if (data.length <= 3) {
						$('.see-more').css('visibility', 'hidden')
					} else {
						seeMoreHtml = '<p class="see-more">' + '<a href="/html/minds.html">' + '查看更多>>>' + '</a>' + '</p>'
						$('#mind_' + data[2][3]).append(seeMoreHtml)
					}

					$(".comment-list").click(function () {
						$(this).siblings('ul').toggleClass("hidden");
					})
					$(".glyphicon-menu-down").click(function () {
						$(this).parent().children('ul').toggleClass('hidden');
					})
				}

				// 点击写评论，返回mind or diary类型评论，mind_id or diary_id
				var arr = []; //arr[1]为要的id
				var isDiary = new Boolean(false)
				$(".write-comment").click(function (e) {
					e.preventDefault();
					var parentId = $(this).parent().parent().attr('id');
					// console.log(parentId)
					arr = parentId.split('_');
					if (arr[0] == 'diary') {
						isDiary = true;
					}
					console.log(arr[1])
				})
				// 写评论接口
				$("#saveComment").click(function (e) {
					e.preventDefault();
					var textArea = $("#txt").val()
					// console.log(textArea)
					$(this).attr('data-dismiss','modal')
					$.ajax({
						type: 'post',
						datatype: 'json',
						url: 'http://localhost:8888/mind/write_comment',
						xhrFields: {
							withCredentials: true
						},
						crossDomain: true,
						data: { mindId: arr[1], content: textArea },
						success: function (data) {
							if (data) {
								if (data.errorcode == 0) {
									alert('评论成功');
								} else{
									alert('评论失败');
								}
							}
						},
						error: function (data) {
							console.log(data)
						}
					})
				})

				// 获取评论接口
				$.ajax({
					url:"http://localhost:8888/mind/get_comments",
					type: 'get',
					datatype: 'json',
					url: 'http://localhost:8888/get_minds',
					xhrFields: {
						withCredentials: true
					},
					crossDomain: true,
					success: function (data) {
						if(data){

						}else{

						}
					},
					error:function(data){
						console.log(data)
					}
				})
			}
		},
		error: function (data) {
			console.log(data)
		}
	})
});