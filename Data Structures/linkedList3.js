class Node {
    constructor(data, next = null, prev = null) {
        this.data = data
        this.next = next
        this.prev = prev
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    // insert first
    insertFirst(data) {
        var node = new Node(data)
        if (!this.head) this.head = node
        else {
            this.head.prev = node
            node.next = this.head
            this.head = node
        }
        this.size++
        return
    }

    // insert last
    insertLast(data) {
        var node = new Node(data)
        if (!this.head) this.head = node
        else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            node.prev = current
            current.next = node
        }
        this.size++
        return
    }

    // remove first
    removeFirst() {
        if (!this.head) return
        let current = this.head.next
        current.prev = null
        this.head = current
        this.size--
        return
    }

    // remove last
    removeLast() {
        if (!this.head) return
        let current = this.head
        while (current.next) {
            current = current.next
        }
        current = current.prev
        current.next = null
        this.size--
        return
    }

    // insert at 
    insertAt(data, index) {
        var node = new Node(data)
        if (index > 0 && index > this.size) return
        if (index === 0) {
            node.next = this.head
            this.head = node
        } else {
            let current = this.head
            let count = 0
            let previous

            while (count < index) {
                previous = current
                current = current.next
                count++
            }
            node.next = current
            node.prev = previous
            previous.next = node


        }
        this.size++
    }

    // print
    printLinkedListData() {
        let current = this.head
        while (current) {
            console.log(current.data)
            current = current.next
        }
    }
}

const ll = new LinkedList()

ll.insertFirst('hello')
ll.insertFirst('hello2')
ll.insertLast('hello3')
// ll.removeFirst()
// ll.removeLast()
ll.insertAt('hello4', 3)

console.log(ll)
ll.printLinkedListData()