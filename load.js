// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {

	chrome.tabs.executeScript({
        file: 'jquery.min.js'
    });

	chrome.tabs.executeScript({
        file: 'functions.js'
    });

	chrome.tabs.executeScript({
        file: 'selectors.js'
    });

});
