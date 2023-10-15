let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabBtn = document.getElementById("tab-btn");

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads = JSON.parse(localStorage.getItem("myLeads"));
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

function render(leads) {
//   let listItems = "";
  ulEl.innerHTML = ""
  for (let i = 0; i < leads.length; i++) {
    const list = document.createElement(`li`);
    list.innerHTML = `<a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>`;
    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener('click', ()=> {
        const result = leads.filter(notLeads)
        function notLeads(item){
            return item != leads[i]
        }
        localStorage.setItem("myLeads", JSON.stringify(result));
        myLeads = JSON.parse(localStorage.getItem("myLeads"));
        render(result)
    })
    list.appendChild(deleteButton)
    ulEl.appendChild(list)
    // listItems += `
    //         <li>
    //         <button>Delete</button>
    //             <a target='_blank' href='${leads[i]}'>
    //                 ${leads[i]}
    //             </a>
    //         </li>
    //     `;
  }
//   ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});
