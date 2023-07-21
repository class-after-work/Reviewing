const loginBtn = document.querySelector("#login");
const loginValue = document.querySelector("#login-form input");
const form = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASS = "hidden";
const USER_NAME = "names";

function loginEvent(event) {
  const username = loginValue.value;
  event.preventDefault();
  localStorage.setItem("USER_NAME", username);
  form.classList.add(HIDDEN_CLASS);
  showGreeting(username);
}

function showGreeting(tomato) {
  greeting.classList.remove(HIDDEN_CLASS);
  greeting.innerText = `Hello! ${tomato}`;
}

const savedName = localStorage.getItem("USER_NAME");

if (savedName === null) {
  form.classList.remove(HIDDEN_CLASS);
  loginBtn.addEventListener("click", loginEvent);
} else {
  form.classList.add(HIDDEN_CLASS);
  showGreeting(savedName);
}
