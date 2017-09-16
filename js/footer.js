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

		promiseAjax("/html/footer.html").then(function(data){
			$(".footer-main").html(data);
			
			$(function(){
			// 从 mock/products.json 文件中加载商品数据
			$.getJSON("/mock/products.json", function(data){
				// 渲染模板
				var html = template("prod_temp", {links:data});
				// 显示
				$(".link-lists").html(html);
			});
		})
		
		}, function(){
			console.log("failed");
		});
})