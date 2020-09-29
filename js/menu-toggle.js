$(function() {
    var start_scroll = $(document).scrollTop();
    var header_menu = $('.menu-scroll-hidden').outerHeight();

    $(window).scroll(function() {
        var current_scroll = $(document).scrollTop();

        if (current_scroll > header_menu) {
            $('.menu-scroll-hidden').addClass('remove');
        } else {
            $('.menu-scroll-hidden').removeClass('remove');
        }

        if (current_scroll > start_scroll) {
            $('.menu-scroll-hidden').removeClass('show-menu');
        } else {
            $('.menu-scroll-hidden').addClass('show-menu');
        }

        start_scroll = $(document).scrollTop();
    });
});