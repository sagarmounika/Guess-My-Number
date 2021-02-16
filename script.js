'use strict';
let randomNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
<<<<<<< HEAD
=======

>>>>>>> 8990d83274ffabefde6c0fb3e6af61281256367b
let message = document.querySelector('.message');
let highscore = 0;

// AGAIN EVENT
document.querySelector('.again').addEventListener('click', () => {
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  message.textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
});

// CHECK EVENT
document.querySelector('.check').addEventListener('click', () => {
  let guessNumber = Number(document.querySelector('.guess').value);
  if (!guessNumber || guessNumber > 20) {
    message.textContent = '❌Enter a Valid Number ';
  } else if (guessNumber === randomNumber) {
    message.textContent = '🎉🎉You Guessed it right!!!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = randomNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guessNumber !== randomNumber && score > 1) {
    message.textContent =
      guessNumber > randomNumber ? '📈 Too High!!' : '📉 Too Low!!';
    score--;
    document.querySelector('.score').textContent = score;
  }else{
    message.textContent = '😐You Lost the game!!!';
    document.querySelector('.score').textContent = 0;
  }
});
