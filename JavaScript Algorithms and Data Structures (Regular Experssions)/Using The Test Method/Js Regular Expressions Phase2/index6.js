// Specify Upper and Lower Number of Matches
let ohStr = "Ohhh no";
let ohRegex = /oh{3,6}\sno/i;
let result = ohRegex.test(ohStr);
console.log(result);
