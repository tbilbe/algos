class Node {
    constructor(val, priority) {
        this.value = val;
        this.priority = priority;
    }
}

class PriorityQ {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        const newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    dequeue() {
        const min = this.values[0]
        const end = this.values.pop()
        if (this.values.length > 0) {
          this.values[0] = end
          this.sinkDown()
        }
        return min
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
            if (leftChild.prority < element.prority) {
              swap = leftChildIdx
            }
          }
          if (rightChildIdx < length) {
            rightChild = this.values[rightChildIdx]
            if (
              swap === null && rightChild.prority < element.prority ||
              swap !== null && rightChild.prority < leftChild.prority
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
            if (el.priority >= parent.priority) break;
            this.values[parentIdx] = el;
            this.values[index] = parent;
            index = parentIdx;
       }        
    }
}

let ER = new PriorityQ();

ER.enqueue('common cold', 2);
ER.enqueue('high fever', 4);
ER.enqueue('gunshot wound', 8);
ER.enqueue('broken leg', 6);
ER.enqueue('shark bite', 7);
ER.enqueue('glass in foot', 4);