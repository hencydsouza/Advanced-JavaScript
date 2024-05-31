function car(color, wheels) {
    this.color = color
    this.wheels = wheels
}

const sportsCar = new car('red', 4)
// console.log(car.prototype)
car.prototype.lights = 2

console.log(sportsCar)