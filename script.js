$(document).ready(function(){
	$("#navbar-include").load("header-nav.html");
	$("#footer-include").load("footer-nav.html");
});

$('#mobile-nav').click(function(){
	$('#nav-menu').toggle();
});