class employee {
    constructor(name, age, salary) {
        this.name = name
        this.age = age
        this.salary = salary
        console.log("Constructor : Employee")
    }

    info() {
        console.log(`Employee Name : ${this.name}, Age : ${this.age}, Salary : ${this.salary}`)
    }
}

class manager extends employee {
    // constructor(name, age, salary) {
    //     super(name, age, salary)
    //     console.log("Constructor : Manager")
    // }

    // info() {
    //     console.log("Manager Name : " + this.name)
    //     super.info();
    // }
    constructor(name, age, salary) {
        super(name, age, salary)
        this.ta = 1000;
        this.pa = 300;
        this.totalSalary = this.salary + this.ta + this.pa;
    }


    info() {
        console.log(`Manager Name : ${this.name}, Age : ${this.age}, Salary : ${this.totalSalary}`)
    }
}

class test extends manager{

}

// let a = new manager("Rahul", 22, 20000);
// let b = new employee("Shyam", 21, 12000);

// a.info()
// b.info()

let a = new test("Rahul", 22, 20000);
a.info()