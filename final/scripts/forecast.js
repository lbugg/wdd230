// select HTML elements in the document
const day1 = document.querySelector("#forecast-temp1");
const day2 = document.querySelector("#forecast-temp2");
const day3 = document.querySelector("#forecast-temp3");
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=metric&appid=1a97386c36236df5f2a071a37b105e9b";

async function apiFetchForecast() {
    try {
        const forecastResponse = await fetch(forecastUrl);
        if (forecastResponse.ok) {
            const forecastData = await forecastResponse.json();
            console.log(forecastData);
            displayForecastResults(forecastData);
        } else {
            throw Error(await forecastResponse.text());
        }
    } catch (error) {
        console.log(error);
    }
}
  
apiFetchForecast();

function displayForecastResults(forecastData) {
    const forecast = forecastData.list;
    const forecastDay1 = forecast[7].main.temp.toFixed(1);
    const forecastDay2 = forecast[15].main.temp.toFixed(1);
    const forecastDay3 = forecast[23].main.temp.toFixed(1);

    day1.textContent = forecastDay1;
    day2.textContent = forecastDay2;
    day3.textContent = forecastDay3;
}