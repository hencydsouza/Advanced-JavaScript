class c1 {
    constructor(name) {
        this.name = name
    }

    display() {
        console.log(this.name)
    }

    static message() {
        console.log('this is a static method')
    }
}

class c2 extends c1 {
    constructor(name) {
        super(name)
    }
}

const e1 = new c1('a')

const e2 = new c2('b')
// e2.display()

c1.message()