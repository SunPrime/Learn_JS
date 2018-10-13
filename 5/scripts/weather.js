function showWeather() {
    var weather1     = $("#weather1"),
        weatherImg1  = $("#weatherImg1"),
        weatherText1 = $("#weatherText1"),
        weatherData  = {
            6 : {
                "imgFileName": "partly_cloudy",
                "description": " Преимущ. солнечно, 16°C | °F, \n" +
                    " Вероятность осадков: 0%, \n" +
                    " Влажность: 50%, \n" +
                    " Ветер: 14 км/ч \n"
            }
        },
        dayOfWeek = new Date().getDay(),
        imgPath = "images/" + weatherData[dayOfWeek]["imgFileName"] + ".png";

    //доступ к стилям CSS
    weather1.css("display", "block");
    // сохраняем в атрибут src новый путь изображения
    weatherImg1.attr("src", imgPath);
    weatherText1.text(weatherData[dayOfWeek]["description"]);
    // или weatherText1.html(weatherData[dayOfWeek]["description"]);
}

showWeather();
