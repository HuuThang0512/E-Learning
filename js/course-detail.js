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
      let userCartSet = new Set(user.cartCourse);
      user.cartCourse = [...userCartSet];
    }
  });
  localStorage.setItem("accounts", JSON.stringify(allAccount));
});

paymentBtn.addEventListener("click", (e) => {
  allAccount.forEach((user) => {
    if (user.id == userId) {
      user.cartCourse.push(`${idCourse}`);
      let userCartSet = new Set(user.cartCourse);
      user.cartCourse = [...userCartSet];
    }
  });
  localStorage.setItem("accounts", JSON.stringify(allAccount));
});

//  Render Structure Course Details
let contentCourseNow = JSON.parse(
  localStorage.getItem("coursesContent")
).filter((course) => course.id == idCourse)[0].content;
const courseName = JSON.parse(localStorage.getItem("allCourses")).filter(
  (course) => course.id == idCourse
)[0].name;
const structureBlock = $(".structure");

// Render
function renderStructure() {
  contentCourseNow.forEach((course) => {
    let courseNames = course[1];
    let chapter = document.createElement("div");
    chapter.classList.add("course-learn-structure-chapter");
    chapter.classList.add("structure-chapter");
    chapter.innerHTML = `<div class="course-learn-structure-title structure-title">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 6L8 11L3 6" stroke="#1D2026" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <p>${course[0]}</p>
                  </div>`;
    let chapterList = document.createElement("ul");
    chapterList.classList.add("course-learn-structure-list");
    chapterList.classList.add("structure-list");
    courseNames.forEach((c) => {
      const li = document.createElement("li");
      li.classList.add("course-learn-structure-item");
      li.classList.add("structure-item");
      li.setAttribute("id", c.id);
      li.innerHTML = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 7.5H13.5" stroke="#A1A5B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M7.5 10.5H13.5" stroke="#A1A5B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M16.5 0.75H1.5C1.08579 0.75 0.75 1.08579 0.75 1.5V16.5C0.75 16.9142 1.08579 17.25 1.5 17.25H16.5C16.9142 17.25 17.25 16.9142 17.25 16.5V1.5C17.25 1.08579 16.9142 0.75 16.5 0.75Z" stroke="#A1A5B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M4.5 0.75V17.25" stroke="#A1A5B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                      <p>${c.id}. ${c.name}</p>`;
      chapterList.appendChild(li);
    });
    chapter.appendChild(chapterList);
    structureBlock.appendChild(chapter);
  });
}
renderStructure();
