const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let userAccounts = JSON.parse(localStorage.getItem("accounts"));
let userAmount = userAccounts.length;
const createBtn = $(".create-account-btn");
const formErrorTxt = $(".form-error");

function validateName(userName) {
  return (
    !Number.isInteger(parseInt(userName.split("")[0])) &&
    userName.length >= 8 &&
    userName.length <= 12
  );
}
function addAccount() {
  const firstNameFill = String($("#first-name-fill").value);
  const lastNameFill = String($("#last-name-fill").value);
  const usernameFill = String($("#username-fill").value);
  const emailFill = String($("#email-fill").value);
  const passwordFill = String($("#password-fill").value);
  const passwordRepeatFill = String($("#password-repeat-fill").value);
  const findUser = userAccounts.filter(
    (account) => account.username == usernameFill
  );
  if (
    validateName(usernameFill) &&
    passwordFill != "" &&
    passwordRepeatFill != "" &&
    passwordFill == passwordRepeatFill &&
    findUser.length == 0
  ) {
    let newAccount = {
      id: `${++userAmount}`,
      username: usernameFill,
      password: passwordFill,
      admin: false,
      cartCourse: [],
      buyCourse: [],
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
