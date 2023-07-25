const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos";
let arrayTodo = [];

function deleteTodo(item) {
  const li = item.target.parentElement;
  li.remove();
  arrayTodo = arrayTodo.filter((toDo) => toDo.id !== parseInt(li.id));
  localStorage.setItem(TODOS_KEY, JSON.stringify(arrayTodo));
}

function writeTodo(whatTodo) {
  const li = document.createElement("li");
  li.id = whatTodo.id;
  console.log(whatTodo.id);
  const span = document.createElement("span");
  span.innerText = ` ${whatTodo.text}`;
  const btn = document.createElement("button");
  btn.innerText = "❌";
  btn.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(btn);
  todoList.appendChild(li);
}

function todoSubmit(event) {
  event.preventDefault();
  const whatTodo = todoInput.value;
  todoInput.value = "";
  const whatTodoObj = {
    text: whatTodo,
    id: Date.now(),
  };
  arrayTodo.push(whatTodoObj);
  writeTodo(whatTodoObj);
  localStorage.setItem(TODOS_KEY, JSON.stringify(arrayTodo));
}
todoForm.addEventListener("submit", todoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  const parsedTodo = JSON.parse(savedTodos);
  arrayTodo = parsedTodo;
  parsedTodo.forEach((item) => writeTodo(item));
}
