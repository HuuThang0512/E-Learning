const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let userAccounts = JSON.parse(localStorage.getItem("accounts"));
let userAmount = userAccounts.length;
const createBtn = $(".create-account-btn");
const formErrorTxt = $(".form-error");

function addAccount() {
  const firstNameFill = String($("#first-name-fill").value);
  const lastNameFill = String($("#last-name-fill").value);
  const usernameFill = String($("#username-fill").value);
  const emailFill = String($("#email-fill").value);
  const passwordFill = String($("#password-fill").value);
  const passwordRepeatFill = String($("#password-repeat-fill").value);
  if (
    usernameFill != "" &&
    passwordFill != "" &&
    passwordRepeatFill != "" &&
    passwordFill == passwordRepeatFill &&
    userAccounts.filter((account) => account.username == usernameFill)
  ) {
    let newAccount = {
      id: `${++userAmount}`,
      username: usernameFill,
      password: passwordFill,
      admin: false,
      cartCourse: new Set(),
    };
    console.log(newAccount);
    userAccounts.push(newAccount);
    localStorage.setItem("accounts", JSON.stringify(userAccounts));
    alert("Dang ki thanh cong");
    window.location.href = "./sign_in.html";
  } else {
    formErrorTxt.classList.add("active");
  }
}

createBtn.addEventListener("click", addAccount);

createBtn.addEventListener("click", () => {});
