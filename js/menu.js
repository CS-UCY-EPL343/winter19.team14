$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

/*
$(function() {

    var $sidebar   = $("#large-categories"), 
        $window    = $(window),
        offset     = $sidebar.offset(),
        topPadding = 15;

    $window.scroll(function() {
        if ($window.scrollTop() > (offset.top -110)) {
            $sidebar.stop().animate({
                marginTop: $window.scrollTop() - (offset.top-110) + topPadding
            }, "0");
        } else {
            $sidebar.stop().animate({
                marginTop: 0
            });
        }
    });
    
});
*/