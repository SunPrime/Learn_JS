class Form {
    constructor(sSelector){
        this.form    = $(sSelector);
        this.name    = this.form.find(".b-form__name");
        this.surname = this.form.find(".b-form__surname");
        this.seasons = this.form.find(".b-form__season");
        this.fruit   = this.form.find(".b-form__fruit");
        this.animal  = this.form.find(".b-form__animals");
        this.review  = this.form.find(".b-form__review");
        this.btn     = this.form.find(".b-form__ok-button");
        this.langs   = this.form.find(".b-langs__lang");

        this.createEvents();
    }

    showInfo(){
        // this.seasons.filter(":checked")
        //     .each(()=>{
        //         console.log(this);
        //     });
        //
        // let seasonsList = "";
        // this.seasons.filter(":checked")
        //     .each(function(){
        //         //console.log(this);
        //         seasonsList += `${$(this).val()} `;
        //     });
        //
        // console.log(
        //     `${this.name.val()}
        //      \n${this.surname.val()}
        //      \n${seasonsList}
        //      \n${this.fruit.filter(":checked").val()}
        //      \n${this.animal.val()}
        //      \n${this.review.val()}`
        // );

        console.log(
            `
            ${this.getLabelText(".b-form__label_name")}: ${this.getValue(this.name)}
            ${this.getLabelText(".b-form__label_surname")}: ${this.getValue(this.surname)}
            ${this.getLabelText(".b-form__label_season")}: ${this.getValue(this.seasons, ", ")}
            ${this.getLabelText(".b-form__label_fruit")}: ${this.getValue(this.fruit)}
            ${this.getLabelText(".b-form__label_animals")}: ${this.getValue(this.animal)}
            ${this.getLabelText(".b-form__label_review")}: ${this.getValue(this.review)}
            `
        );
    }

    getLabelText(sSelector, sText){
   let currentLabel = this.form.find(sSelector);
        if(sText){
            currentLabel.text(sText);
        }
        else {
            return currentLabel.text();
        }
    }

    getValue(oElem, sSeparator = ""){
        let elemType    = oElem.attr("type"),
            elemTagname = oElem.prop("tagName").toLowerCase();
        //console.log(elemType, elemTagname);
        if(elemType === "radio"){
            return oElem.filter(":checked").val();
        }
        else if(elemType    === "text" ||
                elemTagname === "textarea" ||
                elemTagname === "select"){
            return oElem.val();
        }
        else if(elemType === "checkbox"){
            let checkboxList = "";
            oElem.filter(":checked")
                .each(function(){
                    if(checkboxList){
                        checkboxList += sSeparator;
                    }
                    checkboxList += $(this).val();
                });
            return checkboxList;
        }
        else {
            console.log(`Элемента управления с типом ${elemType} и именем тега ${elemTagname} не существует`)
        }
    }

    changeLang(event){
        let currentLang = $(event.currentTarget).data("lang"),
            langs = Settings.get("langs");
        console.log(currentLang);
        $.each(langs, (className, langsData)=>{
           this.getLabelText("." + className, langsData[currentLang])
            //this.form.find("." + className).text(langsData[currentLang]);
        });
    }

    createEvents(){
        this.btn.click(this.showInfo.bind(this));
        this.langs.click(this.changeLang.bind(this));
    }
}