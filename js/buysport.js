$(function(){
	var $a3 = $("#a3");
	var $sport = $("#sport");//大div鼠标滑过
	var $sneaker = $("#sneakerul1");  //运动生活运动鞋
	
	var $sport = $("#sportsul1");//运动服
	
	var $children = $("#childrenul");//儿童
	
	var $rim = $("#rimul");//周边
	
	var $summer = $("#summerul");//夏天
	
	var $run = $("#runul");//跑步运动
	
	var $ball = $("#ballul");//球类运动
	
	var $fitness= $("#fitnessul");//健身运动
	
	var $brand2ul2 = $("#brand2ul2");
	
		
	
	
	//获取json
	$.getJSON("js/nav.json",function(json){
		/*console.log(json.buybrand);*/
		var myBuybrand = json.buybrand;
		var myName = myBuybrand.name;
		
		var mySports = json.sports;
		var myName2 = mySports.name;
		
		var myChildren = json.children;
		var myName3 = myChildren.name;
		
		var myRim = json.rim;
		var myName4 = myRim.name;
		
		var mySummer = json.summer;
		var myName5 = mySummer.name;
		
		var myRun = json.run;
		var myName6 = myRun.name;
		
		var myBall = json.ball;
		var myName7 = myBall.name;
		
		var myFitness = json.fitness;
		var myName8 = myFitness.name;
		
		var mySrc = json.brand2;
		var myImg = mySrc.img;
		
		console.log(myImg);
		
	
		//遍历
		$.each(myName,function(j){
			//console.log(myName3.length);
			$("<li>" + myName[j] + "</li>").appendTo("#sneakerul1");
			

			$("<li>" + myName2[j] + "</li>").appendTo("#sportsul1");
			
			$("<li>" + myName3[j] + "</li>").appendTo("#childrenul");
			
			$("<li>" + myName4[j] + "</li>").appendTo("#rimul");
			
			$("<li>" + myName5[j] + "</li>").appendTo("#summerul");
			
			$("<li>" + myName6[j] + "</li>").appendTo("#runul");
			
			$("<li>" + myName7[j] + "</li>").appendTo("#ballul");
			
			$("<li>" + myName8[j] + "</li>").appendTo("#fitnessul");
			
			$("<li>" + "<img src=''/> " + "</li>").appendTo("#brand2ul2");
			
			$("#brand2ul2").find("li").eq(0).attr('class','img1');
			
			
			
			
			
		$("#sneakerul1").find('li').eq(0).click(function(e){
			location.href = 'list.html';
		})
			
			
			
			
			
		$("#a3").mouseenter(function(e){
		e.preventDefault();
			$('#sport').css("display","block");
			$('#sport').css("z-index","20");
		})
		
		
		$('#sport').mouseleave(function(){
			$('#sport').css("display","none");
//			$(this).css("color","black");
			
		})
		
		
		$("#sport li").mouseenter(function(){
			$(this).css("color","red");
		}).mouseleave(function(){
			$(this).css("color","black");
		})
		
		
			
		})
	})
	
})
