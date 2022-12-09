const menuBtn = document.querySelector('.menuBtn');
const menu = document.querySelector('.menu');
const header = document.querySelector('#header');

let isMeuOpen = false;

menuBtn.addEventListener('click', () => {
    if(isMeuOpen === false) {
        slideDown();
        header.style.backgroundColor = "black";
        isMeuOpen = true;
    } else {
        slideUp();
        header.style.backgroundColor = "#333333";
        isMeuOpen = false;
    }
})

function slideUp() {
    menu.style.transition = "all 0.5s ease-in-out";
    menu.style.height = "0px";
}
slideUp();

function slideDown() {
    menu.style.transition = "all 0.5s ease-in-out";
    menu.style.height = "100%";
}
