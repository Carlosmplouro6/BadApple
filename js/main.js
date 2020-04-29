const loginButton = document.getElementsByClassName("login");
const loginSection = document.getElementsByClassName("loginSection");
const buttonsSection = document.getElementsByClassName("buttons");

loginButton[0].addEventListener("click", () => {
  showLogin();
});

function showLogin() {
  loginSection[0].classList.toggle("hidden");
  buttonsSection[0].classList.toggle("hidden");
}
