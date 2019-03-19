
function showCategory(category_id, category_name, diaNum) {
    var categoryCode = '<a class="btn btn-yes btn-block" id="' + category_id + '">' + category_name + '(' + diaNum + ')' + '</a>'
    $("#category_widget").append(categoryCode)
}

$.ajax({
    type: 'get',
    datatype: 'json',
    url: 'http://localhost:8888/get_categoryList',
    xhrFields: {
        withCredentials: true
    },
    crossDomain: true,
    success: function (data) {
        if (data.length == 0) {
            return;
        }
        //   alert(data)
        for (var i = 0; i < data.length; i++) {
            var category_id = data[i][0];
            var category_name = data[i][1];
            var diaNum = data[i][2];
            showCategory(category_id, category_name, diaNum)
        }
    },
    error: function (data) {
        console.log("error:" + data)
    }
})

window.onload = function () {
    $(".widget a").click(function () {
        // alert("hhhh");
        $("#diaries").empty();
        category_id = $(this).attr("id")
        console.log("category_id:" + category_id);
        $.ajax({
            type: 'get',
            datatype: 'json',
            url: 'http://localhost:8888/get_category_diaries',
            data: { category_id: category_id },
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (data) {
                console.log(data)
                if (data.length == 0) {
                    return;
                }
                for (var i = 0; i < data.length; i++) {
                    var diaryId = data[i][0];
                    var postDate = data[i][1];
                    var title = data[i][2];
                    var content = data[i][3];
                    var commentNum = data[i][4];
                    var category_name = data[i][5];
                    dia_showCutDiary(title, postDate, content, commentNum, diaryId, category_name)
                }
            },
            error: function (data) {
                console.log("error:" + data)
            }
        })
    })


    $(".post-date a").click(function () {
        $("#diaries").empty();
        category_id = $(this).attr("class")
        console.log("category_id:" + category_id);
        $.ajax({
            type: 'get',
            datatype: 'json',
            url: 'http://localhost:8888/get_category_diaries',
            data: { category_id: category_id },
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (data) {
                console.log(data)
                if (data.length == 0) {
                    return;
                }
                for (var i = 0; i < data.length; i++) {
                    var diaryId = data[i][0];
                    var postDate = data[i][1];
                    var title = data[i][2];
                    var content = data[i][3];
                    var commentNum = data[i][4];
                    var category_name = data[i][5];
                    dia_showCutDiary(title, postDate, content, commentNum, diaryId, category_name)
                }
            },
            error: function (data) {
                console.log("error:" + data)
            }
        })
    })
}
