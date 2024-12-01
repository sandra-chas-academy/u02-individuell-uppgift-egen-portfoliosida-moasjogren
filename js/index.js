// Öppna hamburgermeny
const nav = document.querySelector(".nav-page-links");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
  nav.classList.toggle("nav-page-links-show");
});
