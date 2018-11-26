class Gallery{
    constructor(sSelector){
        this.gallery             = $(sSelector);
        this.pictures             = this.gallery.find(".b-picture");
        this.arrowPrev           = this.gallery.find(".b-preview__arrow_prev");
        this.arrowNext           = this.gallery.find(".b-preview__arrow_next");
        this.preview             = this.gallery.find(".b-preview");
        this.previewImage        = this.gallery.find(".b-preview__image");
        this.previewText         = this.gallery.find(".b-preview__text");
        this.currentPictureIndex = 0;
        this.max                 = this.pictures.length;
        this.currentPlace        = this.gallery.find(".b-preview__currentPlace");
        this.maxPlace            = this.gallery.find(".b-preview__maxPlace");
        this.slideshowBtn        = this.gallery.find(".b-preview__slideshowBtn");
        this.slideshowPeriod     = 3;
        this.slideshowFlag       = null;

        this.createEvents();
}

    showPreview(event){
        let jqPicture = $(event.currentTarget);
        this.currentPictureIndex = this.pictures.index(jqPicture);
        this.showImage(0);
        this.preview.addClass("b-preview_shown");

    }

    hidePreview(event){
        if (!event || $(event.target).hasClass("b-preview")) {
            this.preview.removeClass("b-preview_shown");
        }
    }

    escHidePreview(event){
        console.log(event.which); //event.wich - выводим код кнопки, которую нажал пользователь
        if (event.which === 27){
            this.hidePreview();
        }
        this.stopSlideshow();
    }

    showPrevious(){
        this.showImage(-1);
    }

    showNext(){
        this.showImage(1);
    }

    showImage(iStep){
        this.currentPictureIndex += iStep;
        if (this.currentPictureIndex >= this.max){
            this.currentPictureIndex = 0;
        } else if(this.currentPictureIndex < 0) {
            this.currentPictureIndex = this.max - 1;
        }
        this.previewImage.css("opacity",0);
        this.currentPlace.html(this.currentPictureIndex + 1);
        this.maxPlace.html(this.max);
        console.log("showImage", this.currentPictureIndex);
        let jqPicture       = this.pictures.eq(this.currentPictureIndex),
            jqSmallImage    = jqPicture.find(".b-picture__image"),
            sSmallImageSrc  = jqSmallImage.attr("src"),
            sBigImageSrc    = sSmallImageSrc.replace("small_","");
        this.previewImage.attr("src", sBigImageSrc);
        this.previewText.html(jqSmallImage.attr("alt"));
        this.previewImage.animate({"opacity": 0.8}, 1000);
    }

    slideshow(){
        if (this.slideshowBtn.text() === "start"){
            this.slideshowBtn.text("stop");
            this.slideshowFlag = window.setInterval(this.showNext.bind(this),
                                             this.slideshowPeriod * 1000);
        } else {
            this.stopSlideshow();
        }
    }

    stopSlideshow(){
        window.clearInterval(this.slideshowFlag);
        this.slideshowBtn.text("start");
    }

    createEvents(){
        this.pictures.click(this.showPreview.bind(this));
        this.preview.click(this.hidePreview.bind(this));
        this.arrowPrev.click(this.showPrevious.bind(this));
        this.arrowNext.click(this.showNext.bind(this));
        this.slideshowBtn.click(this.slideshow.bind(this));
        $("body").keyup(this.escHidePreview.bind(this));
    }

}