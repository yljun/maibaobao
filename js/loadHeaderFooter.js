define(["jquery", "cookie","nav-ajax"], function($){
	$.ajax({
		url : "/html/head.html",
		type : "get",
		success : function(data) {
			$("#top").html(data);
//			var _user = $.cookie("loginUser");
//			if (_user)
//				$(".login_reg").html(`欢迎 <a href="#">${_user}</a>`);
		}
	});

	$("#footer-main").load("/html/footer.html");
});