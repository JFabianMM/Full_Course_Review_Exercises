function Node(value, next = null) { return { value, next} }

class SinglyLinkedList{
    constructor(){
        this.head = null    
    }
    push(val){
        let newNode = Node(val);
        if(!this.head){               
            this.head = newNode;
            return this
        } 
        let nod=this.head;
        while (nod.next!=null){
            if (nod.next==null){
                break
            }
            nod=nod.next;
        } 
        nod.next=newNode;
        return this
    }
    findLoop() {
        let slowPointer = this.head, fastPointer = this.head;
        while(slowPointer!=null && fastPointer!=null && fastPointer.next!=null){
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next.next;
            if(slowPointer==fastPointer){
                break;
            }
        }
        if(slowPointer!=fastPointer){
            return null;
        }
        slowPointer = this.head;
        let count=0;
        while(slowPointer!=fastPointer){
            count++;
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next;
        }
        return count;
    }    
    loop(index){
        let count=0;
        let indexNode=null;
        let lastNode=null;
        let nod=this.head;
        while (nod || count<20){
            if (count==index){
                indexNode=nod;
            }
            if (nod.next==null){
                lastNode=nod;
                break
            }
            nod=nod.next;
            count++;
        }
        if (indexNode && lastNode){
            lastNode.next=indexNode;
        } 
        return this
    }
}

module.exports = SinglyLinkedList