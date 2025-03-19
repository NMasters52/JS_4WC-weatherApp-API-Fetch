const apiKey = //your api key here. sign up for one at https://home.openweathermap.org/users/sign_up
const city = 'Jacksonville'; 
const apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;


const display = document.getElementById('weatherContainer');

function fetchData() {
            fetch(apiUrl)
                .then(res => {if (res.ok) {
                   return res.json()
                }else {
                    display.innerHTML = `<p>Fetch Error: ${res.status}</p>`;
                }})
                .then(data => displayWeather(data))
                .catch(error => displayError(error))
};

function displayWeather(data) {
    display.innerHTML = `
        <h2 class="cityName">${data.name}</h2>
        <h3 class="weatherDesc">${data.weather[0].description}</h3>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}">
        <h5 class="weatherTemp">${Math.round(data.main.temp)}F</h5>
`;
};

function displayError(error) {
    display.innerHTML = `<p>Error: ${error}</p>`
}

fetchData();