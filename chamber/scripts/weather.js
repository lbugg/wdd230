// select HTML elements in the document
const currentTemp = document.querySelector(".temperature");
const weatherIcon = document.querySelector("#weather-icon");
const weatherType = document.querySelector(".weather-type");
const windSpeedLocation = document.querySelector(".wind-speed");
const url = "https://api.openweathermap.org/data/2.5/weather?q=Cheyenne&units=metric&appid=1a97386c36236df5f2a071a37b105e9b";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            displayResults(data);
            displayWindChill();
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
  
apiFetch();

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(1)}</strong>`;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    const wind = (weatherData.wind.speed * 3.6).toFixed(1);
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherType.textContent = desc;
    windSpeedLocation.textContent = wind;
}

function displayWindChill() {
    // select HTML elements in the document
    const temperature = document.querySelector(".temperature").textContent;
    const windSpeed = document.querySelector(".wind-speed").textContent;
    let windChill = "N/A";

    // calculate wind chill
    if (temperature <= 10 && windSpeed > 4.8) {
        windChill = 13.12 + (0.6125 * temperature) - (11.37 * (windSpeed ** 0.16)) + (0.3965 * temperature * (windSpeed ** 0.16));
        windChill = windChill.toFixed(1) + "\u00B0C";
    }

    // insert value
    const windChillSpan = document.querySelector(".wind-chill");
    windChillSpan.textContent = windChill;
}