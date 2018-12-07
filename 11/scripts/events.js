class Event {
    constructor(sSelector){
        this.pad       = $(sSelector);
        this.coordX    = this.pad.find(".b-pad__coord_x");
        this.coordY    = this.pad.find(".b-pad__coord_y");
        this.target    = this.pad.find(".b-pad__coord_target");
        this.coordXrel = this.pad.find(".b-pad__coord_x-relative");
        this.coordYrel = this.pad.find(".b-pad__coord_y-relative");
        this.keyinfo   = this.pad.find(".b-pad__coord_keyinfo");
        this.text      = this.pad.find(".b-pad__text");

        this.createEvents();
    }

    showCoords(event){
        this.coordX.html(event.pageX);
        this.coordY.html(event.pageY);
        this.target.html($(event.target).attr('class'));
        this.coordXrel.html(event.pageX - this.pad.position().left);
        this.coordYrel.html(event.pageY - this.pad.position().top);
    }

    clickPad(event){
        console.log("Click PAD");
    }

    clickX(event){
        console.log("Click Coord X");
        event.stopPropagation();
    }

    showKeyinfo(event){
        this.keyinfo.html(
            event.which + ' '
            + event.ctrlKey + ' '
            + event.altKey + ' '
            + event.shiftKey
        );
    }

    createEvents(){
        this.pad.mousemove(this.showCoords.bind(this));
        this.pad.click(this.clickPad.bind(this));
        this.coordX.click(this.clickX.bind(this));
        this.text.keydown(this.showKeyinfo.bind(this));
    }
}