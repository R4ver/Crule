function Crule() {
    var storage = chrome.storage.local
    var times = {};


    var set = function() {
        var times = {
            "monday": [
                ["10:45", "10:55"],
                ["11:40", "12:12"]
            ]
        };

        var parse = JSON.stringify(times);

        storage.set({crule_times: parse}, function() {
            alert("Saved: " + parse);
        });
    };

    var get = function(arg) {
        storage.get("crule_times", function(data) {
            var convert_times = data.crule_times;

            times = JSON.parse(convert_times);
            console.log(times.monday[0]);
        });
    };

    return {
        set: function() {
            set();
        },

        get: function(arg) {
            get(arg);
        }
    }
}

$(document).ready(function() {
    var crule = Crule();

    crule.set();
    crule.get("crule_times");
});