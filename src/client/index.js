import { handleSubmit, workHolDuration, workHolCountdown, getData} from "./js/app";

import './styles/style.scss';
import './assets/images/travelApp2.jpg';
//function importAll(r) {
//     return r.keys().map(r);
// }
// importAll(require.context("./src/client/assets/icons/a01d.png", false, /\.(png)$/));
//const submitButton = document.getElementById("submitFormData");
//handleEvent(submitButton);
window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loaded");
    document.querySelector('form').addEventListener('submit', handleSubmit);
});

export { handleSubmit, workHolDuration, workHolCountdown, getData};