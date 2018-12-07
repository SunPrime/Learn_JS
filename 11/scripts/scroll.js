class Scroll extends Component{
    constructor(sSelector){
        super(sSelector);
        //this.scroll = $(sSelector);
        //this.topLink = this.elem.find(".topLink");
        this.topLink = this.findObject(".topLink");

        this.createEvents();
    }

    showHideTopLink(){
        if ($(window).scrollTop() > 300){
            this.topLink.show();
        }
    }

    slowScroll(event) {
        event.preventDefault();
        $("html,body").stop().animate({"scrollTop": 0});
        if($(window).scrollTop < 300){
            this.topLink.hide();
        }

    }

    createEvents(){
        $(window).scroll(this.showHideTopLink.bind(this));
        this.topLink.click(this.slowScroll.bind(this));
    }
}