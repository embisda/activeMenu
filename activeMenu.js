//�������� URL ������� �������� ������������ �����
var x = window.location.pathname;

//�������� ������ ��������� � ������� punkt-menu
var punktMenu = document.getElementsByClassName('punkt-menu');

//�������� ������ �� ���� ������� ���� � 
//������� ������� href � ������� ��������
for (var i = 0; i<punktMenu.length; i++) {
	z = "/I:/Web/" + punktMenu[i].getAttribute('href');
	if (x == z) {
		punktMenu[i].removeAttribute('href');
		punktMenu[i].className = "punkt-menu-active";
	}	
}		