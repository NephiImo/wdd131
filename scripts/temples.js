// Get current year
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

// Get last modified date
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`;

// Hamburger menu functionality
const menuButton = document.getElementById('menu');
const navLinks = document.getElementById('nav-links');

menuButton.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  menuButton.classList.toggle('open');
});