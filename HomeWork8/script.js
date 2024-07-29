const form = document.getElementById('registration-form');
const messageElement = document.querySelector('.message');
const submitButton = document.querySelector('.submit');
let messageTimeout;

function showMessage(message, className) {
  messageElement.textContent = message;
  messageElement.classList.add(className);
  messageElement.style.display = 'block';

  if (messageTimeout) {
    clearTimeout(messageTimeout);
  }

  messageTimeout = setTimeout(() => {
    messageElement.textContent = '';
    messageElement.classList.remove(className);
    messageElement.style.display = 'none';
  }, 5000);
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const lastName = document.getElementById('lastname').value;
  const day = document.getElementById('day').value;
  const month = document.getElementById('month').value;
  const year = document.getElementById('year').value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const emailUsername = document.getElementById('email-username').value;
  const emailDomain = document.getElementById('email-domain').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (!name || !lastName || !day || !month || !year || !gender || !emailUsername || !emailDomain || !password || !confirmPassword) {
    showMessage('Пожалуйста, заполните все обязательные поля.', 'error');
    return;
  }

  if (password !== confirmPassword) {
    showMessage('Пароли не совпадают, введите ещё раз.', 'error');
    return;
  }

  showMessage('Почтовый ящик был создан.', 'success');

  form.reset();
});