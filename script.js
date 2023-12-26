// 'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 correct guess';
// console.log(document.querySelector('.number').textContent);
// console.log(document.querySelector('.score').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 5;
// console.log(document.querySelector('.guess').value);
//

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  // when no input is passed
  if (!guess) {
    displayMessage('no number selected');
  }

  // when correct guess
  else if (guess === secretnumber) {
    displayMessage('you found correct Number 🥇');

    document.querySelector('.number').textContent = secretnumber;
    document.querySelector('body').style.backgroundColor = '#00ff00';

    document.querySelector('.number').style.width = '30 rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // when guess is low & High
  else if (guess !== secretnumber) {
    if (score > 0) {
      displayMessage(guess > secretnumber ? 'guess is high' : 'guess is low');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😿 you lost refresh try again');
    }
  }

  // // when guess is High
  // else if (guess > secretnumber) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = 'choose lower number';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       '😿 you lost refresh try again';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15 rem';
});

// document.querySelector('.highscore').textContent = score;
// if()
