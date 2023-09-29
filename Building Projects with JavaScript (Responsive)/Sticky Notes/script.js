let container2 = document.getElementsByClassName("container2")[0];
let container3 = document.getElementsByClassName("container3")[0];
let checkIcon = document.getElementById("check-icon");
let xIcon = document.getElementById("x-icon");
let i = 0;

xIcon.addEventListener("click", function () {
  xIcon.style.cursor = "pointer";
  typeNote();
});

checkIcon.addEventListener("click", function () {
  checkIcon.style.cursor = "pointer";
  createNote();
});

function typeNote() {
  if (container3.style.display == "none") {
    container3.style.display = "block";
  } else {
    container3.style.display = "none";
  }
}

function createNote() {
  let noteText = document.getElementById("note-text").value;
  let divElement = document.createElement("div");
  let h1Element = document.createElement("h1");

  h1Element.innerHTML = noteText;

  h1Element.setAttribute(
    "style",
    "width: 250px; height: 250px; font-size: 26px; padding: 25px; margin-top: 10px; over-flow: hidden; box-shadow: 0px 10px 24px 0 rgba(0,0,0,0.75"
  );

  h1Element.style.margin = margin();
  h1Element.style.transform = rotate();
  h1Element.style.background = color();

  h1Element.addEventListener('dblclick', function(){
    h1Element.remove()
  })

  h1Element.addEventListener('mouseenter', function(){
    h1Element.style.transform = 'scale(1.1)'
  })

  h1Element.addEventListener('mouseleave', function(){
    h1Element.style.transform = 'scale(1)'
  })

  divElement.appendChild(h1Element);

  container2.insertAdjacentElement("beforeend", divElement);
  document.getElementById('note-text').value = ''
}

function margin() {
  const randomMargin = ["-5px", "1px", "5px", "10px", "15px", "20px"];
  return randomMargin[Math.floor(Math.random() * randomMargin.length)];
}

function rotate() {
  const randomRotate = [
    "rotate(3deg)",
    "rotate(13deg)",
    "rotate(-1deg)",
    "rotate(-3deg)",
    "rotate(-5deg)",
    "rotate(-10deg)",
  ];
  return randomRotate[Math.floor(Math.random() * randomRotate.length)];
}

function color() {
  const randomColor = [
    "#c2ff3d",
    "#ff3de8",
    "#3dc2ff",
    "#04e022",
    "#bc83e6",
    "#ebb328",
  ];
  if (i > randomColor.length - 1) {
    i = 0;
  }
  return randomColor[i++];
}
