let modal = document.querySelector(".modal")
let btn = document.querySelector(".btn")
let cross = document.querySelector("#cross")
let modalContainer = document.querySelector(".modal-container")


btn.addEventListener("click", () => {
    modal.classList.add("pop");
    modal.classList.remove("none");
})

cross.addEventListener("click", () => {
    modal.classList.add("none");
})