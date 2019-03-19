function dia_showCutDiary(title, postDate, content, commentNum, diaryId, category_name,category_id) {
  postDate = dateFormat(postDate, 'yyyy-MM-dd HH:mm')
  var url = "/html/diary.html?diary=" + diaryId
  var diaryCode = `<article class="post" id="diary_` + diaryId + `">
 <div class="post-head">
   <h1 class="post-title"><a href="`+ url + `">` + title + `</a></h1>
   <div class="post-meta"><time class="post-date">`+ '类别：<a class="'+category_id+'">' + category_name + '</a> • ' + postDate + `</time></div>
 </div>
 <div class="post-content">
   <p>`+ content + `</p>
 </div>
 <div class="post-permalink"><a href="`+ url + `"
     class="btn btn-yes">阅读全文</a></div>
 <footer class="post-footer clearfix"></footer>
</article>
`
  $('#diaries').append(diaryCode)
}
diaries(false);


// dia_showFullDiary()

window.onload = function () {
};

