/*
* UI element fuctions
*
* This file holds functions which creates various UI elements.
* Function will have a set of default values, but is then extended
* to alter these default values.
*
* var defaults = {
*     target: "", // The target element. Target is always required
*     class: "", // Custom classes. Always has one specfic class
*     backgroundColor: "red", // Set the background color of the element.
*     circle: false, // Is the element going to be a circle?
*     content: "" // Content of the element. Data from file or text for a button
* }
*/

/*
* Type: function()
* Name: UIRect
* Takes Arguments: Yes
* Required Arguments: content
* Description: Creates a rectangle or circle if true. Doesn't need "content"
*/
function UIRect(options) {
    //Default values
    var defaults = {
        target: "",
        class: "",
        backgroundColor: "none",
        circle: false,
        content: ""
    }
    
    //Extend the defaults
    var opts = $.extend( {}, defaults, options );
    
    //Create the element and set the attributes
    var uiRect = document.createElement("div");
    uiRect.setAttribute("class", "uiRect " + opts.class);
    uiRect.style.width = opts.width;
    uiRect.style.height = opts.height;
    uiRect.style.background = opts.backgroundColor;

    //Check if element is going to be a circle
    if ( opts.circle === true )
        uiRect.style.borderRadius = "50%";

    uiRect.innerHTML = opts.content;
    
    //Append the element to the target
    $(opts.target).append(uiRect);
}

/*
* Type: function()
* Name: UIButton
* Takes Arguments: Yes
* Required Arguments: content
* Description: Creates a button, either square or circle.
*/
function UIButton(options) {
    //Default values
    var defaults = {
        target: "",
        id: "",
        backgroundColor: "red",
        circle: false,
        content: ""
    }

    //Extend the defaults
    var opts = $.extend( {}, defaults, options );

    if ( opts.content === "" ) {
        $(opts.target).prepend("<b style='display:block;position:fixed;color:white;background:red;border:4px solid black;z-index:999;'>Error: UIButton needs content.</b>");
        console.log("Error: UIButton needs content.");
        return false;
    }

    //Create the element and set the attributes
    var uiButton = document.createElement("a");
    uiButton.setAttribute("id", opts.id);
    uiButton.setAttribute("class", "uiButton " + opts.class);
    uiButton.setAttribute("href", "#");
    uiButton.style.background = opts.backgroundColor;

    //Check if element is going to be a circle
    if ( opts.circle === true )
        uiButton.style.borderRadius = "50%";

    uiButton.innerHTML = opts.content;

    //Append the element to the target
    $(opts.target).append(uiButton);
}
