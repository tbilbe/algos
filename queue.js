 // cant use an array here cos of reindexing all the time!

 class Node {
     constructor(val) {
         this.value = val;
         this.next = null;
     }

 }

 class Queue{
     constructor() {
         this.first = null;
         this.last = null;
         this.size = 0;
     }
    // add to the end 
    enqueue(val) {
        const newNode = new Node(val);
        if(this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const temp = this.last;
            temp.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return newNode;
    }
    // remove from the beginning
    dequeue() {
        if (this.size === 0) return undefined;
        const snipped = this.first;
        this.first = snipped.next;
        snipped.next = null;
        this.size--;

        return snipped; 
    }
 }