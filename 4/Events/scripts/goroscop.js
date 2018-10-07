function interpretation() {
    var signData1 = document.getElementById("signData1"),
        result = {"овен": "удача",
                  "телец": "хорошее настроение",
                  "близнецы": "счастье",
                  "рак": "встреча с друзьями",
                  "лев": "гости",
                  "дева": "визит мамы",
                  "весы": "карнавал",
                  "скорпион": "поход в ресторан",
                  "стрелец": "рыбалка",
                  "козерог": "кафе",
                  "водолей": "свидание",
                  "рыбы": "путешествие"
    };
    console.log(result[sign1.value]);
    signData1.innerHTML = result[sign1.value];
}

sign1 = document.getElementById("sign1");
sign1.onchange = interpretation;