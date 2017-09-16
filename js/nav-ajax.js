$(function(){
	function promiseAjax(url) {
			return new Promise(function(resolve, reject){
				// console.log("in promise exec")
				$.ajax({
					type : "get",
					url : url,
					success : function(data){
						resolve(data);
					},
					error : function(){
						reject();
					}
				});
			});
}

	promiseAjax("/html/head.html").then(function(data){
			$("#top").html(data);
			
			$("#shopping").mouseenter(function(){

			$("#shopping-link").css({
				"border":"1px solid #C7C7C7",
				"display":"inline-block",
				"height":25+"px",
				"borderBottom":"1px solid #FFF",
				"lineHeight":16+"px",
				"background":"#fff"
			});
//			show($(".shopping-car")[0]);
			$("#icon1").hide();
			$("#icon2").show();
//		$(".shopping-car")[0].innerHTML="$(".shopping-car")[0]."
		$(".shopping-car").text("啦啦啦啦啦啦")
//			console.log(11)
		})
		$("#shopping").mouseleave(function(){
			
			$("#shopping-link").css({
				"border":"0",
				"borderLeft": "1px solid #c7c7c7",
				"borderRight": "1px solid #c7c7c7",
				"background":"#f2f2f2",
				"display":"inline"
			});
			$("#icon1").css({
				"position": "absolute",
				"top": 3+"px",
				"left": 93+"px",
				
			})
			$("#icon1").show();
			$("#icon2").hide();
		})
		
		$("#netbox").mouseenter(function(){
			$("#netnav").css({
				"border":"1px solid #C7C7C7",
				"display":"inline-block",
				"height":25+"px",
				"borderBottom":"1px solid #FFF",
				"lineHeight":16+"px",
				"background":"#fff"
			});
			$("#icon3").hide();
			$("#icon4").show();
		
		})
		
		$("#netbox").mouseleave(function(){
			$("#netnav").css({
				"border":"0",
				"background":"#f2f2f2",
				"display":"inline"
			});
			$("#icon3").css({
				"position": "absolute",
				"top": 0,
				"left":58+"px"
			});
			$("#icon3").show();
			$("#icon4").hide();
		})
		
		
		$(window).scroll(function() {
			// 获取滚动高度
			var _scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			// 判断滚动高度
			if (_scrollTop > 1000) {
				$(".show-top").show();
//			console.log(_scrollTop)
			
			} else {
				$(".show-top").hide();
				
			}
		});
		
		$(".show-top").click(function(){
				$(window).scrollTop(0);
			})
			
		}, function(){
			console.log("failed");
		});
})

