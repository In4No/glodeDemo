$(function () {
    // 'mapbox://styles/mapbox/satellite-streets-v10'

    var myVideo = document.getElementById("video1");
    $("#headerSearch").click(function () {
        $('.searchTop').addClass('showSearchTop');
        $('.searchBottom').addClass('showSearchBottom');
        $('.searchInner').addClass('searchInnerAnim');
         $('.searchInput').focus();
    });

    $('body').keydown(function (e) {
        if (e.keyCode == 27) {
            $('.searchTop').removeClass('showSearchTop');
            $('.searchBottom').removeClass('showSearchBottom');
            $('.searchInner').removeClass('searchInnerAnim');
        }
    });

   

    $("#searchClose").click(function () {
        $('.searchTop').removeClass('showSearchTop');
        $('.searchBottom').removeClass('showSearchBottom');
        $('.searchInner').removeClass('searchInnerAnim');
    });

    $("#mapView").click(function () {
        window.location.href = "map.html";
    })

    $(".numbersView").click(function () {
        window.location.href = "savings-account.html";
    })

    $(".mainView").click(function () {
        window.location.href = "main.html";
    })

    $(".videoPartsOne").mouseover(function(){
        $('.videoWrpr').addClass("expandVideoPartOne");
        setTimeout(function(){
            var myVideo1 = document.getElementById("videoBg1");
            $('.videoBg1').addClass('showBGVid');
            myVideo1.play();
        }, 400);
    })

    $(".videoPartsTwo").mouseover(function(){
        $('.videoWrpr').addClass("expandVideoPartTwo");
        setTimeout(function(){
             var myVideo2 = document.getElementById("videoBg2");
            $('.videoBg1').addClass('showBGVid');
            myVideo2.play();
        }, 400);
    })

    $(".videoPartsThree").mouseover(function(){
        $('.videoWrpr').addClass("expandVideoPartThree");
        setTimeout(function(){
             var myVideo3 = document.getElementById("videoBg3");
            $('.videoBg1').addClass('showBGVid');
            myVideo3.play();
        }, 400);
    })

    $(".videoPartsOne").mouseleave(function(){
        $('.videoWrpr').removeClass("expandVideoPartOne");
        $('.videoBg1').removeClass('showBGVid');
        var myVideo1 = document.getElementById("videoBg1");
        myVideo1.pause();
    })

    $(".videoPartsTwo").mouseleave(function(){
        $('.videoWrpr').removeClass("expandVideoPartTwo");
        $('.videoBg1').removeClass('showBGVid');
        var myVideo2 = document.getElementById("videoBg2");
        myVideo2.pause();
    })

    $(".videoPartsThree").mouseleave(function(){
        $('.videoWrpr').removeClass("expandVideoPartThree");
        $('.videoBg1').removeClass('showBGVid');
        var myVideo3 = document.getElementById("videoBg3");
        myVideo3.pause();
    })

    // $(".cardTop").click(function(){
    //     window.location.href = "fincare.html";
    // })


    var mapClicked  = false;

    $(".mapMenuItems").click(function(){
        $('#container').addClass('iframeFade')
        $('.innerWrapper').addClass('hide')
        $('.videoPlayer').addClass('zoomFade')
        $('.mapOverlay').addClass('showWrapper')
        $('.main-pageBg').addClass('main-darkBg')
        $('.zone').addClass('showZone')
        $('.earthBg').hide()
        $('.mapMenuFirst').addClass('mapMenuActive')
        $('.mapMenuWrpr').addClass('mapMenuWrprShrink')
        $('.mapMenuSecond').addClass('menuLeftSecond')
        $('.mapMenuThird').addClass('menuLeftThird')
        $('.mapMenuFourth').addClass('menuLeftFourth')
        $('.mapMenuFifth').addClass('menuLeftFifth')
        $('.cloudWrpr').addClass('showFog')
        $('.noise-wrapper').addClass('show-noise-wrapper')
        $('.markerFirst').addClass('markerFirstAnim')
        $('.mapPanWrpr').scrollTop($(".mapPanWrpr")[0].scrollHeight/3);
        $('.mapPanWrpr').scrollLeft($(".mapPanWrpr")[0].scrollWidth/3);

        setTimeout(function () {
            myVideo.play();
            mapClicked = true;
        }, 400);

        // mapPanWrpr

        setTimeout(function () {
            $('#container').addClass('hide')
            $('.videoPlayer').addClass('hide')
            $('.mapPanWrpr').animate({
                scrollTop: 0,
                scrollLeft: 0
            }, 2400);
        }, 3500);

    });



    $(".mapMenuWrpr").click(function(){
        if(mapClicked){
            $('.mapMenuWrpr').removeClass('mapMenuWrprShrink')
            $('.mapMenuSecond').removeClass('menuLeftSecond')
            $('.mapMenuThird').removeClass('menuLeftThird')
            $('.mapMenuFourth').removeClass('menuLeftFourth')
            $('.mapMenuFifth').removeClass('menuLeftFifth')
            mapClicked = !mapClicked;
        }
    })

    $(".tapIcon").click(function(){

        $('.mapMenuWrpr').removeClass('mapMenuWrprShrink')
        $('.mapMenuSecond').removeClass('menuLeftSecond')
        $('.mapMenuThird').removeClass('menuLeftThird')
        $('.mapMenuFourth').removeClass('menuLeftFourth')
        $('.mapMenuFifth').removeClass('menuLeftFifth')
        $('.tapIcon').removeClass('tapIconShow')
    })

    $('input.searchInput').on('input', function (e) {
        console.log('Changed!', e.target.value)
    });

    $('.hamMenu').click(function () {
        $('.menu-wrpr').toggleClass('showMenu');
    })

    $('.menuClose').click(function () {
        $('.menu-wrpr').toggleClass('showMenu');
    })

    $('.accountMapMarker').click(function(){
        $('.cardBottom').addClass('cardBottomAnim');
        $('.cardTop').addClass('cardTopAnim');
    })

    $('.cardClose').click(function () {
        console.log("card close clicked");
        $('.cardBottom').removeClass('cardBottomAnim');
        $('.cardTop').removeClass('cardTopAnim');
    })
    // $(window).scroll(function(){
    //     console.log($(window).scrollTop());
    // });

    // $(window).scroll(function () {

    //         var posTop = $(window).scrollTop();
    //         console.log(posTop)
    //     }).trigger('scroll');
});