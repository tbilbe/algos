class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }

      extractMax() {
    const max = this.values[0]
    const end = this.values.pop()
    if (this.values.length > 0) {
      this.values[0] = end
      this.sinkDown()
    }
    return max
  }
  sinkDown() {
    let idx = 0
    const length = this.values.length
    const element = this.values[0]
    while (true) {
      let leftChildIdx = 2 * idx + 1
      let rightChildIdx = 2 * idx + 2
      let leftChild, rightChild
      let swap = null
 
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx]
        if (leftChild > element) {
          swap = leftChildIdx
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx]
        if (
          swap === null && rightChild > element ||
          swap !== null && rightChild > leftChild
        ) {
          swap = rightChildIdx
        }
      }
 
      if (swap === null) break;
      this.values[idx] = this.values[swap]
      this.values[swap] = element
      idx = swap
    }
  }
    bubbleUp() {
        let index = this.values.length - 1;
        const el = this.values[index];
        while (index > 0) {
            let parentIdx = Math.floor((index-1)/2);
            let parent = this.values[parentIdx];
            if (el <= parent) break;
            this.values[parentIdx] = el;
            this.values[index] = parent;
            index = parentIdx;
       }        
    }
}


var maxHeap = new MaxBinaryHeap();
maxHeap.insert(41);
maxHeap.insert(39);
maxHeap.insert(33);
maxHeap.insert(18);
maxHeap.insert(27);
maxHeap.insert(12);
maxHeap.insert(55);