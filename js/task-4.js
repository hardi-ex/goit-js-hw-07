const formEl = document.querySelector('.js-login-form');

formEl.addEventListener('submit', evt => {
  evt.preventDefault();

  const emailInput = evt.currentTarget.elements.email.value;
  const passwordInput = evt.currentTarget.elements.password.value;

  if (!emailInput.trim() || !passwordInput.trim()) {
    return alert('All form fields must be filled in');
  }
  const userData = { email: emailInput, password: passwordInput };
  console.log(userData);

  evt.currentTarget.reset();
});
