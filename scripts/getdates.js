// Get current year
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

// Get last modified date
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`;
