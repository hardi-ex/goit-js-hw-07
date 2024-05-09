const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', handleInput);

function handleInput(evt) {
  spanEl.textContent = evt.target.value.trim() || 'Anonymous';
}
