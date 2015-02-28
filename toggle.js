(function() {

    var KEY_LAST_CHANGED_AT = 'lastChangedAt';
    var KEY_OPTIONS = 'options';
    var KEY_PAUSED = 'paused';

    function now() {
        return new Date().getTime();
    }

    function updateBadge(paused) {
        var badgeText = paused ? "OFF" : "";
        chrome.browserAction.setBadgeText( { text: badgeText } );
    }

    function isPaused() {
        return (localStorage.getItem(KEY_PAUSED) == 'true');
    }

    function setPaused(paused) {
        var lastChangedAt = now();

        localStorage.setItem(KEY_PAUSED, paused);
        chrome.storage.sync.set( { 'paused': paused } );
        updateBadge(paused);

        localStorage.setItem(KEY_LAST_CHANGED_AT, lastChangedAt);
        return lastChangedAt;
    }

    function togglePause(tab) {
        setPaused(!isPaused());

        chrome.tabs.update(tab.id, {url: tab.url});
    }
	
    function onMessage(request, sender, sendResponse) {
        var requestId = request.id;

        if(requestId == 'isPaused?') {
            sendResponse({value: isPaused()});
        }
    }

    chrome.browserAction.onClicked.addListener(togglePause);
    chrome.extension.onRequest.addListener(onMessage);

    updateBadge(isPaused());

})();