setInterval(getTime,1000)
const hourH= document.querySelector('.hour-hand');
const minH= document.querySelector('.minute-hand');
const secH= document.querySelector('.second-hand');
const audio= document.querySelector('audio');
function getTime(){

const date = new Date();
const sec = date.getSeconds();
const min = date.getMinutes();
const hour = date.getHours();


let secPos = sec*6; 
secH.style.transform = 'rotate(' + secPos+ 'deg)' ;
let minPos = (min*6)+(sec*6)/60;
minH.style.transform = 'rotate(' + minPos+ 'deg)';
let hourPos = hour*360/12 + ((min*6)/12);
hourH.style.transform = 'rotate(' + hourPos+ 'deg)';
audio.play();
}
getTime();