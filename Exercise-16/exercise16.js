
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
    getLength(){
        let set = new Set();
        let current = this.head;
        let count=0;
        while (current && count<20){
            count++;
            if(set.has(current)){
                return count
            }else{
                set.add(current)
            }
            if (current.next==null){
                break
            }
            current=current.next;
        } 
        return count
    }
    findLoop(){
        let set = new Set();
        let current = this.head;
        let count=0;
        let index=null;
        let loop=null;
        let lastNode=null;
        while(current){
            count++
            if(set.has(current)){
                loop=true;
                break
            }else{
                set.add(current)
            }
            current = current.next
        }
        if (loop){
            lastNode=current;
            current=this.head;
            for (let i=0; i<count;i++){
                if (current == lastNode){
                    index = i;
                    return index
                }
                current = current.next
            }
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
    palindrome(){
        let set = new Set();
        let values=[];
        let current = this.head;
        let count=0;
        while (current && count<20){
            count++;
            if(set.has(current)){
                return false
            }else{
                values.push(current.value);
                set.add(current)
            }
            if (current.next==null){
                break
            }
            current=current.next;
        } 
        let it= Math.floor(count / 2);
        for (let i=0; i<it;i++){
            let val1=values[i];
            let val2=values[count-1-i];
            if (val1==val2){
            }else{
                return false;
            }
        }
        return true
    }
}

module.exports = SinglyLinkedList