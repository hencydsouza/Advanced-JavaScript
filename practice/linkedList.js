class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    insertFirst(data) {
        let node = new Node(data)
        if (this.head === null) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    insertLast(data) {
        let node = new Node(data)
        if (this.head === null) {
            this.head = node
        } else {
            let current = this.head
            while (current.next !== null) {
                current = current.next
            }
            current.next = node
        }
        this.size++
    }

    insertAt(data, index) {
        let node = new Node(data)
        let count = 0

        if (index < 0 || index >= this.size) {
            return
        } else if (index === 0) {
            node.next = this.head
            this.head = node
        } else {
            let current = this.head

            while (count < index - 1) {
                current = current.next
                count++
            }
            node.next = current.next
            current.next = node
        }
        this.size++
    }

    removeFirst() {
        if (this.size === 0) {
            return
        } else {
            this.head = this.head.next
        }
        this.size--
    }

    removeLast() {
        if (this.size === 0) {
            return
        } else {
            let current = this.head

            while (current.next.next !== null) {
                current = current.next
            }
            current.next = null
        }
        this.size--
    }

    removeAt(index) {
        if (index < 0 || index >= this.size) {
            return
        } else if (index === 0) {
            this.head = this.head.next
        } else {
            let current = this.head
            let count = 0

            while (count < index - 1) {
                current = current.next
            }

            current.next = current.next.next
        }
        this.size--
    }
}

let ll = new LinkedList()

ll.insertFirst(10)
ll.insertFirst(20)
ll.insertLast(30)
ll.insertAt(40, 0)

ll.removeAt(5)

// ll.removeFirst()
// ll.removeLast()

console.log(JSON.stringify(ll))