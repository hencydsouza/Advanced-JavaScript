class Queue {
    constructor() {
        this.queue = []
    }

    add(val) {
        this.queue.push(val)
    }

    remove(val) {
        return this.queue.shift()
    }

    getSize() {
        return this.queue.length
    }
}

var q = new Queue()

q.add("hello")
q.add("hello2")

console.log(q.queue)
console.log(q.remove())
console.log(q.queue)
console.log(q.getSize())