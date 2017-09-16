//var imgs = $("li", $("#container")), // 所有轮播的图片盒子
//			len = imgs.length, // 总图片张数
//			currentIndex = 0, // 当前显示图片的索引
//			nextIndex = 1, // 即将显示图片的索引
//			circles = $("div", $("#pages")), // 所有小圆点
//			timer = null; // 计时器id
//		// 自动轮播切换
//		timer = setInterval(move, 3000);
//
//		// 鼠标移入/移出容器范围，停止/启动自动轮播
//		$("#container").mouseenter(function(){
//			clearInterval(timer);
//		})
//		$("#container").mouseleave(function(){
//			timer = setInterval(move, 3000);
//			
//		})
//
//		// 在小圆点上点击
//		for (var i = 0; i < circles.length; i++) {
//			circles[i].index = i;
//			circles[i].onclick = function(){
//				// 获取当前点击小圆点的索引
//				var index = this.index;
//				if (index === currentIndex)
//					return;
//				// 将即将显示图片索引设置为当前点击的小圆点的索引
//				nextIndex = index;
//				// 调用 move() 函数实现切换
//				move();
//			}
//		}
//		$("#pages").click(function(e){
//			e = e || window.event;
//			var src = e.target || e.srcElement;
//			// 找出事件源元素在小圆点中的索引
//			for (var i = 0; i < circles.length; i++) {
//				if (src === circles[i]){ // 找出点击小圆点的索引
//					if (i === currentIndex)
//						return;
//
//					nextIndex = i;
//					move();
//					return;
//				}
//			}
//		})
//
//		// 向前翻页
//		$("#prev").click(function(){
//			nextIndex = currentIndex - 1;
//			if (nextIndex < 0)
//				nextIndex = len - 1;
//			move();
//		})
//		// 向后翻页
//		$("#next").click(move);
//		// 轮播切换图片
//		function move(){
//			// 当前显示的图片淡出
//			fadeOut(imgs[currentIndex], 1000);
//			// 即将显示的图片淡入
//			fadeIn(imgs[nextIndex], 1000);
//			// 修改小圆点样式
//			circles[currentIndex].className = "";
//			circles[nextIndex].className = "current";
//			// 修改索引
//			currentIndex = nextIndex;
//			nextIndex++;
//			if (nextIndex === len)
//				nextIndex = 0;
//		}
//		


$(function(){
			// 从 mock/products.json 文件中加载商品数据
		$.getJSON("mock/goods.json", function(data){
//			console.log(1)
				// 渲染模板
			var html = template("bags_all", {goodsList:data});
				// 显示
				$(".hot-goods-main").html(html);
				
			$(".hot-top-banner").each(function(index, element){
				
				var imgBoxes=$(this).children(".pic").children("li"),
				len=imgBoxes.length,
				imgWidth =imgBoxes.outerWidth(),
				currentIndex=0,
				nextIndex=1,
				timer=null;

				var first=imgBoxes.eq(0).clone(true);
				var last=imgBoxes.last().clone(true);

				$(this).children(".pic").append(first).prepend(last);

				len+=2;
				$(this).children(".pic").width(imgWidth*len)
					  .css("left", -imgWidth);
			// timer = setInterval(move, 1000);
//				var html="";
//				for(let i=0;i<len-2;i++){
//					html+=`<div></div>`
//				}
//				$("#pages2").append(html).first().addClass("current");
				 $(this).hover(function(){
					clearInterval(timer);
		
				},function(){
					timer = setInterval(move, 2000);
				
				}).mouseleave();
				
				$(".pages2").on("click","div",function(){
				
					var index = $(this).index();
					if (index + 1 === currentIndex)
							return;
							nextIndex = index + 1;
							move();
					})
				


			function move(){
				var _left=-1*imgWidth*nextIndex;

				var circleIndex = nextIndex - 1;
				if (nextIndex === 0)
					circleIndex = len - 3;
				else if(nextIndex === len - 1)
					circleIndex = 0;
				// 添加/删除样式
				$(this).children("pages2").children("div").eq(circleIndex).addClass("orange")
							   .siblings().removeClass("orange");
				$(this).children(".pic").stop().animate({left:_left},function(){
					if(nextIndex >= len){
						current=1;
						nextIndex=2;
						$(this).children(".pic").css({"left":-imgWidth})
					}
					if(currentIndex===0){
						currentIndex=len-2;

						nextIndex=len-1;
						$(this).children(".pic").css({"left":-(len-1)*imgWidth})


					}
				});
				currentIndex = nextIndex;
				nextIndex++;

			}
		})

	
		
	var winHeight=$(window).height();
	var isAuto=false;
	$(window).scroll(function(){
		if (!isAuto){
			var _scrollTop=$(window).scrollTop();
				if(_scrollTop>500){
					$(".aside-floor").show();
				}else{
					$(".aside-floor").hide();
				}
		}		
	});
	

	$(".floor").on("click","li",function(){
			isAuto = true;
				// 将当前点击li下的span显示，其它隐藏
//			$(this).css({"background":"#d41c50"});
//			$(this).siblings().css({"background":"#D8D9DC"})
				// 获取当前点击菜单项的索引
			var _index = $(this).index();
				// 计算对应楼层布局结构前的高度
			var _top = $(".hot-goods").eq(_index).offset().top;
//			console.log($(".hot-goods"))
				// 运动动画效果
			$("html,body").stop().animate({scrollTop:_top}, function(){
				isAuto = false;
			});
		
	});
//	$(".floor li").hover(function(){
//			$(this).css({"background":"#d41c50"});
//			$(this).siblings().css({"background":"#D8D9DC"});
//			}, function(){
//				$(this).css({"background":" #D8D9DC"});
//				
//			});
	});
})
	
