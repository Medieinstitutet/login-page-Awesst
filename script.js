// Global Variables, userName, passWord
let submitBtn = document.getElementById("submitBtn");
let aboutUs = document.getElementById("aboutUs");
let products = document.getElementById("products");
let login = document.getElementById("login");
let logout = document.getElementById("logout");
let loginForm = document.getElementById("loginForm");
const userName = document.getElementById("userName");
const passWord = document.getElementById("passWord");
let registerBtn = document.getElementById("registerBtn");
let errorMsg = document.getElementById("error-msg");
let headline = document.getElementById("headline");

const users = [
  { userName: "janne", passWord: "test" },
  { userName: "jakob", passWord: "dahlberg" },
];

// localStorage.setItem("users", JSON.stringify(users));

// localStorage.setItem(users);
// Eventlisteners
submitBtn.addEventListener("click", () => {
  let user = users.find(
    (user) =>
      user.userName === userName.value && user.passWord === passWord.value
  );
  if (user) {
    localStorage.setItem("userLoggedIn", user.userName);
    loginUser();
  } else {
    errorMsg.innerHTML = "Invalid Login.";
    errorMsg.style.display = "block";
  }
});
login.addEventListener("click", () => {
  loginForm.style.display = "flex";
});
logout.addEventListener("click", () => {
  logOutUser();
});
let esc = document.getElementById("esc").addEventListener("click", () => {
  loginForm.style.display = "none";
  errorMsg.style.display = "none";
});

registerBtn.addEventListener("click", () => {
  users.push({ userName: userName.value, passWord: passWord.value });
  // localStorage.setItem("users", JSON.stringify(users));
  // console.log(JSON.parse(localStorage.getItem("users")));
  console.log("click");
  console.log(users);
});

// Functions

const loginUser = () => {
  aboutUs.style.display = "block";
  products.style.display = "block";
  login.style.display = "none";
  logout.style.display = "block";
  loginForm.style.display = "none";
  headline.style.display = "flex";
  let userLoggedIn = localStorage.getItem("userLoggedIn");
  headline.innerHTML = `Welcome ${userLoggedIn}`;
};

const logOutUser = () => {
  aboutUs.style.display = "none";
  products.style.display = "none";
  logout.style.display = "none";
  login.style.display = "block";
  loginForm.style.display = "none";
  localStorage.removeItem("userLoggedIn");
  errorMsg.style.display = "none";
  headline.style.display = "none";
};

const isUserLoggedIn = () => {
  loginForm.style.display = "none";
  logout.style.display = "block";
  login.style.display = "none";
  aboutUs.style.display = "block";
  products.style.display = "block";
  let userLoggedIn = localStorage.getItem("userLoggedIn");
  headline.innerHTML = `Welcome ${userLoggedIn}`;
  headline.style.display = "flex";
};

checkIfLoggedIn = () => {
  if (localStorage.getItem("userLoggedIn")) {
    isUserLoggedIn();
  }
};
checkIfLoggedIn();
// localStorage Saving.

// const checkPassword = () => {
//   let specialChars = ["$", "€", 1 - 9, "@", "!", "#", "¤", "%", "/", "(", ")"];
//   if (passWord.value.match(specialChars)) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const register = () => {
//   aboutUs.style.display = "block";
//   products.style.display = "block";
//   login.style.display = "none";
//   logout.style.display = "block";
//   loginForm.style.display = "none";
// };

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
