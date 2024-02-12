let hours = document.querySelectorAll(".hours");

//create timing using innerHTML
let time_hrs = document.getElementById("time-hrs");
let time_mins = document.getElementById("time-mins");
let time_secs = document.getElementById("time-secs");
let days = document.getElementById("days");

function countDown(){
let date = new Date();
let currentYear = new Date().getFullYear();

let targetTime = new Date("Feb 15 2011");
targetTime.setFullYear(currentYear);
let dayRemaining = targetTime - date;

const d = Math.floor(dayRemaining / (1000 * 60 * 60 * 24));
const h = Math.floor(dayRemaining / (1000 * 60 * 60) % 24);
const m = Math.floor(dayRemaining / (1000 * 60) % 60);
const s = Math.floor(dayRemaining / (1000) % 60);


time_hrs.innerHTML = h < 10 ? '0' + h : h;
time_mins.innerHTML = m < 10 ? '0' + m : m;
time_secs.innerHTML = s < 10 ? '0' + s : s;
days.innerHTML = d < 10 ? '0' + d : d;
console.log(h,m,s,d);
// countDownOver(countDown);
}

const myInterval = setInterval(countDown, 1000);
// let countdown_over_text = document.getElementById("countdown-over-text");
// countdown_over_text.style.display = " none ";
// function countDownOver(){
//     if(time_hrs < 0 && time_mins < 0 && time_secs < 0 && days < 0){
//         clearInterval(myInterval);
//     }
// }
