$(document).ready(function() {
    var crule = Crule();

    $(".set-task").click(function() {
        crule.set();
    });

    $(".get-task").click(function() {
        crule.get();
    });
});