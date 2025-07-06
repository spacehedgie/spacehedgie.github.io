console.log("Hi there!");

// =============== [MUSIC PLAYER] ===============
let playPause = 0;
let previousFileLocation = " ";
let musicFile;
let musicSlider;
let sliderValue = 0;
let musicID;
let movingSlider = false;

function startPauseAudio(musicFileLocation, id) {

    musicID = id;
    if (musicFileLocation != previousFileLocation) {
        try {
            musicFile.pause(); // Stop current audio file
            playPause = 0;
        } catch {  
        }
        musicFile = new Audio(musicFileLocation);
    }                       //Check if audio file is the same to prevent loading it again.
    console.log(musicFile);

    playPause += 1;
    if (playPause == 1){    // Play audio
        musicFile.play();
        console.log("Playing")
    } else {                //Pause Audio
        musicFile.pause();
        playPause = 0;
        console.log("Paused")
    }
    previousFileLocation = musicFileLocation;
}

function sliderStuff() {
    musicSlider = document.getElementById("music-range-" + musicID);

    //NEW CODE (actually works with mobile + less variables and stuff)
    try {
        musicSlider.addEventListener('input', () => {
            musicFile.currentTime = musicSlider.value;
            musicFile.volume = 0;
        });

        musicSlider.addEventListener('mouseup', () => {
            musicFile.volume = 1;
        });
        musicSlider.addEventListener('pointerup', () => {
            musicFile.volume = 1;
        });
        musicSlider.value = musicFile.currentTime;
    } catch {
    } // just to prevent a buttload of errors from the empty "musicSlider" from appearing 😭😭
}

setInterval("sliderStuff()", 1);

// =============== [ON VIEW ANIMATION] =============== (help from https://coolcssanimation.com/how-to-trigger-a-css-animation-on-scroll/)
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('NewMTitle-anim');
        }
    });
});

observer.observe(document.querySelector('#NewMusic_Title'))

// =============== [Download] =============== (Taken from https://stackoverflow.com/questions/3916191/download-data-url-file)
function downloadFile(dataurl) {
    let link = document.createElement("a");
    link.href = dataurl;
    link.click();
}
