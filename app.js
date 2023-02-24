// get the login form
const loginForm = document.querySelector('.login-form');
// add an event listener to the login form
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = event.target.querySelector('input[type="text"]').value;
  const password = event.target.querySelector('input[type="password"]').value;
  if (username === 'heena' && password === '123') {
    sessionStorage.setItem('loggedIn', true);
    window.location.replace('home.html');
    webengage.user.login('U-01'); //this is the unique user identifier being used here
webengage.user.setAttribute('we_email', 'heenashaikh1.nmims@gmail.com'); //system user attribute
webengage.user.setAttribute('we_birth_date', '1993-03-11');//system user attribute
webengage.user.setAttribute('we_phone', '+919619377730');//system user attribute
webengage.user.setAttribute("Age", 29); //custom user attribute
  } else {
    alert('Invalid username or password');
  }
});
// function to check if user is logged in
function isLoggedIn() {
  const loggedIn = sessionStorage.getItem('loggedIn');
  if (loggedIn === 'true') {
    return true;
  }
  return false;
}
// function to redirect to login page if not logged in
function requireLogin() {
  if (!isLoggedIn()) {
    window.location.replace('index.html');
  }
}
// add event listener to logout button
function logout() {
  sessionStorage.setItem('loggedIn', false);
  window.location.replace('index.html');
}
// redirect to login page if not logged in
requireLogin();