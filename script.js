const hamburger = document.querySelector(".hamburger");
const navOptions = document.querySelector(".nav-options");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navOptions.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navOptions.classList.remove("active");
}))