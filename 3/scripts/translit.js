var message = "издательство абабагаламага",
    symbols = {"и" : "i",
                "з" : "z",
                "д" : "d",
                "б" : "b",
                "г" : "g",
                "м" : "m"},
    translitMessage = "";

for (var i = 0; i < message.length; i++) {
    translitMessage += symbols[message[i]] || message[i];
    /*или
    translitMessage += symbols[message[i]] ? symbols[message[i]] : message[i];
    */
}
console.log(message);
console.log(translitMessage);