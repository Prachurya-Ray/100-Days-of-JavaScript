/*

Programming Question: Longest Word in a String

Q: Write a function findLongestword that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one encountered.

Constraints:
> The input string may contain alphabetic characters, digits, spaces, and punctuation.
> The input string is non-empty.
> The input string may contain multiple words separated by spaces.

Note:
> If the input string is empty or contains only whitespace, the function should return an false.
> The function should ignore leading and trailing whitespace when determining the longest word.

*/

//--------------------------------------------------------------------------------------------------------

h1=document.querySelector('h1');
h1.innerText="Day 1";


function findLongestWord(str){
    if(str.trim().length === 0){  // check if str is empty after trimming
        return "false";
    }

    let arr=str.split(" ");   // Split the string into array of words using space as separator
    
    arr=arr.sort((a,b)=>b.length-a.length);  // Sorting the array based on length of strings  (longest to shortest)

    return arr[0];            // Returning the first element as it's the longest one
}

console.log(
    findLongestWord("I am learning Javascript course on youtube")
);