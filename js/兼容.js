//1.scrollTop
document.documentElement.scrollTop || document.body.scrollTop
//2.scrollLeft
document.documentElement.scrollLeft || document.body.scrollLeft
//byClassName
//3.兼容byClassName
function byClassName(obj,className){
	if(obj.getElementsByClassName){
		return obj.getElementsByClassName(className);
	}else{
		var arr = [];
		var ele = obj.getElementsByTagName('*');
		for(var i = 0,len = ele.length;i < len;i ++){
			if(ele[i].className == className){
				arr.push(ele[i]);
			}
		}
		return arr;
	}
}
//4.获取对象中class属性值的兼容
//getAttribute('class') ie8以下 返回null
//oDiv.getAttribute('className') : 除ie8以下支持，其它都返回null
var className = oDiv.getAttribute('className') ? oDiv.getAttribute('className') : oDiv.getAttribute('class');
//5.获取非行内样式
function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,1)[attr];
}

//6.获取事件对象的兼容
var e = 形参 || window.event;
//7.获取鼠标按键编码值的兼容
function getButton(evt){
//				evt = evt || window.event;
	var e = evt || window.event;
	if(evt){
		return e.button;
	}else if(window.event){
		switch(e.button){
			case 1 : return 0;
			case 4 : return 1;
			case 2 : return 2;
		}
	}
}
//8.通过onkeypress获取键盘按键编码值的兼容
event.keyCode || event.which || event.charCode
//9.阻止事件冒泡的兼容
e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
//10.阻止超链接的默认行为的兼容
e.preventDefault ? e.preventDefault() : e.returnValue = false;
//11.添加事件监听器的兼容
function addEventListen(obj,evt,fun,boo){
	if(obj.attachEvent){
		
		obj.attachEvent('on' + evt,fun);
	}else{
		obj.addEventListener(evt,fun,boo);
	}
}
//12.删除事件监听器的兼容
function removeEventListen(obj,evt,fn,boo){
	if(obj.removeEventListener){
		obj.removeEventListener(evt,fn,boo);
	}else{
		obj.detachEvent('on' + evt,fn);
	}
}
//13.获取事件源的兼容
var target = e.target || e.srcElement;