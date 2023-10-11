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
    findLoop(){
        let loop=null;
        let current=this.head;
        let index=0;
        while (current != null){
            if (current.flag == 1){
                loop= true;
                break;
            }
            current.flag = 1;
            current = current.next;
        }
        if (loop){
            let nod=this.head;
            while (nod!=current){
                  index++;
                  nod=nod.next;
            } 
            return index;
        }    
        return null;
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