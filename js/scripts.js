$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
    bodyHeight = w.innerHeight || e.clientHeight || g.clientHeight;


        $(window).on('load', function () {

        setTimeout(function() {

            $(".preload-bg").fadeOut(1000);

        }, 1000);
      

    });




    var wrappMarginTop = parseInt($(".wrapper").css("margin-top"));
    var wrappMarginBottom = parseInt($(".wrapper").css("margin-bottom"));


    $(".wrapper").css({"min-height": $(window).height() - wrappMarginTop - wrappMarginBottom + "px"});

    $(document).resize(function() {

		wrappMarginTop = parseInt($(".wrapper").css("margin-top"));
		wrappMarginBottom = parseInt($(".wrapper").css("margin-bottom"));

		$(".wrapper").css({"min-height": $(window).height() - wrappMarginTop - wrappMarginBottom + "px"});

		$(".wrapper").css({"padding-bottom" : $(".footer").outerHeight(true) + "px"});

    });

    $(".wrapper").css({"padding-bottom" : $(".footer").outerHeight(true) + "px"});

		

});