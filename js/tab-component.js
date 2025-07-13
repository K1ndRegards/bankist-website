const descriptions = document.querySelectorAll('.operations .description');
const tabContainer = document.querySelector('.operations .operations-buttons');

tabContainer.addEventListener('click', function (e) {
  e.preventDefault();

  // Targeting tab button
  const targetEl = e.target.closest('button.operation');

  // exit if we didn't target tab button
  if (!targetEl) return;

  // removing active class from all tab buttons
  tabContainer.querySelectorAll('button').forEach((btn) => {
    btn.classList.remove('operation-active');
  });

  // setting active class on current tab button
  targetEl.classList.add('operation-active');

  // hiding all the descriptions
  descriptions.forEach((description) => {
    description.classList.add('hidden');
  });

  // remove hidden class from current active description
  document
    .querySelector(`.${targetEl.id}-description`)
    .classList.remove('hidden');
});
