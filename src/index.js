function displayTemperature(response){
    console.log(response.data);
    let temperatureElement=document.querySelector("#temperature");
    temperatureElement.innerHTML=Math.round(response.data.main.temp);
    let cityElement=document.querySelector("#city");
    cityElement.innerHTML=response.data.name;
    descriptionElement=document.querySelector("#description");
    descriptionElement.innerHTML=response.data.weather[0].main;
    let humidityElement=document.querySelector("#humidity");
    humidityElement.innerHTML=response.data.main.humidity;
    let windElement=document.querySelector("#wind");
    windElement.innerHTML=Math.round(response.data.wind.speed);
    let maxElement=document.querySelector("#max");
    maxElement.innerHTML=Math.round(response.data.main.temp_max);
    let minElement=document.querySelector("#min");
    minElement.innerHTML=Math.round(response.data.main.temp_min);
}

let apiKey="189e88039ef064d4f633182c04fa597d";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=Valencia&appid=${apiKey}&units=metric`;
console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);