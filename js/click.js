/* --   Beautiful Mouse  -- */
        var a_idx = 0;
        jQuery(document).ready(function ($) {
            $("body").click(function (e) {
                var a = new Array("❤富强❤", "❤民主❤", "❤和谐❤", "❤文明❤", "❤自由❤", "❤平等❤", "❤公正❤", "❤法治❤",
                    "❤爱国❤", "❤敬业❤", "❤诚信❤", "❤友善❤");
                var $i = $("<span></span>").text(a[a_idx]);
                a_idx = (a_idx + 1) % a.length;
                var x = e.pageX,
                    y = e.pageY;
                $i.css({
                    "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
                    "top": y - 20,
                    "left": x,
                    "position": "absolute",
                    "font-weight": "bold",
                    "color": "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math
                        .random() * 255) + "," + Math.floor(Math.random() * 255) + ")"
                });
                $("body").append($i);
                $i.animate({
                    "top": y - 180,
                    "opacity": 0
                },
                    1500,
                    function () {
                        $i.remove();
                    });
            });
        });