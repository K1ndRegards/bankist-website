const imgTargets = document.querySelectorAll('img[data-src]');

function loadImg(entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // replace src attribute with dataset src
  const targetImg = entry.target;
  targetImg.src = targetImg.dataset.src;

  targetImg.addEventListener('load', function () {
    targetImg.classList.remove('lazy-img');
  });

  observer.unobserve(targetImg);
}

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
});

imgTargets.forEach((image) => {
  image.classList.add('lazy-img');
  imgObserver.observe(image);
});
