class Menu {
    constructor(sSelector){
        this.container = $(sSelector);
        this.menu = this.container.find(".menu");

        this.createEvents();
    }

    showHideMenu(event){
        let changeMenu = $(event.currentTarget);
        changeMenu.toggleClass("change");
        this.menu.toggleClass("menu-item");
    }

    createEvents(){
        this.container.click(this.showHideMenu.bind(this));
    }
}