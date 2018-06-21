$(document).ready(function() {
    var secret = 1234;
    var bar1 = new ldBar("#loadbar");
    bar1.set(0);
    var end = 0;
    var start = 3 * 60 * 1000;
    var curr = start;

    $("#startdia").dialog();

    setInterval(function() {
        bar1.set(100 - Math.round(curr / start * 100));
        curr -= 1000;
        },
     1000);

    $("#pin").on('input', function() {
        $("#status").text("");
        var code = $("#pin").val();
        if (code.length == 4 && code == secret) {
                $("#status").text("UNLOCKED");
        }
    });
});
