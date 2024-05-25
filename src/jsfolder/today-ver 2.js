document.addEventListener('DOMContentLoaded', () => {
  const API_KEY = '2f201020ff6edc6cc67b06bdf11d5fd1'; // replace api if needed!!
  const form = document.querySelector('.js-form');
  const input = form.querySelector('input[name="query"]');
  const btnAdd = document.getElementById('js-btnAdd'); //id
  const currentWeatherContainer = document.querySelector('.current-weather');
  const celsiusSpan = document.querySelector('.celsius');
  const fahrenheitSpan = document.querySelector('.fahrenheit');
  const switchInput = document.querySelector('.js-switch-input');
  const clockElement = document.getElementById('clock'); //id
  const dateElement = document.getElementById('date'); //UPDATE THIS INCASE OF NEW REPOSITORY

  let isCelsius = true;

  const fetchWeather = async city => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('City not found');
      }
      return response.json();
    } catch (error) {
      alert(error.message);
      return null;
    }
  };

  const updateCurrentWeather = data => {
    if (data) {
      const weatherIcon = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
      const tempUnit = isCelsius ? 'C' : 'F';

      // Convert temperatures
      const minTemp = isCelsius
        ? data.main.temp_min
        : (data.main.temp_min * 9) / 5 + 32;
      const maxTemp = isCelsius
        ? data.main.temp_max
        : (data.main.temp_max * 9) / 5 + 32;
      //inner html
      currentWeatherContainer.innerHTML = `
        <h2>${data.name}</h2>
        <img src="${iconUrl}" alt="Weather Icon">
        <div>    <p>Weather: ${data.weather[0].description}</p> </div>
        <div class="temp-container">
          <p>Min: ${minTemp.toFixed(2)} &deg${tempUnit}</p>
          <p>Max: ${maxTemp.toFixed(2)} &deg${tempUnit}</p>
        </div>
      `;
    }
  };
  //search input
  const handleSearch = async e => {
    e.preventDefault();
    const city = input.value.trim();
    if (city) {
      const data = await fetchWeather(city);
      updateCurrentWeather(data);
    } else {
      alert('Please enter a city name');
    }
  };
  //temp unit measure
  const toggleTemperatureUnit = () => {
    isCelsius = !isCelsius;
    celsiusSpan.classList.toggle('isActiveColor');
    fahrenheitSpan.classList.toggle('isActiveColor');

    const minTempElement = currentWeatherContainer.querySelector(
      '.temp-container p:nth-child(1)'
    );
    const maxTempElement = currentWeatherContainer.querySelector(
      '.temp-container p:nth-child(2)'
    );
    //TEMP ELEMENTS
    if (minTempElement && maxTempElement) {
      const minTempText = minTempElement.textContent.split(' ')[1];
      const maxTempText = maxTempElement.textContent.split(' ')[1];

      const minTempValue = parseFloat(minTempText);
      const maxTempValue = parseFloat(maxTempText);

      const newMinTempValue = isCelsius
        ? ((minTempValue - 32) * 5) / 9
        : (minTempValue * 9) / 5 + 32;
      const newMaxTempValue = isCelsius
        ? ((maxTempValue - 32) * 5) / 9
        : (maxTempValue * 9) / 5 + 32;

      minTempElement.innerHTML = `Min: ${newMinTempValue.toFixed(2)} &deg${
        isCelsius ? 'C' : 'F'
      }`;
      maxTempElement.innerHTML = `Max: ${newMaxTempValue.toFixed(2)} &deg${
        isCelsius ? 'C' : 'F'
      }`;
    }
  };

  //clock elements

  const getOrdinalSuffix = day => {
    if (day > 3 && day < 21) return 'th'; // Exceptions for 11th, 12th, 13th
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  const updateClockAndDate = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    const day = now.getDate();
    const dayOfWeek = now.toLocaleString('default', { weekday: 'short' });
    const dateString = `${day}${getOrdinalSuffix(day)} ${dayOfWeek}`;

    clockElement.textContent = timeString;
    dateElement.textContent = dateString;
  };

  //event listeners
  //form
  form.addEventListener('submit', handleSearch);
  btnAdd.addEventListener('click', handleSearch);
  switchInput.addEventListener('change', toggleTemperatureUnit);

  //clock
  //updates clock and date every second
  setInterval(updateClockAndDate, 1000);
  //initialize
  updateClockAndDate();
});
