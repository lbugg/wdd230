// calculate wind chill
const temperature = document.querySelector(".temperature").textContent;
const windSpeed = document.querySelector(".wind-speed").textContent;
let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = 13.12 + (0.6125 * temperature) - (11.37 * (windSpeed ** 0.16)) + (0.3965 * temperature * (windSpeed ** 0.16));
    windChill = windChill.toFixed(1) + "\u00B0C";
}

// insert value
const windChillSpan = document.querySelector(".wind-chill");
windChillSpan.textContent = windChill;