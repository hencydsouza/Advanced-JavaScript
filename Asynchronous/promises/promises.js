let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})

// p.then(message => {
//     console.log(message)
// }).catch(error => {
//     console.log(error)
// })

const promise1 = new Promise((resolve, reject) => {
    resolve('Promise 1')
})
const promise2 = new Promise((resolve, reject) => {
    resolve('Promise 2')
})
const promise3 = new Promise((resolve, reject) => {
    resolve('Promise 3')
})

Promise.all([promise1, promise2, promise3]).then(messages => {
    messages.forEach(message => console.log(message))
})

Promise.race([promise1, promise2, promise3]).then(messages => {
    console.log(messages)
})