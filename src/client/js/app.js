//global variables
let todaysDate = new Date();
const oneDay = 24 * 60 * 60 * 1000;
const serverURL = 'http://localhost:3030';
export async function handleSubmit(event) {
        event.preventDefault()
        const destination = document.getElementById("destination").value;
        const startDate = document.getElementById("startDate").value;
        const endDate = document.getElementById("endDate").value;
        try {
            const holDuration = await calcHolDuration(startDate, endDate);
            const holCountDown = await calcHolCountdown(todaysDate, startDate);
            console.log('Posting dates to server');
            /* Function to POST data */
const postData = async (url = "", data = {}) => {
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        return newData;
        console.log(newData);
    } catch (error) {
        console.log("Error: ", error);
    }
};
await postData('/projectData', {destination, startDate, endDate, holDuration, holCountDown });
getData('/getData');
        } catch (error) {
            alert(error);
        }
};

// Work out the holiday duration
export const calcHolDuration = (startDate, endDate) => {
    const firstDate = new Date(startDate);
    const secondDate = new Date(endDate);
    const holDuration = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    if (firstDate > secondDate) {
        throw new Error('Date is in the past. Please select a valid date in the future!');
    }
    console.log(holDuration)
    return holDuration;
};
//Work out holiday Count down
export const calcHolCountdown = (todaysDate, startDate) => {
    const firstCountDate = new Date(todaysDate);
    const secondCountDate = new Date(startDate);
    const holCountDown = Math.round(Math.abs((firstCountDate - secondCountDate) / oneDay));
    if (firstCountDate > secondCountDate) {
        throw new Error('Date is in the past. Please select a valid date in the future!');
    }
    console.log(holCountDown)
    return holCountDown;
};

//let uiData = {};
// const errorMessage = document.getElementById("error_message");

//function to get data
export const getData = async (url = "") => {
    const response = await fetch(url, {
        method: "GET",
        credentials: "same-origin",
        headers: {"Content-Type": "application/json"},
    })
        .then((response) => {return response.json();
        })
        .then((data) => {
            document.getElementById('response_image').src = data[1].imageUrl;
            //document.getElementById('fact_flag').innerHTML = data[0].factFlag + " Country name";
            document.getElementById('avg_temp').innerHTML = data[0].averageTemp + " Degrees Celcius";
            document.getElementById('max_temp').innerHTML = data[0].maxTemp + " Degrees Celcius";
            document.getElementById('min_temp').innerHTML = data[0].minTemp + " Degrees Celcius";
            //document.getElementById('icon').src = data[0].weatherIcon;
            //document.getElementById('icon').src = `./client/assets/icons/${data[0].weatherIcon}.png`;
            //document.getElementById('icon').src = `${data[0].weatherIcon}.png`;
            //document.getElementById('icon').innerHTML = `<img src="../media/icons/${data.data[days].weather.icon}.png" alt= "${data.data[days].weather.description}"></img>`
            document.getElementById('hol_duration').innerHTML = data[0].holDuration + ' days of holiday bliss';
            document.getElementById('hol_countDown').innerHTML = data[0].holCountDown + ' days';
            document.getElementById('fact_currencies').innerHTML = data[0].factCurrencies;
            document.getElementById('fact_languages').innerHTML = data[0].factLanguages;
            document.getElementById('fact_population').innerHTML = data[0].factPopulation;
            document.getElementById('fact_subregion').innerHTML = data[0].factSubregion;
        })
        .catch((err) => {
            console.log(err);
        });
};