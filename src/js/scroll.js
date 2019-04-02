/**
 * Hides/shows main navigation when scrolling
 * by adding/removing scrollUp CSS class
 */
$(document).ready(function () {
    'use strict';

    var c, currentScrollTop = 0,
        navbar = $('#main-navigation');

    $(window).scroll(function () {
        var a = $(window).scrollTop();
        var b = navbar.height();

        currentScrollTop = a;

        if (c < currentScrollTop && a > b + b) {
            navbar.addClass("scrollUp");
        } else if (c > currentScrollTop && a > b) {
            navbar.removeClass("scrollUp");
        }

        c = currentScrollTop;
    });
});