//Binary Heaps
// Max Heap
// Root is the maximum

class MaxBinaryHeap {
    constructor() {
        this.value = [41, 39, 33, 18, 27, 12];
    }
    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.value[parentIdx];
            if (element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(55);