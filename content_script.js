walk(document.body);

function walk(node) 
{
	// Function from StackOverflow:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;
	
	// Really need a dictionary
	v = v.replace(/\bMichelle Obama\b/g, "MOOCHelle Obimbo");
	v = v.replace(/\bAffordable Care Act\b/g, "Obongocare");
	v = v.replace(/\bObamacare\b/g, "Owebamacare");
	v = v.replace(/\bBarack\b/g, "Hussein");
	v = v.replace(/\bObama\b/g, "Obummer");
	textNode.nodeValue = v;
}

