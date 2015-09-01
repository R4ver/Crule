$(document).ready(function() {
    var ns = function(arg) {
        chrome.storage.local.set({task: arg});
    };

    var get = function() {
        chrome.storage.local.get(function(data) {
            console.log(data.task);
        });
    }

    $(".set-task").click(function() {
        var task = $(".task").html();

        ns(task);
    });

    $(".get-task").click(function() {
        get();
    });
});

