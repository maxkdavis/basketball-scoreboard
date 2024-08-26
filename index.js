'use strict';

//initialize a scoring variable for the home score and guest score
let homeScore = 0;
let guestScore = 0;

//variablize the html element containing the home score <p class="home-score"> and guest score
const homeScoreEl = document.querySelector('.home-score');
const guestScoreEl = document.querySelector('.guest-score');

//create the score increment functions
function homeScoreAdd1() {
  homeScore++;
  homeScoreEl.textContent = homeScore;
}

function homeScoreAdd2() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
}

function homeScoreAdd3() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
}

function guestScoreAdd1() {
  guestScore++;
  guestScoreEl.textContent = guestScore;
}

function guestScoreAdd2() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
}

function guestScoreAdd3() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
}

function resetHomeScore() {
  homeScore = 0;
  homeScoreEl.textContent = 0;
}

function resetGuestScore() {
  guestScore = 0;
  guestScoreEl.textContent = 0;
}
