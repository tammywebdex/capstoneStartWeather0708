import { handleSubmit, workHolDuration, workHolCountdown, updateUI } from "./js/app";

import './styles/style.scss';
import '/src/images/travelApp2.png';
//const submitButton = document.getElementById("submitFormData");
//handleEvent(submitButton);
window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loaded");
//Add event listener to submit
    document.getElementById('submit').addEventListener("click", handleSubmit);
});

export { handleSubmit, workHolDuration, workHolCountdown, updateUI };