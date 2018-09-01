function List(){
	
	var oUl = document.getElementById('listul1');
		ajax({
			url:'js/list.json',
			success: function(data){
				alert
			
				var arr = JSON.parse(data);
				for(var i = 0; i < arr.length; i++){
					for(var j = 0; j < arr[i].length; j++){
						//alert(arr[i][j])
						var msg = arr[i][j];
						var oLi = document.createElement('li');
						var oImg = document.createElement('img');
						/*var oSpan = document.createElement('span');*/
						var oPrice = document.createElement('p');
						var oSpan = document.createElement('span');
						var oH2 = document.createElement('h2');
						
						
						oPrice.innerHTML = msg.goodText1;
						oSpan.innerHTML = msg.goodText2;
						oH2.innerHTML = msg.goodText3;
						//console.log(msg.goodText1);
						/*var oI = document.createElement('i');*/
						oImg.src = msg.goodImg;
						/*oSpan = msg.goodText1;*/
						oP = msg.goodText2;
						oI = msg.goodText3;
						oLi.appendChild(oImg);
						oUl.appendChild(oLi);
						oLi.appendChild(oSpan);
						/*oLi.appendChild(oP);
						oLi.appendChild(oI);*/
						
						oLi.appendChild(oH2);
						oLi.appendChild(oPrice);
						
						
						
					}
				}
				
				
				$("#listul1 li").mouseenter(function(){
					//console.log(1);
					$(this).css("borderColor","red");
				})
				
				$("#listul1 li").mouseleave(function(){
					console.log(1);
					$(this).css("borderColor","#e6e6e6");
				})
				
			},
			error: function(msg){
				alert(msg);
		}
	})
		
}