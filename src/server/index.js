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

function listening(){
    console.log('server running');
    console.log(`running on localhost: ${port}`);
}
//global variables
const geoKey = process.env.Geonames_API_ID;
const weatherKey = process.env.WeatherBit_Key;
const pixKey = process.env.Pixabay_API_KEY;
//endpoints
let projectData = {};
let geoApiData = {};
let weatherApiData = {};
let pixApiData = {};
let restApiData = {};

app.post('/addProjectData', async (request, response) => {
    projectData = {
        destination: request.body.destination,
        holDuration: request.body.holDuration,
        holCountDown: request.body.holCountDown,
    };
    console.log(projectData);
    return(projectData);
    response.status(200).send({ msg: "Received data" });

app.post('/getGeoApiData', async(request, response) =>{
        const getGeoData = await fetch(`http://api.geonames.org/searchJSON?name=${projectData.destination}&maxRows=1&username=${geoKey}`,
            {method: "POST",
                credentials: "same-origin",
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify(data),
            });
        try {
            const geoData = await getGeoData.json();
            geoApiData['country'] = geoData.data[0].countryName;
            geoApiData['lat'] = geoData.data[0].lat;
            geoApiData['lng'] = geoData.data[0].lng;
            console.log(geoApiData);
            response.send(geoApiData);
        }catch(error){
            console.log("error", error);
        }})
    });

app.post('/getWeatherApiData', async(request, response)=>{
    const getWeatherData = await fetch(`http://api.weatherbit.io/v2.0/forecast/daily?key=${weatherKey}&lat=${geoApiData.lat}&lon=${geoApiData.lng}`,{
        method: "POST",
        credentials: "same-origin",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify(data),
    });
    try {
        const weatherData = await getWeatherData.json();
        weatherApiData['averageTemp'] = weatherData.data[0].temp;
        weatherApiData['minTemp'] = weatherData.data[0].min_temp;
        weatherApiData['maxTemp'] = weatherData.data[0].max_temp;
        //weatherApiData['weatherIcon'] = weatherData.data[0].weather.icon;
        console.log(weatherApiData);
        response.send(weatherApiData);
    } catch (error) {
        console.log("Error: ", error);
    }
});
app.get('/getRestApiData', async(request, response)=>{
    const getRestData = await fetch(`https://restcountries.com/v3.1/name/${geoApiData.country}?status=true&fields=currencies,languages,population`,{
        method: "POST",
        credentials: "same-origin",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify(data),
    });
    try {
        const restData = await getRestData.json();
        restApiData['currencies'] = restData.data[0].currencies;
        geoApiData['languages'] = restData.data[0].languages;
        geoApiData['population'] = restData.data[0].population;
        console.log(restApiData);
        response.send(restApiData);
    } catch (error) {
        console.log("Error: ", error);
    }
});
app.post('/getPixApiData', async(request,response)=>{
    const getPixData = fetch(`https://pixabay.com/api/?key=${pixKey}&q=${geoApiData.destination}&image_type=photo&orientation=horizontal`,{
        method: "POST",
        credentials: "same-origin",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify(data),
    });
    try {
        const pixData = await getPixData.json();
        pixApiData['imageUrl'] = pixData.hits[0].webformatURL;
        console.log(pixApiData);
        response.send(pixApiData);
    } catch (error) {
        console.log("Error: ", error);
    }
});
app.get("/getData", (req, res) => {
    res.status(200).send([projectData, weatherApiData, pixApiData, restApiData]);
    console.log("Sent Data");
});

module.exports = app;