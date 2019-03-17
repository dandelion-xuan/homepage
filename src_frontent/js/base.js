
$(function () {
	/**
	 * 评论
	 */
	function comment() {
		var commentNum = 3;
		$('.comment-btn').value = "已评论(" + commentNum + ")";
	}
	(function () {
		$(".comment-list").click(function () {
			$(this).siblings('ul').toggleClass("hidden");
		})
	})();
	(function () {
		$(".glyphicon-menu-down").click(function () {
			$(this).parent().children('ul').toggleClass('hidden');
		})
	})();


	/**
	 * index，minds，diaries，album header部分
	 */

	$("#header .emotion").mouseenter(function () {
		$(this).children(".popover").removeClass("hidden");
	}).mouseleave(function () {
		$(this).children(".popover").addClass("hidden");
	});
	// 头像hover
	(function () {
		$(".portrait > img").mouseenter(function () {
			$(".portrait > .popover").removeClass("hidden");
		}).mouseleave(function () {
			$(".portrait > .popover").addClass("hidden");
		})
	})();
	// 头像hover,hover到个人设置不消失
	(function () {
		$(".portrait > .popover").mouseenter(function () {
			$(this).removeClass("hidden");
		}).mouseleave(function () {
			$(this).addClass("hidden");
		})
	})();
	// 更换心情状态
	(function () {
		var newClass;
		$("#header .emoj").mouseenter(function () {
			var oldClass = $('.emotion').attr("class").split(" ")[1];
			newClass = $(this).attr("class").split(" ")[1];
			$('.emotion').removeClass(oldClass);
			$('.emotion').addClass(newClass);
		})
	})();


	$.extend({
		'commentedMess': function () {

		}
	})
});

// 日期时间格式化
function dateFormat(date, format) {
	date = new Date(date);
	date.setHours(date.getHours() - 8);
	var o = {
		'M+': date.getMonth() + 1, //month
		'd+': date.getDate(), //day
		'H+': date.getHours(), //hour
		'm+': date.getMinutes(), //minute
		's+': date.getSeconds(), //second
		'q+': Math.floor((date.getMonth() + 3) / 3), //quarter
		'S': date.getMilliseconds() //millisecond
	};

	if (/(y+)/.test(format))
		format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));

	for (var k in o)
		if (new RegExp('(' + k + ')').test(format))
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));

	return format;
}

// 前端显示minds代码
function showMind(content, uploadDate, commentNum, mindId) {
	uploadDate = dateFormat(uploadDate, 'yyyy-MM-dd HH:mm')
	var mindCode = '<div class="container mind" id="mind_' + mindId + '">' +
		'<p class="mind-content">' + content + '</p>' +
		'<span class="post-date">' + uploadDate + '</span>' +
		'<div class="comment">' +
		'<input type="button" data-toggle="collapse" class="comment-btn comment-list get-comments" value="已评论(' + commentNum + ')">' +
		// <!-- 当评论数为0时，加上disable-cusor标签 -->
		'	<span class="glyphicon glyphicon-menu-down get-comments"></span>' +
		'</input>' +
		'<input type="button" id="write_comment_btn" class="comment-btn write-comment" value="写评论" data-toggle="modal" data-target="#write-comment-form"></input>' +
		'</div>' +
		'</div>'
	// needs args:critic_id,comment content,comment_id

	$('#minds').append(mindCode)
}

function showComments(mindID, commentNum, comment_id, critic_username, content, postDate) {
	postDate = dateFormat(postDate, 'yyyy-MM-dd HH:mm');
	var commentHtml = '<ul class="media-list">' +
		'<li class="media" id="' + comment_id + '>' +
		'<div class="media-left">' +
		'<a href="#">' +
		'<img class="media-object" src="images/01.jpg" alt="lixuan_zhu">' +
		'</a>' +
		'</div>' +
		'<div class="media-body">' +
		'<h4 class="media-heading"><a href="#">' + critic_username + '</a></h4>' +
		'<p>' + content + '</p>' +
		'<span class="post-date">' + postDate + '</span>' +
		'</div>' +
		'</li>' +
		'</ul>'
	if (commentNum > 0) {
		$('#mind_' + mindID + ' .comment').append(commentHtml)
	}
}

/**
 * 接口请求
 */
// get and write comments and show
function comment(commentNum) {
	// 点击写评论，返回mind or diary类型评论，mind_id or diary_id
	var mindId = -1; 
	var arr = [];//arr[1]为要的id
	var isDiary = new Boolean(false)
	var mindOrDiary = 'mind';
	$(".write-comment").click(function (e) {
		e.preventDefault();
		var parentId = $(this).parent().parent().attr('id');
		// console.log(parentId)
		arr = parentId.split('_');
		Id = arr[1];
		if (arr[0] == 'diary') {
			isDiary = true;
			mindOrDiary = 'diary'
		}
	})
	// 写评论接口
	$("#saveComment").click(function (e) {
		e.preventDefault();
		var textArea = $("#txt").val()
		// console.log(textArea)
		$(this).attr('data-dismiss', 'modal')
		$.ajax({
			type: 'post',
			datatype: 'json',
			url: 'http://localhost:8888/' + mindOrDiary + '/write_comment',
			xhrFields: {
				withCredentials: true
			},
			crossDomain: true,
			data: { Id: Id, content: textArea },
			success: function (data) {
				if (data) {
					if (data.errorcode == 0) {
						alert('评论成功');
					} else {
						alert('评论失败');
					}
				}
			},
			error: function (data) {
				console.log(data)
			}
		})
	})

	// 点击评论，获取mindID
	var clickedId = {};
	$('.get-comments').click(function (e) {
		e.preventDefault();
		// clickNum++;
		var parentId = $(this).parent().parent().attr('id');
		// console.log(parentId)
		arr = parentId.split('_');
		Id = arr[1];
		if (Id in clickedId) {
			return;
		}
		clickedId[Id] = true;
		// console.log(mindId)
		// 获取评论接口
		$.ajax({
			url: 'http://localhost:8888/' + mindOrDiary + '/get_comments',
			type: 'get',
			datatype: 'json',
			data: { Id: Id },
			xhrFields: {
				withCredentials: true
			},
			crossDomain: true,
			success: function (data) {
				if (data) {
					//后台返回的二维数组：commentID,postdate,content,mindID,critic_id,critic_username
					var commentId, postDate, content, critic_name;
					for (var i = 0; i < data.length; i++) {
						commentId = data[i][0];
						critic_name = data[i][5];
						content = data[i][2];
						postDate = data[i][1];
						console.log("data: " + data[i])
						// commentNum, comment_id, critic_username, content,postDate
						showComments(Id, commentNum, commentId, critic_name, content, postDate)
						console.log(showComments)
					}
				} else {

				}
			},
			error: function (data) {
				console.log(data)
			}
		})
	})
}

// get_minds and show
var data;
function get_minds(isIndex){
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
				data = data.slice();
				console.log(data)
			}
		},
		error: function (data) {
			console.log(data)
		}
	})
	return data;
}
console.log(get_minds(true))



// get_diaries
function diaries(isIndex){
	$.ajax({
		type: 'get',
		datatype: 'json',
		url: 'http://localhost:8888/get_diaries',
		xhrFields: {
			withCredentials: true
		},
		crossDomain: true,
		success: function (data) {
			if (data) {
				var content;
				var uploadDate;
				var commentNum;
				var userId;
				if (data.length == 0) {
					$('#outline .diary').css('background-color', 'none')
					$('.comment').css('visibility', 'hidden')
				} else {
					for (i = 0; i < 3; i++) {
						// dia_id,uploadDate,title,content,commentNum,user_id,category_id,tag_id
						diaryId = data[i][0]
						postDate = data[i][1]
						title = data[i][2]
						content = data[i][3]
						commentNum = data[i][4]
						if(isIndex){
							index_showDiary(title,postDate,content,commentNum,diaryId)
						}else{
							dia_showCutDiary(title,postDate,content,commentNum,diaryId)
						}
						if (commentNum == 0) {
							// 
						}
					}
					if(isIndex){
						if (data.length <= 3) {
							$('.see-more').css('visibility', 'hidden')
						} else {
							seeMoreHtml = '<p class="see-more">' + '<a href="/html/diaries.html">' + '查看更多>>>' + '</a>' + '</p>'
							$('#diary_' + data[2][0]).append(seeMoreHtml)
							console.log(data[2][0])
						}
					}


					$(".comment-list").click(function () {
						$(this).siblings('ul').toggleClass("hidden");
					})
					$(".glyphicon-menu-down").click(function () {
						$(this).parent().children('ul').toggleClass('hidden');
					})
				}
				comment(commentNum);
			}
		},
		error: function (data) {
			console.log(data)
		}
	})
}