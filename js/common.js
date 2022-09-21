$(function(){
    $('header').load('head_foot.html .head', menu);
    $('footer').load('head_foot.html .foot');

    function menu() {
        $('.menu-trigger').on('click',function(){
            $(this).toggleClass('active');
            $('.mobileMenu').toggleClass('active');
            $('.mainMenu').toggleClass('active');
            $('.mobile_h .logo_area').toggleClass('active');
            $('.topBtn').toggleClass('active');
        });

        $('.sideCoupon').on('click',function(){
            $('popup').load('popup.html .myFitcoupon_popup_bg');
        });

        $(document).on('click','.closePop',function(){
            $('.popup_bg').hide();
        });

        $(document).on('click','.couponEnroll button',function(){
            $('popup').load('popup.html .couponEnroll_popup_bg');
        });

        // $('.popOK2').on('click',function(){
        //     window.location.href ="plan.html"
        // });

    }
});