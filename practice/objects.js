const obj1 = {
    name: 'a',
    display() {
        console.log(this.name)
    }
}

// obj1.display()

function objCreator(name) {
    this.name = name
    this.display = () => {
        console.log(this.name)
    }
}

const ob1 = new objCreator('ob1')
ob1.display()
// console.log(ob1)