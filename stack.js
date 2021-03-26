class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        const newNode = new Node(val);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const currentFirst = this.first;
            this.first = newNode;
            newNode.next = currentFirst;
        }
        this.size++;
        return newNode;
    }
    pop(){
        if(this.size === 0) return undefined;
        const newFirst = this.first.next;
        const oldFirst = this.first;
        oldFirst.next = null;
        this.first = newFirst;
        this.size--;
        return oldFirst;
    }
} 