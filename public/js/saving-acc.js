
        $('body,html,.start').smoothScroll({
            duration: 2000, // animation speed

            easing: 'swing', // find more easing options on http://api.jqueryui.com/easings/

            offset: 0 // custom offset

        });


        $(window).scroll(function () {

            var posTop = $(window).scrollTop();
            console.log(posTop)
            divTranslate(posTop)
        }).trigger('scroll');

        function divTranslate(x) {

            // parallax(x);
            if (x <= 100) {
                scrollFunction(x);
                translateImage(x);
            }
            else {
                $(".start").css({ "clip-path": "polygon(50% 0%, 100% 0px, 100% 99.34%, 70.18% 100%, 0px 99.52%, 0% 60%, 0px 0px)" });
            }
        }
        function parallax(x) {
            if (x > 1690 && x < 2330) {
                var scrolled = $(window).scrollTop();
                $('.product-percent center').css('top', (scrolled * 0.05) + 'px');
            }
            else {

                $('.product-percent center').css('top', 0 + 'px');
            }
        }
        function redirect_home() {
            window.location.href = "index.html"
        }
        function scrollFunction(x) {

            var a = 80 + (((100 - 80) / 100) * parseInt(x));
            var b = 67 + (((50 - 67) / 100) * parseInt(x));
            var c = 80 + (((100 - 80) / 100) * parseInt(x));

            divScroll(a, b, c);
        }

        function divScroll(a, b, c) {
            $(".start").css({ "clip-path": "polygon(50% 0%, 100% 0, 100% " + a.toString() + '%' + ", " + b.toString() + '%' + " 100%, 0 " + c.toString() + '%' + ", 0% 60%, 0 0)" });
        }

        function translateImage(x) {
            console.log("should translate");
            $(".start").css({ "background-position": "bottom " + (x - 320) + "px right;" });
            $(".vertical-text").css({ "margin-top": 66 - x + "px" });
            $(".product-headline").css({ "margin-top": 175 - x + "px" });
        }
         $(function () {

            $("myslider").mousewheel(function (event, delta) {

                this.scrollLeft -= (delta * 30);

                event.preventDefault();

            });

        });


        var WIDTH;
        var HEIGHT;
        var canvas;
        var con;
        var g;
        var pxs = new Array();
        var rint = 60;

        $(document).ready(function () {
            WIDTH = window.innerWidth;
            HEIGHT = window.innerHeight;
            $('#container').width(WIDTH).height(HEIGHT);
            canvas = document.getElementById('star-particle');
            $(canvas).attr('width', WIDTH).attr('height', HEIGHT);
            con = canvas.getContext('2d');
            for (var i = 0; i < 100; i++) {
                pxs[i] = new Circle();
                pxs[i].reset();
            }
            setInterval(draw, rint);


            var $container = $('.container');
            $container.mousedown(function (ev) {
                var ox = ev.clientX;

                $container.mouseup(function () {
                    $container.unbind('mousemove');
                    $container.unbind('mouseup');
                });
            });
        });

        function draw() {
            con.clearRect(0, 0, WIDTH, HEIGHT);
            for (var i = 0; i < pxs.length; i++) {
                pxs[i].fade();
                pxs[i].move();
                pxs[i].draw();
            }
        }

        function Circle() {
            this.s = { ttl: 8000, xmax: 5, ymax: 2, rmax: 10, rt: 1, xdef: 960, ydef: 540, xdrift: 4, ydrift: 4, random: true, blink: true };

            this.reset = function () {
                this.x = (this.s.random ? WIDTH * Math.random() : this.s.xdef);
                this.y = (this.s.random ? HEIGHT * Math.random() : this.s.ydef);
                this.r = ((this.s.rmax - 1) * Math.random()) + 1;
                this.dx = (Math.random() * this.s.xmax) * (Math.random() < .5 ? -1 : 1);
                this.dy = (Math.random() * this.s.ymax) * (Math.random() < .5 ? -1 : 1);
                this.hl = (this.s.ttl / rint) * (this.r / this.s.rmax);
                this.rt = Math.random() * this.hl;
                this.s.rt = Math.random() + 1;
                this.stop = Math.random() * .2 + .4;
                this.s.xdrift *= Math.random() * (Math.random() < .5 ? -1 : 1);
                this.s.ydrift *= Math.random() * (Math.random() < .5 ? -1 : 1);
            }

            this.fade = function () {
                this.rt += this.s.rt;
            }

            this.draw = function () {
                if (this.s.blink && (this.rt <= 0 || this.rt >= this.hl)) this.s.rt = this.s.rt * -1;
                else if (this.rt >= this.hl) this.reset();
                var newo = 1 - (this.rt / this.hl);
                con.beginPath();
                con.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
                con.closePath();
                var cr = this.r * newo;
                g = con.createRadialGradient(this.x, this.y, 0, this.x, this.y, (cr <= 0 ? 1 : cr));
                g.addColorStop(0.0, 'rgba(255,255,255,' + newo + ')');
                g.addColorStop(this.stop, 'rgba(77,101,181,' + (newo * .6) + ')');
                g.addColorStop(1.0, 'rgba(77,101,181,0)');
                con.fillStyle = g;
                con.fill();
            }

            this.move = function () {
                this.x += (this.rt / this.hl) * this.dx;
                this.y += (this.rt / this.hl) * this.dy;
                if (this.x > WIDTH || this.x < 0) this.dx *= -1;
                if (this.y > HEIGHT || this.y < 0) this.dy *= -1;
            }

            this.getX = function () { return this.x; }
            this.getY = function () { return this.y; }
        }
   


                function video_left() {
                    $("#vid1_div").css({
                        "animation": "vid2_change 2s ease-in",
                        "margin": "5vw 0 0% 11.2vw",
                        // "max-width": "67%",
                        // "max-height": "86%",
                        "position": "absolute",
                        "z-index": "1"
                    });
                    $("#vid2_div").css({
                        "animation": "vid_change 2s ease-out",
                        "margin": "6.7vw 9.7vw",
                        "z-index": "0"
                    });

                    $("#vid2").css({
                        "height": "18vw",
                        "margin-top": "2.3vw",
                        "opacity": "0.5",
                        "width": "21vw"
                    });
                    $("#vid1").css({
                        "animation": "vid_frame 4s ease-in",
                        "width": "35vw",
                        "height": "22vw",
                        "opacity": "1"
                    });
                    $("#right-arrow").css({ "opacity": "1" });
                    $("#left-arrow").css({ "opacity": ".2" });
                }

                function video_right() {

                    $("#vid1_div").css({
                        "animation": "vid_change 2s ease-out",
                        "margin": "6.7vw 9.7vw"
                    });
                    $("#vid2_div").css({
                        "animation": "vid2_change 2s ease-in",
                        "margin": "5vw 0 0 11.2vw",
                        // "max-width": "67%",
                        // "max-height": "86%",
                        "position": "absolute",
                        "z-index": "1"
                    });
                    $("#vid1").css({
                        "height": "18vw",
                        "margin-top": "2.3vw",
                        "opacity": "0.5",
                        "width": "21vw"
                    });
                    $("#vid2").css({
                        "animation": "vid2_frame 4s ease-in",
                        "width": "35vw",
                        "height": "22vw",
                        "opacity": "1"

                    });
                    $("#left-arrow").css({ "opacity": "1" });
                    $("#right-arrow").css({ "opacity": ".2" });
                }