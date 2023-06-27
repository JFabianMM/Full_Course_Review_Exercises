// // **************************** //
// // Exercise 17
// // **************************** //

// 17. Given a single linked list as input, Determine if 
//     the contents is a palindrome.    

// const SinglyLinkedList = require('../Exercise-16/exercise16');

// let singlyList1=new SinglyLinkedList();

// singlyList1.push(0);
// singlyList1.push(1);
// singlyList1.push(2);
// singlyList1.push(3);
// singlyList1.push(4);
// singlyList1.push(5);
// singlyList1.push(7);
// singlyList1.push(5);
// singlyList1.push(4);
// singlyList1.push(3);
// singlyList1.push(2);
// singlyList1.push(1);
// singlyList1.push(0);


const palindromeCheck = function(singlyList){
    let len = singlyList.length;
    let it= Math.floor(len / 2);
    let palindrome; 
    console.log('it: ', it);
    for (let i=0; i<it;i++){
        let node1=singlyList.get(i);
        let node2=singlyList.get(len-1-i);
        if (node1.val==node2.val){
            palindrome=true;
        }else{
            palindrome=false;
            break;
        }        
    }
    return palindrome;
}

// let palindrome= palindromeCheck(singlyList1);
// console.log('palindrome: ', palindrome);

// function printListData(){
//     let count=0;
//     let n = singlyList1.get(0);
//     while (n != null && count<20) {
//         count++;
//         // console.log('n', n);
//         // console.log('count:', count);
//         n = n.next;
//     }
// }

// printListData();

module.exports = palindromeCheck