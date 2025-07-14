console.log("Hi there!");

// =============== [MUSIC PLAYER] ===============
let previousFileLocation = " ";
let musicFileLocation;
let musicFile;
let currentSlider;
let musicSlider;
let draggedSlider;
let musicID;
let loopToggle = 0;
let loopButton;
let loopButtonID;

// -------- Initialize and Pause/Unpause Audio --------
buttons = document.querySelectorAll('.playerButton');

buttons.forEach(musicPlayerButton => {
    musicPlayerButton.addEventListener('click', startPauseAudio);
});

function startPauseAudio() {

    musicFileLocation = this.dataset.audfileloc;
    musicID = this.id;
    console.log(musicID);

    if (musicFileLocation != previousFileLocation) {
        try {
            previousFileLocation = musicFileLocation;
            musicFile.pause(); // Stop current audio file
            playPause = 0;
        } catch { }
        musicFile = new Audio(musicFileLocation);
        currentSlider = ("music-range-" + musicID);
        loopButtonID = ("loop-" + musicID);
        loopToggle = 0;
        
        musicSlider = document.getElementById(currentSlider);
        sliderStuff(musicSlider.id);

        console.log(currentSlider);
    }                       //Check if audio file is the same to prevent loading it again.

    if (musicFile.paused) {
        musicFile.play();
        //console.log("Playing")
    } else if (!musicFile.pause == false) {
        musicFile.pause();
        //console.log("Paused");
    }
}

// -------- Slider --------

sliders = document.querySelectorAll('.music_slider');

sliders.forEach(musicPlayerSlider => {
    musicPlayerSlider.addEventListener('mousedown', () => {
        sliderStuff(event.target.id);
    });
    musicPlayerSlider.addEventListener('touchstart', () => {
        sliderStuff(event.target.id);
    });
});

function sliderStuff(testVar) {

    try {
        musicSlider.addEventListener('input', () => {

            if (currentSlider == event.target.id) { // check if current slider playing matches the one that is being dragged
                musicFile.currentTime = musicSlider.value;
                musicFile.volume = 0;
                console.log("Passed through");
            } else {
                //console.log("Different slider detected!");
                musicSlider = document.getElementById(currentSlider);
            }
        });

        musicSlider.addEventListener('mouseup', () => {
            if (currentSlider == event.target.id) {
                musicFile.volume = 1;
                musicSlider = document.getElementById(currentSlider);
            }
        });
        musicSlider.addEventListener('pointerup', () => {
            if (currentSlider == event.target.id) {
                musicFile.volume = 1;
                musicSlider = document.getElementById(currentSlider);
            }
        });


        setInterval(() => {
            if (currentSlider == musicSlider.id) {
                musicSlider.value = musicFile.currentTime;
            }
        }, 1);

    } catch { }
    
}

setInterval('sliderStuff()', 10);

// -------- Looping Audio --------
function enableLoop () {
    
    loopButton = document.getElementById("loop-" + musicID);

    if (loopButtonID == loopButton.id) {
        loopToggle += 1;
        if (loopToggle > 1 || loopToggle < 0) {
            loopToggle = 0;
            console.log("Loop disabled");
        } else {
            console.log("Loop enabled");
        }
    }
}

function checkLoop () {
    try {
        if (loopButtonID == loopButton.id) {
            if (loopToggle == 1) {
                loopButton.style.backgroundColor = 'rgb(55, 158, 77)';

                if (musicSlider.value == musicSlider.max) {
                    musicFile.currentTime = 0;
                    playPause = 1;
                    musicFile.play();
                }
            }
        }
    } catch { }

    try {
        if (loopToggle == 0) {
            loopButton.style.backgroundColor = 'lightgrey';
        }
    } catch { }
}
setInterval("checkLoop()", 1);

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
