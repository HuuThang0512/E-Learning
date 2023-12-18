const cartCourseBody = $(".cart-course-list tbody");
let totalPrice = $(".cart-checkout-total span");
let accounts = JSON.parse(localStorage.getItem("accounts"));
let idUser = JSON.parse(localStorage.getItem("userId"));
let idCartCourse = JSON.parse(localStorage.getItem("accounts")).filter(
  (user) => (user.id == idUser)
)[0].cartCourse;
let cartCourses = JSON.parse(localStorage.getItem("allCourses")).filter(
  (course) => idCartCourse.find((e) => course.id == e)
);
// console.log(idCartCourse);
// Render Course
function rendercourse() {
  cartCourses.forEach((course) => {
    let row = document.createElement("tr");
    row.classList.add("cart-course-item");
    row.setAttribute("id", course.id);
    let courseContent = `<td class="cart-item-close">
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 21C17.4706 21 21.5 16.9706 21.5 12C21.5 7.02944 17.4706 3 12.5 3C7.52944 3 3.5 7.02944 3.5 12C3.5 16.9706 7.52944 21 12.5 21Z"
            stroke="#8C94A3"
            stroke-width="1.5"
            stroke-miterlimit="10"
          ></path>
          <path
            d="M15.5 9L9.5 15"
            stroke="#8C94A3"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M15.5 15L9.5 9"
            stroke="#8C94A3"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </td>
      <td>
        <img src="" alt="" />
        <span>${course.name}</span>
      </td>
      <td>${course.price}</td>`;
    row.innerHTML = courseContent;
    cartCourseBody.appendChild(row);
  });
}
rendercourse();

// Calulate Total Price
function calTotalPrice() {
  let calTotalPrice = cartCourses.reduce((a, c) => a + +c.price, 0);
  totalPrice.innerText = +calTotalPrice.toFixed(2);
}
calTotalPrice();

// Remove Course
let cartItemCloses = $$(".cart-item-close");

cartItemCloses.forEach((close) => {
  close.addEventListener("click", (e) => {
    let idCourse = e.target.closest(".cart-course-item").getAttribute("id");
    console.log(typeof idCourse);
    idCartCourse = idCartCourse.filter((id) => id != +idCourse);
    accounts.forEach((account) => {
      if (account.id == idUser) {
        account.cartCourse = idCartCourse;
      }
    });
      localStorage.setItem("accounts", JSON.stringify(accounts));
      window.location.reload()
  });
});
