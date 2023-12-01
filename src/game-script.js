$(function () {
    let header = $('.header');
    let lastScrollTop = 0;

    $(window).scroll(function () {
        let scrollDistance = window.scrollY;

        if (scrollDistance > lastScrollTop)
        {
            header.addClass('header_animeted');        
        } else {
            header.removeClass('header_animeted');
        }

        lastScrollTop = scrollDistance;
    });
});