class Heap {
    constructor() {
        this.data = []
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2)
    }

    getLeftChildIndex(index) {
        return index * 2 + 1
    }

    getRightChildIndex(index) {
        return index * 2 + 2
    }

    swap(indexOne, indexTwo) {
        [this.data[indexOne], this.data[indexTwo]] = [this.data[indexTwo], this.data[indexOne]]
        // let temp = this.data[indexOne]
        // this.data[indexOne] = this.data[indexTwo]
        // this.data[indexTwo] = temp
    }

    push(item) {
        this.data.push(item)
        this.heapifyUp()
    }

    heapifyUp() {
        let index = this.data.length - 1

        while (this.data[index] > this.data[this.getParentIndex(index)]) {
            this.swap(index, this.getParentIndex(index))

            index = this.getParentIndex(index)
        }
    }

    poll() {
        let item = this.data[0]
        this.data[0] = this.data[this.data.length - 1]
        this.data.pop()
        this.heapifyDown()
        return item
    }

    heapifyDown() {
        let index = 0

        while (this.data[this.getLeftChildIndex(index)] !== undefined) {
            let biggestChildIndex = this.getLeftChildIndex(index)

            if (this.data[this.getRightChildIndex] !== undefined && this.data[this.getRightChildIndex(index)] > this.data[this.getLeftChildIndex(index)]) {
                biggestChildIndex = this.getRightChildIndex(index)
            }

            if (this.data[index] < this.data[biggestChildIndex]) {
                this.swap(index, biggestChildIndex)
                index = biggestChildIndex
            } else {
                return;
            }
        }
    }
}

const heap = new Heap()

heap.push(25)
heap.push(5)
heap.push(48)
heap.push(78)
heap.push(98)
heap.push(44)
// heap.poll()

console.log(heap.data)