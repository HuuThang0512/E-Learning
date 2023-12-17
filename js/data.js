const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let userAccounts = [
  {
    id: "1",
    username: "admin1",
    password: "1",
    admin: true,
    cartCourse: [],
    buyCourse: [],
  },
  {
    id: "2",
    username: "huuthang",
    password: "1212",
    admin: false,
    cartCourse: [],
    buyCourse: [],
  },
  {
    id: "3",
    username: "hoaithuong",
    password: "1212",
    admin: false,
    cartCourse: [],
    buyCourse: [],
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
    desc: "Master all the basic to advanced knowledge of HTML to be able to create a basic website",
    img: "./images/course-html.png",
    video: "https://www.youtube.com/embed/ftX8A85chOw?si=qlobK4f63CC0Wc4q",
    type: "Development",
    rating: "5.0",
    student: "865.255",
    price: "49.99",
  },
  {
    id: 2,
    name: "CSS Basic Corse For Beginner",
    desc: "Master all the basic to advanced knowledge of HTML to be able to create a basic website",
    img: "./images/course-css.jpg",
    video: "https://www.youtube.com/embed/YD6W4FTq-Iw?si=C_118IY146-QtKRz",
    type: "Development",
    rating: "5.0",
    student: "665.124",
    price: "39.99",
  },
  {
    id: 3,
    name: "JavaScript Basic Course For Frontend Dev",
    desc: "Master all the basic to advanced knowledge of HTML to be able to create a basic website",
    img: "./images/course-js.png",
    video: "https://www.youtube.com/embed/-N2-jsKUB7Y?si=cuS1d8lvIxgNvqZU",
    type: "Development",
    rating: "5.0",
    student: "561.245",
    price: "49.99",
  },
  {
    id: 4,
    name: "Python Basic Course: Platform For AI",
    desc: "Master all the basic to advanced knowledge of HTML to be able to create a basic website",
    img: "./images/course-python.png",
    video: "https://www.youtube.com/embed/YkAZpqvXTJU?si=qq8BF3SRkm2HvP-i",
    type: "Development",
    rating: "5.0",
    student: "365.255",
    price: "24.99",
  },
  {
    id: 5,
    name: "React Basic Course For Beginer Know  JavaScript",
    desc: "Master all the basic to advanced knowledge of HTML to be able to create a basic website",
    img: "./images/course-react.png",
    video: "https://www.youtube.com/embed/cCDYwk-wE1U?si=jXz7qOGxdzTO3k-d",
    type: "Development",
    rating: "5.0",
    student: "165.255",
    price: "34.99",
  },
  {
    id: 6,
    name: "TailwindCSS UI For Beginer",
    desc: "Master all the basic to advanced knowledge of HTML to be able to create a basic website",
    img: "./images/course-tailwind.jpg",
    video: "https://www.youtube.com/embed/mr15Xzb1Ook?si=Byw5zJ9sAiroGMTK",
    type: "Development",
    rating: "5.0",
    student: "65.255",
    price: "14.99",
  },
  {
    id: 7,
    name: "Bootstrap UI For Beginer",
    desc: "Master all the basic to advanced knowledge of HTML to be able to create a basic website",
    img: "./images/course-bootstrap.jpg",
    video: "https://www.youtube.com/embed/AaVy9UR30Dc?si=fndZkYC5WIjZXuSk",
    type: "Development",
    rating: "5.0",
    student: "65.255",
    price: "14.99",
  },
  {
    id: 8,
    name: "NodeJS For Beginer",
    desc: "Master all the basic to advanced knowledge of HTML to be able to create a basic website",
    img: "./images/course-node.png",
    video: "https://www.youtube.com/embed/ATCs2BY-acA?si=xd296giO7XqxOHpT",
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
      [
        "Introduce",
        [{
          id: 1,
          name: "What’s HTML",
          video:
            "https://www.youtube.com/embed/xKuJrmlCdig?si=SJ01PALTk0ppdJve",
          file: "https://docs.google.com/document/d/1Yu83NilGYukpXefyyZt6AYaqgu78C-tf/edit",
        },
        {
          id: 2,
          name: "Elements of HTML",
          video:
            "https://www.youtube.com/embed/U4nbKMJRVaw?si=mA7BAhHmlkrn97uV",
          file: "https://docs.google.com/document/d/1McnS4j4qCMzrEToXmhEEDpMsqtcdcOMd/edit",
        },]
      ],
      [
        "Basic Tags in HTML",
        [{
          id: 3,
          name: "Paragraph in HTML",
          video:
            "https://www.youtube.com/embed/By-d827_0jo?si=mLsL8-ePxB_WUFTZ",
          file: "https://docs.google.com/document/d/1oNdg7LpjkLSAEXeoHnGWWlsynekpa0_i/edit",
        },
        {
          id: 4,
          name: "Unordered List in HTML",
          video:
            "https://www.youtube.com/embed/rPblWCqOgWs?si=xxrKwNxTNfknsgXZ",
          file: "https://docs.google.com/document/d/1DyXaH0UDCvo5Fnd7EjC1hQz86MwqHRd-/edit",
        },
        {
          id: 5,
          name: "Ordered in HTML",
          video:
            "https://www.youtube.com/embed/rPblWCqOgWs?si=xxrKwNxTNfknsgXZ",
          file: "https://docs.google.com/document/d/1_qx0TV8KhKFPUIZXlKLKQhz0JddzeO7i/edit",
        },
        {
          id: 6,
          name: "Link in HTML",
          video:
            "https://www.youtube.com/embed/D9I_dJDiIu0?si=VlvX71JP0e1A4CH5",
          file: "https://docs.google.com/document/d/1xw27f-juiOrHi5yl7bu1e8QKZdQKqOtR/edit",
        },
        {
          id: 7,
          name: "Div in HTML",
          video:
            "https://www.youtube.com/embed/AxC1yzzPm5Q?si=lFFWdMWv-ASN6Ekh",
          file: "https://docs.google.com/document/d/1y5ir4Sj2bGMZGmmkUTkVkkf-5OGmcKG8/edit",
        },
        {
          id: 8,
          name: "Button in HTML",
          video:
            "https://www.youtube.com/embed/5xZqnA-X1-Y?si=XEfZ_78v5gbdQ_vE",
          file: "https://docs.google.com/document/d/1gQ5tpNWsTBpPoBLFQkLyUBFB5fH6qv7t/edit",
        },
        {
          id: 9,
          name: "Image in HTML",
          video:
            "https://www.youtube.com/embed/Ba1RLs0TgCo?si=yGtoHoR828tu-6o2",
          file: "https://docs.google.com/document/d/1qvg-j5GnmD6CwJGgzfSPc0NO6iV0T8xC/edit",
        },
        {
          id: 10,
          name: "Table in HTML",
          video:
            "https://www.youtube.com/embed/aNC6LY34yVM?si=DEzmo2nJyz3tYH6C",
          file: "https://docs.google.com/document/d/1IsEquYycvix_UXOgUcZsw-uIBJUT3sHm/edit",
        },]
      ],
      [
        "Format Text in HTML",
        [{
          id: 11,
          name: "Attributes in HTML",
          video:
            "https://www.youtube.com/embed/29IbTXYRo5U?si=7U-zJzx4iV0HTZS7",
          file: "https://docs.google.com/document/d/189qWCtXgSIvEV2_0bETJPTXUHQACKuz9/edit",
        },
        {
          id: 12,
          name: "Format Text in HTML",
          video:
            "https://www.youtube.com/embed/urT4pdM3sr4?si=mQI22Dwe3Z_G56na",
          file: "https://docs.google.com/document/d/17ZUgFxDJOrfjl6xDhL_DRGmZi8Tw2oI_/edit",
        },
        {
          id: 13,
          name: "Frame in HTML",
          video:
            "https://www.youtube.com/embed/cvIR1R4Y4BY?si=p7xjw4wGwYTaixNG",
          file: "https://docs.google.com/document/d/1hGXBVaSNeIDpFZbDH-I_1Em3-eyT4AZY/edit",
        },
        {
          id: 14,
          name: "Special Character in HTML",
          video:
            "https://www.youtube.com/embed/20KlM6QkqCk?si=gznCimAK34ZotOYe",
          file: "https://docs.google.com/document/d/1QIiHJRm-a1t4juih_BWNiCZqMPTpi9A4/edit",
        },]
      ],
    ],
  },
  {
    id: 2,
    content: [
      [
        "Introduce",
        [{
          id: 1,
          name: "What’s HTML",
          video:
            "https://www.youtube.com/embed/xKuJrmlCdig?si=SJ01PALTk0ppdJve",
          file: "https://docs.google.com/document/d/1Yu83NilGYukpXefyyZt6AYaqgu78C-tf/edit",
        },
        {
          id: 2,
          name: "Elements of HTML",
          video:
            "https://www.youtube.com/embed/U4nbKMJRVaw?si=mA7BAhHmlkrn97uV",
          file: "https://docs.google.com/document/d/1McnS4j4qCMzrEToXmhEEDpMsqtcdcOMd/edit",
        },]
      ],
      [
        "Basic Tags in HTML",
        [{
          id: 3,
          name: "Paragraph in HTML",
          video:
            "https://www.youtube.com/embed/By-d827_0jo?si=mLsL8-ePxB_WUFTZ",
          file: "https://docs.google.com/document/d/1oNdg7LpjkLSAEXeoHnGWWlsynekpa0_i/edit",
        },
        {
          id: 4,
          name: "Unordered List in HTML",
          video:
            "https://www.youtube.com/embed/rPblWCqOgWs?si=xxrKwNxTNfknsgXZ",
          file: "https://docs.google.com/document/d/1DyXaH0UDCvo5Fnd7EjC1hQz86MwqHRd-/edit",
        },
        {
          id: 5,
          name: "Ordered in HTML",
          video:
            "https://www.youtube.com/embed/rPblWCqOgWs?si=xxrKwNxTNfknsgXZ",
          file: "https://docs.google.com/document/d/1_qx0TV8KhKFPUIZXlKLKQhz0JddzeO7i/edit",
        },
        {
          id: 6,
          name: "Link in HTML",
          video:
            "https://www.youtube.com/embed/D9I_dJDiIu0?si=VlvX71JP0e1A4CH5",
          file: "https://docs.google.com/document/d/1xw27f-juiOrHi5yl7bu1e8QKZdQKqOtR/edit",
        },
        {
          id: 7,
          name: "Div in HTML",
          video:
            "https://www.youtube.com/embed/AxC1yzzPm5Q?si=lFFWdMWv-ASN6Ekh",
          file: "https://docs.google.com/document/d/1y5ir4Sj2bGMZGmmkUTkVkkf-5OGmcKG8/edit",
        },
        {
          id: 8,
          name: "Button in HTML",
          video:
            "https://www.youtube.com/embed/5xZqnA-X1-Y?si=XEfZ_78v5gbdQ_vE",
          file: "https://docs.google.com/document/d/1gQ5tpNWsTBpPoBLFQkLyUBFB5fH6qv7t/edit",
        },
        {
          id: 9,
          name: "Image in HTML",
          video:
            "https://www.youtube.com/embed/Ba1RLs0TgCo?si=yGtoHoR828tu-6o2",
          file: "https://docs.google.com/document/d/1qvg-j5GnmD6CwJGgzfSPc0NO6iV0T8xC/edit",
        },
        {
          id: 10,
          name: "Table in HTML",
          video:
            "https://www.youtube.com/embed/aNC6LY34yVM?si=DEzmo2nJyz3tYH6C",
          file: "https://docs.google.com/document/d/1IsEquYycvix_UXOgUcZsw-uIBJUT3sHm/edit",
        },]
      ],
      [
        "Format Text in HTML",
        [{
          id: 11,
          name: "Attributes in HTML",
          video:
            "https://www.youtube.com/embed/29IbTXYRo5U?si=7U-zJzx4iV0HTZS7",
          file: "https://docs.google.com/document/d/189qWCtXgSIvEV2_0bETJPTXUHQACKuz9/edit",
        },
        {
          id: 12,
          name: "Format Text in HTML",
          video:
            "https://www.youtube.com/embed/urT4pdM3sr4?si=mQI22Dwe3Z_G56na",
          file: "https://docs.google.com/document/d/17ZUgFxDJOrfjl6xDhL_DRGmZi8Tw2oI_/edit",
        },
        {
          id: 13,
          name: "Frame in HTML",
          video:
            "https://www.youtube.com/embed/cvIR1R4Y4BY?si=p7xjw4wGwYTaixNG",
          file: "https://docs.google.com/document/d/1hGXBVaSNeIDpFZbDH-I_1Em3-eyT4AZY/edit",
        },
        {
          id: 14,
          name: "Special Character in HTML",
          video:
            "https://www.youtube.com/embed/20KlM6QkqCk?si=gznCimAK34ZotOYe",
          file: "https://docs.google.com/document/d/1QIiHJRm-a1t4juih_BWNiCZqMPTpi9A4/edit",
        },]
      ],
    ],
  },
  {
    id: 3,
    content: [
      [
        "Introduce",
        [{
          id: 1,
          name: "What’s HTML",
          video:
            "https://www.youtube.com/embed/xKuJrmlCdig?si=SJ01PALTk0ppdJve",
          file: "https://docs.google.com/document/d/1Yu83NilGYukpXefyyZt6AYaqgu78C-tf/edit",
        },
        {
          id: 2,
          name: "Elements of HTML",
          video:
            "https://www.youtube.com/embed/U4nbKMJRVaw?si=mA7BAhHmlkrn97uV",
          file: "https://docs.google.com/document/d/1McnS4j4qCMzrEToXmhEEDpMsqtcdcOMd/edit",
        },]
      ],
      [
        "Basic Tags in HTML",
        [{
          id: 3,
          name: "Paragraph in HTML",
          video:
            "https://www.youtube.com/embed/By-d827_0jo?si=mLsL8-ePxB_WUFTZ",
          file: "https://docs.google.com/document/d/1oNdg7LpjkLSAEXeoHnGWWlsynekpa0_i/edit",
        },
        {
          id: 4,
          name: "Unordered List in HTML",
          video:
            "https://www.youtube.com/embed/rPblWCqOgWs?si=xxrKwNxTNfknsgXZ",
          file: "https://docs.google.com/document/d/1DyXaH0UDCvo5Fnd7EjC1hQz86MwqHRd-/edit",
        },
        {
          id: 5,
          name: "Ordered in HTML",
          video:
            "https://www.youtube.com/embed/rPblWCqOgWs?si=xxrKwNxTNfknsgXZ",
          file: "https://docs.google.com/document/d/1_qx0TV8KhKFPUIZXlKLKQhz0JddzeO7i/edit",
        },
        {
          id: 6,
          name: "Link in HTML",
          video:
            "https://www.youtube.com/embed/D9I_dJDiIu0?si=VlvX71JP0e1A4CH5",
          file: "https://docs.google.com/document/d/1xw27f-juiOrHi5yl7bu1e8QKZdQKqOtR/edit",
        },
        {
          id: 7,
          name: "Div in HTML",
          video:
            "https://www.youtube.com/embed/AxC1yzzPm5Q?si=lFFWdMWv-ASN6Ekh",
          file: "https://docs.google.com/document/d/1y5ir4Sj2bGMZGmmkUTkVkkf-5OGmcKG8/edit",
        },
        {
          id: 8,
          name: "Button in HTML",
          video:
            "https://www.youtube.com/embed/5xZqnA-X1-Y?si=XEfZ_78v5gbdQ_vE",
          file: "https://docs.google.com/document/d/1gQ5tpNWsTBpPoBLFQkLyUBFB5fH6qv7t/edit",
        },
        {
          id: 9,
          name: "Image in HTML",
          video:
            "https://www.youtube.com/embed/Ba1RLs0TgCo?si=yGtoHoR828tu-6o2",
          file: "https://docs.google.com/document/d/1qvg-j5GnmD6CwJGgzfSPc0NO6iV0T8xC/edit",
        },
        {
          id: 10,
          name: "Table in HTML",
          video:
            "https://www.youtube.com/embed/aNC6LY34yVM?si=DEzmo2nJyz3tYH6C",
          file: "https://docs.google.com/document/d/1IsEquYycvix_UXOgUcZsw-uIBJUT3sHm/edit",
        },]
      ],
      [
        "Format Text in HTML",
        [{
          id: 11,
          name: "Attributes in HTML",
          video:
            "https://www.youtube.com/embed/29IbTXYRo5U?si=7U-zJzx4iV0HTZS7",
          file: "https://docs.google.com/document/d/189qWCtXgSIvEV2_0bETJPTXUHQACKuz9/edit",
        },
        {
          id: 12,
          name: "Format Text in HTML",
          video:
            "https://www.youtube.com/embed/urT4pdM3sr4?si=mQI22Dwe3Z_G56na",
          file: "https://docs.google.com/document/d/17ZUgFxDJOrfjl6xDhL_DRGmZi8Tw2oI_/edit",
        },
        {
          id: 13,
          name: "Frame in HTML",
          video:
            "https://www.youtube.com/embed/cvIR1R4Y4BY?si=p7xjw4wGwYTaixNG",
          file: "https://docs.google.com/document/d/1hGXBVaSNeIDpFZbDH-I_1Em3-eyT4AZY/edit",
        },
        {
          id: 14,
          name: "Special Character in HTML",
          video:
            "https://www.youtube.com/embed/20KlM6QkqCk?si=gznCimAK34ZotOYe",
          file: "https://docs.google.com/document/d/1QIiHJRm-a1t4juih_BWNiCZqMPTpi9A4/edit",
        },]
      ],
    ],
  },
  {
    id: 4,
    content: [
      [
        "Introduce",
        [{
          id: 1,
          name: "What’s HTML",
          video:
            "https://www.youtube.com/embed/xKuJrmlCdig?si=SJ01PALTk0ppdJve",
          file: "https://docs.google.com/document/d/1Yu83NilGYukpXefyyZt6AYaqgu78C-tf/edit",
        },
        {
          id: 2,
          name: "Elements of HTML",
          video:
            "https://www.youtube.com/embed/U4nbKMJRVaw?si=mA7BAhHmlkrn97uV",
          file: "https://docs.google.com/document/d/1McnS4j4qCMzrEToXmhEEDpMsqtcdcOMd/edit",
        },]
      ],
      [
        "Basic Tags in HTML",
        [{
          id: 3,
          name: "Paragraph in HTML",
          video:
            "https://www.youtube.com/embed/By-d827_0jo?si=mLsL8-ePxB_WUFTZ",
          file: "https://docs.google.com/document/d/1oNdg7LpjkLSAEXeoHnGWWlsynekpa0_i/edit",
        },
        {
          id: 4,
          name: "Unordered List in HTML",
          video:
            "https://www.youtube.com/embed/rPblWCqOgWs?si=xxrKwNxTNfknsgXZ",
          file: "https://docs.google.com/document/d/1DyXaH0UDCvo5Fnd7EjC1hQz86MwqHRd-/edit",
        },
        {
          id: 5,
          name: "Ordered in HTML",
          video:
            "https://www.youtube.com/embed/rPblWCqOgWs?si=xxrKwNxTNfknsgXZ",
          file: "https://docs.google.com/document/d/1_qx0TV8KhKFPUIZXlKLKQhz0JddzeO7i/edit",
        },
        {
          id: 6,
          name: "Link in HTML",
          video:
            "https://www.youtube.com/embed/D9I_dJDiIu0?si=VlvX71JP0e1A4CH5",
          file: "https://docs.google.com/document/d/1xw27f-juiOrHi5yl7bu1e8QKZdQKqOtR/edit",
        },
        {
          id: 7,
          name: "Div in HTML",
          video:
            "https://www.youtube.com/embed/AxC1yzzPm5Q?si=lFFWdMWv-ASN6Ekh",
          file: "https://docs.google.com/document/d/1y5ir4Sj2bGMZGmmkUTkVkkf-5OGmcKG8/edit",
        },
        {
          id: 8,
          name: "Button in HTML",
          video:
            "https://www.youtube.com/embed/5xZqnA-X1-Y?si=XEfZ_78v5gbdQ_vE",
          file: "https://docs.google.com/document/d/1gQ5tpNWsTBpPoBLFQkLyUBFB5fH6qv7t/edit",
        },
        {
          id: 9,
          name: "Image in HTML",
          video:
            "https://www.youtube.com/embed/Ba1RLs0TgCo?si=yGtoHoR828tu-6o2",
          file: "https://docs.google.com/document/d/1qvg-j5GnmD6CwJGgzfSPc0NO6iV0T8xC/edit",
        },
        {
          id: 10,
          name: "Table in HTML",
          video:
            "https://www.youtube.com/embed/aNC6LY34yVM?si=DEzmo2nJyz3tYH6C",
          file: "https://docs.google.com/document/d/1IsEquYycvix_UXOgUcZsw-uIBJUT3sHm/edit",
        },]
      ],
      [
        "Format Text in HTML",
        [{
          id: 11,
          name: "Attributes in HTML",
          video:
            "https://www.youtube.com/embed/29IbTXYRo5U?si=7U-zJzx4iV0HTZS7",
          file: "https://docs.google.com/document/d/189qWCtXgSIvEV2_0bETJPTXUHQACKuz9/edit",
        },
        {
          id: 12,
          name: "Format Text in HTML",
          video:
            "https://www.youtube.com/embed/urT4pdM3sr4?si=mQI22Dwe3Z_G56na",
          file: "https://docs.google.com/document/d/17ZUgFxDJOrfjl6xDhL_DRGmZi8Tw2oI_/edit",
        },
        {
          id: 13,
          name: "Frame in HTML",
          video:
            "https://www.youtube.com/embed/cvIR1R4Y4BY?si=p7xjw4wGwYTaixNG",
          file: "https://docs.google.com/document/d/1hGXBVaSNeIDpFZbDH-I_1Em3-eyT4AZY/edit",
        },
        {
          id: 14,
          name: "Special Character in HTML",
          video:
            "https://www.youtube.com/embed/20KlM6QkqCk?si=gznCimAK34ZotOYe",
          file: "https://docs.google.com/document/d/1QIiHJRm-a1t4juih_BWNiCZqMPTpi9A4/edit",
        },]
      ],
    ],
  },
  {
    id: 5,
    content: [
      [
        "Introduce",
        [{
          id: 1,
          name: "What’s HTML",
          video:
            "https://www.youtube.com/embed/xKuJrmlCdig?si=SJ01PALTk0ppdJve",
          file: "https://docs.google.com/document/d/1Yu83NilGYukpXefyyZt6AYaqgu78C-tf/edit",
        },
        {
          id: 2,
          name: "Elements of HTML",
          video:
            "https://www.youtube.com/embed/U4nbKMJRVaw?si=mA7BAhHmlkrn97uV",
          file: "https://docs.google.com/document/d/1McnS4j4qCMzrEToXmhEEDpMsqtcdcOMd/edit",
        },]
      ],
      [
        "Basic Tags in HTML",
        [{
          id: 3,
          name: "Paragraph in HTML",
          video:
            "https://www.youtube.com/embed/By-d827_0jo?si=mLsL8-ePxB_WUFTZ",
          file: "https://docs.google.com/document/d/1oNdg7LpjkLSAEXeoHnGWWlsynekpa0_i/edit",
        },
        {
          id: 4,
          name: "Unordered List in HTML",
          video:
            "https://www.youtube.com/embed/rPblWCqOgWs?si=xxrKwNxTNfknsgXZ",
          file: "https://docs.google.com/document/d/1DyXaH0UDCvo5Fnd7EjC1hQz86MwqHRd-/edit",
        },
        {
          id: 5,
          name: "Ordered in HTML",
          video:
            "https://www.youtube.com/embed/rPblWCqOgWs?si=xxrKwNxTNfknsgXZ",
          file: "https://docs.google.com/document/d/1_qx0TV8KhKFPUIZXlKLKQhz0JddzeO7i/edit",
        },
        {
          id: 6,
          name: "Link in HTML",
          video:
            "https://www.youtube.com/embed/D9I_dJDiIu0?si=VlvX71JP0e1A4CH5",
          file: "https://docs.google.com/document/d/1xw27f-juiOrHi5yl7bu1e8QKZdQKqOtR/edit",
        },
        {
          id: 7,
          name: "Div in HTML",
          video:
            "https://www.youtube.com/embed/AxC1yzzPm5Q?si=lFFWdMWv-ASN6Ekh",
          file: "https://docs.google.com/document/d/1y5ir4Sj2bGMZGmmkUTkVkkf-5OGmcKG8/edit",
        },
        {
          id: 8,
          name: "Button in HTML",
          video:
            "https://www.youtube.com/embed/5xZqnA-X1-Y?si=XEfZ_78v5gbdQ_vE",
          file: "https://docs.google.com/document/d/1gQ5tpNWsTBpPoBLFQkLyUBFB5fH6qv7t/edit",
        },
        {
          id: 9,
          name: "Image in HTML",
          video:
            "https://www.youtube.com/embed/Ba1RLs0TgCo?si=yGtoHoR828tu-6o2",
          file: "https://docs.google.com/document/d/1qvg-j5GnmD6CwJGgzfSPc0NO6iV0T8xC/edit",
        },
        {
          id: 10,
          name: "Table in HTML",
          video:
            "https://www.youtube.com/embed/aNC6LY34yVM?si=DEzmo2nJyz3tYH6C",
          file: "https://docs.google.com/document/d/1IsEquYycvix_UXOgUcZsw-uIBJUT3sHm/edit",
        },]
      ],
      [
        "Format Text in HTML",
        [{
          id: 11,
          name: "Attributes in HTML",
          video:
            "https://www.youtube.com/embed/29IbTXYRo5U?si=7U-zJzx4iV0HTZS7",
          file: "https://docs.google.com/document/d/189qWCtXgSIvEV2_0bETJPTXUHQACKuz9/edit",
        },
        {
          id: 12,
          name: "Format Text in HTML",
          video:
            "https://www.youtube.com/embed/urT4pdM3sr4?si=mQI22Dwe3Z_G56na",
          file: "https://docs.google.com/document/d/17ZUgFxDJOrfjl6xDhL_DRGmZi8Tw2oI_/edit",
        },
        {
          id: 13,
          name: "Frame in HTML",
          video:
            "https://www.youtube.com/embed/cvIR1R4Y4BY?si=p7xjw4wGwYTaixNG",
          file: "https://docs.google.com/document/d/1hGXBVaSNeIDpFZbDH-I_1Em3-eyT4AZY/edit",
        },
        {
          id: 14,
          name: "Special Character in HTML",
          video:
            "https://www.youtube.com/embed/20KlM6QkqCk?si=gznCimAK34ZotOYe",
          file: "https://docs.google.com/document/d/1QIiHJRm-a1t4juih_BWNiCZqMPTpi9A4/edit",
        },]
      ],
    ],
  },
  {
    id: 6,
    content: [
      [
        "Introduce",
        [{
          id: 1,
          name: "What’s HTML",
          video:
            "https://www.youtube.com/embed/xKuJrmlCdig?si=SJ01PALTk0ppdJve",
          file: "https://docs.google.com/document/d/1Yu83NilGYukpXefyyZt6AYaqgu78C-tf/edit",
        },
        {
          id: 2,
          name: "Elements of HTML",
          video:
            "https://www.youtube.com/embed/U4nbKMJRVaw?si=mA7BAhHmlkrn97uV",
          file: "https://docs.google.com/document/d/1McnS4j4qCMzrEToXmhEEDpMsqtcdcOMd/edit",
        },]
      ],
      [
        "Basic Tags in HTML",
        [{
          id: 3,
          name: "Paragraph in HTML",
          video:
            "https://www.youtube.com/embed/By-d827_0jo?si=mLsL8-ePxB_WUFTZ",
          file: "https://docs.google.com/document/d/1oNdg7LpjkLSAEXeoHnGWWlsynekpa0_i/edit",
        },
        {
          id: 4,
          name: "Unordered List in HTML",
          video:
            "https://www.youtube.com/embed/rPblWCqOgWs?si=xxrKwNxTNfknsgXZ",
          file: "https://docs.google.com/document/d/1DyXaH0UDCvo5Fnd7EjC1hQz86MwqHRd-/edit",
        },
        {
          id: 5,
          name: "Ordered in HTML",
          video:
            "https://www.youtube.com/embed/rPblWCqOgWs?si=xxrKwNxTNfknsgXZ",
          file: "https://docs.google.com/document/d/1_qx0TV8KhKFPUIZXlKLKQhz0JddzeO7i/edit",
        },
        {
          id: 6,
          name: "Link in HTML",
          video:
            "https://www.youtube.com/embed/D9I_dJDiIu0?si=VlvX71JP0e1A4CH5",
          file: "https://docs.google.com/document/d/1xw27f-juiOrHi5yl7bu1e8QKZdQKqOtR/edit",
        },
        {
          id: 7,
          name: "Div in HTML",
          video:
            "https://www.youtube.com/embed/AxC1yzzPm5Q?si=lFFWdMWv-ASN6Ekh",
          file: "https://docs.google.com/document/d/1y5ir4Sj2bGMZGmmkUTkVkkf-5OGmcKG8/edit",
        },
        {
          id: 8,
          name: "Button in HTML",
          video:
            "https://www.youtube.com/embed/5xZqnA-X1-Y?si=XEfZ_78v5gbdQ_vE",
          file: "https://docs.google.com/document/d/1gQ5tpNWsTBpPoBLFQkLyUBFB5fH6qv7t/edit",
        },
        {
          id: 9,
          name: "Image in HTML",
          video:
            "https://www.youtube.com/embed/Ba1RLs0TgCo?si=yGtoHoR828tu-6o2",
          file: "https://docs.google.com/document/d/1qvg-j5GnmD6CwJGgzfSPc0NO6iV0T8xC/edit",
        },
        {
          id: 10,
          name: "Table in HTML",
          video:
            "https://www.youtube.com/embed/aNC6LY34yVM?si=DEzmo2nJyz3tYH6C",
          file: "https://docs.google.com/document/d/1IsEquYycvix_UXOgUcZsw-uIBJUT3sHm/edit",
        },]
      ],
      [
        "Format Text in HTML",
        [{
          id: 11,
          name: "Attributes in HTML",
          video:
            "https://www.youtube.com/embed/29IbTXYRo5U?si=7U-zJzx4iV0HTZS7",
          file: "https://docs.google.com/document/d/189qWCtXgSIvEV2_0bETJPTXUHQACKuz9/edit",
        },
        {
          id: 12,
          name: "Format Text in HTML",
          video:
            "https://www.youtube.com/embed/urT4pdM3sr4?si=mQI22Dwe3Z_G56na",
          file: "https://docs.google.com/document/d/17ZUgFxDJOrfjl6xDhL_DRGmZi8Tw2oI_/edit",
        },
        {
          id: 13,
          name: "Frame in HTML",
          video:
            "https://www.youtube.com/embed/cvIR1R4Y4BY?si=p7xjw4wGwYTaixNG",
          file: "https://docs.google.com/document/d/1hGXBVaSNeIDpFZbDH-I_1Em3-eyT4AZY/edit",
        },
        {
          id: 14,
          name: "Special Character in HTML",
          video:
            "https://www.youtube.com/embed/20KlM6QkqCk?si=gznCimAK34ZotOYe",
          file: "https://docs.google.com/document/d/1QIiHJRm-a1t4juih_BWNiCZqMPTpi9A4/edit",
        },]
      ],
    ],
  },
  {
    id: 7,
    content: [
      [
        "Introduce",
        [{
          id: 1,
          name: "What’s HTML",
          video:
            "https://www.youtube.com/embed/xKuJrmlCdig?si=SJ01PALTk0ppdJve",
          file: "https://docs.google.com/document/d/1Yu83NilGYukpXefyyZt6AYaqgu78C-tf/edit",
        },
        {
          id: 2,
          name: "Elements of HTML",
          video:
            "https://www.youtube.com/embed/U4nbKMJRVaw?si=mA7BAhHmlkrn97uV",
          file: "https://docs.google.com/document/d/1McnS4j4qCMzrEToXmhEEDpMsqtcdcOMd/edit",
        },]
      ],
      [
        "Basic Tags in HTML",
        [{
          id: 3,
          name: "Paragraph in HTML",
          video:
            "https://www.youtube.com/embed/By-d827_0jo?si=mLsL8-ePxB_WUFTZ",
          file: "https://docs.google.com/document/d/1oNdg7LpjkLSAEXeoHnGWWlsynekpa0_i/edit",
        },
        {
          id: 4,
          name: "Unordered List in HTML",
          video:
            "https://www.youtube.com/embed/rPblWCqOgWs?si=xxrKwNxTNfknsgXZ",
          file: "https://docs.google.com/document/d/1DyXaH0UDCvo5Fnd7EjC1hQz86MwqHRd-/edit",
        },
        {
          id: 5,
          name: "Ordered in HTML",
          video:
            "https://www.youtube.com/embed/rPblWCqOgWs?si=xxrKwNxTNfknsgXZ",
          file: "https://docs.google.com/document/d/1_qx0TV8KhKFPUIZXlKLKQhz0JddzeO7i/edit",
        },
        {
          id: 6,
          name: "Link in HTML",
          video:
            "https://www.youtube.com/embed/D9I_dJDiIu0?si=VlvX71JP0e1A4CH5",
          file: "https://docs.google.com/document/d/1xw27f-juiOrHi5yl7bu1e8QKZdQKqOtR/edit",
        },
        {
          id: 7,
          name: "Div in HTML",
          video:
            "https://www.youtube.com/embed/AxC1yzzPm5Q?si=lFFWdMWv-ASN6Ekh",
          file: "https://docs.google.com/document/d/1y5ir4Sj2bGMZGmmkUTkVkkf-5OGmcKG8/edit",
        },
        {
          id: 8,
          name: "Button in HTML",
          video:
            "https://www.youtube.com/embed/5xZqnA-X1-Y?si=XEfZ_78v5gbdQ_vE",
          file: "https://docs.google.com/document/d/1gQ5tpNWsTBpPoBLFQkLyUBFB5fH6qv7t/edit",
        },
        {
          id: 9,
          name: "Image in HTML",
          video:
            "https://www.youtube.com/embed/Ba1RLs0TgCo?si=yGtoHoR828tu-6o2",
          file: "https://docs.google.com/document/d/1qvg-j5GnmD6CwJGgzfSPc0NO6iV0T8xC/edit",
        },
        {
          id: 10,
          name: "Table in HTML",
          video:
            "https://www.youtube.com/embed/aNC6LY34yVM?si=DEzmo2nJyz3tYH6C",
          file: "https://docs.google.com/document/d/1IsEquYycvix_UXOgUcZsw-uIBJUT3sHm/edit",
        },]
      ],
      [
        "Format Text in HTML",
        [{
          id: 11,
          name: "Attributes in HTML",
          video:
            "https://www.youtube.com/embed/29IbTXYRo5U?si=7U-zJzx4iV0HTZS7",
          file: "https://docs.google.com/document/d/189qWCtXgSIvEV2_0bETJPTXUHQACKuz9/edit",
        },
        {
          id: 12,
          name: "Format Text in HTML",
          video:
            "https://www.youtube.com/embed/urT4pdM3sr4?si=mQI22Dwe3Z_G56na",
          file: "https://docs.google.com/document/d/17ZUgFxDJOrfjl6xDhL_DRGmZi8Tw2oI_/edit",
        },
        {
          id: 13,
          name: "Frame in HTML",
          video:
            "https://www.youtube.com/embed/cvIR1R4Y4BY?si=p7xjw4wGwYTaixNG",
          file: "https://docs.google.com/document/d/1hGXBVaSNeIDpFZbDH-I_1Em3-eyT4AZY/edit",
        },
        {
          id: 14,
          name: "Special Character in HTML",
          video:
            "https://www.youtube.com/embed/20KlM6QkqCk?si=gznCimAK34ZotOYe",
          file: "https://docs.google.com/document/d/1QIiHJRm-a1t4juih_BWNiCZqMPTpi9A4/edit",
        },]
      ],
    ],
  },
  {
    id: 8,
    content: [
      [
        "Introduce",
        [{
          id: 1,
          name: "What’s HTML",
          video:
            "https://www.youtube.com/embed/xKuJrmlCdig?si=SJ01PALTk0ppdJve",
          file: "https://docs.google.com/document/d/1Yu83NilGYukpXefyyZt6AYaqgu78C-tf/edit",
        },
        {
          id: 2,
          name: "Elements of HTML",
          video:
            "https://www.youtube.com/embed/U4nbKMJRVaw?si=mA7BAhHmlkrn97uV",
          file: "https://docs.google.com/document/d/1McnS4j4qCMzrEToXmhEEDpMsqtcdcOMd/edit",
        },]
      ],
      [
        "Basic Tags in HTML",
        [{
          id: 3,
          name: "Paragraph in HTML",
          video:
            "https://www.youtube.com/embed/By-d827_0jo?si=mLsL8-ePxB_WUFTZ",
          file: "https://docs.google.com/document/d/1oNdg7LpjkLSAEXeoHnGWWlsynekpa0_i/edit",
        },
        {
          id: 4,
          name: "Unordered List in HTML",
          video:
            "https://www.youtube.com/embed/rPblWCqOgWs?si=xxrKwNxTNfknsgXZ",
          file: "https://docs.google.com/document/d/1DyXaH0UDCvo5Fnd7EjC1hQz86MwqHRd-/edit",
        },
        {
          id: 5,
          name: "Ordered in HTML",
          video:
            "https://www.youtube.com/embed/rPblWCqOgWs?si=xxrKwNxTNfknsgXZ",
          file: "https://docs.google.com/document/d/1_qx0TV8KhKFPUIZXlKLKQhz0JddzeO7i/edit",
        },
        {
          id: 6,
          name: "Link in HTML",
          video:
            "https://www.youtube.com/embed/D9I_dJDiIu0?si=VlvX71JP0e1A4CH5",
          file: "https://docs.google.com/document/d/1xw27f-juiOrHi5yl7bu1e8QKZdQKqOtR/edit",
        },
        {
          id: 7,
          name: "Div in HTML",
          video:
            "https://www.youtube.com/embed/AxC1yzzPm5Q?si=lFFWdMWv-ASN6Ekh",
          file: "https://docs.google.com/document/d/1y5ir4Sj2bGMZGmmkUTkVkkf-5OGmcKG8/edit",
        },
        {
          id: 8,
          name: "Button in HTML",
          video:
            "https://www.youtube.com/embed/5xZqnA-X1-Y?si=XEfZ_78v5gbdQ_vE",
          file: "https://docs.google.com/document/d/1gQ5tpNWsTBpPoBLFQkLyUBFB5fH6qv7t/edit",
        },
        {
          id: 9,
          name: "Image in HTML",
          video:
            "https://www.youtube.com/embed/Ba1RLs0TgCo?si=yGtoHoR828tu-6o2",
          file: "https://docs.google.com/document/d/1qvg-j5GnmD6CwJGgzfSPc0NO6iV0T8xC/edit",
        },
        {
          id: 10,
          name: "Table in HTML",
          video:
            "https://www.youtube.com/embed/aNC6LY34yVM?si=DEzmo2nJyz3tYH6C",
          file: "https://docs.google.com/document/d/1IsEquYycvix_UXOgUcZsw-uIBJUT3sHm/edit",
        },]
      ],
      [
        "Format Text in HTML",
        [{
          id: 11,
          name: "Attributes in HTML",
          video:
            "https://www.youtube.com/embed/29IbTXYRo5U?si=7U-zJzx4iV0HTZS7",
          file: "https://docs.google.com/document/d/189qWCtXgSIvEV2_0bETJPTXUHQACKuz9/edit",
        },
        {
          id: 12,
          name: "Format Text in HTML",
          video:
            "https://www.youtube.com/embed/urT4pdM3sr4?si=mQI22Dwe3Z_G56na",
          file: "https://docs.google.com/document/d/17ZUgFxDJOrfjl6xDhL_DRGmZi8Tw2oI_/edit",
        },
        {
          id: 13,
          name: "Frame in HTML",
          video:
            "https://www.youtube.com/embed/cvIR1R4Y4BY?si=p7xjw4wGwYTaixNG",
          file: "https://docs.google.com/document/d/1hGXBVaSNeIDpFZbDH-I_1Em3-eyT4AZY/edit",
        },
        {
          id: 14,
          name: "Special Character in HTML",
          video:
            "https://www.youtube.com/embed/20KlM6QkqCk?si=gznCimAK34ZotOYe",
          file: "https://docs.google.com/document/d/1QIiHJRm-a1t4juih_BWNiCZqMPTpi9A4/edit",
        },]
      ],
    ],
  },
];

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
if (!localStorage.getItem("coursesContent")) {
  localStorage.setItem("coursesContent", JSON.stringify(courseContent));
}
if (!localStorage.getItem("numberOfContent")) {
  localStorage.setItem("numberOfContent", JSON.stringify(1));
}
// export { userAccounts };
// export { allCourses };
