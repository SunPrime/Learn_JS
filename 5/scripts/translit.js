function translit() {
    var message = $("#message1"),
        symbols = {"и" : "i",
            "з" : "z",
            "д" : "d",
            "б" : "b",
            "г" : "g",
            "м" : "m"},
        translitMessage = $("#message2")
        translitMessageVal = "";

    translitMessage.val("");
    for (var i = 0; i < message.val().length; i++) {
        translitMessageVal += symbols[message.val()[i]] || message.val()[i];
    }

    translitMessage.val(translitMessageVal);
}

$("#btn1").click(translit);
