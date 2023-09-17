// Match Characters that Occur Zero or More Times
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/gi; // Change this line
let result = chewieQuote.match(chewieRegex);
console.log(result);
