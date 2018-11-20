// ES5
function Menu(sSelector){
	// console.log(this);
	var m = this;
	
	// свойства
	m.menu 		= $(sSelector); // UL
	m.menuItems = m.menu.children("li");
/* 	console.log($(m.menuItems[1]).attr("class"));
	console.log(m.menuItems[1].className); */

	// методы
	m.showSubmenu = function(){
		// console.log("showSubmenu");
		// console.log(this);
		// $(this).children("ul").show();
		// $(this).children("ul").addClass("b-submenu_shown");
		// $(this).children("ul").stop().slideDown();
		$(this).children("ul")
			.css("display", "block")
			.stop()
			.animate({"opacity" : 1}, 400)
			;	
	}
	m.hideSubmenu = function(){
		// console.log("hideSubmenu");
		// $(this).children("ul").hide();
		// $(this).children("ul").removeClass("b-submenu_shown");
		// $(this).children("ul").stop().slideUp();
		$(this).children("ul")
			.stop()
			.animate({"opacity" : 0}, 400, function(){
				$(this).css("display", "block");
				});
	}
	
	// события
	m.menuItems.mouseover(m.showSubmenu);
	m.menuItems.mouseout(m.hideSubmenu);
}