function changeColor() {
  const hex_numbers = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let hexCode = "";
  for (i = 0; i < 6; i++) {
    const random_index = Math.floor(Math.random() * hex_numbers.length);
    hexCode += hex_numbers[random_index];
    // console.log(hexCode)
  }
  const red = Math.floor(255);
  const green = Math.floor(255);
  const blue = Math.floor(255);
  document.getElementsByTagName(
    "h2"
  )[0].style.color = `rgb(${red}, ${green}, ${blue})`;
  document.getElementById("hex-code").innerHTML = hexCode;
  document.getElementsByTagName("body")[0].style.background = `#${hexCode}`;
}
