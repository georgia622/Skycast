const apiKey = 'd1f3216ca51fd37fe4c4b5d2b22adbbc';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const cityName = document.querySelector(".city");
const temperature = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const errorMessage = document.querySelector(".error");
const weather = document.querySelector(".weather");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        errorMessage.style.display = "block";
        weather.style.display = "none";
    } else {

        let data = await response.json();
        cityName.innerHTML = data.name;
        temperature.innerHTML = Math.round(data.main.temp) + "°C";
        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = 'images/clouds.png';
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = 'images/clear.png';
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = 'images/drizzle.png';
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = 'images/mist.png';
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = 'images/rain.png';
        } else {
            weatherIcon.src = 'images/snow.png';
        }

        weather.style.display = "block";
        errorMessage.style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
