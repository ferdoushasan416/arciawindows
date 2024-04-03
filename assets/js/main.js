(function ($) {
"use strict";

$('.menu-tirgger').on('click',function(){
	$('.mobile-menu-wrapper').addClass('open');
	$('body').css('overflow','hidden');
});

$('.close-btn').on('click',function(){
	$('.mobile-menu-wrapper').removeClass('open');
	$('body').css('overflow','inherit');
});

// WOW active
new WOW().init();


})(jQuery);