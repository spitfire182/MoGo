$(document).ready(function () {
    $('.js--section-about').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    /* Animations on scroll */
    $('.js--section-about').waypoint(function (direction) {
        $('.js--section-about').addClass('animated fadeIn');
    }, {
        offset: '30%'
    });

    $('.js--services-1').waypoint(function (direction) {
        $('.js--services-1').addClass('animated fadeInRight');
    }, {
        offset: '70%'
    });

    $('.js--services-2').waypoint(function (direction) {
        $('.js--services-2').addClass('animated fadeInLeft');
    }, {
        offset: '70%'
    });


    $('.logo-box').waypoint(function (direction) {
        $('.logo-box').addClass('animated pulse');
    }, {
        offset: '70%'
    });


    /* Mobile nav */
    $(".js--nav-icon").click(function () {
        var nav = $(".js--main-nav");
        var icon = $(".js--nav-icon i");

        nav.slideToggle(500);
        if (icon.hasClass("fa-bars")) {
            icon.addClass("fa-times");
            icon.removeClass("fa-bars");
        } else {
            icon.addClass("fa-bars");
            icon.removeClass("fa-times");
        }
    })
});
