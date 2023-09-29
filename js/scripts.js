(function ($) {
    'use strict';

    jQuery(document).ready(function () {

        /*  ↓↓↓ Запуск видео по кнопке в полноэкранном режиме ↓↓↓ */
        var openVideoButtons = document.querySelectorAll('.open-video-button');
        var videoModal = document.getElementById('video-modal');
        var modalVideo = document.getElementById('modal-video');

        openVideoButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                var videoSource = button.getAttribute('data-video-source');
                openVideoInModal(videoSource);
            });
        });

        function openVideoInModal(videoSource) {
            modalVideo.src = videoSource;
            videoModal.style.display = 'block';
        }

        // Закрыть модальное окно, если пользователь кликнул вне видео
        window.addEventListener('click', function (event) {
            if (event.target == videoModal) {
                modalVideo.pause();
                videoModal.style.display = 'none';
            }
        });
        /*  ↑↑↑ Запуск видео по кнопке в полноэкранном режиме ↑↑↑ */




        /* Preloader */
        // $(window).load(function () {
        //     $('.preloader').delay(800).fadeOut('slow');
        // });

        // $(document).ready(function () {
        //     $('.preloader').delay(800).fadeOut('slow');
        // });


        window.onload = function () {
            $('.preloader').delay(800).fadeOut('slow');
        };




        $(document).ready(function () {
            // Скрываем все блоки при загрузке страницы
            $('[class*="hidding"]').slideUp();
        })

        $('.button-toggle').click(function () {
            var button = $(this);
            var target = $(button.data('target'));

            // Скрываем все блоки
            $('[class*="hidding"]').slideUp();

            // Убираем "Скрыть" со всех кнопок
            $('.button-toggle').text(function () {
                return $(this).text().replace("Скрыть", "");
            });

            if (!button.text().includes("Скрыть")) {
                button.text("Скрыть " + button.text());
            }

            // Открываем выбранный блок
            if (!target.is(':visible')) {
                target.slideDown();
                $('html, body').animate({
                    scrollTop: button.offset().top - 60
                }, 1000);
            } else {
                button.text(button.text().replace("Скрыть", ""));
                $('html, body').animate({
                    scrollTop: button.offset().top - 400
                }, 1000);
            }
        });

        /*  ↑↑↑ Кнопка для скрытия/раскрытия контента ↑↑↑ */



        /* Smooth Scroll */

        $('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
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


        // Карусель без кнопок

        var imageElements = document.querySelectorAll(".image-switcher");
        imageElements.forEach(function (imageElement) {
            var currentImageIndex = 0;
            var imagesData = imageElement.getAttribute("data-images");
            var images = JSON.parse(imagesData);

            function changeImage() {
                currentImageIndex = (currentImageIndex + 1) % images.length;
                imageElement.src = images[currentImageIndex];
            }
            setInterval(changeImage, 2000);
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

    // // Проверка, если страница открыта с мобильного устройства
    // function isMobileDevice() {
    //     return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    // }

    // // Обработчик для звука при наведении (с проверкой на мобильное устройство)
    // document.body.addEventListener('mouseover', (event) => {
    //     const target = event.target;
    //     // Проверяем, если это не мобильное устройство
    //     if (!isMobileDevice() && target.matches('a, button, .buttonx')) {
    //         const hoverSound = new Audio("/sounds/hover2.mp3");
    //         hoverSound.volume = 0.3;
    //         hoverSound.play();
    //     }
    // });

    // // Обработчик для звука при нажатии
    // document.body.addEventListener('mousedown', (event) => {
    //     const target = event.target;
    //     if (target.matches('a, button, .buttonx') && event.button === 0) {
    //         const clickSound = new Audio("/sounds/click.mp3");
    //         clickSound.volume = 0.2;
    //         clickSound.play();
    //     }
    // });



    let $owl = $('.carousel-2');
    $owl.children().each(function (index) {
        $(this).attr('data-position', index);
    });
    $(document).on('click', '.owl-item>div', function () {
        let $speed = 300;
        $owl.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
    });
    $owl.owlCarousel({
        loop: true,
        center: true,
        stagePadding: 70,
        nav: true,
        dots: false,
        navText: ['&lsaquo;', '&rsaquo;'],
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            992: { items: 3 },
            1200: { items: 4 },
            1600: { items: 5 }
        }
    });



    // Находим все элементы с классом "modal-trigger" (ссылки на изображения)
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    const modal = document.querySelector('.modal-img');
    const modalImg = document.getElementById('modal-img');
    const closeModal = document.querySelector('.close-modal');

    // Функция для открытия модального окна
    function openModal(e) {
        e.preventDefault(); // Предотвращаем переход по ссылке
        modal.style.display = 'block';
        modalImg.src = this.querySelector('img').src;
    }

    // Функция для закрытия модального окна
    function closeModalFn() {
        modal.style.display = 'none';
    }

    // Привязываем события к элементам
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', openModal);
    });

    closeModal.addEventListener('click', closeModalFn);

    // Закрывать модальное окно также при клике вне изображения
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalFn();
        }
    });

    // Закрывать модальное окно при нажатии клавиши Escape
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModalFn();
        }
    });


})(jQuery);



