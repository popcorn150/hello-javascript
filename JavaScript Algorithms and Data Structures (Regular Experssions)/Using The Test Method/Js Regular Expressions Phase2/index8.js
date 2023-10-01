// Specify Exact Number of Matches
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/i;
let result = timRegex.test(timStr);
console.log(result);
