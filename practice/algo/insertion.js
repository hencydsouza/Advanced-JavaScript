let array = [8, 3, 5, 1, 4, 2, 0, 6]

for (let i = 1; i < array.length; i++) {
    j = i - 1
    while (array[i] < array[j]) {
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
        i--
        j--
    }
}

console.log(array)