$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});


$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});

/*
$(function() {

    var $sidebar   = $("#basket"), 
        $window    = $(window),
        offset     = $sidebar.offset(),
        topPadding = 1;
	var lastScrollTop = 0
		initialposition = offset.top;

    $window.scroll(function() {
		var top_bar_menu = $("#bar-menu-row").offset().top;
		var bottom_bar_menu = $("#bar-menu-row").offset().top + $("#bar-menu-row").outerHeight(true);
		var top_sidebar = offset.top;
		var bottom_sidebar = offset.top + $sidebar.outerHeight(true);
		var scrollBottom = $window.scrollTop() + $window.height();
		var scrollTop = $window.scrollTop();
		
		var paddingTop_sidebar = offset.top + parseInt($sidebar.css("marginTop").replace('px', ''));
		
		
		var st = $window.scrollTop();
		if (st > lastScrollTop){
			// downscroll code
			if (scrollTop > (top_sidebar -100) && bottom_sidebar < bottom_bar_menu-100 && scrollBottom > bottom_sidebar) {
				$sidebar.css('margin-top',$window.scrollTop() - (top_sidebar-100) + topPadding+'px');
			}
			else if (scrollTop <= (top_sidebar -100)){
				$sidebar.css('margin-top', 0+'px');
			}
		} else {
			// upscroll code
			if (scrollTop > (top_sidebar -100) && scrollTop < (paddingTop_sidebar-100)) {
				$sidebar.css('margin-top',$window.scrollTop() - (top_sidebar-100) - topPadding+'px');
			}
			
		}
		lastScrollTop = st;
		
        
    });
    
});
*/

