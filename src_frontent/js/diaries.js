function dia_showCutDiary(title, postDate, content, commentNum, diaryId){
    postDate = dateFormat(postDate, 'yyyy-MM-dd HH:mm')
 var diaryCode = `<article class="post" id="diary_` + diaryId + `>
 <div class="post-head">
   <h1 class="post-title"><a href="#">` + title + `</a></h1>
   <div class="post-meta"><time class="post-date">`+ postDate + `</time></div>
 </div>
 <div class="post-content">
   <p>`+ content + `</p>
 </div>
 <div class="post-permalink"><a href="#"
     class="btn btn-yes">阅读全文</a></div>
 <footer class="post-footer clearfix"></footer>
</article>`
$('#diaries').append(diaryCode)
}
diaries(false);

function dia_showFullDiary(title, postDate, content, commentNum, diaryId){
    postDate = dateFormat(postDate, 'yyyy-MM-dd HH:mm')
 var diaryCode = `<article class="post" id="diary_` + diaryId + `>
 <div class="post-head">
   <h1 class="post-title"><a href="#">` + title + `</a></h1>
   <div class="post-meta"><time class="post-date">`+ postDate + `</time></div>
 </div>
 <div class="post-content">
   <p>`+ content + `</p>
 </div>
 <div class="post-permalink"><a href="#"
     class="btn btn-yes">阅读全文</a></div>
 <footer class="post-footer clearfix"></footer>
</article>`
$('#diaries').append(diaryCode)
}
// dia_showFullDiary()