const radius = [1, 2, 3]

const area = radius.map((r) => {
    return Math.round(2 * Math.PI * r)
})

// console.log(area)

const find = radius.find((val) => {
    return val > 1
})

// console.log(find)

const reduce = radius.reduce((total, val) => {
    return total += val
}, 0)

// console.log(reduce)

const sort = radius.sort((val1, val2) => {
    return val2 - val1
})

// console.log(sort)

const filter = radius.filter((val) => {
    return val < 3
})

// console.log(filter)