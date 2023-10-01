const flashcards = document.getElementsByClassName("flashcards")[0];
const createBox = document.getElementsByClassName("create-box")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");
let contentArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

function deleteFlashCards() {
  localStorage.clear();
  flashcards.innerHTML = "";
  contentArray = [];
}

function hideCreateBox() {
  createBox.style.display = "none";
}

function showCreateCardBox() {
  createBox.style.display = "block";
}

contentArray.forEach(divMaker);
function divMaker(text) {
  let div = document.createElement("div");
  let h2_question = document.createElement("h2");
  let h2_answer = document.createElement("h2");

  div.className = "flashcard";

  h2_question.setAttribute(
    "style",
    "border-top:1px solid red; padding: 15px; margin-top: 30px"
  );
  h2_question.innerHTML = text.my_question;

  h2_answer.setAttribute(
    "style",
    "text-align: center; display: none;color: red"
  );
  h2_answer.innerHTML = text.my_answer;

  div.appendChild(h2_question);
  div.appendChild(h2_answer);

  div.addEventListener("dblclick", function () {
    if (h2_answer.style.display == "none") {
      h2_answer.style.display = "block";
    } else {
      h2_answer.style.display = "none";
    }
  });

  flashcards.appendChild(div);
}

function addFlashCard() {
  let flashcard_info = {
    my_question: question.value,
    my_answer: answer.value,
  };

  contentArray.push(flashcard_info);
  localStorage.setItem("items", JSON.stringify(contentArray));

  divMaker(contentArray[contentArray.length - 1]);
  question.value = "";
  answer.value = "";
}
