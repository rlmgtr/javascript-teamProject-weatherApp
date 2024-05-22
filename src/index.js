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

//////////


document.getElementById('dayOne').addEventListener('click', function(){
    document.getElementById('dayOne3hrs').style.display = 'block';
    document.getElementById('dayTwo3hrs').style.display = 'none';
    document.getElementById('dayThree3hrs').style.display = 'none';
    document.getElementById('dayFour3hrs').style.display = 'none';
    document.getElementById('dayFive3hrs').style.display = 'none';
} )

document.getElementById('day2weather').addEventListener('click', function(){
    document.getElementById('day1-3hrs').style.display = 'none';
    document.getElementById('day2-3hrs').style.display = 'block';
    document.getElementById('day3-3hrs').style.display = 'none';
    document.getElementById('day4-3hrs').style.display = 'none';
    document.getElementById('day5-3hrs').style.display = 'none';
} )

document.getElementById('day3weather').addEventListener('click', function(){
    document.getElementById('day1-3hrs').style.display = 'none';
    document.getElementById('day2-3hrs').style.display = 'none';
    document.getElementById('day3-3hrs').style.display = 'block';
    document.getElementById('day4-3hrs').style.display = 'none';
    document.getElementById('day5-3hrs').style.display = 'none';
} )

document.getElementById('day4weather').addEventListener('click', function(){
    document.getElementById('day1-3hrs').style.display = 'block';
    document.getElementById('day2-3hrs').style.display = 'none';
    document.getElementById('day3-3hrs').style.display = 'none';
    document.getElementById('day4-3hrs').style.display = 'block';
    document.getElementById('day5-3hrs').style.display = 'none';
} )

document.getElementById('day5weather').addEventListener('click', function(){
    document.getElementById('day1-3hrs').style.display = 'block';
    document.getElementById('day2-3hrs').style.display = 'none';
    document.getElementById('day3-3hrs').style.display = 'none';
    document.getElementById('day4-3hrs').style.display = 'none';
    document.getElementById('day5-3hrs').style.display = 'block';
} )



