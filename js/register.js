//$(function(){
//	function promiseAjax(url) {
//			return new Promise(function(resolve, reject){
//				// console.log("in promise exec")
//				$.ajax({
//					type : "get",
//					url : url,
//					success : function(data){
//						resolve(data);
//					},
//					error : function(){
//						reject();
//					}
//				});
//			});
//}
//
//	promiseAjax("../html/head.html").then(function(data){
//			$("#top").html(data);
//					
//		}, function(){
//			console.log("failed");
//		});
//})

require(["config"], function(){
	require(["jquery", "template", "load","nav-ajax"], function($, template){
//		$.getJSON("/mock/list.json", function(data){
//			var html = template("list_temp", {products: data})
//			$(".main").html(html);
//		});

		// 事件委派
		/*$(".main").on("click", ".addToCart a", function(){
			console.log($(this).parents(".prod"))
		});*/
//		$(".main").delegate(".addToCart a", "click", function(){
//			console.log($(this).parents(".prod"))
//		});
	});
});
