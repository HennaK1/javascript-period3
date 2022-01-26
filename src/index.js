//Game cheat code
const cheat = (cheatWord) => {
  let keyHistory = [];
  document.addEventListener('keyup', event => {
    keyHistory.push(event.key);
    console.log(event);
    if(keyHistory.join('') === cheatWord) {
      keyHistory = [];
      alert('Secret alert unlocked!');
    }
  });
};
cheat('hi');


/* Function for showing x and y coordinates when mouse is double clicked on the page
*/
const clickCoords = () => {
  const output = document.querySelector('#coords');
  document.addEventListener('dblclick', event => {
    console.log('X: '+event.clientX + '\tY: ' + event.clientY);
    output.textContent = `Double-clicked at X: ${event.clientX} Y:  ${event.clientY}.`;
  });
};
clickCoords();


/* Element reacting to touches but not clicks*/
const reactTouch = () => {
  const target = document.querySelector('.touch');
  const output = document.querySelector('.output');
  target.addEventListener('touchstart', event => {
    output.textContent = `Your touch was registered!`;
  });
};
reactTouch();


/*Create a timer that tells user to "hurry up" after 15 secs of browsing*/
const timer = () => {
  setTimeout(() => {
    alert('Hurry up!');
  }, 15000);
};
timer();


/* Timer idling */
const timer2 = (duration) =>{
  let timer;
  const resetTimer = (event) =>{
    clearTimeout(timer);
    timer = setTimeout(() =>{
      alert('Do something');
    },duration * 1000);
};
resetTimer();

document.addEventListener('keypress', resetTimer);
document.addEventListener('mousemove', resetTimer);
document.addEventListener('touchstart', resetTimer);
};
timer2(15);



