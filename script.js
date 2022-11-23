// Global Variables, userName, passWord
let submitBtn = document.getElementById("submitBtn");
let aboutUs = document.getElementById("aboutUs");
let products = document.getElementById("products");
let login = document.getElementById("login");
let logout = document.getElementById("logout");
let loginForm = document.getElementById("loginForm");
const userName = document.getElementById("userName");
const passWord = document.getElementById("passWord");

const users = [
  { userName: "janne", passWord: "test" },
  { userName: "jakob", passWord: "dahlberg" },
];

// Eventlisteners
submitBtn.addEventListener("click", () => {
  let user = users.find(
    (user) =>
      user.userName === userName.value && user.passWord === passWord.value
  );
  if (user) {
    loginUser();
    localStorage.setItem("userLoggedIn", user.userName);
  } else {
    alert("invalid");
  }
});
const checkPassword = (passWord) => {
  let specialChars = ["$", "€", 1 - 9, "@", "!", "#", "¤", "%", "/", "(", ")"];
  if (passWord.value.match(specialChars)) {
    return true;
  } else {
    return false;
  }
};

const loginUser = () => {
  aboutUs.style.display = "block";
  products.style.display = "block";
  login.style.display = "none";
  logout.style.display = "block";
  loginForm.style.display = "none";
};

if (localStorage.getItem("userLoggedIn") === "true") {
  loginUser();
}

login.addEventListener("click", () => {
  loginForm.style.display = "flex";
});
logout.addEventListener("click", () => {
  logOutUser();
});

const logOutUser = () => {
  aboutUs.style.display = "none";
  products.style.display = "none";
  logout.style.display = "none";
  login.style.display = "block";
  loginForm.style.display = "none";
  localStorage.removeItem("userLoggedIn");
};

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
