class Stack {
    constructor() {
        this.items = []
    }

    add(val) {
        this.items.push(val)
    }

    remove() {
        if (this.items.length > 0) {
            return this.items.pop()
        }
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length()
    }

    clear() {
        this.items = []
    }
}