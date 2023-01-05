//nav bar
const menuLinks = document.querySelector(".menu-links");
const hamburger = document.querySelector(".hamburger");
const locationInput = document.querySelector(".location-input");
const weatherBtn = document.querySelector(".weather-btn");
const weatherContainer = document.querySelector(".icons-container");

// hamburger
hamburger.addEventListener("click", function () {
  menuLinks.classList.toggle("show-menu");
});

let weatherInfo = [];

const fetchWeather = async () => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${locationInput.value}&appid=66ffb3623b001214cad23b8ecd0d60fd`
    );
    const data = await response.json();
    weatherInfo = data;
    console.log(weatherInfo);

    for (let i = 0; i < 5; i++) {
      const tempMin =
        (weatherInfo.list[i].main.temp_min - 273).toFixed(1) + "°c";
      const tempMax =
        (weatherInfo.list[i].main.temp_max - 273).toFixed(1) + "°c";
      const img = weatherInfo.list[i].weather[0].icon;
      let day = document.getElementById("day" + (i + 1));
      day = weekday[CheckDay(i)];
      weatherContainer.innerHTML += `
        <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="icons mb-4 me-3 p-3">
                            <p class="weather" id="day1">${day}</p>
                            <div class="image">
                                <img src=' http://openweathermap.org/img/wn/${img}@2x.png' alt="icon" class="imgClass img-fluid" id="img1">
                            </div>
                            <div class="d-flex justify-content-between">
                                <p class="minValues" id="day1Min">Min: ${tempMin}</p>
                                <p class="maxValues" id="day1Max">Max: ${tempMax}</p>
                            </div>
                        </div>
                    </div>
      
      `;
    }
  } catch (error) {
    console.log(error);
  }
};

//api
weatherBtn.addEventListener("click", () => {
  fetchWeather();
});

const d = new Date();
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednessday",
  "Thursday",
  "Friday",
  "Saturday",
];

function CheckDay(day) {
  if (day + d.getDay() > 6) {
    return day + d.getDay() - 7;
  } else {
    return day + d.getDay();
  }
}

// for (i = 0; i < 5; i++) {
//   document.getElementById("day" + (i + 1)).innerHTML = weekday[CheckDay(i)];
// }
