class Clock {
    constructor(sSelector){
        this.clock = $(sSelector);
        this.days = this.clock.find(".days");
        this.hours = this.clock.find(".hours");
        this.min = this.clock.find(".min");
        this.sec = this.clock.find(".sec");

        this.getTimeData();
        this.flagsetInterval = setInterval(this.getTimeData.bind(this), 1000);
    }

    getTimeData(){
        let today   = new Date(),
            lastdate = new Date(2018, 11, 31, 11, 59, 59),
            interval = lastdate - today,
            time = 0,
            msecPerMinute = 1000 * 60,
            msecPerHour = msecPerMinute * 60,
            msecPerDay = msecPerHour * 24;

        if (interval < 0){
            this.clock.css("display","none");
            $("h1").text("Happy New Year!");
            window.clearInterval(this.flagsetInterval);
        }
        else {
            time = Math.floor(interval / msecPerDay );
            this.days.text(time);

            interval = interval - (time * msecPerDay );
            time = Math.floor(interval / msecPerHour);
            this.hours.text(time < 10 ? `0${time}` : time);

            interval = interval - (time * msecPerHour );
            time = Math.floor(interval / msecPerMinute );
            this.min.text(time < 10 ? `0${time}` : time);

            interval = interval - (time * msecPerMinute );
            time = Math.floor(interval / 1000 );
            this.sec.text(time < 10 ? `0${time}` : time);
            this.clock.addClass("changed");
        }

    }
}