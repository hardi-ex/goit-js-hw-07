function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const classEl = document.querySelector('.js-change-color');
const bodyEl = document.querySelector('body');
const spanEl = document.querySelector('.js-color');

classEl.addEventListener('click', evt => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
});
