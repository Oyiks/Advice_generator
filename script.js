'use strict';

const dice = document.querySelector('.dice');
const adviceSlip = document.querySelector('.adviceSlip');
const adviceId = document.querySelector('.advice');
const API_LINK = "https://api.adviceslip.com/advice";

dice.addEventListener('click', function(event) {
    // let adviceId = document.createTextNode("SPAN")
    const response1 = fetch(API_LINK)
    .then(function(response) {
        console.log(response);
        return response.json();
    })
     .then(function (adviceData) {
        adviceId.textContent = `ADVICE # ${adviceData.slip.id}`;
     });

    const response2 = fetch(`https://api.adviceslip.com/advice`)
    .then(function(response) {
        console.log(response);
        return response.json();
    })
    .then(function (adviceText) {
        adviceSlip.innerText = `" ${adviceText.slip.advice} "`;
    });
});
