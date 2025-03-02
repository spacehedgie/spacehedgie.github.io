console.log("Hi there")
const siteSquares = document.getElementsByClassName("squares");

function openHedgie() {
    window.open('/spacehedgieMain/hedgieHome.html')
}
function openMusic() {
    window.open('/spacehedgieMusic/musicHome.html')
}

// place addEventListener to all "squares" elements (use for getElementsByClassName)
for (var i = 0 ; i < siteSquares.length; i++) {
    if (siteSquares == event.target) {
        siteSquares[i].addEventListener("mouseover", event => {
            event.target.style.background = "linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))"
        });
    }
}

for (var i = 0 ; i < siteSquares.length; i++) {
    siteSquares[i].addEventListener("mouseout", event => {
        event.target.style.background = "rgba(255, 255, 255, 0.3)"
    });
}