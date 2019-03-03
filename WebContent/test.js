window.onload=function(){
	if(!document.getElementById) return;
	
//	var oExample = document.getElementById("example");
//    alert(oExample);
//    AddEvent("nations", "change", doSomething);
    addEventListener("change", doSomething, false);
};
function doSomething() {
	alert(123);
}
//$(document).ready();
function imageSwap(imgName, url) {
	if(document.images) {
		document.images[imgName].src = url;
	}
}
function myFunc(elemID) {
	var obj;
	if(document.getElementById){
		obj = document.getElementById(elemID);
	}else if(document.all){
		obj = document.all(elemID);
	}else if(document.layers) {
		obj = document.layers[elemID];
	}
	if(obj) {
		//asdfasdf
	}
	if(document.body && document.body.style) {//会存在短路情况
		//staements that work on the body's style property
	}
	//等价于
	if(document.body) {
		if(document.body.style) {
			//staements that work on the body's style property
		}
	}
	//typeof 操作符用于测试特性是否有效
	if (document.body && typeof document.body.scroll != "undefined") {
		//staements that work on the body's scroll property
		new String("Hello");
	}
}
