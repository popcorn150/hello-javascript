// Match Characters that Occur One or More Times
let difficultSpelling = "Mississippi";
let myRegex = /s+/gi;
let result = difficultSpelling.match(myRegex);
console.log(result)