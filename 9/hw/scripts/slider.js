class Slider{
    constructor(sSelector){
        this.slider     = $(sSelector);
        this.image      = this.slider.find(".slide-img");
        this.currentImageIndex = 0;
        this.arrowPrev  = this.slider.find(".arrow_prev");
        this.arrowNext  = this.slider.find(".arrow_next");
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
        this.arrowPrev.click(this.showPrev.bind(this));
        this.arrowNext.click(this.showNext.bind(this));
}
}