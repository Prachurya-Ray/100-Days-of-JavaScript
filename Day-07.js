/*

Write a function findMax that takes an array of numbers as input and returns the maximum number in the array.

*/

//--------------------------------------------------------------------------------------------------------

h1=document.querySelector('h1');
h1.innerText="Day 7";

const findMax = function(arr) {
    let maxNum=Math.max(...arr);
   return maxNum;

}

console.log(findMax ([1,2,3,4,-5,2,3,100])); 