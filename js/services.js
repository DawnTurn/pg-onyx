const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const body = document.querySelector("body");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  burger.classList.toggle("rotate");
  body.classList.toggle("no-scroll");
});

