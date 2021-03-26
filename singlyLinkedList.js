// lists built from nodes
// need data, next

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const nextNode = new Node(val);
        if (!this.head && this.length === 0) {
            this.head = nextNode;
            this.tail = this.head;            
        } else {
            this.tail.next = nextNode;
            this.tail = nextNode
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;

        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) return undefined
        const beheaded = this.head;
        this.head = this.head.next
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return beheaded;
    }

    unshift(val) {
        const newThingy = new Node(val);
        if (!this.head) {
            this.head = newThingy;
            this.tail = this.head;
        } else {
            newThingy.next = this.head;
            this.head = newThingy;

        }
        this.length++;
        return this;
    }
    get(elementNum) {
        if(elementNum < 0 || elementNum >= this.length) return null;
        let count = 0;
        let current = this.head;
        while (count < elementNum) {
            current = current.next;
            count++;
        }
        return current;
    }
    set(value, index) {
        const foundNode = this.get(index);
        if(foundNode) {
            foundNode.val = value;
            return true;
        } else {
            return false;
        }
    }
    insert(value, index) {
        if(index < 0 || index > this.length) {
            return false;
        } else if (index === this.length) {
            return !!this.push(value);
        } else if(index === 0) {
            return !!this.unshift(value);  
        } else {
            const newNode = new Node(value);
            const repoint = this.get(index-1);
            newNode.next = repoint.next;
            repoint.next = newNode;
            this.length++;
            return true;   
        }
    }
    remove(index) {
        if(index<0 || index>=this.length) return false;
        //from the end
        if(index === this.length-1) return !!this.pop();
        //from the start
        if(index ===0) return !!this.shift();
        //from the mid
        const preRemove = this.get(index-1);
        const remove = preRemove.next;
        preRemove.next = remove.next;
        this.length--;
        return remove;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next;
        for(let i=0; i< this.length;i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        return this;
    }

    print() {
        var arr = [];
        var current = this.head;
        while(current) {
            arr.push(current.value)
            current = current.next;
        }
        console.log(arr);
    }
}

var list = new SinglyLinkedList();
list.push('hey') //0
list.push(9999) //1
list.push('hola') //2
list.push('<3') //3
list.push('LEVEL 9000') //4
list.push('8===D') //5