const passwordForm = document.getElementById('passwordForm');
const message = document.getElementById('message');

passwordForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const password = document.getElementById('password').value;

  // Change the password here
  const correctPassword = 'nb';

  if (password === correctPassword) {
    window.location.href = 'your-protected-page.html';
  } else {
    message.innerText = 'Incorrect password. Please try again.';
  }
});
