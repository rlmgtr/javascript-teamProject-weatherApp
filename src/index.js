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
    fetchweather(cityInput);
});

function fetchweather(cityInput) {
    const apiKey = 'f1a7f601f87c9d97579ef8237cc83ff1';
    const apiURL = 'f1a7f601f87c9d97579ef8237cc83ff1';

    fetch(apiURL)
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