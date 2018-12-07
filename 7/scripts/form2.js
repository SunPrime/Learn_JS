class FormChecker {
    // методы
    constructor(sSelector){
        //свойства
         this.form          = $(sSelector);
         this.textfields    = this.form.find(".b-textfield");
         this.errorMessage  = this.form.find(".b-form__message_error");

         this.createEvents();
    }

    checkTextfield(event, textfield){
        // console.log(event, textfield);
        let currentTextfield    = textfield ? textfield : $(event.currentTarget),
            currentTextfieldVal = currentTextfield.val(),
            regexps             = {
                "name"        : "^[A-Za-zА-Яа-я \\-]{2,15}$", //лат, кир буквы, пробелы, - от 2 до 15
                "brand"       : "^[A-Za-z]{1,10}$", // лат буквы от 1 до 10
                "price"       : "^[0-9]{2,6}$", // число от 2 до 6
                "description" : "^.+$" //любой символ от 1 и более
            },
            currentTextfieldName = currentTextfield.attr("name"),
            currentRegExp        = new RegExp(regexps[currentTextfieldName]),
            textfieldError       = !currentTextfieldVal.match(currentRegExp); //если есть ошибка, то получаем значение true

            currentTextfield.toggleClass("b-textfield_error", textfieldError);
            return textfieldError;
    }

    checkTextfields(event){
        event.preventDefault(); //предотвращение события по умолчании, для нашего случая это submit (отправка данных на сервер)
        let formError = false;
        this.textfields.each((i, currentTextfield)=>{
            let textfield       = $(currentTextfield),
                textfieldError  = this.checkTextfield(null, textfield);

            if (textfieldError){
                formError = true;
            }
        });
        let methodType = formError ? "slideDown" : "slideUp";
        //подстановка названия метода через переменную
        this.errorMessage[methodType]();
    }

    createEvents(){
        //события
        //при потере фокуса текстового поля назначаем метод проверки этого поля
        this.textfields.blur(this.checkTextfield.bind(this));
        //при отправке данных на сервер, назначаем метод проверки всех полей формы
        this.form.submit(this.checkTextfields.bind(this));
    }
}