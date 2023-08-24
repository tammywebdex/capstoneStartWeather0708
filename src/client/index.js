import { handleEvent, calcDaysBetweenDates, calcDaysCountdown, updateUI } from "./js/app";

import './styles/style.scss';
import '/src/images/travelApp2.png';
const submitButton = document.getElementById("submitFormData");
handleEvent(submitButton);

export { handleEvent, calcDaysBetweenDates, calcDaysCountdown, updateUI };