// Given a number n. Count the number of digits in n which evenly divide n. Return an integer, total number of digits of n which divides n evenly.

// Note :- Evenly divides means whether n is divisible by a digit i.e. leaves a remainder 0 when divided.

let count = 0;

function num(n){
    let digit;
    while(n>0){
        digit = n % 10;
        n = Math.floor(n / 10);
        // n /= 10;
        // console.log(digit);
        if(digit !== 0 && n % digit === 0 ){
            count++;
        }
    }
    return count;
}

console.log(num(1221))

// function countDivisibleDigits(n) {
//     // Handle negative numbers by considering the absolute value
//     n = Math.abs(n);
//     let originalN = n; // Keep a copy of the original number
//     let count = 0;

//     while (n > 0) {
//         // Extract the last digit
//         let digit = n % 10;
//         // Remove the last digit from the number
//         n = Math.floor(n / 10);
        
//         // Avoid division by zero and check if originalN is divisible by this digit
//         if (digit !== 0 && originalN % digit === 0) {
//             count++;
//         }
//     }
    
//     return count;
// }

// // Example usage
// console.log(countDivisibleDigits(1221));  // Output: 3
// console.log(countDivisibleDigits(12345)); // Output: 3
// console.log(countDivisibleDigits(0));     // Output: 0
// console.log(countDivisibleDigits(-252));  // Output: 2
