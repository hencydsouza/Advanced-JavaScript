// const promise = new Promise((resolve, reject) => {
//     resolve()
// }).then(() => console.log('resolved'))

const prom1 = (val) => {
    return new Promise((resolve, reject) => {
        if (val) {
            resolve(true)
        } else {
            reject()
        }
    })
}

const prom2 = (val) => {
    return new Promise((resolve, reject) => {
        if (val) {
            resolve(true)
        } else {
            reject()
        }
    })
}

const prom3 = (val) => {
    return new Promise((resolve, reject) => {
        if (val) {
            resolve(true)
        } else {
            reject()
        }
    })
}

prom1(true).then(val => prom2(val)).then(val => prom3(val)).then(val => console.log(val))

async function run() {
    const p1 = await prom1(true)
    console.log(p1)
    const p2 = await prom2(p1)
    console.log(p2)
    const p3 = await prom3(p2)
    console.log(p3)
}
// run()