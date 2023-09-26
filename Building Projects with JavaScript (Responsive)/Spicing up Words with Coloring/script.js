function changeWordColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  document.getElementsByTagName(
    "h1"
  )[0].style.color = `rgb(${red}, ${green}, ${blue})`;
}
