// Get current year
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

// Toggle navigation menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navMenu.classList.toggle('active');
});
