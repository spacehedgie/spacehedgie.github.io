console.log("Hi there!");

//const catsAudio = new Audio("MusicFiles/spacehedgie - Cats, Cats.mp3");
//const BlitzAudio = new Audio("MusicFiles/GLITCH-BLITZ.ogg");

let playPause = 0;
let previousFileLocation = " ";
let musicFile;
let musicSlider;
let sliderValue = 0;
let musicID;
let musicTime;
let previousMusicTime;

function startPauseAudio (musicFileLocation, id) {

    musicID = id;
    if (musicFileLocation != previousFileLocation) {
        musicFile = new Audio(musicFileLocation);
    }
    console.log(musicFile);

    playPause += 1;
    if (playPause == 1){
        musicFile.play();
        console.log("Playing")
    } else {
        musicFile.pause();
        playPause = 0;
        console.log("Paused")
    }
    previousFileLocation = musicFileLocation;
}

function sliderStuff(mouseStat) {
    musicSlider = document.getElementById("music-range-" + musicID);
    //console.log(musicFile.currentTime);
    musicTime = musicFile.currentTime;
    sliderValue = musicTime;
    musicSlider.value = musicTime; // go to music time

    previousMusicTime = musicFile.currentTime
}

setInterval(sliderStuff, 100);
