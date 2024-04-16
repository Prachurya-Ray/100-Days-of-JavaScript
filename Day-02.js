/*

Programming Question: Hash Tag Generator

Q: You are required to implement a function generateHash that generates a hash tag from a given input string. The hash tag should be constructed as follows:

> The input string should be converted to a hash tag format, where each word is capitalized and concatenated together without spaces.
> If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespace, the function should return false. 
> Otherwise, the function should return the generated hash tag prefixed with #.

Write a function generateHash to accomplish this task.

*/

//--------------------------------------------------------------------------------------------------------

h1=document.querySelector('h1');
h1.innerText="Day 2";


function  generateHash(str) {
    if(str.length>280 || str.trim().length===0)
        return false;
    
    str=str.split(" ");

    let new_str=str.map((word)=>{
        return word.replace(word[0],word[0].toUpperCase());
    })

    new_str=`#${new_str.join("")}`;

    return new_str;

}


console.log(generateHash("my name is prachurya ray"));