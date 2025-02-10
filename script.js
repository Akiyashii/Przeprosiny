// Text messages to show on each "Nie" button click
var nieMessages = [
    "Nie",
    "Jesteś pewna?",
    "Czy aby na pewno?",
    "Czemu mi to robisz :(",
    "No weź, nie bądź taka..",
    "Nie uda ci się odmówić :PP",
    "Klikaj już tak, Głuptasie :3"
];

var nieClickCount = 0; // Keep track of how many times "Nie" is clicked

function selectOption(option) {
    if (option === 'Tak') {
        flashRainbowColors(function () {
            document.getElementById('question').style.display = 'none';
            displayCatHeart();
            setBackground();
            setTimeout(displayHuraText, 500);
            setTimeout(displayLoveText, 500); // Display love text separately
        });
    } else if (option === 'Nie') {
        handleNieClick();
    }
}

// Function to handle "Nie" button click logic
function handleNieClick() {
    var nieButton = document.getElementById('Nie-button');
    nieButton.innerText = nieMessages[nieClickCount % nieMessages.length]; // Cycle through messages
    nieClickCount++;

    // Grow the "Tak" button with each "Nie" click
    var TakButton = document.getElementById('Tak-button');
    var currentFontSize = window.getComputedStyle(TakButton).getPropertyValue('font-size');
    var newSize = parseFloat(currentFontSize) * 1.2; // Increase font size by 20%
    TakButton.style.fontSize = newSize + 'px';
}

function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function () {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);
    setTimeout(function () {
        clearInterval(interval);
        document.body.style.backgroundColor = '';
        if (callback) {
            callback();
        }
    }, 2000);
}

function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cat.gif';
    catImage.alt = 'Cat';
    catImage.onload = function () {
        imageContainer.appendChild(catImage);
    };
}

function displayCatHeart() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.onload = function () {
        imageContainer.appendChild(catHeartImage);
        document.getElementById('options').style.display = 'none';
    };
}

function setBackground() {
    document.body.style.backgroundImage = "url('tlo.PNG')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
}

function displayHuraText() {
    if (document.querySelector('.hura-message')) return;

    var messageContainer = document.createElement('div');
    messageContainer.className = 'message-container';

    var huraText = document.createElement('h1');
    huraText.innerText = 'Huraaaaa!! :3';
    huraText.className = 'caveat-text hura-text';

    messageContainer.appendChild(huraText);

    document.body.appendChild(messageContainer);
}

function displayLoveText() {
    var loveTextContainer = document.createElement('div');
    loveTextContainer.className = 'love-text-container';

    var loveText = document.createElement('h2');
    loveText.innerText = 'Kocham Cię <3';
    loveText.className = 'caveat-text love-text';

    loveTextContainer.appendChild(loveText);

    document.body.appendChild(loveTextContainer);
}

displayCat();
/* General body styling */
body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 0;
    background-color: #FADADD;
}

#container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

#image-container {
}

#question {
    font-family: 'Caveat', cursive;
    font-size: 52px;
}

#options {
    margin-top: 20px;
}

button {
    padding: 10px 20px;
    margin: 0 10px;
    font-size: 26px;
    font-family: 'Caveat', cursive;
    background-color: #FB607F;
    color: white;
    border: none;
    cursor: pointer;
}

.message-container {
    text-align: center;
    margin-top: 20px;
}

.caveat-text {
    font-family: 'Caveat', cursive;
    color: #FF0000; /* Set text color to bright red */
}

.hura-text {
    font-size: 32px;
    margin-bottom: 5px;
}

.love-text-container {
    position: absolute;
    bottom: 20px;
    width: 100%;
    text-align: center;
}

.love-text {
    font-size: 28px;
}
