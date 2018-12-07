class Horoscope{
    constructor(sSelector){
        this.div = $(sSelector);
        this.zodiac = this.div.find(".zodiac");
        this.month = this.div.find(".month");
        this.day = this.div.find(".day");
        this.result = this.div.find(".result");
        this.button = this.div.find(".button");

        this.createEvents()
    }

    getHoroscope(){
        this.result.css("display", "block");
        this.result.text(horoscopeData[this.zodiac.val()][this.month.val()][this.day.val()]);
    }

    createEvents(){
        this.button.click(this.getHoroscope.bind(this));
    }
}