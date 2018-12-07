class Game{
    constructor(sSelector){
        this.game               = $(sSelector);
        this.userAnswer         = this.game.find(".userAnswer");
        this.computerAnswer     = "";
        this.btn                = this.game.find(".btn");
        this.result             = this.game.find(".result");
        this.userAnswerImg      = this.game.find(".userAnswerImg");
        this.computerAnswerImg  = this.game.find(".computerAnswerImg");
        this.message            = this.game.find(".message");

        this.createEvents();
    }

    getComputerAnswer() {
        let m = 0,
            n = 2,
            answers = ["rock", "scissors", "paper"];

        this.computerAnswer = answers[Math.floor(Math.random() * (n - m + 1))];
    }

    play(){
        this.getComputerAnswer();
        console.log(this.userAnswer.val(), this.computerAnswer)
    }

    createEvents(){
        this.btn.click(this.play.bind(this));
    }
}