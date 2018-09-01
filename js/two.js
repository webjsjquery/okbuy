$(function(){
	var $my = $("#my");
	var $ul1 = $("#ul1");
	
	
	//获取json
	$.getJSON("js/two.json",function(json){
		//alert(1);
		var myMy = json.my;
		
		var myOne = myMy.one;
		//遍历
		$.each(myOne,function(j){
			$("<li>" + myOne[j] + "</li>").appendTo("#ul1");
		})
		
		/*$ul1.mouseover(function(){
			$ul1.css("display","block");
		})*/
		$my.mouseenter(function(){
			$ul1.css("display","block");
			$ul1.css("z-index","20");
		})
		$("#ul1").mouseleave(function(){
			$ul1.css("display","none");
//			$(this).css("color","black");
			
		})
		//颜色变化
		$("#ul1 li").mouseover(function(){
			$(this).css("color","red");
		}).mouseout(function(){
			$(this).css("color","black");
		})
//		$("#ul1 li").mouseover(function(){
//			$("#ul1").css("display","block");
//		})
//		$("#ul1").mouseout(function(){
//			$ul1.css("display","none");
//		})
	})
	var $kehu = $("#kehu");
	var $ul3 = $("#ul3");
	//获取json
	$.getJSON("js/two.json",function(json){
		//console.log(json.my);
		var myKehu = json.kehu;
		//遍历json
		var myOne = myKehu.one;
		$.each(myOne,function(j){
			$("<li>" + myOne[j] + "</li>").appendTo("#ul3");
		})
		
		//鼠标滑过dispaly = block
		$kehu.mouseenter(function(){
			$ul3.css("display","block");
			$ul3.css("z-index","100");
		})
		$("#ul3").mouseleave(function(){
			$ul3.css("display","none");
		})
		
		
		//颜色变化
		$("#ul3 li").mouseover(function(){
			$(this).css("color","red");
		}).mouseout(function(){
			$(this).css("color","black");
		})
	})
	
	var $phone = $("#phone");
	var $ul2 = $("#ul2");
	$phone.mouseenter(function(){
			$ul2.css("display","block");
			$ul2.css("z-index","100");
		})
	$("#ul2").mouseleave(function(){
			$ul2.css("display","none");
		})
	
	var $care = $("#care");
	var $ul4 = $("#ul4");
	$care.mouseenter(function(){
			$ul4.css("display","block");
			$ul4.css("z-index","100");
			
		})
	$("#ul4").mouseleave(function(){
			$ul4.css("display","none");
		})
	//公告待修改
	var $gonggao = $("#gonggao");
	var $ul5 = $("#ul5");
	$gonggao.mouseenter(function(){
			$ul5.css("display","block");
			$ul5.css("z-index","10");
			$ul5.css("background","#FFFFFF");
		})
	$("#ul5").mouseleave(function(){
			$ul5.css("display","none");
		})
	$("#ul5 li").mouseover(function(){
			$(this).css("color","red");
		}).mouseout(function(){
			$(this).css("color","black");
		})
		

})


