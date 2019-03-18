$(function () {
	$("#album .img-thumbnail").mouseenter(function () {
		$(this).css("height", "130px");
	}).mouseleave(function () {
		$(this).css("height", "100px");
	});

});

get_minds(true);
diaries(true);

function index_showDiary(title, postDate, content, commentNum, diaryId) {
	postDate = dateFormat(postDate, 'yyyy-MM-dd HH:mm')
	var diaryCode = `<div class="container diary" id="diary_` + diaryId + `">
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
