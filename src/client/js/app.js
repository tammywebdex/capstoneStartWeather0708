//Global Variables
const geoURL = 'https://api.openweathermap.org/geo/1.0/zip?zip=';
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip='
const apiKey = '&appid=be20ae21258e9d2f18529195894f2466';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

function performAction() {
    /*e.preventDefault();*/
    const zipCode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    getWeatherData(baseURL, zipCode, apiKey)
        .then(function(data) {
            console.log('Client side data: ', data);
            postData('/add', {
                temperature: data.main.temperature, date: newDate, feelings: feelings
            })
        })
        .then(function() {
            updateUI();
        })
};
const getWeatherData = async(baseURL, zipCode, apiKey) => {
    const response = await fetch(baseURL + zipCode + apiKey);
    try {
        const data = await response.json();
        console.log(data)
        return data;
    } catch(error) {
        console.log("error", error);
    }
}
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    try {
        const newData = await response.json();
        console.log(newData);
        return newData
    }
    catch(error) {
        console.log("error", error);
    }
}
const updateUI = async() => {
    const request = await fetch('/all');
    try {
        const allData = await request.jason()
        document.getElementById('date'). innerHTML = allData.date;
        document.getElementById('temp').innerHTML = allData.temp;
        document.getElementById('content').innerHTML = allData.feelings;
    } catch(error) {
        console.log("error", error);
    }
}
const generate = document.getElementById('generate');
generate.addEventListener ('click', performAction);getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

export { performAction }