$(function(){
	// console.log($(":input[name='hhh']").prop('checked')) //判断
	// $(":input[name='hhh']").each(function(){
	// 	console.log($(this).val()) //获取值 && 多行遍历
	// })
	// console.log($(":input[name='hhh']")[0].value)
	// $('input:checkbox:last').prop('checked',true) //获取CheckBox最后一个元素
	// $('.add').append

	console.log($('#hh').val())
	$('button').click(function(e){
		e.preventDefault()
		console.log($('#hh').val())
		console.log("hhh")
	})
});