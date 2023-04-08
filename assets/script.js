var start = document.getElementById('start');
start.addEventListener('click', startTimer);


function startTimer () {
    var timeLeft = 180;
  setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        start.textContent = timeLeft + ' second(s) remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        start.textContent = 'time is up!';
      }
    }, 1000);
  }