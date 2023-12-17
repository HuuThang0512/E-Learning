let totalPrice = $(".checkout-complete-total span");
let initPrice = $(".checkout-order-item span");
const buyBtn = $(".checkout-payment-btn");
let accounts = JSON.parse(localStorage.getItem("accounts"));
let idUser = JSON.parse(localStorage.getItem("userId"));
let idCartCourse = JSON.parse(localStorage.getItem("accounts")).filter(
  (user) => user.id == idUser
)[0].cartCourse;
let cartCourses = JSON.parse(localStorage.getItem("allCourses")).filter(
  (course) => idCartCourse.find((e) => course.id == e)
);
console.log(idCartCourse);

//  Total Price
function calTotalPrice() {
  let calTotalPrice = cartCourses.reduce((a, c) => a + +c.price, 0);
  initPrice.innerText = calTotalPrice;
  totalPrice.innerText = ((+calTotalPrice * 92) / 100).toFixed(2);
}

calTotalPrice();

// Add Buy Courses
buyBtn.addEventListener("click", () => {
  accounts.forEach((user) => {
    if (user.id == idUser) {
      user.buyCourse.push(idCartCourse);
      user.cartCourse = [];
    }
  });
  alert("Course payment successful");
  localStorage.setItem("accounts", JSON.stringify(accounts));
});
