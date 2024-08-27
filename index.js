'use strict';

//initialize a scoring variable for the home score and guest score
let homeScore = 0;
let guestScore = 0;

//variablize the html element containing the home score <p class="home-score"> and guest score
const homeScoreEl = document.querySelector('.home-score');
const guestScoreEl = document.querySelector('.guest-score');
const homeScoreContainerEl = document.querySelector('.home-score-container');
const guestScoreContainerEl = document.querySelector('.guest-score-container');

//create the score increment functions
function homeScoreAdd1() {
  homeScore++;
  homeScoreEl.textContent = homeScore;
  highlightWinner();
}

function homeScoreAdd2() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
  highlightWinner();
}

function homeScoreAdd3() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
  highlightWinner();
}

function guestScoreAdd1() {
  guestScore++;
  guestScoreEl.textContent = guestScore;
  highlightWinner();
}

function guestScoreAdd2() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
  highlightWinner();
}

function guestScoreAdd3() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
  highlightWinner();
}

function resetHomeScore() {
  homeScore = 0;
  homeScoreEl.textContent = 0;
  highlightWinner();
}

function resetGuestScore() {
  guestScore = 0;
  guestScoreEl.textContent = 0;
  highlightWinner();
}

//adding logic to highlight winning team
function highlightWinner() {
  if (homeScore > guestScore) {
    homeScoreContainerEl.classList.add('winning');
    guestScoreContainerEl.classList.remove('winning');
  } else if (guestScore > homeScore) {
    guestScoreContainerEl.classList.add('winning');
    homeScoreContainerEl.classList.remove('winning');
  } else if (homeScore === guestScore) {
    homeScoreContainerEl.classList.remove('winning');
    guestScoreContainerEl.classList.remove('winning');
  }
}
