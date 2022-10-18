// const btnLeft = document.querySelector(".table-btn--left");
// const btnRight = document.querySelector(".table-btn--right");
// const box = document.getElementsByClassName("box");
const slider = document.querySelector(".slider");
// console.log(slider);

function scrollSlider(event, offset) {
  // let parentElm = document.querySelector(".slider");
  slider.scrollBy({
    top: 0,
    left: 170 * offset,
    behavior: "smooth",
  });
}
