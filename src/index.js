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
document.ondblclick = () => {dblClick();};

const dblClick = () => {
  document.querySelector('html').addEventListener('dblclick', (event) => {
    let x = event.clientX;
    let y = event.clientY;
    console.log('X: ' +x+ '\tY: ' +y);

    const coords ='Mouse coordinates: X: ' + x + ' Y: ' + y;
    document.getElementById("coords").innerHTML = coords;
  });
};

/* Element reacting to touches but not clicks (touch screen only)*/
function myFunction() {
  document.getElementById("touch").innerHTML = console.log("Hello World");
};

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
};
timer2(15);



