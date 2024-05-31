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

    // insertFirst
    insertfirst(val) {
        let node = new Node(val)

        if (!this.head) { this.head = node }
        else {
            node.next = this.head
            this.head = node
        }
        this.size++
        return;
    }

    // insertLast
    insertLast(val) {
        let node = new Node(val)
        if (!this.head) { this.head = node }
        else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.size++
        return
    }

    // remove first
    removeFirst() {
        if (!this.head) return
        if (this.size === 1) {
            this.head = null
        } else {
            this.head = this.head.next
        }
        this.size--
    }

    // remove last
    removeLast() {
        if (!this.head) return
        if (this.size === 1) {
            this.head = null
        } else {
            let current = this.head
            let previous
            while (current.next) {
                previous = current
                current = current.next
            }
            previous.next = null
        }
        this.size--
    }

    // get at index
    getAt(index) {
        let current = this.head
        let count = 0
        while (count !== index) {
            current = current.next
        }

        console.log(current.data)
    }

    // insert at
    insertAt(data, index) {
        let node = new Node(data)
        if (index > 0 && index > this.size) {
            return
        }

        if (index === 0) {
            node.next = this.head
            this.head = node
            return
        }

        let current = this.head
        let count = 0
        let previous

        while (count < index) {
            previous = current
            current = current.next
            count++
        }
        node.next = current
        previous.next = node
        // console.log(previous)
        // console.log(current)
        this.size++
        return
    }

    // print LinkedList
    printLinkedListData() {
        let current = this.head

        while (current) {
            console.log(current.data)
            current = current.next
        }
    }
}

const ll = new LinkedList()

ll.insertfirst('hello')
ll.insertfirst('hello2')
ll.insertLast('hello3')
// ll.removeFirst()
// ll.removeLast()

ll.insertLast('hello4')

// console.log(ll)

// ll.getAt(0)

ll.insertAt('hello5', 0)

ll.printLinkedListData()
