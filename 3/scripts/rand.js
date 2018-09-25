var colors = ["red", "green", "blue", "yellow", "pink"],
    m = 0,
    n = colors.length - 1,
    randIndex = Math.floor(Math.random() * (n - m + 1)) + m;

console.log("Случайный цвет: ", colors[randIndex]);