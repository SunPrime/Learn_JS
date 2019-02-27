//ES6
class Animal {
    constructor(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }
}

class Dog extends Animal{
    bark(){
        return `Dog ${this.name} is barking`;
    }
}

let dog = new Dog('Aban');
console.log(dog.getName());
console.log(dog.bark());

//ES5
function Animal2(name) {
    this.name = name;
}
Animal2.prototype.getName = function (name) {
    return this.name;
};

function Dog2(name) {
    Animal2.call(this, name)
}
Dog2.prototype = Object.create(Animal2.prototype);

Dog2.prototype.bark = function () {
    return `Dog ${this.name} is barking`;
};

var dog2 = new Dog2('Aban2');
console.log(dog2.getName());
console.log(dog2.bark());
