$(document).ready(function(){
	$("#navbar-include").load("header-nav.html");
	$("#footer-include").load("footer-nav.html");
	$('#nav-menu').slideToggle();
});

function toggleNav(){
	$('#nav-menu').slideToggle();
}