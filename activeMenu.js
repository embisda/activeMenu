//�������� URL ������������ �����
		var x = window.location.pathname;
		//console.log(x);
		
		//������� ������� href � ������� ��������
		var i = "/I:/Web/contacts.html";
		var y = "/I:/Web/photo.html";
		//console.log(i);
		//console.log(y);
		
		if (x == i) {
			contacts.removeAttribute('href');
			contacts.className = "punkt-menu-active";
		} else {
			photo.removeAttribute('href');
			photo.className = "punkt-menu-active";
		}