
         $(window).scroll(function () {
            didScroll = true;
            console.log($(window).scrollTop() );
        }).trigger('scroll');