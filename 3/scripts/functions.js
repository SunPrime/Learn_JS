/*
function calcSum(num1, num2) {
    console.log(num1, num2);
    var sum = num1 + num2; // локальная переменная
    return sum;
    // или return num1 + num2;
}
var sum1 = calcSum(2, 5);
console.log(sum1);

//площадь треугольника b*h*0.5
function triangle(b, h) {
    return b * h * 0.5;
}
console.log(triangle(7, 5));

// глобальные и локальные переменные
var x = 5;
function test() {
    console.log(x); // будет undefine
    var x = 9;
}

test();
console.log(x);

function test() {
    x = 1;
    console.log(x);
}

test();
console.log(x); // 1, потому что JS видит как глобальную переменную

function getWeather(day) {
        var weather = {
            6: "солнце, +25"
        };
    return weather[day];
}

console.log(getWeather(new Date().getDay()));

function getWeather(month, data) {
    var weather = {
        8 : {
            22 : "солнце, +25"
        }
    };
    return weather[month][data]
}
var today = new Date();
res = getWeather(today.getMonth(), today.getDate());
console.log(res);

function documentCheck(id) {
    var person = {
        "23546748930": {
            "name" : "Oleg",
            "surname" : "Ivanov",
            "birthday" : "15.10.1980"
        },
        "569865421345": {
            "name" : "Ivan",
            "surname" : "Petrov",
            "birthday" : "25.01.1996"
        }
    };
    return person[id];
}
var hello = documentCheck("569865421345");
console.log(hello);
console.log('Hello,', hello['name'], hello['surname'],'!');

function getFriendsBirthday() {
    var birthdayData = {
        8 : {
            22 : {
                "Kate" : 1988,
                "Alex" : 1991,
                "Helen": 1977,
            }
        }
    },
        today = new Date(),
        month = today.getMonth(),
        date = today.getDate(),
        year = today.getFullYear(),
        age = 0,
        currentBirthdayData = birthdayData[month][date],
        info = "";
    console.log(currentBirthdayData);
    for (var name in currentBirthdayData){
        age = year - currentBirthdayData[name];
        info += name + " " + age + "\n";
    }
    return info
}

console.log(getFriendsBirthday());
*/
//калькулятор массы тела
function getWeightData(sex, height, weight) {
    var k = {
        "male": [52, 1.9],
        "female": [49, 1.9]
    },
        ibw = Math.round(k[sex][0] + k[sex][1] * (0.394 * height - 60)),
        diff = ibw - weight;
    console.log("Ваша идеальная масса тела:", ibw, "кг");
    if (diff < 0) {
        console.log("Рекомендуем Вам похудеть на", Math.abs(diff),"кг");
    } else if (diff > 0) {
        console.log("Рекомендуем Вам поправиться на", Math.abs(diff),"кг")
    } else {
        console.log("Ваш вес идеальный!");
    }
}

getWeightData('female', 166, 58);