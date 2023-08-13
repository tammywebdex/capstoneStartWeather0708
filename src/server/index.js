// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('dist'))


// Setup Server
const port = 3030;
server = app.listen(port, listening);

function listening(){
    console.log('server running');
    console.log(`running on localhost: ${port}`);
}
//get function
app.get('/', function (req, res) {res.sendFile(path.resolve('src/client/views/index.html'))})

app.get('/all', sendData);

function sendData(request, response){
    response.send(projectData);
};

//post function

app.post('/add', postData);

function postData(request, response){
    newPostData = {
        temp: request.body.temp,
        date: request.body.date,
        content: request.body.content
    }
    projectData = newPostData;
    response.send(projectData);
}