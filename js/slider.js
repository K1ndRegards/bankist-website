// Selecting elements
const slides = document.querySelectorAll('.slide');

const leftBtn = document.querySelector('.slide-btn-left');
const rightBtn = document.querySelector('.slide-btn-right');

const dotContainer = document.querySelector('.dots');

// Variables
let currentSlide = 0;
const maxSlides = slides.length;

// Initialization
init();

// Functions
// Initialization function
function init() {
  createDots();
  moveToSlide(currentSlide);
}

// Create single dot
function createDot(number) {
  const div = document.createElement('div');
  div.classList.add('dot');
  div.dataset.slide = number;

  if (number === currentSlide) div.classList.add('dot-active');

  return div;
}

// Create dots and fill dot container
function createDots() {
  slides.forEach((_, i) => dotContainer.append(createDot(i)));
}

// Move slide function
function moveToSlide(slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
  setActiveDot(slide);
}

// Move to previous slide function
function prevSlide() {
  if (currentSlide === 0) {
    currentSlide = maxSlides - 1;
  } else {
    currentSlide--;
  }

  moveToSlide(currentSlide);
}

// Move to next slide function
function nextSlide() {
  if (currentSlide === maxSlides - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  moveToSlide(currentSlide);
}

// Function to set active dot
function setActiveDot(number) {
  dotContainer.querySelectorAll('.dot').forEach((dot) => {
    dot.classList.remove('dot-active');
  });

  document
    .querySelector(`.dot[data-slide="${number}"]`)
    .classList.add('dot-active');
}

// Event listeners
leftBtn.addEventListener('click', prevSlide);
rightBtn.addEventListener('click', nextSlide);

// Event listtener for arrow keys on keyboard
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') prevSlide();
  else if (e.key === 'ArrowRight') nextSlide();
});

// Event listener for dots
dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dot')) {
    currentSlide = Number(e.target.dataset.slide);
    moveToSlide(currentSlide);
  }
});
