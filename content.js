var elements = document.getElementsByTagName('*');
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
			var replacedText = text;
			
			//Specials
            replacedText = replacedText.replace(/632146/gi, 'HCBF+');
            replacedText = replacedText.replace(/632144/gi, 'HCBB+');
            replacedText = replacedText.replace(/63214/gi, 'HCB+');
            replacedText = replacedText.replace(/412364/gi, 'HCFB+');
            replacedText = replacedText.replace(/412366/gi, 'HCFF+');
            replacedText = replacedText.replace(/41236/gi, 'HCF+');
			replacedText = replacedText.replace(/2366/gi, 'QCFF+');
			replacedText = replacedText.replace(/236/gi, 'QCF+');
			replacedText = replacedText.replace(/214/gi, 'QCB+');
			replacedText = replacedText.replace(/6239/gi, 'TK DP+');
			replacedText = replacedText.replace(/623/gi, 'DP+');
			replacedText = replacedText.replace(/421/gi, 'Reverse DP+');
			
			//Directions
			replacedText = replacedText.replace(/1/gi, 'd/b.');
			replacedText = replacedText.replace(/2/gi, 'd.');
			replacedText = replacedText.replace(/3/gi, 'd/f.');
			replacedText = replacedText.replace(/4/gi, 'd.');
			replacedText = replacedText.replace(/5/gi, 'st.');
			replacedText = replacedText.replace(/6/gi, 'f.');
			replacedText = replacedText.replace(/7/gi, 'u/b.');
			replacedText = replacedText.replace(/8/gi, 'u.');
			replacedText = replacedText.replace(/9/gi, 'u/f.');
						
			
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}