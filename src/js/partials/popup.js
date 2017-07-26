// popups init
function initStaffPopup() {
	$('.staff>a, .staff-overlay, .staff-close').click(toggleStaffPopup);
}

function toggleStaffPopup() {
	$('html').toggleClass('staff-popup-active');
}