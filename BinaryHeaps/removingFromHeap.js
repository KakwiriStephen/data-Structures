//Extracting the maximum in a max-heap or the minimum in a min-heap then resort
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

    //extract Max
    extractMax(){
        const max = this.value[0];
        const end=this.values.pop();
        this.values[0] = end;
        return max;
    }
    sinkDown(){
        let idx = 0;
        const length=this.values.length;
        const element=this.values[0];

        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild=this.values[leftChildIdx]
                if(leftChild > element){
                    swap=leftChildIdx
                }
            }
            if (rightChildIdx < length){
                rightChild=this.values[rightChildIdx];
                if(swap===null && rightChild > element) ||
                 (swap !== && rightChild > leftChild){
                    swap = rightChildIdx
                 }
                 if(swap === null) break;
                 this.values[idx]=this.values[swap];
                 this.values[swap]=element;
                 idx=swap

            }
        }
    }

}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(3);
heap.insert(27);
heap.insert(15);
heap.insert(12);