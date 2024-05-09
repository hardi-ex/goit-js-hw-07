function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');
const buttonCreateEl = document.querySelector('[data-create]');
const buttonDestroyEl = document.querySelector('[data-destroy]');
const boxesEls = document.querySelector('#boxes');

function createBoxes(amount) {
  const arrayOfBoxes = [];

  let size = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    arrayOfBoxes.push(div);
    size += 10;
  }
  boxesEls.append(...arrayOfBoxes);
}

buttonCreateEl.addEventListener('click', evt => {
  const amount = Number(inputEl.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputEl.value = '';
  } else {
    return alert('Pick the number of 1 to 100');
  }
});

buttonDestroyEl.addEventListener('click', evt => {
  boxesEls.innerHTML = '';
});
