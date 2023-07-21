const logoutBtn = document.getElementById("logout");

function logoutEvent() {
  localStorage.clear();
}

logoutBtn.addEventListener("click", logoutEvent);
