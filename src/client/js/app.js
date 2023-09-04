//global variables
let todaysDate = new Date();
const oneDay = 24 * 60 * 60 * 1000;
export async function handleSubmit(event) {
        event.preventDefault()
        const destination = document.getElementById("destination").value;
        const startDate = document.getElementById("startDate").value;
        const endDate = document.getElementById("endDate").value;
        const country = document.getElementById("country").value;
        try {
            const holDuration = await sumHolDuration(startDate, endDate);
            const holCountDown = await sumHolCountdown(todaysDate, startDate);
            const currency = await restCountriesFetch(country);
            const languages = await restCountriesFetch(country);
            const population = await restCountriesFetch(country);
            console.log("posting duration days to server");
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
            await postData('/projectData', { destination, country, startDate, endDate, holDuration, holCountDown, currency, population, languages });
            console.log('projectData posted');
            getData('/getData');
        } catch (error) {
            alert(error);
        }
};

// Work out the holiday duration
export const sumHolDuration = (startDate, endDate) => {
    const firstDate = new Date(startDate);
    const secondDate = new Date(endDate);
    const holDuration = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    if (firstDate > secondDate) {
        throw new Error("Choose a future date!");
    }
    console.log(holDuration)
    return holDuration;
};
//Work out holiday Count down
export const sumHolCountdown = (todaysDate, startDate) => {
    const firstCountDate = new Date(todaysDate);
    const secondCountDate = new Date(startDate);
    const holCountDown = Math.round(Math.abs((firstCountDate - secondCountDate) / oneDay));
    if (firstCountDate > secondCountDate) {
        throw new Error("Choose a future date!");
    }
    console.log(holCountDown)
    return holCountDown;
};
export const restCountriesFetch = (country) =>
{return `https://restcountries.com/v3.1/name/${country}?status=true&fields=currencies,languages,population`;
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
            document.getElementById('avg_temp').innerHTML = data[0].averageTemp + ' Degrees Celcius';
            document.getElementById('max_temp').innerHTML = data[0].maxTemp + ' Degrees Celcius';
            document.getElementById('min_temp').innerHTML = data[0].minTemp + ' Degrees Celcius';
            document.getElementById('hol_duration').innerHTML = data[0].holDuration + ' days of holiday bliss';
            document.getElementById('hol_countDown').innerHTML = data[0].holCountDown + ' days';
            document.getElementById('fact_currencies').innerHTML = data[0].currency;
            document.getElementById('fact_languages').innerHTML = data[0].languages;
            document.getElementById('fact_population').innerHTML = data[0].population;
        })
        .catch((err) => {
            console.log(err);
        });
};