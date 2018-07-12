$(document).ready(function() {
    //TODO put PIN and time to conf file
    var secret = 1234;
    var bar1 = new ldBar("#loadbar");
    bar1.set(0);
    var end = 0;
    var start = 3 * 60 * 1000;
    var curr = start;

    var slideIndex = 0;
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
            setInterval(function() {
                bar1.set(100 - Math.round(curr / start * 100));
                curr -= 1000;
                },
             1000);
        }

        $(slides[slideIndex-1]).show();
        //$(slides[slideIndex-1]).css("display", "flex");
    }



    (function blink() {
      $('#startScreen').fadeOut(1000).fadeIn(1000, blink);
    })();



    $("#pin").on('input', function() {
        var code = $("#pin").val();
        if (code.length == 4 && code == secret) {
                //$("#status").text("UNLOCKED");
                plusSlides(1);
        }
    });


    $(document).keypress(function( event ) {
        if ( event.which == 32 ) {
            plusSlides(1);
        }
    });

});
