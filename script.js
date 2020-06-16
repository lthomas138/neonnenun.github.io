$(document).ready(function(){
	$("#navbar-include").load("header-nav.html");
	$("#footer-include").load("footer-nav.html");
});

function toggleNav(){
	$('#nav-menu .nav-btn').each(function(){
		$(this).toggleClass('slidingNav');
	});
	$('#nav-menu').slideToggle();
}