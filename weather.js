let form = document.getElementById("weatherForm");
form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  let city = document.getElementById("inputCity").value;

  getWeatherInfo(city);
  return false;
}

async function getWeatherInfo(city) {
  try {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=8fdc47872bb37ccd2f18f5b80e172fbc`
    );
    let data = await res.json();

    let cityData = city;
    let highData = (data["main"]["temp_max"] - 273.15) * 1.8 + 32;
    let lowData = (data["main"]["temp_min"] - 273.15) * 1.8 + 32;
    let forecastData = data["weather"][0]["main"];
    let humidityData = data["main"]["humidity"];

    let appendCity = document.getElementById("appendCity");
    let appendHigh = document.getElementById("appendHigh");
    let appendLow = document.getElementById("appendLow");
    let appendForecast = document.getElementById("appendForecast");
    let appendHumidity = document.getElementById("appendHumidity");

    appendCity.innerHTML = city;
    appendHigh.innerHTML = Math.floor(highData) + " F";
    appendLow.innerHTML = Math.floor(lowData) + " F";
    appendForecast.innerHTML = forecastData;
    appendHumidity.innerHTML = humidityData;
  } catch (err) {
    console.error(err);
  }
}
