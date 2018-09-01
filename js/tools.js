function selection(arr){
	//遍历
	for(var i = 0;i < arr.length - 1;i ++){
		//遍历
		for(var j = i + 1;j < arr.length;j ++){
			//比较
			if(arr[i] > arr[j]){
				//交换
				var t = arr[i];
				arr[i] = arr[j];
				arr[j] = t;
			}
		}
	}
	return arr;
}
function bubble(arr){  //从小到大
	//控制比较轮数
	for(var i = 1;i < arr.length;i ++){
		//遍历数组
		for(var j = 0;j < arr.length - i;j ++){
			//比较
			if(arr[j] > arr[j + 1]){
				//交换
				var t = arr[j];       // t= 9;
				arr[j] = arr[j + 1];  //arr[j] = 6
				arr[j + 1] = t;		 //arr[j + 1] = 9
			}
		}
	}
	return arr;
}
//随机整数
function randomInt(min,max){
	if(min > max){
		var t = min;
		min = max;
		max = t;
	}
	return Math.floor(Math.random() * (max - min + 1) + min);
}
//删除指定节点中的所有空白文本子节点
function deleteSpace(node){
	var nodes = node.childNodes;
	//遍历数组
	for(var i = 0;i < nodes.length;i ++){
		//console.log(nodes[i].nodeType);
		//判断是否是空白的文本节点				
		if(nodes[i].nodeType === 3 && /^\s+$/.test(nodes[i].nodeValue)){
			node.removeChild(nodes[i]);
		}
	}
	return node;
}
//获取非行内样式
function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,1)[attr];
}
//拖拽
function drag(id){
	var ele = document.getElementById(id);
	ele.onmousedown = function(evt){
		var e = evt || window.event;
		var disX = e.offsetX;
		var disY = e.offsetY;
		document.onmousemove = function(evt){
			var e = evt || window.event;
			ele.style.left = e.pageX - disX + 'px';
			ele.style.top = e.pageY - disY + 'px';
		}
		document.onmouseup = function(){
			document.onmousemove = null;
			
		}
		//拖拽事件
		document.ondragstart = function(){
			return false; //取消拖拽的默认行为
		}
	}
}
//创建cookie
function createCookie(key,value,expires){
	//设置主键值对与路径
	var cookieText = encodeURIComponent(key) + '=' + encodeURIComponent(value) + ';path=/';
	//判断是否设置有效期，如果传了日期，则设置
	if(parseInt(expires)){
		var date = new Date();
		date.setDate(date.getDate() + expires);
		cookieText += ';expires=' + date;
	}
	//创建cookie
	document.cookie = cookieText;
}
//获取cookie
//%E5%A7%93%E5%90%8D=%E5%BC%A0%E5%BF%97%E6%9E%97; url=www.1000phone.com; email=zhangzhilin%401000phone.com
/*
 * 截取：
 * substring(start,end)
 * slice(start,end)
 * substr(start,length)
 * indexOf
 * 					start               end
 * 姓名				 0   + key.length	46
 * url				48					69
 * email			71
 */
function getCookie(key){
	//获取所要查找的key
	var cookieKey = encodeURIComponent(key) + '=';
	var start = document.cookie.indexOf(cookieKey); //找到查找key的开始下标
	//当找到开始位置时，再查找结束位置的下标
	if(start != -1){
		var end = document.cookie.indexOf(';',start); //找到结束位置的下标
		if(end == -1){ //因为最后一个键值对没有分号，所以结束位置就是整个字符串的长度
			end = document.cookie.length;
		}
		//截取出所要查找的value并解码
		cookieValue = decodeURIComponent(document.cookie.substring(start + cookieKey.length,end));
	}
	return cookieValue; //返回value
}
function $cookie(key){
	//"%E5%A7%93%E5%90%8D=%E5%BC%A0%E5%BF%97%E6%9E%97; url=www.1000phone.com; email=zhangzhilin%401000phone.com"
	//['%E5%A7%93%E5%90%8D=%E5%BC%A0%E5%BF%97%E6%9E%97','url=www.1000phone.com','email=zhangzhilin%401000phone.com']
	/*
	 * [
	 * 		['%E5%A7%93%E5%90%8D','%E5%BC%A0%E5%BF%97%E6%9E%97'],
	 * 		['url','www.1000phone.com'],
	 * 		['email','zhangzhilin%401000phone.com']
	 * ]
	 */
	var cookieKey = encodeURIComponent(key);
	var arr = document.cookie.split('; ');
	for(var i = 0,len = arr.length;i < len;i ++){
		var list = arr[i].split('=');
		if(cookieKey === list[0]){
			return decodeURIComponent(list[1]);
		}
	}
}
//删除cookie
function removeCookie(key){
	document.cookie = encodeURIComponent(key) + "=;expires=" + new Date(0) + ";path=/";
}
//运动框架
function startMove(obj,json,fn){
	//1.清除上一次的计时器
	clearInterval(obj.timer);
	//2.开启新的计时器
	obj.timer = setInterval(()=>{
		//1.设置开关（假设所有属性都达到目标）
		let stop = true;
		//2.遍历对象
		for(let attr in json){
			//1.获取当前值
			let cur = null;
			if(attr === 'opacity'){
				cur = parseInt(parseFloat(getStyle(obj,attr)) * 100);
			}else{
				cur = parseInt(getStyle(obj,attr));
			}
			//2.计算速度
			let speed = (json[attr] - cur) / 8;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			//3.判断开关
			if(cur !== json[attr]){
				stop = false;
			}
			//4.设置运动 
			if(attr === 'opacity'){
				obj.style.opacity = (cur + speed) / 100;
				obj.style.filter = 'alpha(opacity=' + (cur + speed) + ")";
			}else{
				obj.style[attr] = cur + speed + 'px';
			}
		}
		//3.检测停止
		if(stop){
			clearInterval(obj.timer);
			if(typeof fn === 'function'){
				fn();
			}
		}
	},30)
}
