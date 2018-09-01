

function ListJson(){
	var oUl = document.getElementById("box2");
	
	ajax({
		url:'js/list3.json',
		success: function(data){
			var arr = JSON.parse(data);
			for(var i = 0;i < arr.length;i++){
				for(var j = 0;j < arr[i].length; j++){
					//alert(1);
						var msg = arr[i][j];
						
						//console.log(arr[i][j]);
						//创建标签
						
						var oLi = document.createElement('li');
						var oImg1 = document.createElement('img');
						var oImg2 = document.createElement('img');
						var oP1 = document.createElement('p');
						var oP2 = document.createElement('p');
						var oP3 = document.createElement('p');
						
						var oP4 = document.createElement('p');
						var oSpan1 = document.createElement('span');
						var oSpan2 = document.createElement('span');
						var oSpan3 = document.createElement('span');
						var oSpan4 = document.createElement('span');
						
						//添加class属性
						$(oP1).attr('class','glname');
						$(oP2).attr('class','glprice');
						$(oP3).attr('class','glsale');
						$(oImg1).attr('class','img1');
						$(oImg2).attr('class','img2');
						$(oP4).attr('class','p4');
						$(oSpan1).attr('class','okprice');
						$(oSpan2).attr('class','okprice2');
						$(oSpan3).attr('class','okprice3');
						$(oSpan4).attr('class','sale-tag');
						$(oImg1).attr('class','img1');
						
					
						//标签赋值
						
					    oLi.id = msg.goodId;
						oImg1.src = msg.goodImg1;
						oP1.innerHTML = msg.goodName;
						oImg2.src = msg.goodImg2;
						oSpan1.innerHTML = msg.goodPrice1;
						oSpan2.innerHTML = msg.goodPrice2;
						oSpan3.innerHTML = msg.goodPrice3;
						oSpan4.innerHTML = msg.goodSale1;
						
						oP3.innerHTML = msg.goodSale;
						
						//插入标签
						oUl.appendChild(oLi);
						
						
						oLi.appendChild(oP4);
						oP4.appendChild(oImg1);
						oP4.appendChild(oImg2);
						oLi.appendChild(oP1);
						oLi.appendChild(oP2);
						oP2.appendChild(oSpan1);
						oP2.appendChild(oSpan2);
						oP2.appendChild(oSpan3);
						oLi.appendChild(oP3);
						oP3.prepend(oSpan4);
						
						
				}
			}
			
			$("#box2 li").mouseenter(function(){
				$("#box2").find('li .img2').css('display','none').eq($(this).index()).css('display', 'block');
			});
			
			$("h1").click(function(){
				location.href = 'index.html';
			})
			
			
			$(function(){
				$("#box2").find('li').click(function(evt){
					location.href = 'product.html';
					//获取Id
					var goodId = $(this).attr('id');
					//alert(goodId);
					
					var goodName = $(this).find('p').eq(1).html();
					//alert(goodName);
					
					var goodPrice = $(this).find('p').eq(2).find('span').eq(0).html();
				//alert(goodPrice);
				
				var goodSrc = $(this).find('img').attr('src');
				//alert(goodSrc);
				
				var cookieStr = $.cookie("cart") ? $.cookie('cart') : "";
				
				var cookieObj = cookieStrConvertCookieObj(cookieStr);
				
				if(goodId in cookieObj){
							cookieObj[goodId].num += 1;
						}else{
							cookieObj[goodId] = {
								"name" : goodName,
								"price" : goodPrice,
								"src" : goodSrc,
								"num" : 1
							}
						}
				
				
				
				
				
				
				function loadInit(){
				var cookieStr = $.cookie('cart') ? $.cookie('cart') : "";
				var cookieObj = cookieStrConvertCookieObj(cookieStr);
				var num = 0;
				for(var i in cookieObj){
					num += cookieObj[i].num;
				}
				$('#buy').val("购物车(" + parseInt(num) +")")
			}
			function cookieStrConvertCookieObj(str){
				if(!str){
					return {};
				}
				return JSON.parse(str);
			}
			
			
				
				
				

				
					
				})
			})
			
			
			
			
		},
			error: function(msg){
					alert(msg);
					
				}
	})
	
	
	
	
	
	
	
			
}
