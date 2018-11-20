function FormChecker(sSelector){
	var f = this;
	
	// свойства
	f.form 			= $(sSelector);
	f.textfields 	= f.form.find(".b-textfield");
	f.errorMessage	= f.form.find(".b-form__message_error");

	// методы
    // метод для проверки полей после нажатия на кнопку формы
	f.checkTextfields 	= function(event){
		event.preventDefault(); //предотвращаем событие по умолчанию - отправка данных на сервер
		var textfieldError = false,
			formError = false;
        f.textfields.each(function () {
			var currentTextfield = $(this);
			textfieldError = f.checkTextfield(currentTextfield);
				if(textfieldError){
					formError = true;
				}
        });
        var methodName = formError ? "slideDown" : "slideUp";
        f.errorMessage[methodName]();//подстановка названия метода через переменную
	};

	f.checkTextfield 	= function(textfield){
		var  currentTextfield 		= textfield.length ? textfield : $(this)
			,currentTextfieldVal 	= currentTextfield.val()
			,regexps = {
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
	
	// события
	f.form.submit(f.checkTextfields);
	f.textfields.blur(f.checkTextfield);
}