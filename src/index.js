//week3-examples

//AJASTUS

//wait for 1,5 seconds before logging
setTimeout(() => console.log("The tick"),1500);

console.log('kukkuu');

let counter = 0;

//1,5 sekunnin välein x10
const timer = setInterval(() => {
console.log("The tick");
counter++;
if (counter > 9) {
  clearInterval(timer);
  console.log('loppu');
  }
}, 1500);

console.log('kukkuu');
console.log(timer);


//Kuuntelijat/events

const clickHandler = () => {
  console.log('p clicked');
};

//document.querySelector('p').addEventListener('click', clickHandler);
document.querySelector('p').addEventListener('click', (event) => {
console.log('p clicked', event);
if (event.altKey) {
  console.log('p clicked with alt');
  event.stopPropagation(); //eventin eteneminen puussa
  }
});

document.querySelector('#content').addEventListener('click', event => {
  console.log('div clicked');
});

//keyboard events

const keyHistory=[];
document.addEventListener('keyup', event => {
  //console.log('key event', event.key);
  keyHistory.push(event.key);
  if (event.key === 'Enter') {
    console.log(keyHistory);
    keyHistory = [];
  }
});

//CustomEvent

document.addEventListener('myMessage', event => {
  console.log('got a message: ', event.detailt.msg);
});
const myEvent = new CustomEvent('myMessage', {detail: {msg:'hello!'}});
setInterval(() => {
  document.dispatchEvent(myEvent);
}, 200);
