class Window{
    constructor(sSelector){
        this.win               = $(sSelector);
        this.startCountdownBtn = this.win.find(".b-mywindow__start-countdown");
        this.stopCountdownBtn  = this.win.find(".b-mywindow__stop-countdown");
        this.startTickerBtn    = this.win.find(".b-mywindow__start-ticker");
        this.stopTickerBtn     = this.win.find(".b-mywindow__stop-ticker");
        this.openWindowBtn     = this.win.find(".b-mywindow__open-window");
        this.closeWindowBtn    = this.win.find(".b-mywindow__close-window");
        this.ticker            = null; // периодический таймер
        this.countdown         = null; //счетчик обратного отсчета
        this.tickerTime        = 0; //время таймер (накопитель)
        this.tickerPeriod      = 2; //шаг таймера
        this.newWindow         = null; //указатель окна

        this.createEvents();
    }
    //обратный отсчет
    startCountdown(){
        let mayIStart = window.confirm("Можно приступать?");
        console.log(mayIStart);
        if (mayIStart){
            this.countdown = window.setTimeout(
                             this.countdownNotification, 7000
                             );
            console.log(this.countdown);
        } else {
            alert("Ну не хотите, как хотите!");
        }
    }

    stopCountdown(){
        window.clearTimeout(this.countdown);
        alert("Таймер остановлен");
    }

    //таймер
    startTicker(){
        this.ticker = window.setInterval(this.tickerNotification.bind(this),
                                  this.tickerPeriod*1000);
    }

    stopTicker(){
        window.clearInterval(this.ticker);
        alert("Таймер на паузе");
    }

    //окно
    openWindow(){
        this.newWindow = window.open(
            'gallery/gallery.html',
            '_blank',
            'width = 600, height = 600'
        )
    }

    closeWindow(){
        this.newWindow.close(); //закрыть именно открытое окно, а не наше текущие
    }

    //уведомления
    countdownNotification(){
        alert("Время иссякло");
    }

    tickerNotification(){
        this.tickerTime += this.tickerPeriod;
        console.log("Прошло " + this.tickerTime + " секунды");
    }

    createEvents(){
        this.startCountdownBtn.click(this.startCountdown.bind(this));
        this.stopCountdownBtn.click(this.stopCountdown.bind(this));
        this.startTickerBtn.click(this.startTicker.bind(this));
        this.stopTickerBtn.click(this.stopTicker.bind(this));
        this.openWindowBtn.click(this.openWindow.bind(this));
        this.closeWindowBtn.click(this.closeWindow.bind(this));
    }
}