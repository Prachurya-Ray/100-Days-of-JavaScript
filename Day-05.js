/*

Programming Question: Sort an Array

Write a function to sort an array of numbers in an ascending order.

Example usage:

Todo Requirements:
> The function should take an array of numbers as input.
> It should return a new array with the numbers sorted in ascending order.
> The original array should remain unchanged.
> You are not allowed to use the built-in sort() method.

*/

//--------------------------------------------------------------------------------------------------------

h1=document.querySelector('h1');
h1.innerText="Day 5";

const sortAscending = (arr)=>{  
    let newArr = [...arr]; // Create a copy of the array to avoid modifying the input array
    let n = newArr.length;
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (newArr[j] > newArr[j + 1]) {
                // Swap elements
                [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
            }
        }
    }
    
    return newArr;

};

console.log(sortAscending ([5, 3, 1, 10, 8])); // Output: [1, 3, 5, 8]