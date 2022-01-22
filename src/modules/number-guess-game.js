const minValue = 1;
const maxValue  = 100;
const maxGuesses = 10;
//let startTime = Date.now();

let randomNumber = Math.floor(Math.random() * maxValue) + minValue;
console.log("random number ", randomNumber);

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const numberRange = document.querySelector('.numberRange');
const guessDescription = document.querySelector('.guessDescription');
//const time = document.querySelector('.timecount');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
guessField.focus();

numberRange.textContent = 'Choose a number between ' + minValue + ' and ' + maxValue + '.';
guessDescription.textContent = 'See if you can guess it in ' +  maxGuesses + ' turns or fewer.';

const checkGuess = (input) => {
  //console.log('checkguess input', input);
  let userGuess;
  //-1: too low, 0: correct, +1: too high
  let guessDirection;
  if(typeof input === 'object'){
    userGuess = Number(guessField.value);
  }else{
    userGuess = input;
  }

  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    //stopTimer();
    setGameOver();
    return 0;
  } else if (guessCount === maxGuesses) {
    lastResult.textContent = '!!!GAME OVER!!!';
    lowOrHi.textContent = '';
    //stopTimer();
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'blue';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
      return 1;
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
};

const StartGame = () =>{
  guessSubmit.addEventListener('click', checkGuess);
};

/*const stopTimer = () => {
  const stopTime = Date.now() - startTime;

  if (guessCount === maxGuesses)  {
    time.textContent += 'Your time was ' + Math.floor(stopTime / 1000) + ' seconds!';
  }
  else {
    time.textContent += 'Your time was ' + Math.floor(stopTime / 1000) + ' seconds! It took ' + guessCount + ' guesses.';
  }
};*/

const setGameOver = () => {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGame);
};

const resetGame = () => {
  guessCount = 1;
  //startTime = Date.now();

  const resetParas = document.querySelectorAll('.resultParas p');
  for (const resetPara of resetParas) {
    resetPara.textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * maxValue) + minValue;
};

export {StartGame, checkGuess, resetGame};
