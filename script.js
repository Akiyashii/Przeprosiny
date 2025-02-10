// Teksty komunikatów na kliknięcia przycisku "Nie"
var nieMessages = [
    "Nie",
    "Jesteś pewna?",
    "Czy aby na pewno?",
    "Czemu mi to robisz :(",
    "No weź, nie bądź taka..",
    "Nie uda ci się odmówić :PP",
    "Klikaj już tak, Głuptasie :3",
    "Dla mnie nie klikniesz? :C",
    "I tak to zrobisz :PP",
    "Prędzej czy później wymiękniesz!",
    "Dobra nie wygłupiaj się i klikaj :3"
];

var nieClickCount = 0; // Licznik kliknięć przycisku "Nie"

// Funkcja wyboru opcji
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

// Obsługa kliknięcia przycisku "Nie"
function handleNieClick() {
    var nieButton = document.getElementById('Nie-button');
    if (!nieButton) return; // Sprawdź, czy element istnieje

    nieButton.innerText = nieMessages[nieClickCount % nieMessages.length]; // Zmiana tekstu
    nieClickCount++;

    // Powiększanie przycisku "Tak"
    var TakButton = document.getElementById('Tak-button');
    if (!TakButton) return; // Sprawdź, czy element istnieje

    var currentFontSize = window.getComputedStyle(TakButton).getPropertyValue('font-size');
    var newSize = parseFloat(currentFontSize) * 1.2; // Zwiększ rozmiar czcionki o 20%
    TakButton.style.fontSize = newSize + 'px';
}

// Miganie kolorami tęczy
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

// Wyświetlanie obrazka kota
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    if (!imageContainer) return; // Sprawdź, czy element istnieje

    imageContainer.innerHTML = ''; // Usuń wcześniejsze zawartości
    var catImage = new Image();
    catImage.src = 'cat.gif';
    catImage.alt = 'Cat';
    catImage.onload = function () {
        imageContainer.appendChild(catImage);
    };
}

// Wyświetlanie obrazka kota z sercem
function displayCatHeart() {
    var imageContainer = document.getElementById('image-container');
    if (!imageContainer) return; // Sprawdź, czy element istnieje

    imageContainer.innerHTML = ''; // Wyczyść zawartość
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.onload = function () {
        imageContainer.appendChild(catHeartImage);
        var optionsContainer = document.getElementById('options');
        if (optionsContainer) {
            optionsContainer.style.display = 'none';
        }
    };
}

// Ustawienie tła
function setBackground() {
    document.body.style.backgroundImage = "url('tlo.PNG')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
}

// Wyświetlanie tekstu "Huraaaa!! :3" i "Kocham Cię <3"
function displayHuraAndLoveText() {
    if (document.querySelector('.hura-message')) return;

    var messageContainer = document.createElement('div');
    messageContainer.className = 'message-container';

    var huraText = document.createElement('h1');
    huraText.innerText = 'Huraaaaa!! :3';
    huraText.className = 'caveat-text hura-text';

    var loveText = document.createElement('h2');
    loveText.innerText = 'Kocham Cię <3';
    loveText.className = 'caveat-text love-text';

    messageContainer.appendChild(huraText);
    messageContainer.appendChild(loveText);

    var targetContainer = document.getElementById('image-container');
    if (!targetContainer) return;

    targetContainer.appendChild(messageContainer);

    messageContainer.style.position = 'relative';
    messageContainer.style.marginTop = '10px';
    messageContainer.style.fontSize = '24px';
}

// Początkowe wyświetlenie kota po załadowaniu DOM
document.addEventListener('DOMContentLoaded', function () {
    displayCat();
});
