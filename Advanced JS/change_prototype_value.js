function Person() {
    this.name = "Elon Musk";
}

Person.prototype.age = 25;

const person1 = new Person();

Person.prototype = { age: 52 }

const person2 = new Person()

console.log(person1.age)
console.log(person2.age)