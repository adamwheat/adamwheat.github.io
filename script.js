$(document).ready(function() {
var mn = $(".main-nav");
var mns = "main-nav-scrolled";
var hdr = $('header').height();

$(window).scroll(function() {
 if( $(this).scrollTop() > 450 ) {
  mn.addClass(mns);
 } else {
  mn.removeClass(mns);
 }
});
});
