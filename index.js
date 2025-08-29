console.log("Hi there")
const siteSquares = document.getElementsByClassName('squares');
let docCover = document.getElementById('coverAnim');
docCover.classList.remove('transitionAnim');

function coverScreen(callback) {
    docCover.classList.add('transitionAnim');
    docCover.addEventListener('animationend', () => {
        callback();
    });
}

function openHedgie() {
    window.open('/Main/Home.html', '_self');
}
function openMusic() {
    window.open('/Music/Home.html', '_self');
}