$(function () {
    let header = $('.header');
    let hederHeight = header.height(); // вычисл€ем высоту шапки

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            header.addClass('header_fixed');
            $('body').css({
                'paddingTop': hederHeight + 'px' // делаем отступ у body, равный высоте шапки
            });
        } else {
            header.removeClass('header_fixed');
            $('body').css({
                'paddingTop': 0 // удал€ю отступ у body, равный высоте шапки
            })
        }
    });
});