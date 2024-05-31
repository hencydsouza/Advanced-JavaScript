let arr = [100, 35, 500, 9, 67, 20]
let sortedIndex = 0

function swapToFront(arr, index) {
    let ele = arr[index]
    for (let i = index; i < arr.length - 1; i++) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
    }
    arr.pop()
    arr.unshift(ele)
    return arr
}

for (let i = 0; i < arr.length; i++) {
    let current = sortedIndex

    for (let j = sortedIndex; j < arr.length; j++) {
        if (arr[j] > arr[current]) {
            current = j
        }
    }

    arr = swapToFront(arr, current)
    sortedIndex++
    console.log(arr)
}

// console.log(arr)
