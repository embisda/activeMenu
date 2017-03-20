//ѕолучаем URL текущей страницы относительно корн€
var x = window.location.pathname;

//ѕолучаем массив элементов с классом punkt-menu
var punktMenu = document.getElementsByClassName('punkt-menu');

//ѕроходим циклом по всем пунктам меню и 
//убираем атрибут href у текущей страницы
for (var i = 0; i<punktMenu.length; i++) {
	z = "/I:/Web/" + punktMenu[i].getAttribute('href');
	if (x == z) {
		punktMenu[i].removeAttribute('href');
		punktMenu[i].className = "punkt-menu-active";
	}	
}		