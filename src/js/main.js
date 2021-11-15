var  ww = $(window).width();
        var swiper = undefined;
        var requestTop = $('#request').offset().top;

        console.log('시작 : ' + $('#request').offset().top);
        
        function initSwiper() {
            if( ww > 991 && swiper === undefined)  {
                swiper = new Swiper('#swiper', {
                    loop: true,
                    slideToClickedSlide: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    autoplay: {
                        delay: 3000,
                    },
                    breakpoints: {
                        992: {
                            slidesPerView: 2,
                            spaceBetween: 25
                        },
                        1455: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        }
                    }
                })
            } else if( ww < 992 && swiper !== undefined) {
                swiper.destroy();
                swiper = undefined;
            }
        }

        var url = document.location.href;
        console.log('주소가 뭐냐? ' + url)

        function responsive() {
            if( ww > 1399 ) {
                $('#request').removeClass('tablet mobile');
                $('#mobile').addClass('off');
                $('#request h2').addClass('col-2').removeClass('col-11 responsive');
                $('#request form').addClass('col-10').removeClass('col-12');
                $('#request form > div > div').removeClass('responsive');
                $('#request form > div > input').removeClass('responsive');
                $('#request form span').removeClass('responsive');
            } else if( ww > 992) {
                $('#request').addClass('tablet').removeClass('mobile');
                $('#mobile').addClass('off');
                $('#mobile').addClass('off');
                $('#request h2').addClass('responsive').removeClass('col-2 col-11');
                $('#request form').addClass('col-12').removeClass('col-10');
                $('#request form > div').addClass('col-9').removeClass('col-11');
                $('#request form > div > div').addClass('responsive');
                $('#request form > div > input').addClass('responsive');
                $('#request form span').addClass('responsive');
            } else {
                $('#request').addClass('mobile').removeClass('tablet');
                $('#mobile').removeClass('off');
                $('#request h2').addClass('col-11').removeClass('col-2 responsive')
                $('#request form').addClass('col-12').removeClass('col-10');
                $('#request form > div').addClass('col-11');
                $('#request form > div > div').addClass('responsive');
                $('#request form > div > input').addClass('responsive');
                $('#request form span').addClass('responsive');
            }
        }


        initSwiper();
        responsive();
        

        $(window).resize(function() {
            ww = $(window).width();
            requestTop = $('#request').offset().top;
            initSwiper();
            responsive();
        })

        $('#moveRequest').click(function() {
            console.log(requestTop)
            $('html, body').animate({scrollTop:requestTop - 100},100)
        })

        $('.mobile .xi-close').click(function() {
            $('#request').addClass('off');
        });
        
        $('.modalBtn').click(function() {
            var modalName = $(this).attr('data-modal');
            $('#modal').toggleClass('on').find('#'+modalName).toggleClass('on');
            $('body').toggleClass('modal-open');
        })
        
        $('#modal .xi-close').click(function() {
            var modalName = $(this).parents('.modal');
            modalName.toggleClass('on');
            $('#modal').removeClass('on');
            $('body').toggleClass('modal-open');
        })
        
        $('#modalClose').click(function() {
            $('#modal').children().removeClass('on')
            $('#modal').removeClass('on');
            $('body').toggleClass('modal-open');

        });

        $(document).ready(function() {
            
            $('.swiper-button-prev').css({'background-image' : 'url(src/img/icons/left.png)'})
            $('.swiper-button-next').css({'background-image' : 'url(src/img/icons/right.png)'})

            $('.swiper-button-prev').hover(
                function() {
                $(this).css({'background-image' : 'url(src/img/icons/left-hover.png)'})
                },
                function() {
                    $(this).css({'background-image': 'url(src/img/icons/left.png)'})
                }
            )

            $('.swiper-button-next').hover(
                function() {
                $(this).css({'background-image' : 'url(src/img/icons/right-hover.png)'})
                },
                function() {
                    $(this).css({'background-image': 'url(src/img/icons/right.png)'})
                }
            )
        })