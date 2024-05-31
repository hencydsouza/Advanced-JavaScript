class MinHeap {
    constructor() {
        this.heap = [];
    }

    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2)
    }

    hasLeftChild(index) {
        return this.getLeftChildIndex(index) < this.heap.length;
    }

    hasRightChild(index) {
        return this.getRightChildIndex(index) < this.heap.length;
    }

    hasParent(index) {
        return this.getParentIndex(index) <= 0;
    }

    rightChild(index) {
        return this.heap[this.getRightChildIndex(index)]
    }

    leftChild(index) {
        return this.heap[this.getLeftChildIndex(index)]
    }

    parent(index) {
        return this.heap[this.getParentIndex(index)]
    }

    swap(indexOne, indexTwo) {
        [this.heap[indexOne], this.heap[indexTwo]] = [this.heap[indexTwo], this.heap[indexOne]]
    }

    peak() {
        return this.heap.length === 0 ? null : this.heap[0]
    }

    remove() {
        if (this.heap.length === 0) return null;

        const item = this.heap[0]
        this.heap[0] = this.heap[this.heap.length - 1]
        this.heap.pop()
        this.heapifyDown();
        return item;
    }

    add(item) {
        this.heap.push(item)
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1

        while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
                smallChildIndex = this.getRightChildIndex(index)
            }
            if (this.heap[index] < this.heap[smallChildIndex]) {
                break;
            } else {
                this.swap(index, smallChildIndex)
            }
        }
    }

    printHeap() {
        var heap = `${this.heap[0]}`
        for (var i = 1; i < this.heap.length; i++) {
            heap += ` ${this.heap[i]}`
        }
        console.log(heap)
    }
}

let heap = new MinHeap()

heap.add(10);
heap.add(15);
heap.add(30);
heap.add(40);
heap.add(50);
heap.add(100);
heap.add(40);
heap.remove()

heap.printHeap()