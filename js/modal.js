// Selecting elements
const openModalBtns = document.querySelectorAll('.open-modal');

const modalWindow = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const closeBtn = document.querySelector('.close-modal');
const nextStepBtn = document.querySelector('.modal button[type="submit"]');

// Functions
// Toggle modal on window function
function toggleOnModalWindow(e) {
  e.preventDefault();

  modalWindow.classList.remove('visually-hidden');
  overlay.classList.remove('visually-hidden');
}

// Function to toggle off modal window
function toggleOffModalWindow(e) {
  e.preventDefault();

  modalWindow.classList.add('visually-hidden');
  overlay.classList.add('visually-hidden');
}

// Event listeners to toggle on/off modal window
openModalBtns.forEach((btn) => {
  btn.addEventListener('click', toggleOnModalWindow);
});

closeBtn.addEventListener('click', toggleOffModalWindow);
nextStepBtn.addEventListener('click', toggleOffModalWindow);

overlay.addEventListener('click', toggleOffModalWindow);

window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    toggleOffModalWindow(e);
  }
});
