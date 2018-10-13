function calculateWallpaper() {
    /*  roomLength, //длина комнаты
        roomWidth = rW, //ширина комнаты
        roomHeight = rH, //высота комнаты
        doorWidth = dW, //ширина двери
        doorHeight = dH, //высота двери
        windowWidth = wW, //ширина окна
        windowHeight = wH, //высота окна
        wallpaperWidth = wpW, //ширина рулона
        wallpaperLength = 10, //длина рулона */
    var roomLength = document.getElementById("roomLength"),
        roomWidth = document.getElementById("roomWidth"),
        roomHeight = document.getElementById("roomHeight"),
        doorWidth = document.getElementById("doorWidth"),
        doorHeight = document.getElementById("doorHeight"),
        windowWidth = document.getElementById("windowWidth"),
        windowHeight = document.getElementById("windowHeight"),
        wallpaperWidth = document.getElementById("wallpaperWidth"),
        wallpaperLength = document.getElementById("wallpaperLength"),
        result = document.getElementById("result"),
        amountRolls = 0;

    amountRolls = (((2 * (+ roomWidth.value) + 2 * (+ roomLength.value)) * (+ roomHeight.value))
        - ((+ doorWidth.value) * (+ doorHeight.value) - (+ windowWidth.value) * (+ windowHeight.value)))
        / ((+ wallpaperWidth.value) * (+ wallpaperLength.value));
    result.innerHTML = Math.ceil(amountRolls);
}

calc_bth = document.getElementById("calc_btn");
calc_bth.onclick = calculateWallpaper;