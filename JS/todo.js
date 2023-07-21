const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

function writeTodo(whatTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = `I Need to ${whatTodo}`;
  todoList.appendChild(li);
}

function todoSubmit(event) {
  event.preventDefault();
  const whatTodo = todoInput.value;
  localStorage.setItem("todos", JSON.stringify(whatTodo));
  todoInput.value = "";
  writeTodo(whatTodo);
}

todoForm.addEventListener("submit", todoSubmit);
