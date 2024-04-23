// class hello {
//     message() {
//         console.log("Hello Everyone")
//     }
//     sorry() {
//         console.log("Sorry Everyone")
//     } 
// }

// const a = new hello();

// a.message();
// a.sorry();

class student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // console.log("Constructor Function called")
    }

    display() {
        console.log(`Hello ${this.name}, your age is ${this.age}`)
    }

    static staticMethod() {
        console.log("Static Function")
    }
}

let a = new student("Hency", 22);

a.display();

// let b = new student("Chinmaya", 21)
// b.display()

student.staticMethod();

// Inheritance
