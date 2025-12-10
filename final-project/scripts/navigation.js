const mainNav = document.querySelector(".navigation");
const hamMenu = document.querySelector("#menu");

hamMenu.addEventListener("click", () => {
    mainNav.classList.toggle("show");
    hamMenu.classList.toggle("show");
});