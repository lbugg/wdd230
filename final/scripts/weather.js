// select HTML elements in the document
const currentTemp = document.querySelector(".temperature");
const weatherIcon = document.querySelector("#weather-icon");
const weatherType = document.querySelector(".weather-type");
const humidity = document.querySelector(".humidity");
const url = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=metric&appid=1a97386c36236df5f2a071a37b105e9b";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
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
    const humid = weatherData.main.humidity;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherType.textContent = desc;
    humidity.textContent = `humidity: ${humid}%`;
}