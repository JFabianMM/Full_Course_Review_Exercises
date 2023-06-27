// // **************************** //
// // Exercise 23
// // **************************** //

// 23. Create a script that will calculate the first N prime numbers.
//      a. N must be received as a command-line argument
//      b. Using ASCII characters create an animated progress bar.
//          i. The bar must fill up as work is completed
//          ii. The current completed percentage must be displayed to the right of the
//              bar.
//          iii. Use different colors for the bar’s foreground and background as well as
//               for the numerical indicator on the right
//      c. Display the results when done

// NOTE: Its exepected a command like: $node exercise23.js number
//       where number is the number of first prime numbers

const process = require("process")
const rdl = require("readline")

let n;
if (process.argv.length >2) {
    n = (process.argv[2] || 'Default');
    if (n>0){
    }else{
        console.log('Its exepected a command like: $node exercise23.js number');
        process.exit(1);    
    }
  }else{
    console.log('Its exepected the command like: $node exercise23.js number');
    process.exit(1);
  }

console.clear();
let cursor=0;
let size=100;
process.stdout.write("\x1B[?25l");
rdl.cursorTo(process.stdout, cursor, cursor+2);
process.stdout.write("[");
for (let i = 0; i < size; i++) {
    rdl.cursorTo(process.stdout, i+1, cursor+2);
    process.stdout.write("-");
}
rdl.cursorTo(process.stdout, size+1, cursor+2);
process.stdout.write("\x1b[34m]\x1b[89m");

rdl.cursorTo(process.stdout, size+5, cursor+2);
process.stdout.write("0");
let counter=0;
let i=0;
let numbers=[];
rdl.cursorTo(process.stdout, size+1, cursor+2);
process.stdout.write("-]");
while(counter<n){
    i++;
    let flag = 0;
    let percentage=0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    
    if (i > 1 && flag == 0) {
        percentage=Math.ceil((counter/n)*100);
        rdl.cursorTo(process.stdout, percentage+1, cursor+2);
        if (percentage>50){
            process.stdout.write("\x1b[42m=>\x1b[49m");
            rdl.cursorTo(process.stdout, size+5, cursor+2);
            process.stdout.write(`${percentage}%`);

        }else{
            process.stdout.write("\x1b[91m=>\x1b[39m");
            rdl.cursorTo(process.stdout, size+5, cursor+2);
            process.stdout.write(`${percentage}%`);
        }
        
        counter++;
        numbers.push(i);
    }
}
rdl.cursorTo(process.stdout, 0, cursor+4);
console.log('Prime numbers: ', numbers);
process.stdout.write("\x1B[?25h");







