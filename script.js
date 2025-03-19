const apiKey = '3c50db9475a0c00809feadc5131454e5'; 
const city = 'Jacksonville'; 
const apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;


const display = document.getElementById('weatherContainer');

function fetchData() {
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => displayWeather(data))
    .catch(error => displayError(error))
};

function displayWeather(data) {
    display.innerHTML = `
         <h2 class="cityName">${data.name}</h2>
        <h3 class="weatherDesc">${data.weather[0].description}</h3>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}">
        <h5 class="weatherTemp">${data.main.temp}</h5>
`;
};

function displayError(error) {
    display.innerText = `Error: ${error}`
}

fetchData();