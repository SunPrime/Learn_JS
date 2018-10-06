//1.Генерация пароля
function getPassword(passwordLength) {
    var passwordOut = "",
        forbiddenCharacter = [":", ";", "<", "=", ">", "?", "@",
                              "[","\\","]","^","_","`"],
        n = 48,
        m = 122 - 1,
        randIndex = Math.floor(Math.random() * (n - m + 1)) + m;
    while (passwordOut.length < passwordLength) {
        randIndex = Math.floor(Math.random() * (n - m + 1)) + m;
        var char = String.fromCharCode(randIndex);
        passwordOut += forbiddenCharacter.indexOf(char) >= 0 ? '' : char;
    }
    return passwordOut;
}

console.log("Ваш пароль:", getPassword(8));


//2.Калькулятор расчёта количества рул. обоев на комнату
function calculateWallpaper(roomLength, roomWidth, roomHeight,
                            doorWidth, doorHeight,
                            windowWidth, windowHeight, wallpaperWidth) {
    /*  roomLength, //длина комнаты
        roomWidth = rW, //ширина комнаты
        roomHeight = rH, //высота комнаты
        doorWidth = dW, //ширина двери
        doorHeight = dH, //высота двери
        windowWidth = wW, //ширина окна
        windowHeight = wH, //высота окна
        wallpaperWidth = wpW, //ширина рулона
        wallpaperLength = 10, //длина рулона */
    var wallpaperLength = 10,
        amountRolls = 0;
    amountRolls = (((2 * roomWidth + 2 * roomLength) * roomHeight)
        - (doorWidth * doorHeight) - (windowWidth * windowHeight))
        / (wallpaperWidth * wallpaperLength);
    return amountRolls
}

var result = Math.ceil(calculateWallpaper(4,5,2.75,0.9,2.1,0.7,1.2,0.5));
console.log("Количество рулонов обоев на комнату: ",result);


//3.Расчет электроэнергии
function paymentElectricity(t11, t12) {
    var oneHundredKWt = 100,
        nightFactor = 0.5,
        costUpTo100KWt = 0.9,
        costAfterTo100KWt = 1.68,
        total = 0;
    function calculateElectricity (amount) {
        if (amount < oneHundredKWt) {
            total = amount * costUpTo100KWt;
        } else
            total = (oneHundredKWt * costUpTo100KWt) + (amount - oneHundredKWt) * costAfterTo100KWt;
        return total
    }
    return calculateElectricity(t11) + calculateElectricity(t12) * nightFactor
}

console.log("Сумма к оплате за электричество: ", paymentElectricity(400, 250));