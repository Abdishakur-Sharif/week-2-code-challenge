let shopping_list = [];

document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#create-shopping-input");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    buildAddItem(e.target.new_item.value);
    form.reset();
  });
});

const container = document.getElementById("shop_list");

function buildAddItem() {
  container.innerHTML = "";
  shopping_list.map((item) => {
    const li = document.createElement("li");
    const marked = document.createElement("button");
    marked.textContent = "Mark Purchased";
    marked.addEventListener("click", togglePurchased);
    li.innerHTML = item;
    li.appendChild(marked);
    container.appendChild(li);
  });
  saveData();
}

function addItem() {
  let input = document.querySelector("#new_item");
  let value = input.value;
  if(value !== ""){
  shopping_list.push(value);
  }
  saveData();
  buildAddItem();
}
function togglePurchased(e) {
  const li = e.target.parentElement;
  console.log(li);
  li.classList.toggle("purchased");
  saveData();
}

function clearList() {
  shopping_list = [];
  localStorage.setItem("data", "");
  buildAddItem();
}

function saveData() {
  localStorage.setItem("data", container.innerHTML);
}
function showItem() {
  container.innerHTML = localStorage.getItem("data");
}
showItem();

