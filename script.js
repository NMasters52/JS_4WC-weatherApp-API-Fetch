const apiKey = '3c50db9475a0c00809feadc5131454e5'; 
const city = 'Jacksonville'; 
const apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;


const display = document.getElementById('display');

function fetchData() {
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => displayWeather(data))
    .catch(error => displayError(error))
};

function displayWeather(data) {
    display.innerText = `Success: ${data.name}`;
};

function displayError(error) {
    display.innerText = `Error: ${error}`
}

fetchData();