// 初始變數
let listArea = document.querySelector("#listed-area");
let list = document.querySelector("#my-todo");
let doneList = document.querySelector("#done-list");
let addBtn = document.querySelector("#add-btn");
let input = document.querySelector("#new-todo");

// 資料
const todos = [
  "Hit the gym",
  "Read a book",
  "Buy eggs",
  "Organize office",
  "Pay bills",
];
for (let todo of todos) {
  addItem(todo);
}

// 函式
function addItem(text) {
  const newItem = document.createElement("li");
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `;
  list.appendChild(newItem);
}
function addDoneItem(text) {
  const newItem = document.createElement("li");
  newItem.innerHTML = `
    <label for="todo" class='checked'>${text}</label>
    <i class="delete fa fa-trash"></i>
  `;
  doneList.appendChild(newItem);
}

// input值輸入
// 功能1: trim()避免空白輸入
// input重置
addBtn.addEventListener("click", function () {
  let inputValue = input.value.trim();
  if (inputValue.length > 0) {
    addItem(inputValue);
    input.value = "";
  }
});
// 功能2: Enter鍵
// trim()避免空白輸入
// input重置
input.addEventListener("keyup", function (event) {
  let inputValue = input.value.trim();
  if (event.key === "Enter" && inputValue.length > 0) {
    addItem(inputValue);
    input.value = "";
  }
});

listArea.addEventListener("click", function (event) {
  const target = event.target;
  const parentElement = target.parentElement;

  if (target.classList.contains("delete")) {
    parentElement.remove();
  } else if (target.tagName === "LABEL") {
    target.classList.toggle("checked");
    addDoneItem(target.textContent);
    parentElement.remove();
  }
});
