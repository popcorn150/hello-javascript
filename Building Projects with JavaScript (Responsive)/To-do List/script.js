const toDoItems = document.getElementsByClassName("to-do-items")[0];
const input = document.getElementById("input");
const trashIcon = document.getElementById("trash");

input.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    addItem();
  }
});

function addItem() {
  let parentDiv = document.createElement("div");
  let childDiv = document.createElement("div");
  let checkIcon = document.createElement("i");
  let trashIcon = document.createElement("i");

  parentDiv.className = "item";
  parentDiv.innerHTML = '<div>' + input.value + '</div>';

  checkIcon.className = "fa fa-check-square-o";
  checkIcon.style.color = "lightgray";
  checkIcon.addEventListener("click", function () {
    checkIcon.style.color = "limegreen";
  });
  childDiv.appendChild(checkIcon);

  trashIcon.className = "fa fa-trash-o";
  trashIcon.style.color = "darkgray";
  trashIcon.addEventListener("click", function () {
    parentDiv.remove();
  });
  childDiv.appendChild(trashIcon);

  parentDiv.appendChild(childDiv);

  toDoItems.appendChild(parentDiv);

  input.value = "";
}
