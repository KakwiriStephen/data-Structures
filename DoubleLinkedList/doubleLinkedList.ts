/*A double linked list has two classes
Node Class which contains
-val
-next
-prev

DoublyLinkedlist
-head
-tail
length
*/

class Node{
    constructor(val){
        this.val=val;
        this.next=null;
        this.prev=null;

    }

}

class DoublyLinkedlist{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    push(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next= newNode;
            newNode.prev=this.tail;
            this.tail=newNode;
        }
        this.length++;
        return this;
    }
}
