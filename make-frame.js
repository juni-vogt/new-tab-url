chrome.storage.sync.get("defaultOptions", function(defaults) {
    chrome.storage.sync.get(defaults.defaultOptions, function(options) {
        console.log("got options", options);

        document.body.innerHTML +=
            '<iframe src="' + (options.url || 'options.html') + '"></iframe>' +
            // not using default options because I don't want options.html to
            // be visible as a default option but rather an invisible fallback
            '<style> body { background: ' + options.bgColor + '} </style>';

    });
});