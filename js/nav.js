// Selecting elements
const nav = document.querySelector('.main-header .navigation');
const logo = document.querySelector('.main-header .logo');
const links = document.querySelectorAll('.main-header .link');
const mainHeader = document.querySelector('.main-header');

const navHeight = nav.getBoundingClientRect().height;

// Function for menu fade effect
function handleHover(e, opacity) {
  logo.style.opacity = opacity;

  links.forEach((link) => {
    if (e.target !== link) {
      link.style.opacity = opacity;
    }
  });
}

// Function for sticky navigation
function obsCallback(entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}

const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

// Setting up the observer
const observer = new IntersectionObserver(obsCallback, obsOptions);

observer.observe(mainHeader);

// Event listeners for menu fade effect
nav.addEventListener('mouseover', function (e) {
  if (e.target.classList.contains('link')) {
    handleHover(e, 0.5);
  }
});

nav.addEventListener('mouseout', function (e) {
  handleHover(e, 1);
});
