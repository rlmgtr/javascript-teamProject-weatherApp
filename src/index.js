//// Buttons Today and 5 Days ///

document.getElementById('fWeather').addEventListener('click', function(){
    document.getElementById('todayWeather').style.display = 'none';
    document.getElementById('todayDayDate').style.display = 'none';
    document.getElementById('FiveDaysWeather').style.display = 'block';
} )

document.getElementById('tWeather').addEventListener('click', function(){
    document.getElementById('todayWeather').style.display = 'block';
    document.getElementById('todayDayDate').style.display = 'block';
    document.getElementById('FiveDaysWeather').style.display = 'none';
} )

//// ////////////

document.getElementById('cityInputForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const cityInput = document.getElementById('cityInput').value;
    fetchWeather(cityInput);
});

function fetchWeather(city) {
    const apiKey = 'f1a7f601f87c9d97579ef8237cc83ff1';
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const fiveForecast = data.list.reduce((acc, item) => {
            const date = item.dt_txt.split(' ')[0];
            if (!acc[date]) {
                acc[date] = [];
            }
            acc[date].push(item);
            return acc;
        }, {});

        displayForcast(forecast-info)
    })
    .catch(error => {
        console.error('Error loading weather...', error);
    });
}

function displayFiveDForecast(forecast) {
 const forecastContainer = document.getElementById('forecast-info');
 forecastContainer.innerHTML = '';

 for (const date in forecast) { 
    const dayForecast = forecast[date];
    const minTemp = Math.min(...dayForecast.map(item => item.main.temp.min))
    const maxTemp = Math.max(...dayForecast.map(item => item.main.temp.max))
    const dayElement = document.createElement('div');
    dayElement.classList.add('day');
    const iconURL = `https://openweathermap.org/img/w/${dayForecast[0].weather[0].icon}.png`;
    dayElement.innerHTML = `
    <div>${new Date(dayForecast[0].dt * 1000).toDateString()}</div>
    <img src="${iconURL}" alt=${dayForecast[0].weather[0].description}">
    <div>Min Temp: ${minTemp}°C</div>
    <div>Max Temp: ${maxTemp}°C</div>
    `;

    dayElement.addEventListener('click', function() {
        displayWeatherInfo(dayForecast);
    });
    forecastContainer.appendChild(dayElement);
}
}

function displayWeatherInfo(weatherData) {
    const weatherInfoContainer = document.getElementById('weatherInfo');
    weatherInfoContainer.innerHTML = '';

    weatherData.forEach(item => {
        const weatherElement = document.createElement('div');
        const time = new Date(item.dt * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        const temperature = item.main.temp;
        const description = item.weather[0].description;
        const clouds = item.clouds.all;
        const windSpeed = item.wind.speed;
        const visibility = item.visibility / 1000; // Convert visibility to kilometers
        const iconUrl = `https://openweathermap.org/img/w/${item.weather[0].icon}.png`;

        weatherElement.innerHTML = `
            <div>${time}</div>
            <img src="${iconUrl}" alt="${description}">
            <div>Temperature: ${temperature}°C</div>
            <div>Description: ${description}</div>
            <div>Clouds: ${clouds}% <img src="cloud-icon.png" alt="Clouds"></div>
            <div>Wind Speed: ${windSpeed} m/s <img src="wind-icon.png" alt="Wind"></div>
            <div>Visibility: ${visibility} km <img src="visibility-icon.png" alt="Visibility"></div>
        `;
        weatherInfoContainer.appendChild(weatherElement);
    });

    weatherInfoContainer.classList.remove('hide');
}





