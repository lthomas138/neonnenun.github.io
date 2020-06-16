$(document).ready(function(){
	var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
		link.type = 'image/x-icon';
		link.rel = 'shortcut icon';
		link.href = './images/logo.png';
		document.getElementsByTagName('head')[0].appendChild(link);
			
	$("#navbar-include").load("header-nav.html");
	$("#footer-include").load("footer-nav.html");
});

function toggleNav(){
	$('#nav-menu .nav-btn').each(function(){
		$(this).toggleClass('slidingNav');
	});
	$('#nav-menu').slideToggle();
}