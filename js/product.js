$(function(){
	
	//添加点击事件
	$("#carpower").click(function(){
					location.href = "cart.html";
				})
	//获取商品信息
	
	var goodPrice = $("#price4").html();
		
	var goodImg = $("#colorBtn").find("li").eq(0).find("img").attr("src");
	
	var goodName = $("#h2-l").html();
	
	var cartStr = $.cookie("cart") ? $.cookie("cart") : "";

	
	
	
})
