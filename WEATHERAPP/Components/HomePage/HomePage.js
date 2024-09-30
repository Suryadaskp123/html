function createSearchedDistrict() {
  const districtNames = JSON.parse(localStorage.getItem("districts"));
  const districtArray = districtNames.districts;

  const temperature = JSON.parse(localStorage.getItem("temperatures"));
  const temperatureArray = temperature["temperature"];
  

  const searchDistricts = document.querySelector(".searched-district");
  for (let i = 0; i < 4; i++) {
    const districtSection = document.createElement("section");
    districtSection.className = "district-section";
    const districtPicture = document.createElement("img");
    const districtDetailsSection = document.createElement("section");
    const districtName = document.createElement("div");
    districtName.className = "district-name";
    districtName.textContent = districtArray[i];
    const districtWeather = document.createElement("div");
    districtWeather.className = "district-weather";
    districtWeather.textContent = `Temperature in the ${districtArray[i]} is ${ temperatureArray[i][`${districtArray[i]}`] } °C`;
    districtDetailsSection.className = "districtDetails-section";
    districtPicture.src = "../../Assets/Image.png";
    districtPicture.className = "district-image";
    searchDistricts.appendChild(districtSection);
    districtSection.appendChild(districtPicture);
    districtSection.appendChild(districtDetailsSection);
    districtDetailsSection.appendChild(districtName);
    districtDetailsSection.appendChild(districtWeather);
  }
}
createSearchedDistrict();


function goToRecentSearch()
{
    window.location.href = "/Components/RecentSearchedForcasts/RecentSearchedForcasts.html";
}