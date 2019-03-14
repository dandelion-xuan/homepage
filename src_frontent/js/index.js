$(function(){
	$("#album .img-thumbnail").mouseenter(function(){
		$(this).css("height","130px");
	}).mouseleave(function(){
		$(this).css("height","100px");
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
	function dateFormat (date, format) {
		date = new Date(date);
		date.setHours(date.getHours()-8);
		var o = {
			'M+' : date.getMonth() + 1, //month
			'd+' : date.getDate(), //day
			'H+' : date.getHours(), //hour
			'm+' : date.getMinutes(), //minute
			's+' : date.getSeconds(), //second
			'q+' : Math.floor((date.getMonth() + 3) / 3), //quarter
			'S' : date.getMilliseconds() //millisecond
		};
	
		if (/(y+)/.test(format))
			format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
	
		for (var k in o)
			if (new RegExp('(' + k + ')').test(format))
				format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
	
		return format;
	}

	function showMind(content,uploadDate,commentNum,i){
		uploadDate = dateFormat(uploadDate,'yyyy-MM-dd HH:mm')
		var htmlCode = '<div class="container mind" id="mind' + i + '">' +
		'<p class="mind-content">' + content + '</p>' +
		'<span class="post-date">' + uploadDate + '</span>' +
		'<div class="comment">' +
			'<input type="button" data-toggle="collapse" class="comment-btn comment-list" value="已评论(' + commentNum + ')">' +
			// <!-- 当评论数为0时，加上disable-cusor标签 -->
			'	<span class="glyphicon glyphicon-menu-down"></span>' +
			'</input>' +
			'<input type="button" class="comment-btn write-comment" value="写评论" data-toggle="modal" data-target="#write-comment-form"></input>' +
			'<ul class="media-list hidden">' +
			  '<li class="media">' +
				'<div class="media-left">' +
				  '<a href="#">' +
					'<img class="media-object" src="images/01.jpg" alt="lixuan_zhu">' +
				  '</a>' +
				'</div>' +
				'<div class="media-body">' +
				  '<h4 class="media-heading"><a href="#">Media he</a></h4>' +
				  '<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>' +
				  '<div class="media">' +
					  '<div class="media-left">' +
						'<a href="#">' +
						  '<img class="media-object" src="images/02.jpg" alt="erDog">' +
						'</a>' +
					  '</div>' +
					  '<div class="media-body">' +
						'<h4 class="media-heading"><a href="#">Media he</a></h4>' +
						'<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>' +
					  '</div>' +
					'</div>' +
				'</div>' +
			  '</li>' +
			  '<li class="media">' +
				'<div class="media-left">' +
				  '<a href="#">' +
					'<img class="media-object" src="images/03.jpg" alt="stupid_one">' +
				  '</a>' +
				'</div>' +
				'<div class="media-body">' +
				  '<h4 class="media-heading"><a href="#">Media he</a></h4>' +
				  '<p>广告需求⽅平台（DSP）：为广告主提供跨竞价市场、跨平台、跨终端的程序化广告投放平台，通过数据整合、分析受众、实现精准投放。</p>' +
				'</div>' +
			  '</li>' +
			'</ul>' +
		'</div>' +
	'</div>'
	$('#minds').append(htmlCode)
	}

	var mindsArr = []
	var showNum = 3
	$.ajax({
		type:'get',
		datatype:'json',
		url:'http://localhost:8888/get_minds',
		xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function(data){
            if(data){
				if(data.length == 0){
					$('#outline .mind').css('background-color','none')
					$('.comment').css('visibility','hidden')
				}else{
					for(i = 0; i < 3; i++){
						console.log(data[i][0] + data[i][1] + data[i][2]);
						showMind(data[i][0],data[i][1],data[i][2],i)
						
						// $('#minds > .mind > .mind-content').val() = data[i][0]
						// $('#outline .post-date').val() = data[i][1]
						// $('.comment').css('visibility','visible')
					}
					seeMoreHtml = '<p class="see-more">' + '<a href="/html/minds.html">' + '查看更多>>>' + '</a>' + '</p>'
					$('#mind2').append(seeMoreHtml)
					if(data.length <= 3){
						$('.see-more').css('visibility','hidden')
					}
					$(".comment-list").click(function(){
						$(this).siblings('ul').toggleClass("hidden");
					})
					$(".glyphicon-menu-down").click(function(){
						$(this).parent().children('ul').toggleClass('hidden');
					})
				}
				// 写评论接口
				$.ajax({
					type:'get',
					datatype:'json',
					url:'http://localhost:8888/mind/write_comment',
					xhrFields: {
						withCredentials: true
					},
					crossDomain: true,
					success: function(data){

					},
					error:function(data){
						console.log(data)
					}
				 })
			}
		},
        error: function(data){
            console.log(data)
        }
	})
});