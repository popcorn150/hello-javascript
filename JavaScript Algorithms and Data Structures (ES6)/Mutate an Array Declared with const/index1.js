// Prevent Object Mutation
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS);
  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
    // MATH_CONSTANTS.pie = 5.20
    // console.log(MATH_CONSTANTS)
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
