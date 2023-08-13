//Global Variables
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=be20ae21258e9d2f18529195894f2466&units=imperial';
const serverURL = 'http://localhost:3000';

// Create a new date instance dynamically with JS
let d = new Date();
let currentMonth = d.getMonth() + 1;
let newDate = currentMonth + '.' + d.getDate() + '.' + d.getFullYear();

//There should be an asynchronous function to fetch the data from the app endpoint ...
const getWeatherData = async (baseURL, zipCode, apiKey) => {
    const response = await fetch(baseURL + zipCode + apiKey);
    try {
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("error", error);
    }
}
// POST route setup on the server side and executed on the client side as an asynchronous function.
// The client side function should take two arguments, the URL to make a POST to, and an object holding the data to POST.
// The server side function should create a new entry in the apps endpoint
// (the named JS object) consisting of the data received from the client side POST.
const postData = async (data = {}) => {
    const response = await fetch(serverURL + "/add", {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        return newData
    } catch (error) {
        console.log("error", error);
    }
}

//Add an event listener to an existing HTML button from DOM using Vanilla JS.
// In the file app.js, the element with the id of generate should have an addEventListener()
// method called on it, with click as the first parameter, and a named callback function as the second parameter.
export function activate(event) {
    event.preventDefault();
    const zipCode = document.getElementById('zip').value;
    const userFeelings = document.getElementById('feelings').value;
    getWeatherData(baseURL, zipCode, apiKey)
        .then(function (data) {
            const temp = data.main.temp;
            postData({
                temp: temp,
                date: newDate,
                content: userFeelings
            })
                .then(updateUI)
        });
}

// Dynamically Update UI - Sets the properties of existing HTML elements from the DOM using Vanilla JavaScript.
// Included in the async function to retrieve that app’s data on the client side,
// existing DOM elements should have their innerHTML properties dynamically set according to data returned by the app route.
const updateUI = async () => {
    const response = await fetch(serverURL + "/all", {
        method: 'GET',
        credentials: 'same-origin',
    });
    try {
        // Transform into JSON
        const allData = await response.json()
        // Write updated data to DOM elements
        document.getElementById('temp').innerHTML = 'Temperature today: ' + Math.round(allData.temp) + ' degrees Fahrenheit';
        document.getElementById('content').innerHTML = 'How you feel today: ' +  allData.content;
        document.getElementById('date').innerHTML = 'Date: ' + allData.date;
    } catch (error) {
        console.log('error', error);
    }
}

