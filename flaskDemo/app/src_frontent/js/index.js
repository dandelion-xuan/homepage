$(function(){
	$("#album .img-thumbnail").mouseenter(function(){
		$(this).css("height","130px");
	}).mouseleave(function(){
		$(this).css("height","100px");
	});
	// 固定头部栏
	// (function(){
	// 	//获取要定位元素距离浏览器顶部的距离  
 //        var navH = $("#header").offset().top;
           
 //        //滚动条事件  
 //        $(window).scroll(function(){  
 //            //获取滚动条的滑动距离  
 //            var scroH = $(this).scrollTop();  
 //            //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定  
 //            if(scroH>=navH){  
 //                $("#header").css({"position":"fixed","top":0});  
 //                }else if(scroH < navH){  
 //                $("#header").css({"position":"static"});  
 //            }  
 //        })
	// })();
});