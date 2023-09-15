/*
   
    Template Name : WebRes - Personal Resume Template
    Author : UiPasta Team
    Website : http://www.uipasta.com/
    Support : http://www.uipasta.com/support/
	
	
*/



/*
   
   Table Of Content
   
   1. Preloader
   2. Smooth Scroll
   3. Scroll Naviagation Background Change with Sticky Navigation
   4. Mobile Navigation Hide or Collapse on Click
   5. Scroll To Top
   6. Tooltip
   7. Ajaxchimp for Subscribe Form
   8. Portfolio Filtering
   9. Magnific Popup
  10. Testimonial Carousel/Slider
  11. Statistics Counter
 

*/


(function ($) {
    'use strict';

    jQuery(document).ready(function () {

        /*  ↓↓↓ Запуск видео по кнопке в полноэкранном режиме ↓↓↓ */

        // Инициализируем видеоплеер
        var player = videojs('my-video');

        // Получаем кнопку для запуска видео на полный экран
        var playFullscreenButton = document.getElementById('play-fullscreen-button');

        // Получаем контейнер видео
        var videoContainer = document.getElementById('video-container');

        // Добавляем обработчик события click к кнопке
        playFullscreenButton.addEventListener('click', function () {
            // Показываем контейнер видео
            videoContainer.style.display = 'block';

            // Проверяем, играет ли видео в данный момент
            if (player.paused()) {
                // Если видео на паузе, воспроизводим его
                player.play();
            }

            // Переключаем видео в полноэкранный режим (раскрываем на весь экран)
            if (player.requestFullscreen) {
                player.requestFullscreen();
            } else if (player.mozRequestFullScreen) {
                player.mozRequestFullScreen();
            } else if (player.webkitRequestFullscreen) {
                player.webkitRequestFullscreen();
            }
        });

        // Добавляем обработчик события fullscreenchange, который срабатывает при изменении состояния полноэкранного режима
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('mozfullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);

        function handleFullscreenChange() {
            if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement) {
                // Видео находится в полноэкранном режиме, ничего не делаем
            } else {
                // Видео вышло из полноэкранного режима, ставим его на паузу
                player.pause();
            }
        }

        /*  ↑↑↑ Запуск видео по кнопке в полноэкранном режиме ↑↑↑ */



        /* Preloader */
        $(window).load(function () {
            $('.preloader').delay(800).fadeOut('slow');
        });

        function setupToggleButton(buttonId, blockId, showText, hideText) {
            var toggleButton = $(buttonId);
            var hiddingBlock = $(blockId);

            toggleButton.click(function () {
                hiddingBlock.slideToggle();

                if (toggleButton.text() === hideText) {
                    toggleButton.text(showText);
                } else {
                    toggleButton.text(hideText);
                }
            });
        }

        setupToggleButton('#toggleHiddingBlockExp', '.hiddingExp', 'Показать опыт работы', 'Скрыть опыт работы');
        setupToggleButton('#toggleHiddingBlockAbout', '.hiddingAbout', 'Показать информацию Обо мне', 'Скрыть информацию Обо мне');





        /* Smooth Scroll */

        $('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });




        /* Scroll Naviagation Background Change with Sticky Navigation */

        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 100) {
                $('.header-top-area').addClass('navigation-background');
            } else {
                $('.header-top-area').removeClass('navigation-background');
            }
        });




        /* Mobile Navigation Hide or Collapse on Click */

        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195

        });




        /* Scroll To Top */

        $(window).scroll(function () {
            if ($(this).scrollTop() >= 500) {
                $('.scroll-to-top').fadeIn();
            } else {
                $('.scroll-to-top').fadeOut();
            }
        });


        $('.scroll-to-top').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });



        /* Tooltip */

        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })



        /* Ajaxchimp for Subscribe Form */

        $('#mc-form').ajaxChimp();




        /* Portfolio Filtering */

        $('.portfolio-inner').mixItUp();



        /* Magnific Popup */

        $('.portfolio-popup').magnificPopup({
            type: 'image',

            gallery: { enabled: true },
            zoom: {
                enabled: true,
                duration: 500

            },


            image: {
                markup: '<div class="mfp-figure portfolio-pop-up">' +
                    '<div class="mfp-close"></div>' +
                    '<div class="mfp-img"></div>' +
                    '<div class="mfp-bottom-bar portfolio_title">' +
                    '<div class="mfp-title"></div>' +
                    '<div class="mfp-counter"></div>' +
                    '</div>' +
                    '</div>',

                titleSrc: function (item) {
                    return item.el.attr('title');
                }
            }


        });


        /* Testimonial Carousel/Slider */

        $(".testimonial-carousel-list").owlCarousel({
            items: 1,
            autoPlay: true,
            stopOnHover: false,
            navigation: true,
            navigationText: ["<i class='fa fa-long-arrow-left fa-2x owl-navi'></i>", "<i class='fa fa-long-arrow-right fa-2x owl-navi'></i>"],
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            autoHeight: true,
            pagination: false,
            transitionStyle: "fadeUp"
        });




        /* Statistics Counter */

        $('.statistics').appear(function () {
            var counter = $(this).find('.statistics-count');
            var toCount = counter.data('count');

            $(counter).countTo({
                from: 0,
                to: toCount,
                speed: 5000,
                refreshInterval: 50
            })
        });




    });

})(jQuery);