const messageInput = document.getElementById("message-input");
const popup = document.getElementById('pop-up')

messageInput.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    getMessage();
  }
});

function popUp(){
  console.log('you just clicked a pop-up message!')
}

function getMessage() {
  document.getElementById("message-output").innerHTML = messageInput.value;
  messageInput.value = "";
}
