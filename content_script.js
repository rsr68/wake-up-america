// Inspired by and modified from https://github.com/snipe/downworthy

go(); 

function go() {
	chrome.extension.sendRequest({id: 'isPaused?'}, function(response) {
		var isPaused = response.value;  
		if(!isPaused) {
			walk(document.body);
		}
	});
}

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
	
	// TODO: Really need a dictionary here instead of this
	// TODO: Organize alphabetically
	
	// Note: I have made no effort to make replacements based on proper capitalization/grammar
	// If you take any time to read a right-wing comments section, you'll see why.
	
	// Some of these are straight-up dumb. If you see better comments in the wild, update the list.
	
	// Most of these are from actual comments I've seen :(
	// Extra help from the Racial Slur Database http://www.rsdb.org/ 
	v = v.replace(/\bMichelle Obama\b/ig, "MOOCHelle Obimbo");
	v = v.replace(/\bAffordable Care Act\b/ig, "Obongocare");
	v = v.replace(/\bObamacare\b/ig, "Owebamacare");
	v = v.replace(/\bBarack\b/ig, "Hussein");
	v = v.replace(/\bObama\b/ig, "Obummer");
	v = v.replace(/\bMuslim\b/ig, "Infidel");
	v = v.replace(/\bIslam\b/ig, "ISLIME");
	v = v.replace(/\bMuslims\b/ig, "Muzzies");
	v = v.replace(/\bBlack\b/ig, "Thug");
	v = v.replace(/\bObamas\b/ig, "Obozos");
	v = v.replace(/\bISIS\b/ig, "Obi-Wan Nairobi's Muslim Army");
	v = v.replace(/\bGay\b/ig, "F@@got");
	v = v.replace(/\bHomosexual\b/ig, "deviant g@y pervert");
	v = v.replace(/\bAfrican\b/ig, "n**ger");
	v = v.replace(/\chiropractor\b/ig, "chiroquacker");
	v = v.replace(/\chiropractors\b/ig, "chiroquackers");
	v = v.replace(/\Arab\b/ig, "Goatherder");
	v = v.replace(/\Congress\b/ig, "Criminals in Congress");
	v = v.replace(/\Immigration\b/ig, "Illegals taking our JOBS");
	v = v.replace(/\Democrat\b/ig, "Demoncrap");
	v = v.replace(/\Democrats\b/ig, "Demoncraps");
	v = v.replace(/\Democratic\b/ig, "Demoncrapic");
	v = v.replace(/\GOP\b/ig, "GOP (Greedy Oppressive Pricks)");
	v = v.replace(/\Hispanic\b/ig, "Beaner");
	v = v.replace(/\Latino\b/ig, "illegal immigrant");
	v = v.replace(/\President\b/ig, "the Kenyan-in-Chief");
	v = v.replace(/\Ebola\b/ig, "E Boli");
	v = v.replace(/\Communist\b/ig, "Obammunist");
	v = v.replace(/\Communism\b/ig, "Obammunism");
	v = v.replace(/\deport\b/ig, "tell them they are NOT welcome here");
	v = v.replace(/\people\b/ig, "sheeple");
	v = v.replace(/\pro-choice\b/ig, "anti-life");
	v = v.replace(/\Republican\b/ig, "Repugnicant");
	v = v.replace(/\Republicans\b/ig, "Repugnicants");
	v = v.replace(/\Islamic State\b/ig, "Ovomit's Muslim Army");
	v = v.replace(/\bwar\b/ig, "jihad");
	v = v.replace(/\liberal\b/ig, "libtard");
	v = v.replace(/\conservative\b/ig, "conservitard");
	v = v.replace(/\conservatives\b/ig, "conservitards");
	v = v.replace(/\mosque\b/ig, "terrorist training ground");
	v = v.replace(/\mosques\b/ig, "terrorist training grounds");
	v = v.replace(/\Iraqi\b/ig, "Towelhead");
        v = v.replace(/\tax(es|ation)?/, "legalized theft");
        v = v.replace(/\Don't Ask,? Don't Tell/i, "Keep it in the Closet");
        v = v.replace(/\Immigrants\b/ig, "freeloaders & invaders");
	v = v.replace(/\Osama bin Laden\b/ig, "Obama bin Laden");
	v = v.replace(/\Planned Parenthood\b/ig, "Baby Murderers");
	v = v.replace(/\California\b/ig, "liberal left wing hippy dippy state of California");
	v = v.replace(/\Bernie Sanders\b/ig, "Socialist Bernie Sanders");
	v = v.replace(/\black\b/ig, "black - but I don't see why we need to bring race into this -");
	
	// Punctuation
	v = v.replace(/\."/ig, ". WAKE UP AMERICA\" ");
	v = v.replace(/\..."/ig, "... Trump 2016!\" ");
	v = v.replace(/\?/ig, "? This country is going to Hell!!!!!");
	textNode.nodeValue = v;
}

