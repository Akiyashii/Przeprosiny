var nieMessages = [
    "Nie",
    "Jesteś pewna?",
    "Czy aby na pewno?",
    "Czemu mi to robisz :(",
    "No weź, nie bądź taka..",
    "Nie uda ci się odmówić :PP",
    "Klikaj już tak, Głuptasie :3",
    "Co ty robisz >:(",
    "Dobra, weź już kliknij, co? c:",
    "Wiedziałem, że cię przekonam :*"
];

var nieClickCount = 0; // Count of "Nie" button clicks
var maxNieClicks = nieMessages.length;

function selectOption(option) {
    if (option === 'Tak') {
        flashRainbowColors(function () {
            document.getElementById('question').style.display = 'none';
            displayCatHeart();
            setBackground();
            setTimeout(displayHuraAndLoveText, 500);
        });
    } else if (option === 'Nie') {
        handleNieClick();
    }
}

function handleNieClick() {
    var nieButton = document.getElementById('Nie-button');

    if (nieClickCount < maxNieClicks) {
        nieButton.innerText = nieMessages[nieClickCount]; // Przejście do kolejnej wiadomości
        nieClickCount++;
    } else {
        nieButton.style.pointerEvents = 'none'; // Wyłączenie możliwości kliknięcia przycisku
    }

    // Powiększanie wyłącznie napisu "Tak"
    var TakButton = document.getElementById('Tak-button');
    var currentFontSize = window.getComputedStyle(TakButton).getPropertyValue('font-size');
    var newSize = parseFloat(currentFontSize) * 1.2; // Powiększenie rozmiaru czcionki o 20%
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

function displayHuraAndLoveText() {
    if (document.querySelector('.hura-message')) return;

    var messageContainer = document.createElement('div');
    messageContainer.className = 'message-container';

    var huraText = document.createElement('h1');
    huraText.innerText = 'Huraaaaa!! :3';
    huraText.className = 'caveat-text hura-text';
    huraText.style.marginTop = '50px'; // Dodano margines górny, aby obniżyć tekst

    var loveText = document.createElement('h2');
    loveText.innerText = 'Kocham Cię <3';
    loveText.className = 'caveat-text love-text';

    messageContainer.appendChild(huraText);
    messageContainer.appendChild(loveText);

    document.body.appendChild(messageContainer);
}

displayCat();
