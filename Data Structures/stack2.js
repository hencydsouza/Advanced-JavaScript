class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    push(val) {
        var node = new Node(val)
        if (!this.first) {
            this.first = node
            this.last = node
        } else {
            var temp = this.first
            this.first = node
            this.first.next = temp
        }
        return ++this.size
    }

    pop() {
        if (!this.first) return null
        var temp = this.first
        if (this.first === this.last) this.last = null
        this.first = this.first.next
        this.size--
        return temp.value
    }
}

var stack = new Stack()
stack.push("val")
stack.push("val2")

console.log(stack.first)
console.log(stack.pop())