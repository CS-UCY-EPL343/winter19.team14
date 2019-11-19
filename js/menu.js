$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});


$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});


$(function() {

    var $sidebar   = $("#basket"), 
        $window    = $(window),
        offset     = $sidebar.offset(),
        topPadding = 1;
	var lastScrollTop = 0;

    $window.scroll(function() {
		var top_bar_menu = $("#myTabContent").offset().top;
		var bottom_menu = $("#myTabContent").offset().top + $("#myTabContent").outerHeight(true);
		var top_sidebar = offset.top;
		var bottom_sidebar = offset.top + $sidebar.outerHeight(true);
		var scrollBottom = $window.scrollTop() + $window.height();
		var scrollTop = $window.scrollTop();
		
		var paddingTop_sidebar = offset.top + parseInt($sidebar.css("marginTop").replace('px', ''));
		
		
		var st = $window.scrollTop();
		if (st > lastScrollTop){
			// downscroll code
			if (scrollBottom < bottom_sidebar ){
				// do nothing
			}
			// when sidebar height is greater than window's height.
			else if ($window.height() < $sidebar.height() && bottom_sidebar < bottom_menu-150) {
				$sidebar.css('margin-top',$window.scrollTop() - (top_sidebar) - ($sidebar.height() - $window.height()+20) + topPadding+'px');
			}
			else if (scrollTop > (top_sidebar -100) && bottom_sidebar < bottom_menu-150 ) {
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


