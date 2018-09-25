//1. Попарная перестановка элементов местами
var nums = [3, 4, 7, 1, 2, 5],
    temp = 0;

console.log("Массив на входе:  ", nums);
for (var i = 0; i < nums.length; i+=2) {
    temp = nums[i];
    nums[i] = nums[i+1];
    nums[i+1] = temp;
}
console.log("Массив на выходе: ", nums);

//2. Вывести элементы в диапазоне от -5 до -10
var numbers = [2, -9, 4, 3, -7, 6],
    result = "";
for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > -10 && numbers[i] < -5)
        result += numbers[i];
}
console.log("Элементы в диапапзоне от -10 до -5: ", result);

//3. Вывести элементы с нечетных позиций в диапазоне от -5 до 5, кратные 3
result = "";
for (i = 1; i < numbers.length; i+=2) {
    if (numbers[i] > -5 && numbers[i] < 5 && !(numbers[i] % 3))
        result += numbers[i];
}
console.log("Элементы с нечетных позиций в диапазоне от -5 до 5, кратные 3: ", result);

//4. Получить номер из строки AC45678EA
var myString = "AC45678EA";
console.log("Номер из строки AC45678EA: ", myString.substr(2, 5));

var myString2 = "AC 45678 EA";
res = myString2.split(' ');
console.log("Номер из строки AC45678EA: ", res[1]);

//5. Вывести время 19:26 в формате 19 часов 26 минут
var sTime = "19:26",
    aTime = sTime.split(":");
result = aTime[0] + " часов " + aTime[1] + " минут";
console.log(result);

//6.Вывести гороскоп по знаку
var horoscope = {
    "дева" : "будет удачный день",
    "весы" : "сегодня вам повезет"
    },
    person = "весы";
result = "Гороскоп для знака " + person + " на субботу: " + horoscope[person] + "!";
console.log(result);