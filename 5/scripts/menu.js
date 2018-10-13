// ES5
function Menu(sSelector) {
    // console.log(this);
    var m = this;

    // свойства
    m.menu = $(sSelector); // тег <ul>
    m.menuItems = m.menu.children("li");
    /*
    console.log($(m.menuItems[1]).attr("class")); //через JQuery доступ
    console.log(m.menuItems[1].className); // через JavaScript доступ
    */

    //методы
    m.showSubmenu = function () {
        // console.log("Show submenu")
        // console.log(this);
        // $(this).children("ul").show();
        // $(this).children("ul").addClass("b-submenu_shown");
        $(this).children("ul").stop().slideDown();

    };
    m.hideSubmenu = function () {
        // console.log("Hide submenu");
        // $(this).children("ul").hide();
        // $(this).children("ul").removeClass("b-submenu_shown");
        $(this).children("ul").stop().slideUp();
    };

    // события
    m.menuItems.mouseover(m.showSubmenu);
    m.menuItems.mouseout(m.hideSubmenu);
}
