const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Populate the product dropdown
const productSelect = document.querySelector("#product");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;              // Use ID for value
  option.textContent = product.name;      // Use name for label
  productSelect.appendChild(option);
});


// Get current year
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

// Get last modified date
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`;
