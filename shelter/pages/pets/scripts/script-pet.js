const burger = document.querySelector(".header__burger-btn");

burger.addEventListener("click", () => {
  document.querySelector(".header").classList.toggle("open")
})