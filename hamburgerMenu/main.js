let btn = document.querySelector("#btn");
let sideBar = document.querySelector(".sideBar");
let section = document.querySelector('section');

btn.addEventListener("click", () => {
    sideBar.classList.toggle("bcg");
    btn.classList.toggle("iconColor");
    section.classList.toggle("slide");
})