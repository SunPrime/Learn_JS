function translit(){
    var message = document.getElementById("message1"),
        symbols = {"и" : "i",
            "з" : "z",
            "д" : "d",
            "б" : "b",
            "г" : "g",
            "м" : "m"},
        translitMessage = document.getElementById("message2");

    translitMessage.value = '';
    for (var i = 0; i < message.value.length; i++) {
        translitMessage.value += symbols[message.value[i]] || message.value[i];
        /*или
        translitMessage += symbols[message[i]] ? symbols[message[i]] : message[i];
        */
    }
}

var btn1 = document.getElementById("btn1");
btn1.onclick = translit;
