const slider = document.querySelector(".slider");
const btnLeft = document.querySelector(".table-btn--left");
const btnRight = document.querySelector(".table-btn--right");
const box = document.getElementsByClassName("box");

function scrollParent(event, offset) {
  // let parentElm = document.querySelector(".slider");
  slider.scrollBy({
    top: 0,
    left: 100 * offset,
    behavior: "smooth",
  });
}

for (let i = 0; i < slider.length; i++) {
  console.log(slider[i]);
}
