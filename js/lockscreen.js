$(document).ready(function() {
    //TODO put PIN and time to conf file
    var secret = lockscreenConfig.pin;
    var secret_len = secret.toString().length
    $("#pin").attr('maxlength',secret_len);
    var bar1 = new ldBar("#loadbar");
    bar1.set(0);
    var end = 0;
    var start = parseInt(lockscreenConfig.timeout) * 60 * 1000;
    var curr = start;

    var slideIndex = 0;
    var intervalID;

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    function showSlides(n) {
        var i;
        var slides = $('.subscreen').toArray();
        console.log(slides.length);

        if (n > slides.length) {
            slideIndex = 1;
        }
        for (i = 0; i < slides.length; i++) {
            $(slides[i]).hide();
        }

        // Start loading
        if (slideIndex == 3) {
            intervalID = setInterval(function() {
                bar1.set(100 - Math.round(curr / start * 100));
                curr -= 1000;
                if (curr < 0) {
                    clearInterval(intervalID);
                    plusSlides(2);
                }
                },
             1000);
        }

        $(slides[slideIndex-1]).show();
        //$(slides[slideIndex-1]).css("display", "flex");
    }

    (function blink() {
      $('#startScreen').fadeOut(1000).fadeIn(1000, blink);
    })();
    (function blink2() {
      $('#stopScreen').fadeOut(500).fadeIn(500, blink2);
    })();

    $("#pin").on('input', function() {
        var code = $("#pin").val();
        if (code.length == secret_len) {
            if (code == secret) {
                //$("#status").text("UNLOCKED");
                clearInterval(intervalID);
                plusSlides(1);
            } else {
                $("#pin").delay(1000).queue(function(n) { $(this).val(""); n();});
            }
        }
    });

    $(document).keypress(function( event ) {
        if ( event.which == 32 ) {
            plusSlides(1);
        }
    });

});
