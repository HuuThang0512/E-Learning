const courseTopName = $(".course-top-name");
const courseTopDesc = $(".course-top-desc");
const courseVideo = $(".course-detail-video iframe");
const coursePrice = $(".course-detail-right-price span");
const courseStudent = $(".course-detail-infor-item-student span");
const toCartBtn = $(".course-detail-add-cart-btn");
const paymentBtn = $(".course-detail-payment-btn");
const courseDetailStructure = $(".course-detail-structure");

const idCourse = JSON.parse(localStorage.getItem("idCourseNow"));
const userId = JSON.parse(localStorage.getItem("userId"));
var allAccount = JSON.parse(localStorage.getItem("accounts"));
const courseData = JSON.parse(localStorage.getItem("allCourses")).filter(
  (course) => course.id == idCourse
)[0];

// Render Data
function renderData() {
  courseTopName.innerHTML = courseData.name;
  courseTopDesc.innerHTML = courseData.desc;
  courseVideo.setAttribute("src", courseData.video);
  coursePrice.innerHTML = courseData.price;
  courseStudent.innerHTML = courseData.student;
}

renderData();

// Add course to cart

toCartBtn.addEventListener("click", (e) => {
  allAccount.forEach((user) => {
    if (user.id == userId) {
        user.cartCourse.push(`${idCourse}`);
        let userCartSet = new Set(user.cartCourse)
        user.cartCourse = [...userCartSet];
    }
  });
  localStorage.setItem("accounts", JSON.stringify(allAccount));
});
