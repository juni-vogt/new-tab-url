chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({
    	defaultOptions: {
    		'url': '',
    		'bgColor': '#ffffff'
    	}
    });
});