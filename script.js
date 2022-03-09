// TimeClock Code
function showTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let session = "AM";

  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h -= 12;
    session = "PM";
  }

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  let time = h + ":" + m + ":" + s + " " + session;

  document.getElementById("time-clock").innerText = time;
  document.getElementById("time-clock").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();


// StopWatch Code
window.onload = function() {
  let seconds = 00;
  let tens = 00;
  const appendTens = document.getElementById('tens');
  const appendSeconds = document.getElementById('seconds');
  const buttonGo = document.getElementById('go-button');
  const buttonStop = document.getElementById('stop-button');
  const buttonReset = document.getElementById('reset-button');

  let Interval;

  buttonGo.onclick = function() {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  }

  buttonStop.onclick = function() {
    clearInterval(Interval);
  }

  buttonReset.onclick = function() {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  }

  function startTimer() {
    tens++;
    
    if(tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
      appendTens.innerHTML = tens;
    }
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }
}