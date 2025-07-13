const allSections = document.querySelectorAll('section');

function revealSection(entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section-hidden');

  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.3,
});

allSections.forEach((section) => {
  section.classList.add('section-hidden');
  sectionObserver.observe(section);
});
