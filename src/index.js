const minValue = 1;
const maxValue  = 100;
const maxGuesses = 10;
let startTime = Date.now();

let randomNumber = Math.floor(Math.random() * maxValue) + minValue;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const numberRange = document.querySelector('.numberRange');
const guessDescription = document.querySelector('.guessDescription');
const time = document.querySelector('.timecount');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
guessField.focus();

numberRange.textContent = 'Choose a number between ' + minValue + ' and ' + maxValue + '.';
guessDescription.textContent = 'See if you can guess it in ' +  maxGuesses + ' turns or fewer.';

const checkGuess = () => {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    stopTimer();
    setGameOver();
  } else if (guessCount === maxGuesses) {
    lastResult.textContent = '!!!GAME OVER!!!';
    lowOrHi.textContent = '';
    stopTimer();
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'blue';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
};

guessSubmit.addEventListener('click', checkGuess);

const stopTimer = () => {
  const stopTime = Date.now() - startTime;

  if (guessCount === maxGuesses)  {
    time.textContent += 'Your time was ' + Math.floor(stopTime / 1000) + ' seconds!';
  }
  else {
    time.textContent += 'Your time was ' + Math.floor(stopTime / 1000) + ' seconds! It took ' + guessCount + ' guesses.';
  }
};

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
  startTime = Date.now();

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

//Week2-task1

/*
Optimaalisin algoritmi on puolitushaku eli binäärihaku. Arvoa etsitään ensin vaihteluvälin puolivälistä
ja tietäen onko numero liian suuri vai pieni, jatketaan hakua taulukon alku-tai loppupään puolivälistä
ja niin edelleen.
*/

let computerGuessCount = 1;
let guessHistory = [];

//Algorithm
binaryAlgorithm = (answ, left, right) => {
  console.log('Vastaus, Alueen eka nro, Alueen vika nro', answ, left, right);

  while (left <= right) {
    let middle = Math.floor(left + (right - left) / 2);
    guessHistory.push(middle);
    if (middle < answ) {
      left = middle + 1;
    } else if (middle > answ) {
      right = middle - 1;
    } else {
      return middle;
    }
    computerGuessCount++;
  }
  let res = left - 1;
  return res;
};

//Computer plays 1000 times
ComputerPlayer = () => {
  let avg = 0;
  let sum = 0;
  let maxim = minValue;
  let minim = maxValue;
  guessHistory = [];

  for (i = 0; i < 1001; i++) {
    setGameOver();
    resetGame();

    const rightAnswer = binaryAlgorithm(randomNumber, minValue, maxValue);
    console.log("Right answer: ", rightAnswer);
    console.log("Needed guesses was: ", computerGuessCount);
    console.log("Guesses: ", guessHistory);
    sum = sum + computerGuessCount;
    avg = sum / i;
    if (computerGuessCount > maxim) {
      maxim = computerGuessCount;
    }
    if (guessCount < minim) {
      minim = computerGuessCount;
    }
  }

  console.log("AVG: ", avg);
};
ComputerPlayer();

//Minium guess is 1.

//Max Guesses between 1-1000 guesses is 10, which is log base 2 of 1,000 to be rounded up.
