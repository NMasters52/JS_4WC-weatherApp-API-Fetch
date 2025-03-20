const apiKey = //refrence readMe file
const city = 'Jacksonville'; 
const apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;


const display = document.getElementById('weatherContainer');

 async function fetchData() {
    try {
        //grabs api, returns promise
        const response = await fetch(apiUrl);
        //checks if the fetch was actually successful
        if (!response.ok) {
            throw new Error(`HTTPs request failed ${response.status}`);
        }
        //if it was we create usable data from what we recieved
        const data = await response.json();
        //pass that data as a paramater to our helper function to display the data on screen
        displayWeather(data);
    } catch (error) {
        //throws error if any of the promises above fail
        displayError(error)
    }
           
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
    display.innerHTML = `<p>Error: ${error.message}</p>`
}

fetchData();