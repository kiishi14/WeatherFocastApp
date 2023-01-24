//nav bar
const menuLinks = document.querySelector(".menu-links");
const hamburger = document.querySelector(".hamburger");
const locationInput = document.querySelector(".location-input");
const weatherBtn = document.querySelector(".weather-btn");
const weather1Container = document.querySelector(".swiper1-container");
const weather2Container = document.querySelector(".swiper2-container");
const weather3Container = document.querySelector(".swiper3-container");
const weather4Container = document.querySelector(".swiper4-container");
const weather5Container = document.querySelector(".swiper5-container");
const dayContainer = document.querySelector(".day-container");
const swiperSlide = document.querySelector(".carousel-border");
const textContainer = document.querySelector(".text-container");
const currentContainer = document.querySelector(".current-container");
const placeTexts = document.querySelectorAll(".placeholder-text");
const noBorder = document.querySelector(".carousel-border");

let locationField = locationInput.value;

// hamburger
hamburger.addEventListener("click", function () {
  menuLinks.classList.toggle("show-menu");
});

// logout
const logout = (e) => {
  e.preventDefault();
  localStorage.setItem("auth-users", null);
  location.href = "/";
};

let weatherInfo = [];
const fetchWeather = async () => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${locationInput.value}&appid=66ffb3623b001214cad23b8ecd0d60fd`
    );

    if (locationInput.value) {
      const data = await response.json();
      weatherInfo = data;
      console.log(weatherInfo);
      placeTexts.forEach(function (placetext) {
        placetext.classList.add("remove-text");
      });
      const lists = weatherInfo.list;
      console.log(lists);
      const dateToCompare = lists.forEach((list) => {
        const dateOnly = list.dt_txt.split(" ")[0];
        console.log(dateOnly);
      });
      // console.log(Object.keys(weatherInfo).includes(dateOnly));
      for (let i = 0; i < 9; i++) {
        const tempMin = (lists[i].main.temp_min - 273).toFixed(1) + "°c";
        const tempMax = (lists[i].main.temp_max - 273).toFixed(1) + "°c";
        const img = lists[i].weather[0].icon;
        const timeAndDate = lists[i].dt_txt;
        const desc = lists[i].weather[0].description;
        let day = document.getElementById("day" + (i + 1));
        day = weekday[CheckDay(i)];

        weather1Container.innerHTML += `
        <div class="swiper-slide ">
          <div class="">
            <div class="icons mb-4 me-3 p-3">
            <p class="date-time">${timeAndDate}</p>
              <p class="weather" id="day1"></p>
                <div class="image">
                  <img src=" http://openweathermap.org/img/wn/${img}@2x.png" alt="icon" class="imgClass img-fluid" id="img1">
                  <p>${desc}</p>
                </div>
                <div class="d-flex justify-content-between">
                  <p class="minValues" id="day1Min">Min: ${tempMin}</p>
                  <p class="maxValues" id="day1Max">Max: ${tempMax}</p>
                </div>
            </div>
          </div>
        </div>
      
      `;
      }

      for (let i = 9; i < 17; i++) {
        const tempMin =
          (weatherInfo.list[i].main.temp_min - 273).toFixed(1) + "°c";
        const tempMax =
          (weatherInfo.list[i].main.temp_max - 273).toFixed(1) + "°c";
        const timeAndDate = weatherInfo.list[i].dt_txt;
        const img = weatherInfo.list[i].weather[0].icon;
        let day = document.getElementById("day" + (i + 1));
        const desc = weatherInfo.list[i].weather[0].description;
        day = weekday[CheckDay(i)];
        weather2Container.innerHTML += `
        <div class="swiper-slide">
          <div class="">
            <div class="icons mb-4 me-3 p-3">
            <p class="date-time">${timeAndDate}</p>
              <p class="weather" id="day1"></p>
                <div class="image">
                  <img src=" http://openweathermap.org/img/wn/${img}@2x.png" alt="icon" class="imgClass img-fluid" id="img1">
                  <p>${desc}</p>
                </div>
                <div class="d-flex justify-content-between">
                  <p class="minValues" id="day1Min">Min: ${tempMin}</p>
                  <p class="maxValues" id="day1Max">Max: ${tempMax}</p>
                </div>
            </div>
          </div>
        </div>

      `;
      }

      for (let i = 17; i < 25; i++) {
        const tempMin =
          (weatherInfo.list[i].main.temp_min - 273).toFixed(1) + "°c";
        const tempMax =
          (weatherInfo.list[i].main.temp_max - 273).toFixed(1) + "°c";
        const timeAndDate = weatherInfo.list[i].dt_txt;
        const img = weatherInfo.list[i].weather[0].icon;
        let day = document.getElementById("day" + (i + 1));
        const desc = weatherInfo.list[i].weather[0].description;
        day = weekday[CheckDay(i)];
        weather3Container.innerHTML += `
        <div class="swiper-slide">
          <div class="">
            <div class="icons mb-4 me-3 p-3">
            <p class="date-time">${timeAndDate}</p>
              <p class="weather" id="day1"></p>
                <div class="image">
                  <img src=" http://openweathermap.org/img/wn/${img}@2x.png" alt="icon" class="imgClass img-fluid" id="img1">
                  <p>${desc}</p>
                </div>
                <div class="d-flex justify-content-between">
                  <p class="minValues" id="day1Min">Min: ${tempMin}</p>
                  <p class="maxValues" id="day1Max">Max: ${tempMax}</p>
                </div>
            </div>
          </div>
        </div>

      `;
      }

      for (let i = 25; i < 33; i++) {
        const tempMin =
          (weatherInfo.list[i].main.temp_min - 273).toFixed(1) + "°c";
        const tempMax =
          (weatherInfo.list[i].main.temp_max - 273).toFixed(1) + "°c";
        const timeAndDate = weatherInfo.list[i].dt_txt;
        const img = weatherInfo.list[i].weather[0].icon;
        let day = document.getElementById("day" + (i + 1));
        const desc = weatherInfo.list[i].weather[0].description;
        day = weekday[CheckDay(i)];
        weather4Container.innerHTML += `
        <div class="swiper-slide">
          <div class="">
            <div class="icons mb-4 me-3 p-3">
            <p class="date-time">${timeAndDate}</p>
              <p class="weather" id="day1"></p>
                <div class="image">
                  <img src=" http://openweathermap.org/img/wn/${img}@2x.png" alt="icon" class="imgClass img-fluid" id="img1">
                  <p>${desc}</p>
                </div>
                <div class="d-flex justify-content-between">
                  <p class="minValues" id="day1Min">Min: ${tempMin}</p>
                  <p class="maxValues" id="day1Max">Max: ${tempMax}</p>
                </div>
            </div>
          </div>
        </div>

      `;
      }

      for (let i = 33; i < 40; i++) {
        const tempMin =
          (weatherInfo.list[i].main.temp_min - 273).toFixed(1) + "°c";
        const tempMax =
          (weatherInfo.list[i].main.temp_max - 273).toFixed(1) + "°c";
        const timeAndDate = weatherInfo.list[i].dt_txt;
        const img = weatherInfo.list[i].weather[0].icon;
        const desc = weatherInfo.list[i].weather[0].description;
        weather5Container.innerHTML += `
        <div class="swiper-slide">
          <div class="">
            <div class="icons mb-4 me-3 p-3">
            <p class="date-time">${timeAndDate}</p>
              <p class="weather" id="day1"></p>
                <div class="image">
                  <img src=" http://openweathermap.org/img/wn/${img}@2x.png" alt="icon" class="imgClass img-fluid" id="img1">
                  <p>${desc}</p>
                </div>
                <div class="d-flex justify-content-between">
                  <p class="minValues" id="day1Min">Min: ${tempMin}</p>
                  <p class="maxValues" id="day1Max">Max: ${tempMax}</p>
                </div>
            </div>
          </div>
        </div>

      `;
      }
    } else {
      alert("Type a Valid City Name!!");
    }
  } catch (error) {
    console.log(error);
  }
};

const date = () => {};

// date();

let currentWeatherInfo = [];

const currentWeather = async () => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=66ffb3623b001214cad23b8ecd0d60fd`
    );
    const data = await response.json();
    currentWeatherInfo = data;
    console.log(currentWeatherInfo);
    const tempMin = (currentWeatherInfo.main.temp_min - 273).toFixed(1) + "°c";
    const tempMax = (currentWeatherInfo.main.temp_max - 273).toFixed(1) + "°c";
    const pressure = currentWeatherInfo.main.pressure;
    const humidity = currentWeatherInfo.main.humidity;
    const seaLevel = currentWeatherInfo.main.sea_level;
    const grndLevel = currentWeatherInfo.main.grnd_level;
    const desc = currentWeatherInfo.weather[0].description;
    const img = currentWeatherInfo.weather[0].icon;
    currentContainer.innerHTML += `
      <div class="card card-style">
                                <img src="http://openweathermap.org/img/wn/${img}.png" class="card-img-top img-fluid" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title text-white">In Lagos, it has ${desc} </h5>
                                </div>
                                <ul class="list-group list-group-flush text-center">
                                    <li class="list-group-item d-flex justify-content-between">
                                        <p class='text-primary'>Min: ${tempMin}</p>
                                        <p class='text-primary'>Max: ${tempMax}</p>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between">
                                        <p class='text-primary'>Humidity: ${humidity}</p>
                                        <p class='text-primary'>Pressure: ${pressure}</p>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between">
                                        <p class='text-primary'>Sea Level: ${seaLevel}</p>
                                        <p class='text-primary'>Ground Level: ${grndLevel}</p>
                                    </li>
                                </ul>
                            </div>
    `;
  } catch (error) {
    console.log(error);
  }
};

window.addEventListener("load", () => {
  currentWeather();
});

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

// (() => {
//   if (!localStorage.getItem("auth-users")) {
//     location.href = "/";
//   }
// })();

// for (i = 0; i < 5; i++) {
//   let day = document.getElementById("day" + (i + 1));
//   day = weekday[CheckDay(i)];
//   dayContainer.innerHTML += `
//     <p id="day">${day}</p>

//   `;
// }
