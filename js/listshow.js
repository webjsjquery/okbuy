$(function(){
	$("#box-top").find('a').click(function(){
		$("#box-top").find('a').attr("class", '');
		$("#box-top").find('a').css("color", 'black');
		
		$("#top-bottom").find('div').css('display','none').eq($(this).index()).css('display', 'block');
		$(this).attr('class', 'default');
		$(this).css('color','red');
		
					

				})
	$("#box-top").find('a').blur(function(){
		$(this).css("color","black");
		$(this).css("borderColor","red");
					

				})
	
			})