import {activate} from './js/app';
import './styles/style.scss';
console.log(activate);
alert("I EXIST")
window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loaded");
    const generate = document.getElementById('generate');
    generate.addEventListener('click', activate)})
//const generate = document.getElementById('generate');
//generate.addEventListener ('click', performAction)})

//export {performAction};