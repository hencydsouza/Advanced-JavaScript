var user = {
    firstName: "Hency",
    lastName: "Dsouza",
    role: "Student",
    loginCount: 32,
    facebookSignedIn: true,
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName)
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`
    },
}

// console.log(user.firstName)
// console.log(user["lastName"])
// user.loginCount = 44;
// console.log(user)
// console.log(user)

// console.log(user.getCourseCount())
// user.buyCourse("React JS course")
// user.buyCourse("Angular JS course")
// console.log(user.getCourseCount())

var User = {
    name: "",
    getUserName: function () {
        console.log(`User name is: ${this.name}`)
    }
};

var hency = Object.create(User)
// hency.name = "Hency Dsouza"
// console.log(typeof hency.getUserName)

var sam = Object.create(User, {
    name: { value: "Sammy" },
    courseCount: { value: 3 }
})

// sam.getUserName()

const myObj = {
    name: "Hency"
}

const anotherObj = {
    alive: true,
    answer: 42,
    hobbies: ["Eat", "Sleep", "Code"],
    beverage: {
        morning: "Coffee",
        afternoon: "Iced Tea",
    },
    action: function () {
        return `Time for ${this.beverage.morning}`
    }
}

// console.log(myObj.name);
// console.log(anotherObj.alive)
// console.log(anotherObj.answer)
// console.log(anotherObj.hobbies[0])
// console.log(anotherObj["alive"])
// console.log(anotherObj["beverage"].afternoon)
// console.log(anotherObj.action())

const vehicle = {
    wheels: 4,
    engine: function () {
        return "Vroooom!"
    }
}

// const truck = Object.create(vehicle)
// truck.doors = 2
// console.log(truck)
// console.log(truck.wheels)
// console.log(truck.engine())

const car = Object.create(vehicle);
car.doors = 4
car.engine = function () {
    return "Woooosh!"
}

console.log(car.engine())
console.log(car.wheels)

const tesla = Object.create(car);
console.log(tesla.wheels)
tesla.engine = function () {
    return "Shhhhhh...."
}
console.log(tesla.engine())

const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
}

// delete band.drums;
console.log(band.hasOwnProperty("drums"))
console.log(Object.keys(band))
console.log(Object.values(band))

for (const job in band) {
    console.log(`On ${job}, it's ${band[job]}!`)
}

// destructuring objects
const { guitar, bass, vocals, drums } = band;
// console.log(guitar, bass, drums, vocals)

function sings({ vocals }) {
    return `${vocals} sings!`
}

console.log(sings(band))