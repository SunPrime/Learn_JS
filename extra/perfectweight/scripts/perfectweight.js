class Perfectweight {
    constructor(sSelector){
        this.form = $(sSelector);
        this.textfield = this.form.find(".textfield");
        this.height = this.form.find(".height");
        this.weight = this.form.find(".weight");
        this.sex = this.form.find(".sex");
        this.btn = this.form.find(".btn");
        this.message = this.form.find(".message");

        this.createEvents();
    }

    checkTextfield(event){
        let currentTextfield = $(event.currentTarget),
            currentTextfieldVal = currentTextfield.val(),
            regexps = {
                "height" : "^[0-9]{3}$",
                "weight" : "^[0-9]{2,3}(\\.|\\,[0-9]{1,2})?$"
            },
            currentTextfieldName = currentTextfield.attr("name"),
            currentRegExp        = new RegExp(regexps[currentTextfieldName]),
            textfieldError       = !currentTextfieldVal.match(currentRegExp); //если есть ошибка, то получаем значение true

            currentTextfield.toggleClass("textfield_error", textfieldError);
    }

    getMessage(event){
        let height           = this.height.val(),
            weight           = this.weight.val(),
            sex              = this.sex.val(),
            indexIdealWeight = {
                "man"   : [4, 128],
                "woman" : [3.5, 108]
            },
            idealWeight = Math.round(((height * indexIdealWeight[sex][0]) / 2.54 - indexIdealWeight[sex][1]) * 0.453),
            diff = idealWeight - weight;
        console.log(weight);
        if (diff > 0){
            this.message.text(`Вам нужно набрать вес! Ваш идеальный вес ${idealWeight} кг`);
        }
        else if(diff < 0){
            this.message.text(`Вам нужно похудеть! Ваш идеальный вес ${idealWeight} кг`);
        }
        else {
            this.message.text("Ваш вес идеальный!")
        }
    }

    createEvents(){
        this.textfield.blur(this.checkTextfield.bind(this));
        this.btn.click(this.getMessage.bind(this));
    }
}