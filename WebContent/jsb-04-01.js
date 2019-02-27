addEventListener("load", addText, true);
function addText() {
	//排除不支持dom的代理
	if(!document.appendChild||!document.createTextNode)
		return;
	//创建文本节点
	var oNewText = document.createTextNode("仅支持dom的代理可以看到");
	//创建段
	var oParagraph= document.createElement('p');
	//插入文本到这段
	oParagraph.appendChild(oNewText);
	//在document最后插入这段
	document.body.appendChild(oParagraph);
}