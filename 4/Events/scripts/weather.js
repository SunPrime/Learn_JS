function showWeather() {
    var weather1 = document.getElementById("weather1"),
        weatherImg1 = document.getElementById("weatherImg1"),
        weatheText1 = document.getElementById("weatheText1"),
        weatherData = {
            6 : {
                "imgFileName": "partly_cloudy",
                "description": " Преимущ. солнечно, 16°C | °F, \n" +
                               " Вероятность осадков: 0%, \n" +
                               " Влажность: 50%, \n" +
                               " Ветер: 14 км/ч \n"
            }
        },
        dayOfWeek = new Date().getDay();
    //доступ к стилям CSS
    weather1.style.display = "block";
    weatherImg1.src = "images/" + weatherData[dayOfWeek]["imgFileName"] + ".png";
    weatheText1.innerText = weatherData[dayOfWeek]["description"];
}

showWeather();