function add(num1) {
    return function (num2) {
        console.log('Sum is ' + (num1 + num2))
    }
}

const add2 = add(10)

add2(20)