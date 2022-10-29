function formatDate(timestamp){
    let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];

    return `${day} ${hours}:${minutes}`;
}
function displayTemperature(response){
    console.log(response.data);
    let temperatureElement=document.querySelector("#temperature");
    temperatureElement.innerHTML=Math.round(response.data.main.temp);
    let cityElement=document.querySelector("#city");
    cityElement.innerHTML=response.data.name;
    descriptionElement=document.querySelector("#description");
    descriptionElement.innerHTML=response.data.weather[0].description;
    let humidityElement=document.querySelector("#humidity");
    humidityElement.innerHTML=response.data.main.humidity;
    let windElement=document.querySelector("#wind");
    windElement.innerHTML=Math.round(response.data.wind.speed);
    let maxElement=document.querySelector("#max");
    maxElement.innerHTML=Math.round(response.data.main.temp_max);
    let minElement=document.querySelector("#min");
    minElement.innerHTML=Math.round(response.data.main.temp_min);
    let dateElement = document.querySelector("#date")
    dateElement.innerHTML = formatDate(response.data.dt * 1000);
    let iconElement=document.querySelector("#icon");
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute("alt", response.data.weather[0].description);
}

let apiKey="189e88039ef064d4f633182c04fa597d";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=Valencia&appid=${apiKey}&units=metric`;
console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);