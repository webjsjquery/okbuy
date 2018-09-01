function Brand(){
	
	var oUl = document.getElementById('brandul1');
		ajax({
			url:'js/good.json',
			success: function(data){
			
				var arr = JSON.parse(data);
				for(var i = 0; i < arr.length; i++){
					for(var j = 0; j < arr[i].length; j++){
						//alert(arr[i][j])
						var msg = arr[i][j];
						var oLi = document.createElement('li');
						var oImg = document.createElement('img');
						oImg.src = msg.goodImg;
						oLi.appendChild(oImg);
						oUl.appendChild(oLi);
						
					}
				}
			},
			error: function(msg){
				alert(msg);
		}
	})
}



