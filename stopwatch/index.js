let timerDisplay = document.querySelector(".timer-display");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");

let msec = 0;
let secs = 0;
let mins = 0;

let timerId = null;

function setTimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;
        }
    }

    let msecstr = msec < 10 ? `0${msec}` : msec;
    let secsstr = secs < 10 ? `0${secs}` : secs;
    let minsstr = mins < 10 ? `0${mins}` : mins;

    timerDisplay.innerHTML = `${minsstr} : ${secsstr} : ${msecstr}`;
}

start.addEventListener("click", () => {

    if (timerId == null) {
        timerId = setInterval(setTimer, 10);
    }
})

stop.addEventListener("click", () => {
    clearInterval(timerId);
    timerId = null;
})
reset.addEventListener("click", () => {
    clearInterval(timerId);
    timerId = null;
    msec = secs = mins = 0;
    timerDisplay.innerHTML = "00 : 00 : 00";
    
})
