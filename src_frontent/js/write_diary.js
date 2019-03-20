$( function() {
    showUser()
    /**
     * 获得用户已有的分类
     */
    var categoriesArr = []
    $.ajax({
        type:'get',
        dataType:'json',
        url:'http://95.163.202.160:8888/get_categories',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function(data){
            if(data){
                categoriesArr = data.slice();
                // console.log(categoriesArr)
                for (i in categoriesArr){
                    $('.categorie-list').append("<input type='radio' value='" + categoriesArr[i] +"' class='cbox' name='cbox'>" + categoriesArr[i])
                }
             }
        },
        error: function(data){
            console.log(data)
        }
    })


    /**
     * 富文本编辑器
     */
    var E = window.wangEditor
    var editor = new E('#editor')
    // 或者 var editor = new E( document.getElementById('editor') )
    editor.customConfig.uploadImgShowBase64 = true 
    // editor.customConfig.uploadImgServer = '/upload' 
    editor.create()

    /**
     * 添加新分类Begin（剔除已有的类名）
     */
    var dialog, form,
        // From http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#e-mail-state-%28type=email%29                
        newCategory = $( "#name" ),
        allFields = $( [] ).add( newCategory ),
        tips = $( ".validateTips" );

    function updateTips( t ) {
        tips
            .text( t )
            .addClass( "ui-state-highlight" );
        setTimeout(function() {
            tips.removeClass( "ui-state-highlight", 1500 );
        }, 500 );
    }

    function checkLength( o, n, min, max ) {
        if ( o.val().length > max || o.val().length < min ) {
            o.addClass( "ui-state-error" );
            updateTips( "Length of " + n + " must be between " +
                min + " and " + max + "." );
            return false;
        } else {
            return true;
        }
    }

    function isNew(o,arr,newCateName){
        var index = arr.indexOf(newCateName);
        if(index == -1){
            return true;
        }else{
            o.addClass( "ui-state-error" );
            updateTips( "哎呀呀，主人忘了已添加过该类名了呢，去换个新的吧~");
            return false; 
        }
    }
    var addName = ''
    // 点击确定后发生的事情
    function addCategory() {
        var valid = true;
        addName = newCategory.val()
        allFields.removeClass( "ui-state-error" );
        valid = valid && checkLength( newCategory, "类名", 2, 20 ) && isNew(newCategory,categoriesArr,addName);
        if ( valid ) {
            $('.qwe').append("<span>" + newCategory.val() + "</span>")
            $('.categorie-list').append("<input type='radio' value='" + addName +"' class='cbox' name='cbox' checked='checked'>" + addName)
            // $('.categorie-list').append("<lable>" + name.val() + "</lable>")
            
            dialog.dialog( "close" );
        }
        return valid;
    }

    dialog = $( "#dialog-form" ).dialog({
        autoOpen: false,
        height: 400,
        width: 350,
        modal: true,
        buttons: {
            "添加": addCategory,
            "取消": function() {
                dialog.dialog( "close" );
            }
        },
        close: function() {
            form[ 0 ].reset();
            allFields.removeClass( "ui-state-error" );
        }
    });

    form = dialog.find( "form" ).on( "submit", function( event ) {
        event.preventDefault();
        addCategory();
    });

    $( "#add-new-catogory" ).button().on( "click", function(e) {
        e.preventDefault();
        dialog.dialog( "open" );
    });
    /**
     * 添加新分类End
     */
    
    $('#diarySubmit').click(function(e){
        e.preventDefault();
        var title = $('#txtTitle').val()
        var textArea = editor.txt.html()
        var category = $('input:radio:checked').val();
        console.log("category:"+category)
        if(typeof category == "undefined" || category == null || category == "" || category.trim() == ""){
            alert("先添加类名");
            return;
        }
        var isNewCategory = new Boolean(false);
        if(category == addName){
            isNewCategory = true;
        }
        $.ajax({
            type: "post",
            dataType: "json",
            url: "http://95.163.202.160:8888/diary",
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            data: {title:title,content:textArea,category:category,isNewCategory:isNewCategory},
            success: function(data){
                if(data){
                    if(data.errorcode==0){
                     alert('发表成功');
                     var diaryId = data.diaryId;
                     console.log("newDiaryId:" + diaryId)
                     window.location.href = "/html/diary.html?diary=" + diaryId;
                    }else if(data.errorcode == 1){
                        alert('发表失败');
                    }else if(data.errorcode == 2){
                        alert("添加分类失败")
                    }else{
                        alert("更新分类表失败")
                    }
                 }
            },
            error: function(data){
                console.log(data)
            }
        })
    })
});
