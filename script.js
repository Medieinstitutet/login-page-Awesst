// Global Variables, username, password
let userName = document.getElementById("userName");
let passWord = document.getElementById("passWord");
let submitBtn = document.getElementById("submitBtn");
let secondPage = document.getElementById("secondPage");
let thirdPage = document.getElementById("thirdPage");
let login = document.getElementById("login");
let logout = document.getElementById("logout");
let loginForm = document.getElementById("loginForm");

// Eventlisteners
submitBtn.addEventListener("click", () => {
  secondPage.style.display = "block";
  thirdPage.style.display = "block";
  login.style.display = "none";
  logout.style.display = "block";
  loginForm.style.display = "none";
});

login.addEventListener("click", () => {
  loginForm.style.display = "flex";
});
logout.addEventListener("click", () => {
  secondPage.style.display = "none";
  thirdPage.style.display = "none";
  logout.style.display = "none";
  login.style.display = "block";
  loginForm.style.display = "none";
});

// localStorage Saving.

//  STICKY HEADER

window.onscroll = function () {
  myFunction();
};
let header = document.getElementById("header");
let sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
