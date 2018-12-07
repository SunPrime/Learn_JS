class Slider{
    constructor(sSelector){
        this.slider            = $(sSelector);
        this.image             = this.slider.find(".slide-img");
        this.currentImageIndex = 0;
        this.arrows            = this.slider.find(".arrows");
        this.buttons           = this.slider.find(".button");
        this.max               = 3;
        this.slideshowPeriod   = 4;
        this.slideshowFlag     = 0;

        this.createEvents();
        this.sliderShow();
    }

    showImage(event){
        let jqButton = $(event.currentTarget);
        this.currentImageIndex = jqButton.index();
        console.log(this.currentImageIndex);
        this.image.attr("src",`images/img_${this.currentImageIndex}.jpg`);
    }

    handlerKeyboard(event){
        console.log(event.which);
        if (event.which === 37){
            this.showPrev();
        } else if (event.which === 39){
            this.showNext();
        }
    }

    showPrev(){
        this.changeImage(this.max, -1)
    }

    showNext(){
        this.changeImage(0, 1)
    }

    changeImage(index, diff){
        this.buttons.eq(this.currentImageIndex).css("background-color", "");
        //$(this.buttons[this.currentImageIndex]).css("background-color", "");
        if (this.currentImageIndex === (this.max - index)){
            this.currentImageIndex = index;
        } else {
            this.currentImageIndex += diff;
        }
        this.image.attr("src",`images/img_${this.currentImageIndex}.jpg`);
        $(this.buttons[this.currentImageIndex]).css("background-color", "lightgreen");
    }

    sliderShow(){
        this.slideshowFlag = setInterval(this.showNext.bind(this),
            this.slideshowPeriod * 1000);
    }

    mouseenterImage(){
        clearInterval(this.slideshowFlag);
        console.log("enter");
    }

    mouseleaveImage(){
        this.sliderShow();
        console.log("leave");
    }

    createEvents(){
        this.buttons.click(this.showImage.bind(this));
        this.arrows.children(".arrow_prev").click(this.showPrev.bind(this));
        this.arrows.children(".arrow_next").click(this.showNext.bind(this));
        this.image.mouseenter(this.mouseenterImage.bind(this));
        this.image.mouseleave(this.mouseleaveImage.bind(this));
        $("body").keyup(this.handlerKeyboard.bind(this));
    }
}

