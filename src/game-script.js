$(function () {
    let header = $('.header');
    let hederHeight = header.height(); // ��������� ������ �����

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            header.addClass('header_fixed');
            $('body').css({
                'paddingTop': hederHeight + 'px' // ������ ������ � body, ������ ������ �����
            });
        } else {
            header.removeClass('header_fixed');
            $('body').css({
                'paddingTop': 0 // ������ ������ � body, ������ ������ �����
            })
        }
    });
});