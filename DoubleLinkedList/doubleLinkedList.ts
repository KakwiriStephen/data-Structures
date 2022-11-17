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

   //pop method
    pop(){
        if(!this.head) return undefined;
        var poppedNode=this.tail;
        if(this.length===1){
            this.head=null;
            this.tail=null;
        }else{
            this.tail=poppedNode.prev;
            this.tail.next=null;
            poppedNode.prev=null
        }
        this.length--;
        return poppedNode;
    } 
    //shift method
    shift(){
        if (this.length===0) return undefined;
        var oldHead=this.head;
        if(this.length===1){
            this.head=null;
            this.tail=null;
        }
        this.head=oldHead.next;
        this.head.prev=null;
        oldHead.next=null;
        this.length--;
        return oldHead

    }

    //Umshift method
    unshift(val){
        var newNode=new Node(val);
        if (this.length===0){
            this.head=newNode;
            this.tail=newNode;
        }else{
            this.head.prev=newNode;
            newNode.next = this.head;
            this.head=newNode;
        }
        this.length++;
        return this
    }

    //get method
    get(index){
        if(index<0 || index >=this.length) return null;
        if(index <= this.length/2){
            var count = 0;
            var current = this.head;
            while(count != index){
                current=current.next;
                count ++;
            } return current;
        }else{
            var count = this.length -1;
            var current=this.tail;
            while(count !== index){
                current=current.prev;
                count--;
            }
            return current;
        }
    }
    //set
    //setting the value of a node

    set(index, val){
        var foundNode = this.get(index);
        if (foundNode != null){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    //insert

    insert(index, val){
        if (index < 0 || index >= this.length) return false;
        if (index === 0) return this.unshift(val);
        if (index === this.length) return this.push(val);

        var newNode = new Node(val);
        var beforeNode = this.get(index-1);
        var afterNode = beforeNode.next;

        beforeNode.next=newNode;
        newNode.prev=beforeNode;
        newNode.next=afterNode;
        afterNode.prev=newNode;
        this.length++;
        return true;
    }

}
