// function x() {
//     console.log("Hello")
// }

// function y(x) {
//     x();
// }

const radius = [3, 1, 2, 4]

const area = function (radius) {
    return Math.PI * radius * radius
}

const circumference = function (radius) {
    return Math.PI * radius * 2
}

const diameter = function (radius) {
    return radius * 2
}

// const calculate = function (radius, logic) {
//     const output = [];

//     for (let i = 0; i < radius.length; i++) {
//         output.push(logic(radius[i]))
//     }
//     return output
// }

Array.prototype.calculate = function (logic) {
    const output = [];

    for (let i = 0; i < radius.length; i++) {
        output.push(logic(this[i]))
    }
    return output
}

console.log(radius.calculate(area))

// console.log(calculate(radius, area))
// console.log(calculate(radius, circumference))
// console.log(calculate(radius, diameter))