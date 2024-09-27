function preventDefaultFunction(event) {
  event.preventDefault();
}
async function searchCity() {
  const error = document.getElementById("search-error");
  const cityName = document.getElementById("city-name").value;
  if (cityName !== "") {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=ca91d94b1d42998274182a641170b560`
    );
    if (response.status === 200) {
        const weatherData = await response.json();
        console.log(weatherData);
        localStorage.setItem("City", weatherData.name);
        localStorage.setItem("latitude", weatherData.coord.lat);
        localStorage.setItem("longitude", weatherData.coord.lon);
        localStorage.setItem("pressure", weatherData.main.pressure);
        localStorage.setItem("humidity", weatherData.main.humidity);
        localStorage.setItem("temperature", weatherData.main.temp);
        localStorage.setItem("imageId", weatherData.weather[0].icon)
        window.location.href = "/Components/WeatherOfDistricts/WeatherOfDistricts.html";
    } else {
      error.textContent = "City not Found!!";
      setTimeout(function () {
        error.textContent = "";
      }, 1500);
    }
  } else {
    error.textContent = "Please Enter City Name";
    setTimeout(function () {
      error.textContent = "";
    }, 1500);
  }
}
