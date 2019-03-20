$(function(){
	// console.log($(":input[name='hhh']").prop('checked')) //判断
	// $(":input[name='hhh']").each(function(){
	// 	console.log($(this).val()) //获取值 && 多行遍历
	// })
	// console.log($(":input[name='hhh']")[0].value)
	// $('input:checkbox:last').prop('checked',true) //获取CheckBox最后一个元素
	// $('.add').append

	// $('#password').showPassword(); // Reveal
// $('#password').hidePassword(); // Hide
// $('#password').togglePassword();
// $('#password').click('passwordShown', function () {
//     console.log('password is visible');
// }).clic('passwordHidden', function () {
//     console.log('password is hidden');
// });
// Toggle
	// $('#password').togglePassword();

	$('#password').togglePassword({
        el: '#togglePassword'
	});
	
	$(document).ready(function(){
	
		var links = [
			{
				"bgcolor":"#2980b9",
				"icon":"<i class='fa fa-plus'></i>"
			},
			{
				"url":"http://www.example.com",
				"bgcolor":"#f1c40f",
				"color":"fffff",
				"icon":"<i class='fa fa-pencil'></i>",
				"target":"_blank"
			},
			{
				"url":"http://www.example.com",
				"bgcolor":"#2ecc71",
				"color":"#fffff",
				"icon":"<i class='fa fa-comment'></i>"
			},
			{
				"url":"#anchor",
				"bgcolor":"#e74c3c",
				"color":"#fffff",
				"icon":"A"
			}
		];
		var options = {
			rotate: false
		};
		$('#wrapper').jqueryFab(links, options);
		alert("hhhh")
	})
});
// $('#password').togglePassword();