import {performAction} from './js/app';
import './styles/style.scss';
console.log(performAction);
alert("I EXIST")
window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loaded");
const generate = document.getElementById('generate');
generate.addEventListener ('click', performAction)})

//export {performAction};