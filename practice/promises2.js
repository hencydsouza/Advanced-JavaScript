// const prom = new Promise((resolve, reject) => {
//     // resolve()
//     reject()
// })

// prom.then(() => console.log('promise resolved')).catch(() => console.log('promise rejected'))\

function prom(val) {
    return new Promise((resolve, reject) => {
        if (val) {
            resolve('resolved')
        } else {
            reject('rejected')
        }
    })
}

// prom(true).then(() => console.log('resolved')).catch(() => console.log('rejected'))

async function resolver() {
    const message = await prom(true)
    console.log(message)
}

// resolver()

async function fetching() {
    const api = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    api.json().then(res => console.log(res))
}

// fetching()