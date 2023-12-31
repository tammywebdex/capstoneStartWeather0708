const dotenv = require('dotenv');
dotenv.config();
const fetch = require('node-fetch');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());
app.use(express.static('dist'))

// Setup Server
const port = 3030;
server = app.listen(port, listening);
//setup server listening function
function listening(){
    console.log('server running');
    console.log(`running on localhost: ${port}`);
}
//global variables
const geoKey = process.env.Geonames_API_ID;
const weatherKey = process.env.WeatherBit_Key;
const pixKey = process.env.Pixabay_API_KEY;
//endpoints to facilitate api calls
let projectData = {};
let geoApiData = {};
let weatherApiData = {};
let pixApiData = {};

app.post('/ProjectData', async (request, response) => {
    projectData = {
        destination: request.body.destination,
        holDuration: request.body.holDuration,
        holCountDown: request.body.holCountDown,
        startDate: request.body.startDate,
        endDate: request.body.endDate,
    };
    await apiCall(geoFetch(projectData.destination, geoKey));
    response.status(200).send({ msg: "Received projectData" });
});
//Functions to call all the api's
const geoFetch = (destination) => {
    return `http://api.geonames.org/searchJSON?name=${destination}&maxRows=1&username=${geoKey}`;
};
const weatherFetch = (lat, lng) => {
    return `http://api.weatherbit.io/v2.0/forecast/daily?key=${weatherKey}&lat=${lat}&lon=${lng}`;
};
const pixaFetch = (destination) => {
    return `https://pixabay.com/api/?key=${pixKey}&q=${destination}&image_type=photo&orientation=horizontal`;
};
// function to aid fetch of data from all different APIs
const apiCall = async (url) => {
    try {
        await fetch(url)
            .then((res) => res.json())
            .then(async (data) => {
                console.log("Data is: ", data);
                // Geonames check
                if ('geonames' in data) {
                    geoApiData = {
                        lat: data.geonames[0].lat,
                        lng: data.geonames[0].lng,
                        countryName: data.geonames[0].countryName,
                    };
                    await apiCall(weatherFetch(geoApiData.lat, geoApiData.lng));
                    console.log(geoApiData);
                }
                if ('city_name' in data) {
                    // console.log(data); for debugging purpose only
                    weatherApiData = {
                        averageTemp: data.data[0].temp,
                        minTemp: data.data[0].min_temp,
                        maxTemp: data.data[0].max_temp,
                        holLength: projectData.holDuration,
                        countdownLength: projectData.holCountDown,
                    };
                    await apiCall(pixaFetch(projectData.destination));
                }
                if ('hits' in data) {
                    pixApiData = {
                        imageUrl: data.hits[0].webformatURL,
                    };
                }
            });
    } catch (err) {
        console.log("Error: " + err);
    }
};
app.get("/getData", (req, res) => {
    res.status(200).send([weatherApiData, pixApiData]);
    console.log("Sent all API Data");
});

module.exports = app;