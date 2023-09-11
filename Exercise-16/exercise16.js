function Node(value, next = null) { return { value, next } }

class SinglyLinkedList{
    constructor(){
        this.head = null           // Here is saved the reference head
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
    findLoop(){
        let set = new Set();
        let current = this.head;
        let index=null;
        let loop=null;
        while(current){
            if(set.has(current)){
                loop=true;
                break
            }else{
                set.add(current)
            }
            current = current.next
        }
        if (loop){
            let counter=0;
            for (const value of set) {
                if (current== value) {
                  break;
                }
                counter ++;
            }
            index=counter;
        }
        return index;
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