class Slider{
    constructor(sSelector){
        this.slider     = $(sSelector);
        this.image      = this.slider.find(".slide-img");
        this.currentImageIndex = 0;
        this.arrows  = this.slider.find(".arrows");
        this.buttons    = this.slider.find(".button");

        this.createEvents();
    }

    showImage(event){
        let jqButton = $(event.currentTarget);
        this.currentImageIndex = jqButton.index();
        console.log(this.currentImageIndex);
        this.image.attr("src",`images/img_${this.currentImageIndex}.jpg`);
    }

    showPrev(){

    }

    showNext(){

    }

    createEvents(){
        this.buttons.click(this.showImage.bind(this));
        this.arrows.click(this.showPrev.bind(this));
}
}