$(function () {
    // @언어 선택
    $('#btnLang').click(function () {
        url = $('#langList').val();
        // console.log(url);
        window.open(url);
    })


    // 주요뉴스,시민참여 탭
    $('.slide .sc-title').click(function (e) {
        e.preventDefault();
        $(this).parent().addClass('active').siblings('.slide').removeClass('active');
        if ($(this).parent().hasClass('news')) { //주요뉴스
            $('#slide2 .btn-autoplay').removeClass('active').attr('aria-label', '자동재생 정지');
            slide1.autoplay.start();
            slide2.autoplay.stop();
            slide1.slideTo(0);
        } else { //시민
            $('#slide1 .btn-autoplay').removeClass('active').attr('aria-label', '자동재생 정지');
            slide1.autoplay.stop();
            slide2.autoplay.start();
            slide2.slideTo(0);
        }
    })
    // 주요뉴스 슬라이드
    const slide1 = new Swiper("#slide1", {
        // loop: true,
        // simulateTouch:false,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
        pagination: {
            el: ".fraction",
            type: "custom",
            renderCustom: function (swiper, current, total) {
                return `<span class="page">${current}</span>/<span class="total">${total}</span>`;
            }
        },
    });
    // 시민참여 슬라이드
    const slide2 = new Swiper("#slide2", {
        // loop:true,
        // simulateTouch:false,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
        pagination: {
            el: ".fraction",
            type: "custom",
            renderCustom: function (swiper, current, total) {
                return `<span class="page">${current}</span>/<span class="total">${total}</span>`;
            }
        },
    });
    slide2.autoplay.stop();
    //@하단배너 3개씩
    const slideBanner = new Swiper("#slideBanner", {
        // simulateTouch:false,
        loop: true,
        slidesPerView: 3,
        spaceBetween: 43,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
        pagination: {
            el: ".fraction",
            type: "custom",
            renderCustom: function (swiper, current, total) {
                return `<span class="page">${current}</span>/<span class="total">${total}</span>`;
            }
        },
    });
    // @#slide1 
    // @#slide2 
    // @#slideBanner 
    $('.btn-autoplay').click(function () {
        parentId = $(this).parents('.swiper').attr('id');
        if (parentId == 'slide1') {
            if ($(this).hasClass('active')) {
                const slideStart = slide1.autoplay.start();
            } else {
                const slideStop = slide1.autoplay.stop();
            }
        } else if (parentId == 'slide2') {
            if ($(this).hasClass('active')) {
                const slideStart = slide2.autoplay.start();
            } else {
                const slideStop = slide2.autoplay.stop();
            }
        } else if (parentId == 'slideBanner') {
            if ($(this).hasClass('active')) {
                const slideStart = slideBanner.autoplay.start();
            } else {
                const slideStop = slideBanner.autoplay.stop();
            }
        }
        if ($(this).hasClass('active')) { //두번클릭
            $(this).removeClass('active').attr('aria-label', '자동재생 정지');
        } else { //첫클릭
            $(this).addClass('active').attr('aria-label', '자동재생 적용');
        }
    })
    $('.sc-titleTab').click(function () {
        $(this).addClass('on').siblings().removeClass('on');
        target = $(this).data('target');
        $(target).addClass('active').siblings().removeClass('active');
    })
    // 관련 사이트 메뉴 //
    $('.sc-related .rel-item').click(function (e) {
        e.preventDefault();
        isSub = $(this).siblings('.sub-wrap').length;
        if (isSub) {
            if ($(this).hasClass('on')) {
                $('.rel-item').removeClass('on');
                $('.sub-wrap').stop().slideUp()
            } else {
                $('.sub-wrap').stop().slideUp();
                $(this).siblings('.sub-wrap').stop().slideDown()
                $('.rel-item').removeClass('on');
                $(this).addClass('on')
            }
        }
        // $(this).addClass('on').siblings().removeClass('on');
        // $(this).find('.sub-wrap').stop().slideDown()
    })
    $('.sub-wrap .sub-item:first-child').keydown(function (e) {
        console.log(e);
        if (e.keyCode === 9 && e.shiftKey) {
            $('.sub-wrap').stop().slideUp();
            $('.rel-item').removeClass('on');
        }
    })
    $('.sub-wrap .sub-item:last-child').keydown(function (e) {
        if (e.keyCode === 9 && !e.shiftKey) {
            $('.sub-wrap').stop().slideUp();
            $('.rel-item').removeClass('on');
        }
    })



    /////////// top button ////////////
    let lastScroll = 0;

    $(window).scroll(function () {
        const curr = $(this).scrollTop(); /* 현재 스크롤 위치 값 */

        // const target = $('.here').offset().top;

        // const html = `현재스크롤${curr}////// ${target}`;


        // $('.fix').html(html);

        if (curr > lastScroll) {
            /* 스크롤 내릴 때 */
            $('.btn-top').addClass('active');
        } else {
            /* 올릴 때 */
            $('.btn-top').removeClass('active');
        }

        lastScroll = curr;

        $('.btn-top').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 300);
            return false;
        });
    })

})