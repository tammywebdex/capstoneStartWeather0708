import { handleSubmit, sumHolDuration, sumHolCountdown, getData} from "./js/app";

import './styles/style.scss';
//const submitButton = document.getElementById("submitFormData");
//handleEvent(submitButton);
window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loaded");
    document.querySelector('form').addEventListener('submit', handleSubmit);
});

export { handleSubmit, sumHolDuration, sumHolCountdown, getData};