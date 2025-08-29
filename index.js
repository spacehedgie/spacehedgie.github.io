console.log("Hi there")
const siteSquares = document.getElementsByClassName("squares");
let docCover = document.getElementById('coverAnim');
let animPlaying = false;

function coverScreen(callback) {
    animPlaying = true;
    docCover.classList.add('transitionAnim');
    docCover.addEventListener('animationend', () => {
        docCover.classList.remove('transitionAnim');
        animPlaying = false;
        callback();
    });
}

function openHedgie() {
    window.open('/Main/Home.html');
}
function openMusic() {
    window.open('/Music/Home.html');
}