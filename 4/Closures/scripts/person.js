// ES5

// класс
//function declaration
function Class_(weight, height, sex) {
    var p = this;
    console.log("this: ", p);

    //свойства
    //публичные public
    p.weight = weight;
    p.height = height;
    p.sex = sex;
    //приватные privat
    var name = "no name";

    //методы
        //function expression
    p.getAge = function (birthdayYear) {
        var year = new Date().getFullYear();
        p.age = year - birthdayYear;
        console.log("Возраст: ", p.age);
    };

    p.setName = function(myName){
      name = myName;
      console.log("Ваше имя: ", name);
    };

    p.getInfo = function () {
        console.log("Вес: ", p.weight);
        console.log("Рост: ", p.height);
        console.log("Пол: ", p.sex);
    };

    p.getInfo();
}

// объект
var person1 = new Class_(60, 173, "female");
console.log(person1);
person1.getAge(1987);
person1.setName("Карина");

var person2 = new Class_(75, 190, "male");
console.log(person2);
person2.setName("Сергей");