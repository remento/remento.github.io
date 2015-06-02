/*jslint browser: true*/
/*global $, jQuery, alert, console*/
/* @see http://untame.net/2013/04/how-to-integrate-simple-parallax-with-twitter-bootstrap/ */

$(document).ready(function () {
    'use strict';

    var $parallax = $('.parallax'),
        $sections = $('section[data-type="background"]');

    $(window).scroll(function () {
        console.log('scroll');

        // Update parallax areas
        $parallax.each(function () {
            var el = $(this),
                st = $(window).scrollTop(),
                freezeTopAt = el.data('freezeTopAt') || 99999;
            el.css({
                top: -(Math.min(freezeTopAt, st) / el.data('speed')) + 'px'
            });
        });

        // update sections w/ backgrounds
        $sections.each(function () {
            var el = $(this),
                st = $(window).scrollTop(),
                freezeBgAt = el.data('freezeBgAt') || 99999,
                freezeTopAt = el.data('freezeTopAt') || 99999,
                bgYPos = -(Math.min(freezeBgAt, st) / el.data('speed'));
            el.css({
                backgroundPositionY: bgYPos + 'px',
                top: -(Math.min(freezeTopAt, st)) + 'px'
            });
        });
    });

}.bind(window));


//# sourceMappingURL=all.js.map