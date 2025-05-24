// scripts/place.js

// 1. Footer dates
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// 2. Static values matching your HTML
const temperature = 10;      // °C
const windSpeed = 5;         // km/h

// 3. One-line Wind Chill formula (Celsius version)
function calculateWindChill(T, V) {
  return 13.12 + 0.6215 * T - 11.37 * V**0.16 + 0.3965 * T * V**0.16;
}

// 4. Compute only if T ≤ 10 °C and V > 4.8 km/h; else “N/A”
const windChillValue =
  (temperature <= 10 && windSpeed > 4.8)
    ? (Math.round(calculateWindChill(temperature, windSpeed) * 10) / 10) + "°C"
    : "N/A";

// 5. Inject into the page
// Make sure your Weather section has an element like:
//    <li><strong>Wind Chill:</strong> <span id="windChill"></span></li>
document.getElementById("windChill").textContent = windChillValue;
