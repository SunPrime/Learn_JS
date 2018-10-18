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
    var roomLength = $("#roomLength"),
        roomWidth = $("#roomWidth"),
        roomHeight = $("#roomHeight"),
        doorWidth = $("#doorWidth"),
        doorHeight = $("#doorHeight"),
        windowWidth = $("#windowWidth"),
        windowHeight = $("#windowHeight"),
        wallpaperWidth = $("#wallpaperWidth"),
        wallpaperLength = $("#wallpaperLength"),
        amountRolls = 0;

    amountRolls = (((2 * (+ roomWidth.val()) + 2 * (+ roomLength.val())) * (+ roomHeight.val()))
        - ((+ doorWidth.val()) * (+ doorHeight.val()) - (+ windowWidth.val()) * (+ windowHeight.val())))
        / ((+ wallpaperWidth.val()) * (+ wallpaperLength.val()));

    $("#result").text(Math.ceil(amountRolls));
}

$("#calc_btn").click(calculateWallpaper);
