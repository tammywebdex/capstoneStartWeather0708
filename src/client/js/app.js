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
            updateUI.responseImage = data[1].imageUrl;
            updateUI.holLength = data[0].holLength;
            updateUI.countdownLength = data[0].countdownLength;
            updateUI.avgTemp = data[0].averageTemp;
            updateUI.maxTemp = data[0].maxTemp;
            updateUI.minTemp = data[0].minTemp;
            updateUI.currencies = data[0].currencies;
            updateUI.languages = data[0].languages;
            updateUI.population = data[0].population;
            updateUI.subarea = data[0].subarea;
            updateUI(updateUI.responseImage, updateUI.avgTemp, updateUI.maxTemp, updateUI.minTemp, updateUI.holLength, updateUI.countdownLength, updateUI.currencies, updateUI.languages, updateUI.population, updateUI.subarea);
        })
        .catch((err) => {
            console.log(err);
        });
};

// updating UI
export const updateUI = (imageURL, avgTemp, maxTemp, minTemp, holLength, countdownLength, currencies, languages, population, subregion) => {
    const responseImage = document.getElementById("response_image");
    const avgTempPlaceholder = document.getElementById("avg_temp");
    const maxTempPlaceholder = document.getElementById("max_temp");
    const minTempPlaceholder = document.getElementById("min_temp");
    const holDuration = document.getElementById("hol_duration");
    const holCountDown = document.getElementById("hol_countDown");
    const factCurrencies = document.getElementById('fact_currencies');
    const factLanguages = document.getElementById('fact_languages');
    const factPopulation = document.getElementById('fact_population');
    const factSubregion = document.getElementById('fact_subregion');

    responseImage.src = imageURL;
    avgTempPlaceholder.textContent = avgTemp + " Degrees Celcius";
    maxTempPlaceholder.textContent = maxTemp + " Degrees Celcius";
    minTempPlaceholder.textContent = minTemp + " Degrees Celcius";
    holDuration.textContent = holLength + " Days of Holiday Bliss";
    holCountDown.textContent = countdownLength + " Days";
    factCurrencies.textContent = currencies;
    factLanguages.textContent = languages;
    factPopulation.textContent = population;
    factSubregion.textContent = subregion;
};