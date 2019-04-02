/**
 * Position the parallax item on scroll
 */

$(document).ready(function () {
    $(window).scroll(function () {
        var pos = $(window).scrollTop() / 2;

        $('#parallax').css('top', pos);
    });
});