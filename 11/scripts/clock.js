class Clock {
    constructor(sSelector){
        this.clock = $(sSelector);

        this.timeInfo();
        setInterval(this.timeInfo.bind(this), 1000);
    }

    timeInfo(){
        this.getTimeData("hours", "getHours");
        this.getTimeData("min", "getMinutes");
        this.getTimeData("sec", "getSeconds");
    }

    getTimeData(cssClass, methodType){
        let today   = new Date(),
            time    = today[methodType](),//объект[переменная_с_названием_метода]()
            place   = this.clock.find(`.${cssClass}`);
        place.text(time < 10 ? `0${time}` : time);
    }
}