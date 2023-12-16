const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let userAccounts = [
  {
    username: "admin1",
    password: "1",
    admin: true,
  },
  {
    username: "huuthang",
    password: "1212",
    admin: false,
  },
  {
    username: "hoaithuong",
    password: "1212",
    admin: false,
  },
];

let adminAccount = [
  {
    username: "admin",
    password: 1,
    adminCheck: true,
  },
];

let allCourses = [
  {
    id: 1,
    name: "HTML Basic Corse: From Zero To Hero",
    img: "./images/course-html.png 2x",
    type: "Development",
    rating: "5.0",
    student: "865.255",
    price: "49.99",
  },
  {
    id: 2,
    name: "CSS Basic Corse For Beginner",
    img: "./images/course-css.jpg 2x",
    type: "Development",
    rating: "5.0",
    student: "665.124",
    price: "39.99",
  },
  {
    id: 3,
    name: "JavaScript Basic Course For Frontend Dev",
    img: "./images/course-js.png 2x",
    type: "Development",
    rating: "5.0",
    student: "561.245",
    price: "49.99",
  },
  {
    id: 4,
    name: "Python Basic Course: Platform For AI",
    img: "./images/course-python.png 2x",
    type: "Development",
    rating: "5.0",
    student: "365.255",
    price: "24.99",
  },
  {
    id: 5,
    name: "React Basic Course For Beginer Know  JavaScript",
    img: "./images/course-react.png 2x",
    type: "Development",
    rating: "5.0",
    student: "165.255",
    price: "34.99",
  },
  {
    id: 6,
    name: "TailwindCSS UI For Beginer",
    img: "./images/course-tailwind.jpg 2x",
    type: "Development",
    rating: "5.0",
    student: "65.255",
    price: "14.99",
  },
  {
    id: 6,
    name: "Bootstrap UI For Beginer",
    img: "./images/course-bootstrap.jpg 2x",
    type: "Development",
    rating: "5.0",
    student: "65.255",
    price: "14.99",
  },
  {
    id: 6,
    name: "NodeJS For Beginer",
    img: "./images/course-node.png 2x",
    type: "Development",
    rating: "5.0",
    student: "65.255",
    price: "14.99",
  },
];

let courseContent = [
  {
    id: 1,
    content: [
      
    ]
  }
]

if (!localStorage.getItem("accounts")) {
  localStorage.setItem("accounts", JSON.stringify(userAccounts));
}
if (!localStorage.getItem("adminAccount")) {
  localStorage.setItem("adminAccount", JSON.stringify(adminAccount));
}
if (!localStorage.getItem("adminCheck")) {
  localStorage.setItem("adminCheck", "false");
}
if (!localStorage.getItem("signed")) {
  localStorage.setItem("signed", "false");
}

if (!localStorage.getItem("allCourses")) {
  localStorage.setItem("allCourses", JSON.stringify(allCourses));
}
// export { userAccounts };
// export { allCourses };
