$.getJSON(
    "http://api.openweathermap.org/data/2.5/weather?q=Houston&units=imperical&appid=5d373ebf14b23e4c136989c4bb2d5c31", 
    function(data) {
    console.log(data);

    var weather = data.weather[0].main;
    var temp = Math.floor(data.main.temp);
    var humidity = data.main.humidity;
    var pressure = data.main.pressure;

    $(".weather").append(weather);
    $(".temp").append(temp);
    $(".humidity").append(humidity);
    $(".pressure").append(pressure);
});