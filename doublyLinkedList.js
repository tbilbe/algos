class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let prevTail = this.tail;
            this.tail.next = newNode;
            newNode.prev = prevTail;
            this.tail = newNode;    
        }
        
        this.length++;
        return this;
    }
    pop() {
        if(this.length === 0) return undefined;
        const theChoppedTail = this.tail;
        const newTail = this.tail.prev;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            theChoppedTail.prev = null;
            newTail.next = null;
            this.tail = newTail;    
        }
        this.length--;
        return theChoppedTail;
    }
    shift() {
        if (this.length === 0) return undefined;
        var oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            const newHead = oldHead.next;
            this.head = newHead;
            newHead.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val){
        var newHead = new Node(val);
        if(this.length === 0) {
            this.head = newHead;
            this.tail = newHead;
        } else {
            newHead.next = this.head;
            this.head.prev = newHead;
            this.head = newHead;

        }
        this.length++;
        return newHead;
    }
    get(index) {
        if(index<0 || index>=this.length) return null;
        let current;
        if(index <= (this.length / 2)) {
            let count = 0;
            current = this.head;
            while (count < index) {
                current = current.next;
                count++;
            }
        } else {
            // go from the end
            let count = this.length-1;
            current = this.tail;
            while(count > index) {
                current = current.prev;
                count--;
            }
        }

            return current;
    }

    set(index, newValue) {
        const resetThisNode = this.get(index);
        if(resetThisNode !== null) {
            resetThisNode.val = newValue;
            return true;
        }
        return false;  
    }

    insert(index, val) {
        if(index<0 || index >= this.length) return false;
        if (index === 0) {
            return !!this.unshift(val);
        } else if(index === this.length) {
            return !!this.push(val);
        } else {
            const insertAdjacent = this.get(index);
            const newNode = new Node(val);
            let temp = insertAdjacent.prev;
            newNode.prev = temp;
            newNode.next = insertAdjacent;
            temp.next = newNode;
            insertAdjacent.prev = newNode;
            this.length++;
            return true;    
        }
        
    }

    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index ===0) {
            return this.shift();
        } else if(index === this.length -1) {
            return this.pop();
        } else {
            const removeMe = this.get(index);
            removeMe.prev.next = removeMe.next;
            removeMe.next.prev = removeMe.prev;
            removeMe.next = null;
            removeMe.prev = null;
            this.length--;
            return removeMe;
        }
    }
}

var list = new DoublyLinkedList();
list.push('hey') //0
list.push(9999) //1
list.push('hola') //2
list.push('<3') //3
list.push('LEVEL 9000') //4
list.push('8===D') //5