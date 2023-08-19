let hands = ["rock", "paper", "scissors"];

// Create a function that returns a random item from the array
function returnsPlayer1Hand() {
  let playerRandomIndex = Math.floor(Math.random() * 3);
  return hands[playerRandomIndex];
}
console.log(returnsPlayer1Hand());
