var slideIndex = 1;
var mobileMediaQuery = window.matchMedia("(max-width: 600px)");

function displaySlidesForBreakpoint(mobileMediaQuery) {
  if (mobileMediaQuery.matches) {
    displaySlide(1);
  } else {
    showAllSlides();
    resetPaginationDots();
  }
}

displaySlidesForBreakpoint(mobileMediaQuery);
mobileMediaQuery.addListener(displaySlidesForBreakpoint);

function goToNextSlide(slidesToSkip = 1) {
  displaySlide((slideIndex += slidesToSkip));
}
function setActiveSlide(activeSlideIndex) {
  displaySlide((slideIdex = activeSlideIndex));
}

function displaySlide(slideToDisplayIndex) {
  var slideElements = document.getElementsByClassName("table-card");
  var paginationDotElements = document.getElementsByClassName("footerdot");

  const noDisplayedSlides =
    slideElements.length === 0 || paginationDotElements.length === 0;
  if (noDisplayedSlides) return;

  hideAllSlides(slideElements);
  resetPaginationDots();

  slideElements[slideToDisplayIndex - 1].style.display = "flex";
  paginationDotElements[slideToDisplayIndex - 1].className += " active";
}

function hideAllSlides(slideElements) {
  if (slideElements.length === 0) return;

  for (slide of slideElements) {
    slide.style.display = "none";
  }
}

function resetPaginationDots() {
  var paginationDotElements = document.getElementsByClassName("footerdot");
  if (paginationDotElements.length === 0) return;

  for (paginationDot of paginationDotElements) {
    paginationDot.className = paginationDot.className.replace(" active", "");
  }
}

function showAllSlides() {
  var slideElements = document.getElementsByClassName("table-card");

  if (slideElements.length === 0) return;

  for (slide of slideElements) {
    slide.style.display = "flex";
  }
}
