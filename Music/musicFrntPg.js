console.log("Hi there!");


// CREATURES Cats, Cats
const catsAudio = new Audio("MusicFiles/spacehedgie - Cats, Cats.mp3");
const playPauseButton = document.getElementById('playMusic');
let audioPause = 0;

function startPawsCats(){
    if (audioPause == 0){
        audioPause = 1;
        catsAudio.play();
        playPauseButton.innerHTML = "Pause audio";
    } else {
        audioPause = 0;
        catsAudio.pause();
        catsAudio.currentTime -= 0.1;
        playPauseButton.innerHTML = "Resume audio";
    }
    
};

function stopCats(){
    catsAudio.pause();
    catsAudio.currentTime = 0;
    audioPause = 0;
    playPauseButton.innerHTML = "Start audio";
};


function checkAudioEnd(){
    if (catsAudio.ended == true){
        audioPause = 0;
        playPauseButton.innerHTML = "Start audio";
    }
    setTimeout(checkAudioEnd, 1000);
};

checkAudioEnd();
 
