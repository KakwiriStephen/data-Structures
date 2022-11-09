//pushing a node to end of a list

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class singlyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
            var newNode = new Node(val);
            if (!this.head) {
                this.head = newNode;
                this.tail = this.head;
            } else {
                this.tail.next = newNode;
                this.tail = newNode;
            }
            this.length++;
            return this;
        }
        //method to traverse a list
        // traverse() {
        //     var current = this.head;
        //     while (current) {
        //         current = current.next;
        //     }

    // }

    //popping a node  in a list
    pop() {
        if (!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length == 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
}
var list = new singlyLinkedList();
list.push("Hello");