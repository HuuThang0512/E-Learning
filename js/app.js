const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnToTop = $('.btn-to-top')


btnToTop.addEventListener('click', () => {
    window.scrollTo(0, 0)
})