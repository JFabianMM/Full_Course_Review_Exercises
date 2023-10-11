function Node(value, next = null) { return { value, next } }

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
    palindrome(){
            let temp = this.head;
            let stack = [];     
            while(temp != null){
               stack.push(temp.value);
               temp = temp.next;
            }    
            temp = this.head;
            while(temp != null){
               if(temp.value != stack.pop()){
                  return false;
               }
               temp = temp.next;
            }
            return true;
         }
}

const palindromeCheck = function(singlyList){
    return singlyList.palindrome();
}

module.exports = {
    SinglyLinkedList: SinglyLinkedList,
    palindromeCheck: palindromeCheck,
};