$(function () {
	$("#album .img-thumbnail").mouseenter(function () {
		$(this).css("height", "130px");
	}).mouseleave(function () {
		$(this).css("height", "100px");
	});

});

function showMinds(data) {
	var content;
	var uploadDate;
	var commentNum;
	var userId;
	if (data.length == 0) {
		$('#outline .mind').css('background-color', 'none')
		$('.comment').css('visibility', 'hidden')
	} else {
		for (i = 0; i < 3; i++) {
			// content, uploadDate, commentNum, mindID
			content = data[i][0]
			uploadDate = data[i][1]
			commentNum = data[i][2]
			mindId = data[i][3]
			showMind(content, uploadDate, commentNum, mindId)
			if (commentNum == 0) {
				// 
			}
		}
		if (data.length <= 3) {
			$('.see-more').css('visibility', 'hidden')
		} else {
			seeMoreHtml = '<p class="see-more">' + '<a href="/html/minds.html">' + '查看更多>>>' + '</a>' + '</p>'
			$('#mind_' + data[2][3]).append(seeMoreHtml)
		}
		comment(commentNum);
	}
}

// index显示minds
console.log(get_minds(true))
// var data = get_minds(true).slice();
// console.log(data)
// showMinds(data);


function index_showDiary(title, postDate, content, commentNum, diaryId) {
	postDate = dateFormat(postDate, 'yyyy-MM-dd HH:mm')
	var diaryCode = `<div class="container diary" id="diary_` + diaryId + `>
	<h4 class="dia-title">
		<a href="#">` + title + `</a>
	</h4>
	<span class="post-date">`+ postDate + `</span>
	<p class="dia-summary">`+ content + `</p>
	<div class="comment">
		<input type="button" class="comment-btn comment-list" value="已评论(`+ commentNum + `)">
		<!-- 当评论数为0时，加上disable-cusor标签 -->
			<span class="glyphicon glyphicon-menu-down"></span>
		</input>
		<input type="button" class="comment-btn write-comment" value="写评论" data-toggle="modal" data-target="#write-comment-form"></input>
	</div>
</div>`
	$("#diaries").append(diaryCode);
}
