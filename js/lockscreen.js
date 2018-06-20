$(document).ready(function() {
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
