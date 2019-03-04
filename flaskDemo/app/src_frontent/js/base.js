
$(function(){
	/**
	 * 评论
	 */
	function comment(){
		var commentNum = 3;
		$('.comment-btn').value = "已评论(" + commentNum + ")";
	}
	(function(){
		$(".comment-list").click(function(){
			$(this).siblings('ul').toggleClass("hidden");
		})
	})();
	(function(){
		$(".glyphicon-menu-down").click(function(){
			$(this).parent().children('ul').toggleClass('hidden');
		})
	})();
	

	/**
	 * index，minds，diaries，album header部分
	 */
	
	$("#header .emotion").mouseenter(function(){
		$(this).children(".popover").removeClass("hidden");
	}).mouseleave(function(){
		$(this).children(".popover").addClass("hidden");
	});
	// 头像hover
	(function(){
		$(".portrait > img").mouseenter(function(){
			$(".portrait > .popover").removeClass("hidden");
		}).mouseleave(function(){
			$(".portrait > .popover").addClass("hidden");
		})
	})();
	// 头像hover,hover到个人设置不消失
	(function(){
		$(".portrait > .popover").mouseenter(function(){
			$(this).removeClass("hidden");
		}).mouseleave(function(){
			$(this).addClass("hidden");
		})
	})();
	// 更换心情状态
	(function(){
		var newClass;
		$("#header .emoj").mouseenter(function(){
			var oldClass = $('.emotion').attr("class").split(" ")[1];
			newClass = $(this).attr("class").split(" ")[1];
			$('.emotion').removeClass(oldClass);
			$('.emotion').addClass(newClass);
		})
	})();
});