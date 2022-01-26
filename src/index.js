/**Game cheat code
* Function for when user types a secret code so alert shows up
* @param {String} cheatWord secret code word
*/
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


/**
 * Function for showing x and y coordinates when mouse is double clicked on the html page
*/
const clickCoords = () => {
  const output = document.querySelector('#coords');
  document.addEventListener('dblclick', event => {
    let x = event.clientX;
    let y = event.clientY;
    console.log('X: '+ x + '\tY: ' + y);
    output.textContent = `Double-clicked at X: ${x} Y:  ${y}.`;
  });
};
clickCoords();


/**
 * Element reacting to touches but not clicks
 */
document.querySelector('#touch').addEventListener('mouseover', event => {
  console.log('You touched the text!');
});


/**
 * Timer function telling user to "hurry up" after 15 secs of browsing
 */
const timer = () => {
  setTimeout(() => {
    alert('Hurry up!');
  }, 15000);
};
timer();


/**
* Function for timer telling to hurry up after 15 seconds idling on the page
*/
const timer2 = () =>{
  let timer;
  const resetTimer = (event) =>{
    clearTimeout(timer);
    timer = setTimeout(() =>{
      alert('Do something');
    }, 15000);
};
resetTimer();

document.addEventListener('keyup', resetTimer);
document.addEventListener('mousemove', resetTimer);
};
timer2(15);



