$(document).ready(function() {
    $.getScript('../loading-bar/loading-bar.js', function() {
    alert('Load was performed.');
    });

    var secret = 1234;

    $("#pin").on('input', function() {
        $("#status").text("");
        var code = $("#pin").val();
        if (code.length == 4 && code == secret) {
                $("#status").text("UNLOCKED");
        }
    });
    var lb = ldBar($("#loadbar"));
    lb.set(60);
});
