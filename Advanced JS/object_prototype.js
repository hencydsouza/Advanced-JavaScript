const person = {
    name: "Elon"
}

// console.log(person)

function Person(fName, lName) {
    this.firstName = fName
    this.lastName = lName
}

Person.prototype.age = 22
Person.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName
}

const person1 = new Person("Elon", "Musk");
const person2 = new Person("Bill", "Gates");

// console.log(person1.getFullName())