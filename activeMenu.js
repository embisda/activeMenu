var x = window.location.pathname;
		
var navMenu = document.getElementsByClassName('navMenu');
		
for (var i = 0; i<navMenu.length; i++) {
	var z = navMenu[i].getAttribute('href');
	if (x == z) {
		navMenu[i].removeAttribute('href');
		navMenu[i].className = "navMenu-active";
	}	
}		
