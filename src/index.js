//// Buttons ///

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
