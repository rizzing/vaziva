document.querySelectorAll('.dropdown-hover').forEach(dropdown => {
    let timeout;

    dropdown.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
        const toggle = dropdown.querySelector('[data-bs-toggle="dropdown"]');
        const instance = bootstrap.Dropdown.getOrCreateInstance(toggle);
        instance.show();
    });

    dropdown.addEventListener('mouseleave', () => {
        timeout = setTimeout(() => {
            const toggle = dropdown.querySelector('[data-bs-toggle="dropdown"]');
            const instance = bootstrap.Dropdown.getOrCreateInstance(toggle);
            instance.hide();
        }, 100);
    });
});

$(document).ready(function () {
    JS.init();
});

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

var JS = {
    clickEvent: '',
    hoverEvent: '',

    init: function () {
        JS.clickEvent = isMobile.any() ? 'touchstart' : 'click';
        JS.hoverEvent = isMobile.any() ? 'touchstart' : 'hover';

        JS.headerMenu();

        if($(window).width()*1 > 1200) {
            JS.bqAnimation();
        }

        if($(window).width()*1 > 767) {
            JS.brandSlider();
        }

        if($(window).width()*1 < 767) {
            JS.mobileAppSlider();
            JS.mobileAvantagesSlider();
        }
        JS.textSlider();
        JS.homeReviewSlider();

        JS.accorderonCustom();
        JS.accorderonCustomH();

        $(window).resize(function(){
            JS.accorderonCustomH();
        })
        if($(window).width()*1 < 991) {
            JS.aamSlider();
            JS.svSlider();
            JS.blogMobSlider();
        }
    },

    mobileAvantagesSlider: function (){
        if($('.avantages_info').length > 0){
            $('.avantages_info').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                prevArrow: $('.ai_slider_prev'),
                nextArrow: $('.ai_slider_next')
            });
        }
    },

    textSlider: function(){
        if($('.home_avec_v__text').length > 0){
            $('.home_avec_v__text').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
                vertical: true,
                verticalSwiping: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
                speed: 300,
                pauseOnHover: false,
                pauseOnFocus: false
            });
        }
    },

    blogMobSlider: function (){
        if($('.blog_list__slider').length > 0){
            $('.blog_list__slider').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                prevArrow: $('.bl_slider_prev'),
                nextArrow: $('.bl_slider_next'),
                responsive: [
                    { breakpoint: 767,  settings: { slidesToShow: 1, } },
                ]
            });
        }
    },

    svSlider: function () {
        if($('.sw_slider').length > 0){
            $('.sw_slider').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                prevArrow: $('.sw_slider_prev'),
                nextArrow: $('.sw_slider_next'),
                responsive: [
                    { breakpoint: 767,  settings: { slidesToShow: 1, } },
                ]
            });
        }
    },

    aamSlider: function () {
        if($('.aam_item__slider').length > 0){
            $('.aam_item__slider').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                prevArrow: $('.aam_slider_prev'),
                nextArrow: $('.aam_slider_next'),
                responsive: [
                    { breakpoint: 767,  settings: { slidesToShow: 1, } },
                ]
            });
        }
    },

    accorderonCustomH: function (){
        if($('.aa_item__full').length){
            const aah = $('.aa_item__full').height()*1;
            $('.js_aa_item').css('height', aah);

            const aaw = $('.aa_item__full').width()*1;
            $('.aa_item__content').css('width', aaw);
        }
    },

    accorderonCustom: function (){
        $('body').on('click', '.js_aa_item', function (){
            $('.js_aa_item').removeClass('aa_item__full');
            $(this).addClass('aa_item__full');
        })
    },

    mobileAppSlider: function (){
        $('.mobile_apps').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: $('.ma_slider_prev'),
            nextArrow: $('.ma_slider_next')
        });
    },

    bqAnimation: function(){
        $('.bq_list').on('mouseenter', '.js_bq_item', function (){
            const mode = $(this).attr('data-bq');
            $('.bq_list').removeClass('bq_list_1').removeClass('bq_list_2');
            $(this).closest('.bq_list').addClass(mode);
        })

        $('.bq_list').on('mouseleave', '.js_bq_item', function (){
            const mode = $(this).attr('data-bq');
            $('.bq_list').removeClass('bq_list_1').removeClass('bq_list_2');
        })
    },

    headerMenu: function (){
        if($(window).width()*1 > 1200){
            $('.header_navbar').on('mouseenter', '.menu-item-has-children', function(){
                const $this = $(this);
                $this.addClass('show');
                $this.find('.sub-menu').addClass('show');
            })

            $('.header_navbar').on('mouseleave', '.menu-item-has-children', function(){
                const $this = $(this);
                $this.removeClass('show');
                $this.find('.sub-menu').removeClass('show');
            })
        }else{
            $('.header_navbar').on('click', '.menu-item-has-children', function(){
                const $this = $(this);
                if($this.hasClass('show')){
                    $this.removeClass('show');
                    $this.find('.sub-menu').removeClass('show');
                }else{
                    $this.addClass('show');
                    $this.find('.sub-menu').addClass('show');
                }

                return false;
            })
        }


        $('body').on('click', '.js_navbar_toggler', function(){
            if($('.header').hasClass('header_menu_open')){
                $('.header').removeClass('header_menu_open');
                $('body').removeClass('body_fixed');
                $('.header_navbar').slideUp();
            }else{
                $('.header').addClass('header_menu_open');
                $('body').addClass('body_fixed');
                $('.header_navbar').slideDown();
            }

        })
    },

    brandSlider: function(){
        $('.brands_list').slick({
            slidesToShow: 7,          // можно 1…N или использовать variableWidth
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 0,         // ключ к непрерывности: пауза = 0
            speed: 2000,              // чем больше — тем медленнее «лента» (равномерно)
            cssEase: 'linear',        // линейная анимация без ускорений
            pauseOnHover: false,
            pauseOnFocus: false,
            arrows: false,
            dots: false,
            swipe: true,
            touchMove: true,
            waitForAnimate: false,    // не ждём завершения анимации для плавности
            responsive: [
                { breakpoint: 1024, settings: { slidesToShow: 4 } },
                { breakpoint: 680,  settings: { slidesToShow: 3 } },
                { breakpoint: 420,  settings: { slidesToShow: 2 } },
            ]

        });

    },

    homeReviewSlider: function () {
        if($('.reviews_slider').length > 0){
            $('.reviews_slider').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                prevArrow: $('.rs_slider_prev'),
                nextArrow: $('.rs_slider_next'),
                responsive: [
                    { breakpoint: 991,  settings: { slidesToShow: 2, } },
                    { breakpoint: 767,  settings: { slidesToShow: 1, } },
                ]
            });
        }
    }
}