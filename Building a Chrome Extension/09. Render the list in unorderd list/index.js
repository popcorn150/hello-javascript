const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
let myLeads = ["dummyLead1", "dummyLead2", "dummyLead3"];
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  console.log(myLeads);
});

for (let i = 0; i < myLeads.length; i++) {
  ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
}
