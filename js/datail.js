//require(["config"], function(){
//	require(["jquery", "template", "load"], function($, template){
////		$.getJSON("/mock/list.json", function(data){
////			var html = template("list_temp", {products: data})
////			$(".main").html(html);
////		});
////
////		// 事件委派
////		$(".main").on("click", ".addToCart a", function(){
////			console.log($(this).parents(".prod"))
////		});
//		
//	});
//});
$(function(){

//放大镜效果
		$(".little-pic").on("click","li",function(){
			console.log()
			$(this).children().css({"border":"2px solid red"})
			.end().siblings().children().css({"border":"1px solid #ccc"})
			var _index = $(this).index();
//			console.log(_index)			
			$(".middle-pic li").eq(_index).siblings().hide().end().show();
			$(".big-pic li").eq(_index).siblings().hide().end().show();
			

		
			
		})
//		$(".middle-pic").mouseenter(function(){
//		
//			$(".len1").show();
//			$(".big-pic").show();
//			console.log(111)
//		})
//		$(".middle-pic").mouseleave(function(){
//			$(".len1").hide();
//			$(".big-pic").hide();
//		})
//		var lenWidth = 240;
//			lenHeight = 240,
//			middleWidth = 480,
//			middleHeight = 480;
//		$(".middle-pic").mousemove(function(e){
//			offset($(".len1"),{
//				top : e.pageY - lenHeight / 2,
//				left : e.pageX - lenWidth / 2
//			});
//			
//			// 获取镜头在其有定位父元素坐标系统中的定位
//			var _top = $(".len1").offsetTop,
//				_left = $(".len1").offsetLeft;
//			if (_top < 0)
//				_top = 0;
//			else if (_top > middleHeight - lenHeight)
//				_top = middleHeight - lenHeight;
//			if (_left < 0)
//				_left = 0;
//			else if(_left > middleWidth - lenWidth)
//				_left = middleWidth - lenWidth;
//			// 重新设置CSS样式
//			console.log(_top,_left)
//			$(".len1").css({
//				"top" : _top + "px",
//				"left" : _left + "px"
//			});
//			// 移动大图盒子中的图片
//			$(".big-pic").css({
//				"top" : -2 * _top + "px", 
//				"left" : -2 * _left + "px"
//			})
//		})






	$(".cont-detail").on("click","a",function(){
	$(this).siblings()
	.css({"height":28+"px",
			"border-top":"1px solid #e5e5e5"})
	.end()
	.css({
		"height":29+"px",
		"border-bottom":"1px solid #fff",
		"border-top":"1px solid #333"});
		
		
		$(".len-main").hide();
		$(".contant").css({
			"position": "fixed",
			"top":-30+"px",
			"left":152+"px"
		})
	})





//TAB切换效果
$(".show-box-all").click(function(){
	$(".show-box").show();
	$(".item-goods-comment").hide();
	$(".item-goods-ensure").hide();
	
})

$(".item-goods-comment-all").click(function(){
	$(".show-box").hide();
	$(".item-goods-comment").show();
	$(".item-goods-ensure").hide();
	
})

$(".item-goods-ensure-all").click(function(){
	$(".show-box").hide();
	$(".item-goods-comment").hide();
	$(".item-goods-ensure").show();
	
})

//tab第二模块“购物评论”底部效果
$(".compare-all").on("click","li",function(){
		$(this).siblings().children().css({"color":"#000",
										"background":"#f4f4f4",
										"font-weight":100});
		$(this).children().css({"color":"#fff",
								"background":"#d41c50",
								"font-weight":900})
		
		
})
$(".compare-all li:not(:last)").hover(function(){
	$(this).css({"background":"#ccc"})},
	function(){$(this).css({"background":"#f4f4f4"})
	})

})
//tab第一模块“商品详情”顶部文字模板
$(function(){
			// 从 mock/products.json 文件中加载商品数据
		$.getJSON("../mock/detail.json", function(data){
			console.log(1)
				// 渲染模板
			var html = template("details", {detailsList:data});
				// 显示
				$(".detail-mock").html(html);
		})
})



