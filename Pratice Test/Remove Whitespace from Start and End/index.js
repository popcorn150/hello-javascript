// Remove Whitespace from Start and End
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g;
let result = hello.replace(wsRegex, "");
console.log(result);

/*
-------
Hints
-------
Hint 1
Think of how you can select substrings at the beginning or end of a string.
-------
Hint 2
Think of how you can select whitespace
*/
