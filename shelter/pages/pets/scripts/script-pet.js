const burger = document.querySelector(".header__burger-btn");

burger.addEventListener("click", () => {
  document.querySelector(".header").classList.toggle("open")
})

document.querySelectorAll(".content__card").addEventListener("click", () => {
  document.querySelector(".pets__pop-up").classList.add("active");
})
document.querySelector(".pets__pop-up")