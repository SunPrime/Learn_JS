class FormChecker{

	constructor(sSelector){
        this.form 			= $(sSelector);
        this.textfields 	= this.form.find(".b-textfield");
        this.errorMessage	= this.form.find(".b-form__message_error");
        this.createEvents();

    }

	// методы
    // метод для проверки полей после нажатия на кнопку формы
	checkTextfields(event){
		event.preventDefault(); //предотвращаем событие по умолчанию - отправка данных на сервер
		let textfieldError = false,
			formError = false;
        this.textfields.each((i, currentTextfield)=> {
			textfieldError = this.checkTextfield($(currentTextfield));
				if(textfieldError){
					formError = true;
				}
        });
        let methodName = formError ? "slideDown" : "slideUp";
        this.errorMessage[methodName]();//подстановка названия метода через переменную
	};

	checkTextfield(textfield){
		let
			currentTextfield 		= textfield.length ? textfield : $(this),
			currentTextfieldVal 	= currentTextfield.val(),
			regexps = {
			// лат, кир от 3 до 15, -, пробел
				 "name" 		: "^[a-zA-Zа-яА-Я\\- ]{3,15}$"
			// лат, -, пробел, точки от 2 до 15	 
				,"brand" 		: "^[a-zA-Z\\-\\. ]{2,15}$"
				,"price" 		: "^[0-9]{1,5}$"
			// любые символы от 1 и более	
				,"description" 	: "^.+$"
			}
			,currentRegExp 	= regexps[currentTextfield.attr("name")]
			,oCurrentRegExp = new RegExp(currentRegExp)
			,textfieldError = !currentTextfieldVal.match(oCurrentRegExp)
			;
		console.log(textfieldError);
		currentTextfield.toggleClass("b-textfield_error", textfieldError);

		return textfieldError;
	}// метод для проверки одного текстового поля после потери им фокуса
	
	createEvents(){
        this.form.submit(this.checkTextfields.bind(this));
        this.textfields.blur(this.checkTextfield);
	}// события

}