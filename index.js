function showCity(event) {
  event.preventDefault();
  let inputCity = document.querySelector("#inputCity2");
  let city = inputCity.value;
  let apiUrl =
    "https://api.shecodes.io/weather/v1/current?query=" +
    city +
    "&key=bao9daft74843030f3c02398ec6e1d64&units=metric";
  axios.get(apiUrl).then(currentWeather);
}

function currentWeather(response) {
  console.log(response);
  let city = document.querySelector("#city");
  city.innerHTML = response.data.city;
  //let iconCurrent = document.querySelector(".current-icon");
  //iconCurrent.innerHTML = response.data.condition.icon;
  let tempCurrent = document.querySelector("#current-temperature");
  tempCurrent.innerHTML = Math.round(response.data.temperature.current) + "°C";
  let tempFeel = document.querySelector("#temperature-feel");
  tempFeel.innerHTML = Math.round(response.data.temperature.feels_like) + "°C";
  let wind = document.querySelector("#wind");
  wind.innerHTML = Math.round(response.data.wind.speed);
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.temperature.humidity;
}

let cityForm = document.querySelector("form");
cityForm.addEventListener("submit", showCity);

function formatDate(date) {
  let day = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  return days[day];
}

let date = document.querySelector("#day");
let currentDate = new Date();
date.innerHTML = formatDate(currentDate);

function formatTime(date) {
  let hour = date.getHours();
  let minute = date.getMinutes();

  if (minute < 10) {
    minute = "0" + minute;
  }
  return hour + ":" + minute;
}
let time = document.querySelector("#time");
let currentTime = new Date();
time.innerHTML = formatTime(currentTime);
