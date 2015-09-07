/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/apps/app.window.html
 */

 //Create window when icon is pressed
chrome.browserAction.onClicked.addListener(function() {
    var w = 500;
    var h = 500;
    var left = Math.round( (screen.width/2)-(w/2) );
    var top = Math.round( (screen.height/2)-(h/2) ); 

    chrome.windows.create({
        'url': 'index.html', 
        'type': 'popup', 
        "width": w, 
        "height": h,
        "left": left,
        "top": top
    }, function(window) {
        
    });
});