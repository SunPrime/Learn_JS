function Form(sSelector){
	var f = this;
	
	// свойства
	f.form 		= $(sSelector);
	f.name		= f.form.find(".b-form__name");
	f.surname	= f.form.find(".b-form__surname");
	f.seasons	= f.form.find(".b-form__season");
	f.fruit		= f.form.find(".b-form__fruit");
	f.animal	= f.form.find(".b-form__animals");
	f.review	= f.form.find(".b-form__review");
	f.btn		= f.form.find(".b-form__ok-button");
	f.langs		= f.form.find(".b-langs__lang");
	
	// методы
	f.showInfo 		= function(){
/*	
		var seasonsList = "";
		f.seasons.filter(":checked")
			.each(function(){
				// console.log(this);
				var season = $(this);
				seasonsList += season.val() + " ";
				});
 	
		console.log(
			f.name.val()
			+ "\n"
			+ f.surname.val()
			+ "\n"
			+ seasonsList
			+ "\n"
			+ f.fruit.filter(":checked").val()
			+ "\n"
			+ f.animal.val()
			+ "\n"
			+ f.review.val()
			); 
*/
			
		console.log(
			f.getLabelText("b-form__label_name")
			+ ": "
			+ f.getValue(f.name)
			+ "\n"
			+ f.getLabelText("b-form__label_surname")
			+ ": "
			+ f.getValue(f.surname)
			+ "\n"
			+ f.getValue(f.seasons, ", ")
			+ "\n"
			+ f.getValue(f.fruit)
			+ "\n"
			+ f.getValue(f.animal)
			+ "\n"
			+ f.getValue(f.review)
			);
			
		// console.log(f.seasons.filter(":checked"));	
	}
	f.getValue 		= function(oElem, sSeparator){
		var  elemType 	= oElem.attr("type")
			,elemTagName= oElem.prop("tagName").toLowerCase()
		
			if(elemType == "radio"){
				return oElem.filter(":checked").val();
			}
			else if(elemType == "text" || elemTagName == "select" || elemTagName == "textarea"){
				return oElem.val()
			}
			else if(elemType == "checkbox"){
				var checkboxList = "";
				oElem.filter(":checked")
					.each(function(){
						// console.log(this);
						var checkbox = $(this);
							if(checkboxList){
								checkboxList += sSeparator;
							}
						checkboxList += checkbox.val();
						});
				return checkboxList;		
			}
	}
	f.getLabelText 	= function(sClassName){
		return f.form.find("." + sClassName).text();
	}
	f.changeLang 	= function(){
		var currentLang = $(this).data("lang");
			$.each(langs, function(className, langsData){
				f.form.find("." + className).text(langsData[currentLang]);
				});
		
		//$(this).css({"color" : "red", "background" : "yellow", "font-size" : "72px"});
		f.langs.removeClass("b-langs__lang_current");
		$(this).addClass("b-langs__lang_current");
	}

	// события
	f.btn.click(f.showInfo);
	f.langs.click(f.changeLang);
}