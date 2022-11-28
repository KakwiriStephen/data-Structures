//Binary Heaps

// Max Heap

class MaxBinaryHeap {
    constructor() {
        this.value = [];
    }
    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }
}