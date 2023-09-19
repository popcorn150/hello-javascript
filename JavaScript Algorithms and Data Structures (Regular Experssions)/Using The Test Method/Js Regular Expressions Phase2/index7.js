// Specify Only the Lower Number of Matches
let haStr = "Hazzzzah";
let haRegex = /haz{4,}ah/i;
let result = haRegex.test(haStr);
console.log(result);
