// ES5

// класс
//function declaration
function Class(weight, height, sex) {

    //свойства
    this.weight = weight;
    this.height = height;
    this.sex = sex;

    //методы
        //function expression
    this.getAge = function (birthdayYear) {
        var year = new Date().getFullYear();
        this.age = year - birthdayYear;
        console.log("Возраст: ", this.age);
    };

    this.getInfo = function () {
        console.log("Вес: ", this.weight);
        console.log("Рост: ", this.height);
        console.log("Пол: ", this.sex);
    };

    this.getInfo();
}

// объект
var person1 = new Class(60, 173, "female");
console.log(person1);
person1.getAge(1987);

var person2 = new Class(75, 190, "male");
console.log(person2);