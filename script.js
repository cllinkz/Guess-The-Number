'use strict';

// DOM MANIPULATION
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

// HOW TO DEFINE THE NUMBER - (how to make random number between 1 and 20)
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// HANDLING CLICK EVENTS
// EVENT LISTENER
// IMPLEMENTING THE GAME LOGIC
// TRYING THE DRY METHOD WITH THE DISPLAY MESSAGE

document.querySelector('.check').addEventListener('click', function () {
  // WE ADD THE NUMBER BECAUSE BY DEFAULT THE FUNCTION PUTS OUT A STRING
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // THIS IS IN CASE THERE IS NO NUMBER INPUTTED IN THE FIELD
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number!';
    displayMessage('No Number!');
  } //IF THE CORRECT NUMBER IS INPUTTED
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number!!!';
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    // WHEN PLAYER GUESSES THE NUMBER - CSS MANUPULATION
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } // IF THE NUMBER IS HIGHER OR LOWER
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber
      //     ? 'The number is too high!'
      //     : 'The number is too low!';
      displayMessage(
        guess > secretNumber
          ? 'The number is too high!'
          : 'The number is too low!'
      );
      // TO DECRESE THE SCORE (IT MEANS TO LOWER THE VALUE OF THE SCORE EACH TIME WE MISS)
      score--; // This means score = score -1;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You Lose the Game!!!';
      displayMessage('You lose the Game!!!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// ### CHALLENGE 01 ### DONE BY MYSELF!!!! PART OF THE GAME
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing ...';
  displayMessage('Start guessing ...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
