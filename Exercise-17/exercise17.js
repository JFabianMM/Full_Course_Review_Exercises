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

const palindromeCheck = function(singlyList){
    return singlyList.palindrome();
}

module.exports = {
    SinglyLinkedList: SinglyLinkedList,
    palindromeCheck: palindromeCheck,
};
