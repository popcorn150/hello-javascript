let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

// 1. Save a key-value pair in localStorage
// 2. Refresh the page. Get the value and log it to the console
// 3. Clear localStorage
// localStorage.setItem("myLeads", "www.bananaFlakes.com/")
// let storage = localStorage.getItem("myLeads")
// localStorage.clear()
// console.log(storage)


inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  renderLeads();
  inputEl.value = "";
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
    <li>
        <a href='${myLeads[i]}' target='_blank'>
            ${myLeads[i]}
        </a>
    </li>
    `;
    console.log(listItems)
  }
  ulEl.innerHTML = listItems;
}
