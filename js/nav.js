	
//	console.log($(".register")[0])

$("#shopping").onmouseenter=function(){

			css($("#shopping-link"),{
				border:"1px solid #C7C7C7",
				display:"inline-block",
				height:25+"px",
				borderBottom:"1px solid #FFF",
				lineHeight:16+"px",
				background:"#fff"
			});
//			show($(".shopping-car")[0]);
			hide($("#icon1"));
			show($("#icon2"));
		$(".shopping-car")[0].innerHTML="啦啦啦啦啦啦"
//			console.log(11)
		}
		$("#shopping").onmouseleave=function(){
			
			css($("#shopping-link"),{
				border:"0",
				borderLeft: "1px solid #c7c7c7",
				borderRight: "1px solid #c7c7c7",
				background:"#f2f2f2",
				display:"inline"
			});
			css($("#icon1"),{
				position: "absolute",
				top: 3+"px",
				left: 93+"px",
				
			})
			show($("#icon1"));
			hide($("#icon2"));
		}
		
		$("#netbox").onmouseenter=function(){
			css($("#netnav"),{
				border:"1px solid #C7C7C7",
				display:"inline-block",
				height:25+"px",
				borderBottom:"1px solid #FFF",
				lineHeight:16+"px",
				background:"#fff"
			});
			hide($("#icon3"));
			show($("#icon4"));
		
		}
		
		$("#netbox").onmouseleave=function(){
			css($("#netnav"),{
				border:"0",
				background:"#f2f2f2",
				display:"inline"
			});
			css($("#icon3"),{
				position: "absolute",
				top: 0,
				left:58+"px",
			})
			show($("#icon3"));
			hide($("#icon4"));
		}

	
$(function(){
		// 计算享品质模块在文档中定位
//		var _top = offset($(".show-top")[0]).top;
		// 获取窗口高度
//		var winHeight = document.documentElement.clientHeight || document.body.clientHeight;

		// 处理滚动事件
		$(window).scroll(function() {
			// 获取滚动高度
			var _scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			// 判断滚动高度
			if (_scrollTop > 600) {
			show($(".show-top")[0]);
			console.log(_scrollTop)
			
			} else {
				hide($(".show-top")[0]);
			}
		})
	})
		
