$(window).scroll(function(){
	var stickyHeader = $('.header'),
	scroll = $(window).scrollTop();

	if (scroll > 0) {
		stickyHeader.addClass('fixed-header');
	} else {
		stickyHeader.removeClass('fixed-header');
	}
});
