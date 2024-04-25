/*

Challenge: Factorial Finder

Write a function factorial that takes a non-negative integer num as input and returns its factorial. The factorial of a non-negative integer n, denoted as n!, is the product of all positive integers less than or equal to n. The factorial of 0 is defined as 1.
Your function should work for any non-negative integer input
*/
//--------------------------------------------------------------------------------------------------------

h1=document.querySelector('h1');
h1.innerText="Day 8";

// let factorialFinder = num => {
//     let fact=1;
//     for(let i=1; i<=num; i++){
//         fact=fact*i;
//     }
//     return fact;
// }

let factorialFinder = num => {
    if(num===0 || num===1)
        return 1;

    return num*factorialFinder(num-1);
}

console.log(factorialFinder(5)); // 120