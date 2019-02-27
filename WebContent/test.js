window.onload=function(){
	if(!document.getElementById) return;
	
	var oExample = document.getElementById("example");
    alert(oExample);
//    AddEvent("nations", "change", doSomething);
    addEventListener("change", doSomething, false);
};
function doSomething() {
	alert(123);
}
//$(document).ready();