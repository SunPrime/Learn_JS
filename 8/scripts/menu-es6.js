// ES6
class Menu{

	constructor(sSelector){
        // свойства
        this.menu 		= $(sSelector); // UL
        this.menuItems = this.menu.children("li");

        this.createEvents();
	}

	// методы
	showSubmenu(event){
		//если внутри метода(функции) используются свойства или методы объекта event,
		// то его необходимо подать в качестве аргумента - особенность FF
		// event.currentTarget - элемент, который стал причиной события
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
        // события
        this.menuItems
		// .bind(this) - передаем контекст this в метод
					.mouseover(this.showSubmenu.bind(this))
        			.mouseout(this.hideSubmenu.bind(this));
	}
}