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
        console.log(this.userAnswer.val(), this.computerAnswer);

        let table = {
            "rock"      : {
                "rock"      : 0,
                "scissors"  : 1,
                "paper"     : -1
            },
            "scissors"  : {
                "rock"      : -1,
                "scissors"  : 0,
                "paper"     : 1
            },
            "paper"     : {
                "rock"      : 1,
                "scissors"  : -1,
                "paper"     : 0
            }
        },
            messages = {
                "-1" : "Вы проиграли",
                "0"  : "Ничья",
                "1"  : "Вы выиграли"
            };

        this.showResult(messages[table[this.userAnswer.val()][this.computerAnswer]])
    }

    showResult(message){
        this.result.css("display","block");
        this.userAnswerImg.attr("src", `images/${this.userAnswer.val()}.png`);
        this.computerAnswerImg.attr("src", `images/${this.computerAnswer}.png`);
        this.message.text(message);
    }

    createEvents(){
        this.btn.click(this.play.bind(this));
    }
}