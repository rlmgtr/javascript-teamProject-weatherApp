function getFiveDaysWeather(){
    const cityInput= document.getElementById("cityInput");
    const cityName= document.getElementById("cityName");
    cityName.innerHTML = "City of "+cityInput.value+"" 
}

Fetch("https://api.openweathermap.org/data/2.5/weather?q=+cityInput.value+&appid=f1a7f601f87c9d97579ef8237cc83ff1")

.then(response => response.json())
.then(data => {})