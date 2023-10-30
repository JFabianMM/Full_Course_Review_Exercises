class Node {
     constructor(val){
         this.data = val;
         this.next = null;
     }
}

class SinglyLinkedList{
    constructor(){
        this.head = null
    }
    push(new_data){
         let new_node = new Node(new_data);
         new_node.next = this.head;
         this.head = new_node;
    }
    isPalindrome(){
        let head=this.head;
        let left;
        function isPalindromeUtil(right) {
            left = head;
            if (right == null){
                return true;
            }
            if (isPalindromeUtil(right.next) == false){
                return false;
            }
            let isPal1=false; 
            if(right.data == left.data){
                isPal1=true
            }
            left = left.next;
            return isPal1;
        }
        return isPalindromeUtil(head);
    }
} 

const palindromeCheck = function(singlyList){
    return singlyList.isPalindrome();
}

module.exports = {
    SinglyLinkedList: SinglyLinkedList,
    palindromeCheck: palindromeCheck,
};