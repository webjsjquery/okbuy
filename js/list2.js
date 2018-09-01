function List2(){
	
	var oUl = document.getElementById('list2ul');
		ajax({
			url:'js/list2.json',
			success: function(data){
			
				var arr = JSON.parse(data);
				for(var i = 0; i < arr.length; i++){
					for(var j = 0; j < arr[i].length; j++){
						//alert(arr[i][j])
						var msg = arr[i][j];
						var oLi = document.createElement('li');
						var oImg = document.createElement('img');
						var oPrice = document.createElement('p');
						var oSpan = document.createElement('span');
						
						oPrice.innerHTML = msg.goodText1;
						oSpan.innerHTML = msg.goodText2;
						oImg.src = msg.goodImg;
						oLi.appendChild(oImg);
						oLi.appendChild(oPrice);
						oPrice.appendChild(oSpan);
						oUl.appendChild(oLi);
						
						
					}
				}
				
				$("#list2ul li").mouseenter(function(){
					//console.log(1);
					$(this).css("borderColor","red");
				})
				
				$("#list2ul li").mouseleave(function(){
					//console.log(1);
					$(this).css("borderColor","#e6e6e6");
				})
			},
			error: function(msg){
				alert(msg);
		}
	})
}