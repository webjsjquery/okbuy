$(function(){
	var $brand = $(".brand");
	var $brandul = $(".brandul");
	var $brandMore = $(".brand-more");
	var $brandMore2 = $(".brand-more2");
	var $brandCon = $("#brand-con");
	var $box = $(".box-top");
	
	var $more1 = $("#more");
	var $more2 = $("#more2");
	
	//获取json
	$.getJSON("js/screen.json",function(json){
		//alert(1);
		
		var myBrand = json.brand;
		var myName = myBrand.name;
		
		var mySize = json.size;
		var myName2 = mySize.name;
		
		var mySite= json.site;
		var myName3 = mySite.name;
		
		var myFun = json.fun;
		var myName4 = myFun.name;
		
		var myFun = json.fun;
		var myName5 = myFun.name;
		
		var myVamp = json.vamp;
		var myName6 = myVamp.name;
		
		//遍历
		$.each(myName,function(j){
			$("<li>" + myName[j] + "</li>").appendTo(".brandul");
		})
	})
	
	
	
	
	//添加事件
	$brandMore.click(function(){
		$brandCon.css('height','145px');
		$brand.css('height','145px');
		$brandMore.css('display','none');
		$brandMore2.css('display','block');
		
	})
	$brandMore2.click(function(){
		$brandCon.css('height','69px');
		$brand.css('height','69px');
		$brandMore.css('display','block');
		$brandMore2.css('display','none');
	})
	
	$more1.click(function(){
		$more2.css('display','block');
		$more1.css('display','none');
		$box.css('height','867px');
		
	})
	$more2.click(function(){
		$more1.css('display','block');
		$more2.css('display','none');
		$box.css('height','279px');
	})
	
})
