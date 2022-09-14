// console.log("Hello World");

const hamburger = document.querySelector(".container");
const mobileNav = document.querySelector(".menu");

console.log(hamburger);

hamburger.addEventListener("click", (e) => {
  const menu = e.currentTarget;
  menu.classList.toggle("change");
  mobileNav.classList.toggle("show")
});
