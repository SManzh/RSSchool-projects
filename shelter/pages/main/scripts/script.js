const burger = document.querySelector(".header__burger-btn");

burger.addEventListener("click", () => {
  document.querySelector(".header").classList.toggle("open")
})

/*-----Slider-----*/
const sliderWidth = document.querySelector(".slider__cards").clientWidth;
const sliderCardWidth = document.querySelector(".slider__card").clientWidth + 1;
const maxCards = Math.floor(sliderWidth/sliderCardWidth);

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");
const CAROUSEL = document.querySelector(".slider__cards");

btnLeft.addEventListener("click", () => {
  CAROUSEL.classList.add("transition-left");
  CAROUSEL.classList.remove("transition-right");
})

btnRight.addEventListener("click", () => {
  CAROUSEL.classList.add("transition-right");
  CAROUSEL.classList.remove("transition-left");
})