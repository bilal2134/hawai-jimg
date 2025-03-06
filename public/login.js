// public/js/login.js

const hiddenIcon = `<svg width="20" height="20" viewBox="0 0 24 24">
  <path fill="currentColor" d="M12 4.5c-5 0-9.27 3.11-11 7.5 1.73 4.39 6 7.5 11 7.5s8.27-3.11 11-7.5c-2.73-4.39-6.27-7.5-11-7.5z"/>
  <line x1="2" y1="2" x2="22" y2="22" stroke="currentColor" stroke-width="2"/>
</svg>`;
const visibleIcon = `<svg width="20" height="20" viewBox="0 0 24 24">
  <path fill="currentColor" d="M12 6.5c-3.04 0-5.5 2.46-5.5 5.5s2.46 5.5 5.5 5.5 5.5-2.46 5.5-5.5-2.46-5.5-5.5-5.5z"/>
  <circle cx="12" cy="12" r="2" fill="currentColor"/>
</svg>`;

function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggle = document.querySelector('.password-toggle');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggle.innerHTML = visibleIcon;
    } else {
        passwordInput.type = 'password';
        toggle.innerHTML = hiddenIcon;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelector('.password-toggle');
    toggle.innerHTML = hiddenIcon;
    const backgroundDiv = document.querySelector('.background');
    backgroundDiv.style.backgroundImage = "url('https://www.360-surf.com/wp-content/uploads/2015/11/surftrip_hawai2-scaled.jpg')";
});
