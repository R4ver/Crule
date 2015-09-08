chrome.app.runtime.onLaunched.addListener(function () {
    
    var screenWidth = screen.availWidth;
    var screenHeight = screen.availHeight;
    var width = 300;
    var height = 500;

    chrome.app.window.create('index.html', {
        id: 'appWindow',
        bounds: {
            width: width,
            height: height,
            left: Math.round((screenWidth - width) / 2),
            top: Math.round((screenHeight - height) / 2)
        },
        "resizable": false,
        frame: "none"
    });
});