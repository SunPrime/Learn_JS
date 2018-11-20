// ES6
class Menu{

	constructor(sSelector){
        // ��������
        this.menu 		= $(sSelector); // UL
        this.menuItems = this.menu.children("li");

        this.createEvents();
	}

	// ������
	showSubmenu(event){
		//���� ������ ������(�������) ������������ �������� ��� ������ ������� event,
		// �� ��� ���������� ������ � �������� ��������� - ����������� FF
		// event.currentTarget - �������, ������� ���� �������� �������
        //$(event.currentTarget).children("ul").show();
		$(event.currentTarget).children("ul")
			.css("display", "block")
			.stop()
			.animate({"opacity" : 1}, 400)
			;
	}

	hideSubmenu(event){
        //$(event.currentTarget).children("ul").hide();
		let currentMenuItem = $(event.currentTarget);
		currentMenuItem.children("ul")
			.stop()
			.animate({"opacity" : 0}, 400, ()=>{
				currentMenuItem.children("ul").css("display", "none");
				});
	}

	createEvents(){
        // �������
        this.menuItems
		// .bind(this) - �������� �������� this � �����
					.mouseover(this.showSubmenu.bind(this))
        			.mouseout(this.hideSubmenu.bind(this));
	}
}