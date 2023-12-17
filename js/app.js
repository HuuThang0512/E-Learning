import { checkSignin } from "./login.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnToTop = $(".btn-to-top");
const topbar = $(".topbar");

if (btnToTop) {
  btnToTop.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
}

// Su kien trang dang nhap
const loginBtn = $(".signin-btn");
if (loginBtn) {
  loginBtn.addEventListener("click", checkSignin);
}
let adminCheck = JSON.parse(localStorage.getItem("adminCheck"));
let signed = JSON.parse(localStorage.getItem("signed"));
if (signed) {
  $(".topbar").classList.add("is-login");
}

// --------------------------------------------------------------------------------

// Su kien Logout
let logoutBtn = $(".logout-btn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.setItem("adminCheck", "false");
    localStorage.setItem("signed", "false");
    localStorage.removeItem("userId");
    topbar.classList.remove("is-login");
    window.location.reload();
  });
}

// Su kien dropdown structure
const structureChapters = $$(".structure-chapter");
structureChapters.forEach((chapter) => {
  chapter.addEventListener("click", () => {
    chapter.classList.toggle("active")
  });
});
