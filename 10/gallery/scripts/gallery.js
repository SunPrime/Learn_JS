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

        this.createEvents();
}

    showPreview(event){
        let jqPicture = $(event.currentTarget);
        this.currentPictureIndex = this.pictures.index(jqPicture);
        console.log(this.currentPictureIndex);

        this.showImage(0);
        this.preview.addClass("b-preview_shown");
    }

    hidePreview(event){
        if ($(event.target).hasClass("b-preview")) {
            this.preview.removeClass("b-preview_shown");
        }
    }

    showPrevious(event){

    }

    showNext(event){

    }

    showImage(iStep){
        this.currentPictureIndex += iStep;
        let jqPicture       = this.pictures.eq(this.currentPictureIndex),
            jqSmallImage    = jqPicture.find(".b-picture__image"),
            sSmallImageSrc  = jqSmallImage.attr("src"),
            sBigImageSrc    = sSmallImageSrc.replace("small_","");
        console.log(jqPicture);
        this.previewImage.attr("src", sBigImageSrc);
        this.previewText.html(jqSmallImage.attr("alt"));
    }

    createEvents(){
        this.pictures.click(this.showPreview.bind(this));
        this.preview.click(this.hidePreview.bind(this));
        this.arrowPrev.click(this.showPrevious.bind(this));
        this.arrowNext.click(this.showNext.bind(this));
    }

}