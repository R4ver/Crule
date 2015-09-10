/*
* The app functionality is done here.
*/
function Crule() {
    var storage = chrome.storage.local
    var times = {};

    //Sets the times
    var set = function() {
        //test times
        var times = {
            "monday": [
                ["10:45", "10:55"],
                ["11:40", "12:12"]
            ]
        };

        //Converts the array into a string
        var ct = JSON.stringify(times);

        storage.set({crule_times: ct}, function() {});
    };

    //Gets the times
    var get = function(arg) {
        storage.get("crule_times", function(data) {
            var convert_string = data.crule_times;

            //Converts the string into JSON
            times = JSON.parse(convert_string);
            // $(".task-holder ul").empty();
            for ( var i = 0; i < times.monday.length; i++ ) {
                render(".task-holder ul", times.monday[i][0], times.monday[i][1]);
            }

        });
    };

    var render = function(target, break_start, break_end) {

        UIRect({
            target: target,
            class: "uiRect-time",
            backgroundColor: "none",
            content: "<li><a href='#'><span class='break-start'>" + break_start + "</span> - <span class='break-end'>" + break_end + "</span></a></li>"
        });
    };

    return {
        set: function() {
            set();
        },

        get: function(arg) {
            get(arg);
        },

        render: function(target, data) {
            render(target, data);
        }
    }
}


/*
* Handling of the whole app window is done here
*/
// Create the app module.
var chromeless = angular.module('chromeless', []);

// Create the controller.
angular.module('chromeless').controller('ScreenController', function ($scope) {

   // Make sure we read the initial state as well, since the app might startup as maximized.

    $scope.handleWindowEvents = function () {
        // Happens when user uses the window bar or shortcuts to maximize.
        // This happens from an event and therefore we need to run $apply to make the UI update.
        $scope.$apply();
    };
    
    $scope.minimize = function () {
        chrome.app.window.current().minimize();
    }

    $scope.close = function () {
        window.close();
    }

    $scope.initialize = function () {

        // Hooks up handler on the Chrome App window events.

    }(); // Execute initialize

});