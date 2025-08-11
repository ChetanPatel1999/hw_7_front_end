let timerDisplay = document.querySelector(".timer-display");
let start = document.querySelector("#start");
let lap = document.querySelector("#lap");
let reset = document.querySelector("#reset");
let body = document.querySelector("body");

let msec = 0;
let secs = 0;
let mins = 0;

let timerId = null;
let div = null;
let id = 0;
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
        start.style.backgroundColor = "red";
        start.innerText = "Stop";
        lap.style.visibility = "visible";
        reset.style.visibility = "visible";
    }
    else {
        clearInterval(timerId);
        timerId = null;
        start.style.backgroundColor = "green";
        start.innerText = "Start";
        lap.style.visibility = "hidden";
    }
})
reset.addEventListener("click", () => {
    clearInterval(timerId);
    timerId = null;
    msec = secs = mins = 0;
    timerDisplay.innerHTML = "00 : 00 : 00";
    start.style.backgroundColor = "green";
    start.innerText = "Start";
    if (div != null) {
        div.remove();
        div = null;
        id = 0;
    }
    lap.style.visibility = "hidden";
    reset.style.visibility = "hidden";
})
lap.addEventListener("click", () => {
    if (div == null) {
        div = document.createElement("div");
        div.id = "timer-lap";
        let h3 = document.createElement("h3");
        h3.innerText = "Timer - Lap";
        let p = document.createElement("p");
        p.innerText = `#${++id} ${timerDisplay.innerText}`;
        div.append(h3);
        div.append(p);
        body.append(div);

    }
    else {
        let p = document.createElement("p");
        p.innerText = `#${++id} ${timerDisplay.innerText}`;
        div.append(p);
    }
})
