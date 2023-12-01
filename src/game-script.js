$(function () {
    let header = $('.header');
    let hederHeight = header.height() + 16; // ��������� ������ �����
    let lastScrollTop = 0;

    $(window).scroll(function () {
        let scrollDistance = window.scrollY;
        // if ($(this).scrollTop() > 1) {
        //     header.addClass('header_fixed');

        //     $('body').css({
        //         'paddingTop': hederHeight + 'px' // ������ ������ � body, ������ ������ �����
        //     });
        // } else {
        //     header.removeClass('header_fixed');
        //     $('body').css({
        //         'paddingTop': 0 // ������ ������ � body, ������ ������ �����
        //     })
        // }

        if (scrollDistance > lastScrollTop)
        {
            header.removeClass('header_fixed');
            $('body').css({
                'paddingTop': 0
            })        
        } else {
            header.addClass('header_fixed');           
            $('body').css({
               'paddingTop': hederHeight + 'px'
           }); 
        }

        lastScrollTop = scrollDistance;
    });
});