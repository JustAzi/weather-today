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
    celsTemp=response.data.main.temp;
}

function search(city){
 let apiKey="189e88039ef064d4f633182c04fa597d";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;   
axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event){
    event.preventDefault();
    let cityInputElement=document.querySelector("#city-input");
    search(cityInputElement.value);
    console.log(cityInputElement.value);
}
function displayFahrTemp(event){
    event.preventDefault();
    let fahrTemp=(celsTemp*9)/5+32;
    
    let temperatureElement=document.querySelector("#temperature");
    temperatureElement.innerHTML=Math.round(fahrTemp);
}
function displayCelsTemp(event){
    event.preventDefault();

    let temperatureElement=document.querySelector("#temperature");
    temperatureElement.innerHTML=Math.round(celsTemp);
}
let celsTemp=null;

search("New York");

let form=document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let farLink=document.querySelector("#far-link");
farLink.addEventListener("click", displayFahrTemp);

let celsLink=document.querySelector("#cels-link");
celsLink.addEventListener("click", displayCelsTemp);