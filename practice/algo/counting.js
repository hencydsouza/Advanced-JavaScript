let array = [2, 5, 3, 1, 4, 2]
let count = [0, 0, 0, 0, 0, 0]

array.map((val) => {
    count[val]++
})

let finalArr = []

for (let i = 0; i < count.length; i++) {
    let cnt = count[i]
    while (cnt > 0) {
        finalArr.push(i)
        cnt--
    }
}

console.log(finalArr)