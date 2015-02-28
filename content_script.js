// MB: Much of this is modified from https://github.com/snipe/downworthy
(function() {
	var _self = this;
	var _dictionary;

	function getDictionary(callback) {
		chrome.extension.sendRequest({id: "getDictionary"}, function(response) {
			_dictionary = response; // Store the dictionary for later use.
			callback.apply(_self, arguments);
		});
	}

	function handleText(textNode) {
		var replacements = _dictionary.replacements;
		var v = textNode.nodeValue;

		var regex, original;

		for(original in replacements) {
			regex = new RegExp('\\b' + original + '\\b', 'g');
			v = v.replace(regex, replacements[original]);
		}
			
		textNode.nodeValue = v;
	}

	function walk(node) {

		// I stole this function from here: - ZW
		// And I stole it from ZW - AG
		// http://is.gd/mwZp7E
		
		var child, next;

		switch(node.nodeType) {
			case 1:  // Element
			case 9:  // Document
			case 11: // Document fragment
				child = node.firstChild;
				while(child) {
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

	chrome.extension.sendRequest({id: 'isPaused?'}, function(response) {
		var isPaused = response.value;
		console.log('isPaused is ' + isPaused);

		if(!isPaused) {
			getDictionary(function() {
				walk(document.body);
			});
		}
	});

})();