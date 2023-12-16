// import { accounts } from "./data.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let userAccounts = JSON.parse(localStorage.getItem("accounts"));
const usernameInput = $("#email-fill");
const passwordInput = $("#password-fill");
const formErrorTxt = $(".form-error");

function checkSignin() {
  let adminCheck = false;
  let username = String(usernameInput.value);
  let password = String(passwordInput.value);
  let accountFind = userAccounts.filter((obj) => obj.username == username);
  let find = accountFind.length > 0 ? true : false;
  if (find && accountFind[0].password == password) {
    adminCheck = accountFind[0].admin;
    // if (accountFind[0] == "admin1") {
    //   adminCheck = true;
    // }
    localStorage.setItem("adminCheck", JSON.stringify(adminCheck));
    localStorage.setItem("signed", true);
    window.location.href = "./index.html";
  } else if (username == "admin" && password == "1") {
    adminCheck = true;
    localStorage.setItem("adminCheck", JSON.stringify(adminCheck));
    localStorage.setItem("signed", true);
    window.location.href = "./index.html";
  } else {
    formErrorTxt.classList.add("active");
  }
}

export { checkSignin };
