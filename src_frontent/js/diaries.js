$(function(){

    $('#diarySubmit').click(function(e){
        e.preventDefault();
        alert(textArea)
        $.ajax({
            type: "post",
            dataType: "json",
            url: "http://localhost:8888/diary",
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            data: {content:textArea},
            success: function(data){
                if(data){
                    if(data.errorcode==1){
                     alert('写入失败');
                     // mailError()
                    }else if(data.errorcode == 0){
                        alert('写入成功');
                     //    pwdSuccess()
                    //  window.location.href="/";
                    }
                 }
            },
            error: function(data){
                console.log(data)
            }
        })
    })
});