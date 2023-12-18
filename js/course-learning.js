let idCourseNow = JSON.parse(localStorage.getItem("idCourseNow"));
let contentCourseNow = JSON.parse(
  localStorage.getItem("coursesContent")
).filter((course) => course.id == idCourse)[0].content;
const courseName = JSON.parse(localStorage.getItem("allCourses")).filter(
  (course) => course.id == idCourse
)[0].name;
const structureBlock = $(".structure");
let idNow = JSON.parse(localStorage.getItem("numberOfContent"));
let LessonContent;
contentCourseNow.forEach((chap) => {
  chap[1].forEach((les) => {
    if (les.id == idNow) {
      LessonContent = les;
    }
  });
});

$(".course-learn-top-title").innerHTML = courseName;

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
    $("iframe").setAttribute("src", LessonContent.video);
    $(".course-learn-left-name").innerHTML = LessonContent.name;
    $(".course-learn-attach-left span").innerHTML = LessonContent.name;
    $(".course-learn-attach-btn").setAttribute("href", LessonContent.file);
  });
}
renderStructure();

// Click Chage Lesson
const lessons = $$(".course-learn-structure-item.structure-item");
lessons.forEach((lesson) => {
  lesson.addEventListener("click", (e) => {
    localStorage.setItem(
      "numberOfContent",
      e.target.closest(".structure-item").getAttribute("id")
      );
      window.location.reload()
  });
});
