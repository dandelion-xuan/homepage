
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

function showComments(mindID,commentNum, comment_id, critic_username, content,postDate) {
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
		'<p>'+ content +'</p>' +
		'<span class="post-date">' + postDate + '</span>' +
		'</div>' +
		'</li>' +
		'</ul>'
	if (commentNum > 0) {
		$('#mind_' + mindID +' .comment').append(commentHtml)
	}
}
