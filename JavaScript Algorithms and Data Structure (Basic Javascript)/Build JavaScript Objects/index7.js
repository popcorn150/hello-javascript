// Using Objects for Lookups
// -----------------------------------
// Switch statement
function phoneticLookup(val) {
  let result = "";
  switch (val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }
  return result;
}
phoneticLookup("charlie");

// Object
const lookup = {
  alpha: "Adams",
  bravo: "Boston",
  charlie: "Chicago",
  delta: "Denver",
  echo: "Easy",
  foxtrot: "Frank",
};
const val = "charlie";
const result = lookup[val];
console.log(result);

// Joint Codes
function phoneticLookup(val) {
  let result = "";
  const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };
  result = lookup[val];
  return result;
}
console.log(phoneticLookup("delta"));
