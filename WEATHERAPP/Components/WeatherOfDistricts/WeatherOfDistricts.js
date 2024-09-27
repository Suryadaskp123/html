async function getWeatherDetails() {
  const cityName = localStorage.getItem("City");
  const latitude = localStorage.getItem("latitude");
  const longitude = localStorage.getItem("longitude");
  const pressure = localStorage.getItem("pressure");
  const humidity = localStorage.getItem("humidity");
  const temperature = localStorage.getItem("temperature");
   const imageId = localStorage.getItem("imageId");
    const imageUrl = await getImageUrl(imageId);
    //console.log(imageUrl);

  const cityHeader = document.querySelector(".city-name");
  const weatherImage = document.querySelector(".weather-image");
  const latitudeDiv = document.getElementById("latitude");
  const longitudeDiv = document.getElementById("longitude");
  const humidityDiv = document.getElementById("humidity");
  const pressureDiv = document.getElementById("pressure");
  const temperatureDiv = document.getElementById("temperature");

  weatherImage.src = imageUrl;
  cityHeader.textContent = cityName;
  latitudeDiv.textContent = `Latitude:${latitude}`;
  longitudeDiv.textContent = `Longitude:${longitude}`;
  humidityDiv.textContent = `Humidity:${humidity} %`;
  pressureDiv.textContent = `Pressure:${pressure} Pa`;
  temperatureDiv.textContent = `Temperature:${temperature} °C`;
}
getWeatherDetails();

async function getImageUrl(id) {
  const response = await fetch(
    `https://openweathermap.org/img/wn/${id}@2x.png`
  );
  const url = await response.blob();
    const link = URL.createObjectURL(url);
    return link;
    
}

function goToSearch() {
  window.location.href =
    "/Components/RecentSearchedForcasts/RecentSearchedForcasts.html";
}
