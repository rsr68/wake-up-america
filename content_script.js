// Inspired by and modified from https://github.com/snipe/downworthy
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
	v = v.replace(/\bMichelle Obama\b/ig, "MOOCHelle Obimbo");
	v = v.replace(/\bAffordable Care Act\b/ig, "Obongocare");
	v = v.replace(/\bObamacare\b/ig, "Owebamacare");
	v = v.replace(/\bBarack\b/ig, "Hussein");
	v = v.replace(/\bObama\b/ig, "Obummer");
	v = v.replace(/\bMuslim\b/ig, "mooSLIME");
	v = v.replace(/\bMuslims\b/ig, "Muzzies");
	v = v.replace(/\bObamacare\b/ig, "Owebamacare");
	v = v.replace(/\bBlack\b/ig, "Thug");
	v = v.replace(/\bObamas\b/ig, "Obozos");
	v = v.replace(/\bISIS\b/ig, "Obi-Wan Nairobi's Muslim Army");
	
	v = v.replace(/\."/ig, ". WAKE UP AMERICA\" ");
	v = v.replace(/\?/ig, "? This country is going to Hell!!!!!\" ");
	textNode.nodeValue = v;
}

