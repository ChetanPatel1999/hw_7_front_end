let song = document.querySelector("#song");
let progress = document.querySelector("#progress");
let ctrlIcon = document.querySelector("#ctrl-icon");

let updateInterval;
song.onloadedmetadata = () => {
    progress.value = song.currentTime;
    progress.max = song.duration;
}

ctrlIcon.onclick = () => {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
        clearInterval(updateInterval);
    }
    else {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
        updateInterval = setInterval(() => {
            progress.value = song.currentTime;
        }, 1000);
    }
}

progress.onchange = () => {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
    clearInterval(updateInterval);
    updateInterval = setInterval(() => {
        progress.value = song.currentTime;
    }, 1000);
}