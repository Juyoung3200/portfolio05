$(document).ready(function () {

            var galleryThumbsMain = new Swiper('.gallery-thumbs-main', {
                spaceBetween: 10,
                slidesPerView: 6,
                loop: true,
                touchRatio: 0.2,
                slideToClickedSlide: true,
                freeMode: true,
                loopedSlides: 7, //looped slides should be the same
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
            });
            var galleryTopMain = new Swiper('.gallery-top-main', {
                spaceBetween: 10,
                effect: 'fade',
                loop:true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                loopedSlides: 7, //looped slides should be the same
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
            galleryTopMain.controller.control = galleryThumbsMain; 
            galleryThumbsMain.controller.control = galleryTopMain;
        
});


$(document).ready(function () {

    
    function slide02() {
        $(".slider-wrap").slick({
            slidesToShow: 3,
            dots:true,
              infinite: true,
            dotsClass: 'slick-dots',
            centerMode: true,
            variableWidth: false,
            autoplay:true,
            autoplaySpeed: 3000,
            nextArrow: '<div class="pageRight-btn"></div>',
            prevArrow: '<div class="pageLeft-btn"></div>',
            responsive: [

                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                    }
          },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,

                    }
         },
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1,

                    }
         }
      ]
           
        });
        $('.slick-dots').show();
    }
    slide02();


    $(".menu_btn").click(function () {
        $("#toggle-menu").addClass("active");
    });
    
    
        $(".header-wrap .close-btn").click(function () {
        $("#toggle-menu").removeClass("active");
    });
    

    var $wrapper = $('.tab-wrapper'),
        $allTabs = $wrapper.find('.tab-content > div'),
        $tabMenu = $wrapper.find('.tab-menu li'),
        $line = $('<div class="line"></div>').appendTo($tabMenu);

    $allTabs.not(':first-of-type').hide();
    $tabMenu.filter(':first-of-type').find(':first').width('100%')

    $tabMenu.each(function (i) {
        $(this).attr('data-tab', 'tab' + i);
    });

    $allTabs.each(function (i) {
        $(this).attr('data-tab', 'tab' + i);
    });

    $tabMenu.on('click', function () {

        var dataTab = $(this).data('tab'),
            $getWrapper = $(this).closest($wrapper);

        $getWrapper.find($tabMenu).removeClass('active');
        $(this).addClass('active');

        $getWrapper.find('.line').width(0);
        $(this).find($line).animate({
            'width': '100%'
        }, 'fast');
        $getWrapper.find($allTabs).hide();
        $getWrapper.find($allTabs).filter('[data-tab=' + dataTab + ']').show();
    });
    
    $('.noticeSlider-wrap').slick({
        slide: "div",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        draggable: true,

    });

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                //                $('.topgo-btn').fadeIn();
                //            } else {
                //                $('.topgo-btn').fadeOut();
            }
        });

        $(".topgo-btn").click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 400);
            return false;
        });
    });





});
