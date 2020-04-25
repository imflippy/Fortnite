$(document).ready(function () {
    //Hover za login and register
    $('#account1 li ul').css({
        display: "none",
        left: "auto"
    });
    $('#account1 li').hover(function () {
        $(this)
            .find('ul')
            .stop(true, true)
            .slideDown('fast');
    }, function () {
        $(this)
            .find('ul')
            .stop(true, true)
            .fadeOut('fast');
    });

    //Plugin Koriscen u index.html za slajder
    $(".rslides").responsiveSlides();

    // Game Mode logika play.html

    openR = false;
    openL = false;

    $(".gb_right").click(function () { // Click na levi game mode
        $(".gb_left>.innerBox").hide();
        $(".gb_right>.innerBox").show();

        if (openL == false && openR == false) {
            $(".gb_right").css({ "background-size": "auto 80%", "width": "80%" });
            $(".gb_left").css({ "background-size": "auto 80%", "width": "10%" });
            openR = true; openL = false;
        } else if (openL == false && openR == true) {
            $(".gb_right").css({ "background-size": "auto 100%", "width": "45%" });
            $(".gb_left").css({ "background-size": "auto 100%", "width": "45%" });
            openR = false; openL = false;
        } else if (openL == true && openR == false) {
            $(".gb_right").css({ "background-size": "auto 80%", "width": "80%" });
            $(".gb_left").css({ "background-size": "auto 80%", "width": "10%" });
            openR = true; openL = false;
        }
    })

    $(".gb_left").click(function () { // Click na desni game mode
        $(".gb_right>.innerBox").hide();
        $(".gb_left>.innerBox").show();

        if (openL == false && openR == false) {
            $(".gb_right").css({ "background-size": "auto 80%", "width": "10%" });
            $(".gb_left").css({ "background-size": "auto 80%", "width": "80%" });
            openR = false; openL = true;
        } else if (openL == false && openR == true) {
            $(".gb_right").css({ "background-size": "auto 80%", "width": "10%" });
            $(".gb_left").css({ "background-size": "auto 80%", "width": "80%" });
            openR = false; openL = false;
        } else if (openL == true && openR == false) {
            $(".gb_right").css({ "background-size": "auto 100%", "width": "45%" });
            $(".gb_left").css({ "background-size": "auto 100%", "width": "45%" });
            openR = false; openL = false;
        }
    })


    //Show and Hide sa index.html
    $('#more').hide();

    $('#morebutton').click(function (e) {
        e.preventDefault();

        if ($('#more').is(':visible')) {
            $('#more').slideUp();
            $(this).val('Read more');
        } else {
            $('#more').slideDown();
            $(this).val('Hide');
        }
    });


});