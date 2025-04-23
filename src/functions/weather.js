export default function weather(address) {

    let cityName = document.getElementById("cityName");
    let temperature = document.getElementById("temperature");
    let feelsLike = document.getElementById("feelsLike");
    let humidity = document.getElementById("humidity");
    let windSpeed = document.getElementById("wind");

    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${address}?key=Z54LFD8W85EJGQDCTJRFR4QQB`, {
        mode: 'cors'
      })
        .then(function(response) {
      
          return response.json();
      
        })
        .then(function(response) {
      
          console.log(response);

          cityName.textContent = `City: ${response.resolvedAddress}`;
          temperature.textContent = `Temperature: ${response.currentConditions.temp}`;
          feelsLike.textContent = `Feels Like: ${response.currentConditions.feelslike}`;
          humidity.textContent = `Humidity: ${response.currentConditions.humidity}`;
          windSpeed.textContent = `Wind Speed: ${response.currentConditions.windspeed}`;
      
          //console.log(response.currentConditions.feelslike)
        })
        .catch(function(err) {
      
            alert("City not found");
        });
}