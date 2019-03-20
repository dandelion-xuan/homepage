function dia_showFullDiary(title, postDate, content, diaryId,commentNum,category_name) {
    postDate = dateFormat(postDate, 'yyyy-MM-dd HH:mm')
    var diaryCode = `<article class="post" id="diary_` + diaryId + `">
 <div class="post-head">
   <h1 class="post-title">` + title + `</h1>
   <div class="post-meta"><time class="post-date">`+ '类别：<a href="#">' + category_name + '</a> • ' + postDate + `</time></div>
 </div>
 <div class="post-content">`+ content + `</div>
 <div class="comment">
 <input type="button" class="comment-btn comment-list get-comments" value="已评论(`+ commentNum + `)">
 <!-- 当评论数为0时，加上disable-cusor标签 -->
     <span class="glyphicon glyphicon-menu-down"></span>
 </input>
 <input type="button" class="comment-btn write-comment" value="写评论" data-toggle="modal" data-target="#write-comment-form"></input>
 <ul class="media-list hidden"></ul>
</div>
</article>`
    $('#diary').append(diaryCode)
}
showUser()
dia_id = window.location.search.split("=")[1];
$.ajax({
    type: 'get',
    datatype: 'json',
    url: 'http://95.163.202.160:8888/get_diary',
    data: { dia_id: dia_id },
    xhrFields: {
        withCredentials: true
    },
    crossDomain: true,
    success: function (data) {
        if (data) {
            // new:dia_id,uploadDate,A.title,content,commentNum,A.user_id,category_id,B.title AS category_name
            // dia_id,uploadDate,title,content,commentNum,user_id,category_id,tag_id
            diaryId = data[0][0]
            postDate = data[0][1]
            title = data[0][2]
            content = data[0][3]
            commentNum = data[0][4]
            category_name = data[0][7]
            dia_showFullDiary(title,postDate,content,diaryId,commentNum,category_name)
            comment();
        }
    },
    error: function (data) {

    }
})