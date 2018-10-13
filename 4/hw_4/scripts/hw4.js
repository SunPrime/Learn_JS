// Сумма чисел от 1 до 100 с помощью рекурсии
function sumRec(num) {
    return num <= 1 ? 1 : num + sumRec(--num);
    }

console.log(sumRec(100));

// класс Птицы, объекты соловей, пингвин
function Birds(title) {
    var self = this;
    this.title = title;

    this.setFly = function (abilityToFly) {
        self.fly = abilityToFly;
        if (self.fly) {
            console.log(self.title, "can fly")
        } else {
            console.log(self.title, "can not fly");
        }
    };

    this.setSing = function (abilityToSing) {
      self.sing = abilityToSing;
      console.log(self.title, "sing", self.sing,"\n");
    }
}

var bird1 = new Birds("Penguin");
bird1.setFly(false);
bird1.setSing("awful");

var bird2 = new Birds("Nightingale");
bird2.setFly(true);
bird2.setSing("beautiful");

// класс Мультиварка
function Multicooker(manufactured, type, volume) {
    var self = this;
    this.manufactured = manufactured;
    this.type = type;
    this.volume = volume;

    this.setCook = function (typeofProduct, min) {
      console.log("Start program to cook", typeofProduct,"\nIt takes", min, "minutes!");
    };

    this.setDoubleBoiler = function (typeOfProduct) {
        if (typeOfProduct === "meat") {
            self.setCook(typeOfProduct, 20);
        } else if (typeOfProduct === "vegetables") {
            self.setCook(typeOfProduct, 10);
        } else if (typeOfProduct === "fish") {
            self.setCook(typeOfProduct, 15);
        }
    };

    this.cookYogurt = function (volumeOfMilk) {
        if (volumeOfMilk === "few") {
            self.setCook("yogurt", 240);
        } else if (volumeOfMilk === "much") {
            self.setCook("yogurt", 480);
        }
    };

    this.getInfo = function () {
      console.log("Thanks for buying our", self.type,"of", self.manufactured, "on", self.volume, "liters!");
    };

    self.getInfo();
}

var multiCooker1 = new Multicooker("Panasonic", "Рressure cooker", 5);
multiCooker1.setDoubleBoiler("fish");
multiCooker1.cookYogurt("few");
