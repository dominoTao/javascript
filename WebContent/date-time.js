window.onload=insertDateTime;
function insertDateTime() {
	if(!document.getElementById) return;
	if(!document.createTextNode) return;
	
	var oNow = new Date();
	var sDateTime = oNow.toLocaleString();
	
	var oTarget = document.getElementById('output');
	if(!oTarget) return;
	
	while(otarget.firstChild)
		oTarget.removeChild(oTarget.firstChild);
	
	var oNewText = document.createTextNode(sDateTime);
	oTarget.appendChild(oNewText);
		
}