/*
Challenge: Calculate the Average

Write a function called calculateAverage that takes an array of numbers as input and returns the average of those numbers.

Your function should:
>Accept an array of numbers as input.
>Calculate the sum of all the numbers in the array.
>Divide the sum by the total number of elements in the array to find the average.
>Return the calculated average.
*/
//--------------------------------------------------------------------------------------------------------

h1=document.querySelector('h1');
h1.innerText="Day 9";

function calculateAverage(arr){
    let total=arr.reduce( (acc,curr) => acc + curr, 1);
    return total/arr.length
}

console.log(calculateAverage([1,2,3,4,5])); //should return 3