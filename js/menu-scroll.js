$(function () {
    var start_scroll = $(document).scrollTop();
    var header_menu = $('.variants').outerHeight();

    $(window).scroll(function () {
        var current_scroll = $(document).scrollTop();

        if (current_scroll > header_menu) {
            $('.variants').addClass('remove');
        } else {
            $('.variants').removeClass('remove');
        }

        if (current_scroll > start_scroll) {
            $('.variants').removeClass('show-menu');
        } else {
            $('.variants').addClass('show-menu');
        }

        start_scroll = $(document).scrollTop();
    });
});