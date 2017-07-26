$(document).ready(function(){
    initAccordion();
    initMobileNav();
    initStaffPopup();
    initPattern();
});

var patternTimer;

$( window ).resize(function() {
  clearTimeout(patternTimer);
  patternTimer = setTimeout(initPattern, 250);
});