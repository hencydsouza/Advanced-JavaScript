const ticket = new Promise((resolve, reject) => {
    const isBoarded = true;
    if (isBoarded) {
        resolve("success")
    } else {
        reject("Failed")
    }
})

ticket.then(result => console.log(result)).catch(result => console.log(result)).finally(result => console.log("Complete"))