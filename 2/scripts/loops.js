/*
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

let result = "";
for (let i = 1; i <= 5; i++) {
    result += i + " ";
}
console.log(result);

result = "";
for (let j = 5; j > 0; j--) {
    console.log(j);
    result += j + " ";
}
console.log(result);

let nums = [2, -3, 9, 0, -1, 7, 5, 0, -6];
result = "";
for (i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    result += nums[i] + " ";
}
console.log("Элементы массива: ", result);

result = "";
for (i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
        result += nums[i] + " ";
    }
}
console.log("Отрицательные элементы массива: ", result);

result = "";
for (i = 0; i < nums.length; i+=2) {
    result += nums[i] + " ";
}
console.log("Элементы массива через один: ", result);

result = "";
for (i = 1; i < nums.length; i+=2) {
    if (nums[i] > 0) {
        result += nums[i] + " ";
    }
}
console.log("Положительные элементы массива на нечетных позициях: ", result);

result = "";
for (i = 0; i < nums.length; i++) {
    if (!(nums[i] % 2)) { // тоже что и: nums[i] % 2 == 0
        result += nums[i] + " ";
    }
}
console.log("Четные элементы массива: ", result);

result = "";
for (i = 1; i < nums.length; i+=2) {
    if (nums[i] % 2) { // тоже что и число имеет остаток
        result += nums[i] + " ";
    }
}
console.log("Нечетные элементы массива через один: ", result);

zeroQty = 0;
for (i = 0; i < nums.length; i++) {
    if (!(nums[i])) { // тоже что и: nums[i] == 0
        zeroQty ++;
    }
}
console.log("Количество нулей: ", zeroQty);

for (j = 1, max = nums[0]; j < nums.length; j ++) {
    if (max < nums[j]) {
        max = nums[j];
    }
}
console.log("Максимальный элемент массива: ", max);

for (j = 1, min = nums[0]; j < nums.length; j ++) {
    if (min > nums[j]) {
        min = nums[j];
    }
}
console.log("Минимальный элемент массива: ", min);

var students = {
    "Иванов" : 5,
    "Петров" : 3,
    "Сидоров": 4,
    "Карпов": 3,
    "Арапов": 5
};

console.log("Студенты:");
for (var name in students) {
    console.log(name, "-", students[name]);
}

console.log("Студенты-отличники:");
for (name in students) {
    if (students[name] == 5)
        console.log(name, "-", students[name]);
}

var holidays = [
    [1, 7, 14, 18],
    [14],
    [8]
];

console.log(holidays[0]);
console.log(holidays[0][0]);

var goods = {
    "QWE123": {
        "title" : "ноутбук",
        "brand" : "HP",
        "price" : 20000
    },
    "ASD456": {
        "title" : "смартфон",
        "brand" : "LG",
        "price" : 5000
    },
    "ZXC789": {
        "title" : "клавиатура",
        "brand" : "Microsoft",
        "price" : 1500
    }
};

console.log(goods);
console.log(goods["ZXC789"]["title"], goods["ASD456"]["brand"]);

for (var id in goods) {
    console.log(goods[id]["title"], goods[id]["brand"], goods[id]["price"], "грн.");
}

var contacts = [
    {
        "firstname" : "",
        "lastname" : "",
        "birthday" : "",
        "phone" : ""
    },
    {
        "firstname" : "",
        "lastname" : "",
        "birthday" : "",
        "phone" : ""
    },
    {
        "firstname" : "",
        "lastname" : "",
        "birthday" : "",
        "phone" : ""
    },
];
*/