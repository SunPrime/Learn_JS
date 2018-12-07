class FormChecker {
    // ������
    constructor(sSelector){
        //��������
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
                "name"        : "^[A-Za-z�-��-� \\-]{2,15}$", //���, ��� �����, �������, - �� 2 �� 15
                "brand"       : "^[A-Za-z]{1,10}$", // ��� ����� �� 1 �� 10
                "price"       : "^[0-9]{2,6}$", // ����� �� 2 �� 6
                "description" : "^.+$" //����� ������ �� 1 � �����
            },
            currentTextfieldName = currentTextfield.attr("name"),
            currentRegExp        = new RegExp(regexps[currentTextfieldName]),
            textfieldError       = !currentTextfieldVal.match(currentRegExp); //���� ���� ������, �� �������� �������� true

            currentTextfield.toggleClass("b-textfield_error", textfieldError);
            return textfieldError;
    }

    checkTextfields(event){
        event.preventDefault(); //�������������� ������� �� ���������, ��� ������ ������ ��� submit (�������� ������ �� ������)
        let formError = false;
        this.textfields.each((i, currentTextfield)=>{
            let textfield       = $(currentTextfield),
                textfieldError  = this.checkTextfield(null, textfield);

            if (textfieldError){
                formError = true;
            }
        });
        let methodType = formError ? "slideDown" : "slideUp";
        //����������� �������� ������ ����� ����������
        this.errorMessage[methodType]();
    }

    createEvents(){
        //�������
        //��� ������ ������ ���������� ���� ��������� ����� �������� ����� ����
        this.textfields.blur(this.checkTextfield.bind(this));
        //��� �������� ������ �� ������, ��������� ����� �������� ���� ����� �����
        this.form.submit(this.checkTextfields.bind(this));
    }
}