$(document).ready(function(){
	$("#navbar-include").load("header-nav.html");
	$("#footer-include").load("footer-nav.html");
	$('#nav-menu').slideToggle();
});

$('#mobile-nav').click(function(){
	$('#nav-menu').slideToggle();
});