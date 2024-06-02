// script.js
let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

function start() {
  if (!running) {
    startTime = new Date().getTime() - (difference || 0);
    tInterval = setInterval(updateTime, 1);
    running = true;
  }
}

function stop() {
  if (running) {
    clearInterval(tInterval);
    running = false;
  }
}

function reset() {
  clearInterval(tInterval);
  difference = 0;
  running = false;
  display.textContent = "00:00:00:000";
}

function updateTime() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;

  let hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);
  let milliseconds = Math.floor((difference % 1000) / 1);

  display.textContent =
    (hours < 10 ? "0" : "") +
    hours +
    ":" +
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds +
    ":" +
    (milliseconds < 100 ? "0" : "") +
    (milliseconds < 10 ? "0" : "") +
    milliseconds;
}
