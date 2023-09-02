import { handleSubmit, sumHolDuration, sumHolCountdown, getData } from "./js/app";

import './styles/style.scss';
import '/src/images/travelApp2.png';
//const submitButton = document.getElementById("submitFormData");
//handleEvent(submitButton);
window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loaded");
    document.querySelector('form').addEventListener('submit', handleSubmit);
});

export { handleSubmit, sumHolDuration, sumHolCountdown, getData };