let timer = document.getElementById('timer');
let startStopButton = document.getElementById('start-stop');
let resetButton = document.getElementById('reset');
let startTime, elapsedTime = 0, intervalId;

function startStop() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    startStopButton.innerHTML = "Iniciar";
  } else {
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTimer, 10);
    startStopButton.innerHTML = "Parar";
  }
}

function updateTimer() {
  elapsedTime = Date.now() - startTime;
  let hours = Math.floor(elapsedTime / 3600000);
  let minutes = Math.floor((elapsedTime - hours * 3600000) / 60000);
  let seconds = Math.floor((elapsedTime - hours * 3600000 - minutes * 60000) / 1000);
  let milliseconds = Math.floor((elapsedTime - hours * 3600000 - minutes * 60000 - seconds * 1000) / 10);
  timer.innerHTML = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds) + "." + pad(milliseconds);
}

function reset() {
  clearInterval(intervalId);
  intervalId = null;
  elapsedTime = 0;
  timer.innerHTML = "00:00:00.00";
  startStopButton.innerHTML = "Iniciar";
}

function pad(number) {
  if (number < 10) {
    return "0" + number;
  } else {
    return number;
  }
}