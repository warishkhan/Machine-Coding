(function () {
  var hour = document.querySelector(".hours");
  var minute = document.querySelector(".minutes");
  var sec = document.querySelector(".seconds");

  var start = document.querySelector(".start");
  var stop = document.querySelector(".stop");
  var reset = document.querySelector(".reset");

  var conutdowntimer = null;
  start.addEventListener("click", function () {
    if (hour.value == 0 && minute.value == 0 && sec.value == 0) return;
    function startTimer() {
      start.style.display = "none";
      stop.style.display = "initial";

      conutdowntimer = setInterval(() => {
        timer();
      }, 1000);
    }

    startTimer();
  });

  function stopTimer(state) {
    start.innerHTML = state === "pause" ? "continue" : "Start";
    start.style.display = "initial";
    stop.style.display = "none";
    clearInterval(conutdowntimer);
  }

  function timer() {
    if (sec.value > 60) {
      minute.value++;
      sec.value = parseInt(sec.value) - 59;
    }
    if (minute.value > 60) {
      hour.value++;
      minute.value = parseInt(minute.value) - 60;
    }
    if (hour.value == 0 && minute.value == 0 && sec.value == 0) {
      hour.value = "";
      minute.value = "";
      sec.value = "";
      stopTimer();
    } else if (sec.value != 0) {
      sec.value = `${sec.value <= 10 ? "0" : ""}${sec.value - 1}`;
    } else if (minute.value != 0 && sec.value == 0) {
      sec.value = 59;
      minute.value = `${minute.value <= 10 ? "0" : ""}${minute.value - 1}`;
    } else if (hour.value != 0 && minute.value == 0) {
      minute.value = 60;
      hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`;
    }
  }

  //   pouse and continue
  stop.addEventListener("click", function () {
    stopTimer("pause");
  });

  //   reset Timer

  reset.addEventListener("click", function () {
    hour.value = "";
    minute.value = "";
    sec.value = "";
    stopTimer();
  });
})();
