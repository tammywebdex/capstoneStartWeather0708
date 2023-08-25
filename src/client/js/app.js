//global variables
let todaysDate = new Date();
const oneDay = 24 * 60 * 60 * 1000;
export async function handleSubmit(event) {
        event.preventDefault()
        const destination = document.getElementById("destination").value;
        const startDate = document.getElementById("startDate").value;
        const endDate = document.getElementById("endDate").value;
        try {
            const holDuration = await workHolDuration(startDate, endDate);
            const holCountDown = await workHolCountdown(todaysDate, startDate);
            console.log("POSTING DATA TO SERVER");
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
                } catch (error) {
                    console.log("Error: ", error);
                }
            };
            await postData("/postProjectData", { destination, startDate, endDate, holDuration, holCountDown });
            getData("/getData");
        } catch (error) {
            alert(error);
        }
};

// Work out the holiday duration
export const workHolDuration = (startDate, endDate) => {
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
export const workHolCountdown = (todaysDate, startDate) => {
    const firstCountDate = new Date(todaysDate);
    const secondCountDate = new Date(startDate);
    const holCountDown = Math.round(Math.abs((firstCountDate - secondCountDate) / oneDay));
    if (firstCountDate > secondCountDate) {
        throw new Error("Choose a future date!");
    }
    console.log(holCountDown)
    return holCountDown;
};

//let uiData = {};
// const errorMessage = document.getElementById("error_message");

//function to get data
const getData = async (url = "") => {
    const response = await fetch(url, {
        method: "GET",
        credentials: "same-origin",
        headers: {"Content-Type": "application/json"},
        })
        .then((response) => {return response.json();
        })
        .then((data) => {
            uiData.response_image = data[1].imageUrl;
            uiData.tripLength = data[0].tripLength;
            uiData.countdownLength = data[0].countdownLength;
            uiData.avgTemp = data[0].averageTemp;
            uiData.maxTemp = data[0].maxTemp;
            uiData.minTemp = data[0].minTemp;
            uiData.currency = data[0].currency;
            uiData.language = data[0].language;
            uiData.population = data[0].population;
            updateUI(uiData.response_image, uiData.avgTemp, uiData.maxTemp, uiData.minTemp, uiData.tripLength, uiData.countdownLength, uiData.currency, uiData.language, uiData.population);
        })
        .catch((err) => {
            console.log(err);
        });
};

// updating UI
export const updateUI = (imageURL, avgTemp, maxTemp, minTemp, tripLength, countdownLength, currency, language, population) => {
    const resultImage = document.getElementById("result_image");
    const avgTempPlaceholder = document.getElementById("avg_temp");
    const maxTempPlaceholder = document.getElementById("max_temp");
    const minTempPlaceholder = document.getElementById("min_temp");
    const tripDuration = document.getElementById("trip_duration");
    const tripCountDown = document.getElementById("count_down");
    const factCurrency = document.getElementById('currency');
    const factLanguage = document.getElementById('language');
    const factPopulation = document.getElementById('population');

    resultImage.src = imageURL;
    avgTempPlaceholder.textContent = avgTemp + "°C";
    maxTempPlaceholder.textContent = maxTemp + "°C";
    minTempPlaceholder.textContent = minTemp + "°C";
    tripDuration.textContent = tripLength + " Days";
    tripCountDown.textContent = countdownLength + " Days";
    factCurrency.textContent = currency;
    factLanguage.textContent = language;
    factPopulation.textContent = population;

};