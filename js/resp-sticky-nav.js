$(document).ready(function(){
    $(".menu-icon").on("click", function(){
        $("nav ul").toggleClass("showing");
    });
});

$(document).ready(function() {
    $(document).on("scroll", function(){
        var scrollPos = $(document).scrollTop();
        $(".nav-links").each(function(){
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $(".nav-links").removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    });
});

$(window).on("scroll", function(){
    if($(window).scrollTop()){
        $('nav').addClass('black');
    }
    else{
        $('nav').removeClass('black');
    }
});

