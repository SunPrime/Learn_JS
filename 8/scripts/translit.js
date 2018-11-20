class Translit{

    constructor(sSelector){
        this.form        = $(sSelector);
        this.userMessage = this.form.find(".message1");
        this.newMessage = this.form.find(".message2");

        this.createEvents();
    }

    translitMessage(event){
        event.preventDefault();
        let symbols = {"и" : "i",
                "з" : "z",
                "д" : "d",
                "б" : "b",
                "г" : "g",
                "м" : "m"},
            translitMessageVal = "";

        for (let i = 0; i < this.userMessage.val().length; i++) {
            translitMessageVal +=
                symbols[this.userMessage.val()[i]]
                ? symbols[this.userMessage.val()[i]]
                : this.userMessage.val()[i];
        }
        this.newMessage.val(translitMessageVal);
    }

    createEvents(){
        this.form.submit(this.translitMessage.bind(this));
    }
}