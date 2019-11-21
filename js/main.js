// scroll navbar
(function ($) {
	$(document).ready(function(){
    
	
	// fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			var st = $(this).scrollTop(),
				navbar = $('.navbar'),
				navbarfix = $('#navbarfix');
			
			if ( st > 150 ) {
				if (!navbar.hasClass('scrolled') ){
					navbarfix.removeClass('d-none');
					navbar.addClass('scrolled');
					navbar.addClass('fixed-top');
					navbar.removeClass('static-top');
					navbar.hide();
				}
				
			}
			if ( st < 150 ) {
				if (navbar.hasClass('scrolled') ){
					navbar.removeClass('scrolled');
					navbar.removeClass('fixed-top');
					navbar.addClass('static-top');
					navbarfix.addClass('d-none');
					navbar.show();
					navbar.removeAttr( 'style' );
				}
			}
			if ( st > 380 ) {
				if (!navbar.hasClass('fadein') ){
					navbar.addClass('fadein');
					navbar.fadeIn();
				}
			}
			if ( st < 380 ) {
				if (navbar.hasClass('fadein') ){
					navbar.removeClass('fadein');
					navbar.hide();
				}
			}								
		});	
	});
	
	
	var contentWayPoint = function() {
		var i = 0;
		$('.gard-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('gard-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .gard-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn gard-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft gard-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight gard-animated');
							} else {
								el.addClass('fadeInUp gard-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();
	

});
  }(jQuery));
  
  
//back to top button
jQuery(document).ready(function() {  
	var btn = $('#toTop');
	btn.hide();

	$(window).scroll(function() {
		if ($(window).scrollTop() > 300) {
			btn.fadeIn();
		} else {
			btn.fadeOut();
		}
	});
	
	btn.on('click', function(e){
		var $link = $(e.target);
		e.preventDefault();
		if(!$link.data('lockedAt') || +new Date() - $link.data('lockedAt') > 300) {
			$('html, body').animate({scrollTop:0}, '1000');
		}
		$link.data('lockedAt', +new Date());
	});
});