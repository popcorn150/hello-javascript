// Use Recursion to Create a Countdown
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countDownArray = countdown(n - 1);
    countDownArray.unshift(n);
    return countDownArray;
  }
}
console.log(countdown(1))
