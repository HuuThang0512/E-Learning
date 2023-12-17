const courseList = $(".course-list");
var idUser = JSON.parse(localStorage.getItem("userId"));
var user = JSON.parse(localStorage.getItem("accounts")).filter(
  (user) => user.id == idUser
)[0];
var buyCourseId = user.buyCourse;
var myCourse = JSON.parse(localStorage.getItem("allCourses")).filter((course) =>
  buyCourseId.find((id) => id == course.id)
);
var adminCheck = JSON.parse(localStorage.getItem("adminCheck"));
// Render Courses
function renderCourse(courses) {
  courses.forEach((course) => {
    let courseItem = document.createElement("div");
    courseItem.classList.add("course-item");
    courseItem.classList.add("click-item");
    courseItem.setAttribute("id", course.id);
    let courseItemMore = `<div class="course-more">
                  <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
                  </svg>
                  <ul class="course-edit"> 
                    <li class="course-edit-item">View Details</li>
                    <li class="course-edit-item">Edit Course</li>
                    <li class="course-edit-item">Delete Course</li>
                  </ul>
                </div>`;
    let courseItemContent = `
    <div class="course-image"> <img class="course-img" srcSet="${
      course.img
    }" alt="course-img"/></div>
              <div class="course-type-name"> 
                <p class="course-type type" style="--color: #342F98">${
                  course.type
                }</p>
                <div class="course-name">${course.name}</div>
              </div>
              <div class="course-line"></div>
              <div class="course-rate-amount">
                <div class="course-rating rating"> 
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.27569 11.9208L11.4279 13.9179C11.8308 14.1732 12.3311 13.7935 12.2115 13.3232L11.3008 9.74052C11.2752 9.64073 11.2782 9.53573 11.3096 9.4376C11.3409 9.33946 11.3994 9.25218 11.4781 9.18577L14.3049 6.83306C14.6763 6.52392 14.4846 5.90751 14.0074 5.87654L10.3159 5.63696C10.2165 5.62986 10.1211 5.59465 10.0409 5.53545C9.96069 5.47625 9.89896 5.39548 9.86289 5.30255L8.48612 1.83549C8.44869 1.73685 8.38215 1.65194 8.29532 1.59201C8.2085 1.53209 8.1055 1.5 8 1.5C7.89451 1.5 7.79151 1.53209 7.70468 1.59201C7.61786 1.65194 7.55131 1.73685 7.51389 1.83549L6.13712 5.30255C6.10104 5.39548 6.03932 5.47625 5.95912 5.53545C5.87892 5.59465 5.78355 5.62986 5.68412 5.63696L1.99263 5.87654C1.51544 5.90751 1.32373 6.52392 1.69515 6.83306L4.52186 9.18577C4.60063 9.25218 4.65907 9.33946 4.69044 9.4376C4.72181 9.53573 4.72485 9.64073 4.6992 9.74052L3.85459 13.063C3.71111 13.6274 4.31143 14.083 4.79495 13.7767L7.72431 11.9208C7.8067 11.8683 7.90234 11.8405 8 11.8405C8.09767 11.8405 8.19331 11.8683 8.27569 11.9208Z" fill="#FD8E1F"></path>
                  </svg><span class="course-rating-point rating-point">${
                    course.rating
                  }</span>
                </div>
                <div class="course-count-student"> 
                  <div class="course-count-icon icon">
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 13C12.7614 13 15 10.7614 15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13Z" stroke="#564FFD" stroke-width="1.5" stroke-miterlimit="10"></path>
                      <path d="M2.42114 17.3743C3.18955 16.0442 4.29443 14.9398 5.6248 14.172C6.95517 13.4042 8.46417 13 10.0002 13C11.5363 13 13.0453 13.4043 14.3756 14.1721C15.706 14.94 16.8108 16.0444 17.5792 17.3744" stroke="#564FFD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </div><span class="course-count-num">${course.student}</span>
                </div>
              </div>
              <div class="course-line"></div>
              <div class="course-price-more"> 
                <div class="course-price">${course.price}</div>
                ${adminCheck ? courseItemMore : ""}
              </div>`;
    courseItem.innerHTML = courseItemContent;
    courseList.appendChild(courseItem);
  });
}
renderCourse(myCourse);

// Xu li them sua xoa khoa hoc

// Click course to course detail
// const courseItems = $$(".course-item");
// courseItems.forEach((courseItem) => {
//   courseItem.addEventListener("click", (e) => {
//     if (!e.target.closest(".course-more")) {
//       let idCourse = e.target.closest(".course-item").getAttribute("id");
//       localStorage.setItem("idCourseNow", JSON.stringify(idCourse));
//       window.location.href = "./course-learning.html";
//     } else {
//       console.log("More");
//     }
//   });
// });

const coursesItem = $$(".course-item");
coursesItem.forEach((course) => {
  course.addEventListener("click", (e) => {
    console.log(123123);
    let idCourse = e.target.closest(".course-item").getAttribute("id")
    localStorage.setItem("idCourseNow", JSON.stringify(idCourse))
    window.location.href = "./course-learning.html"
  });
});
