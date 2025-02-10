// Function to handle button click events
function selectOption(option) {
    if (option === 'Tak') {
        setBackgroundImage(); // Ustaw tło na obrazek na początku
        flashRainbowColors(function () {
            document.getElementById('question').style.display = 'none'; 
            document.getElementById('options').style.display = 'none'; 
            displayCatHeart(); 
            displayHuraText(); 
        });
    } else if (option === 'Nie') {
        var nieButton = document.getElementById('Nie-button');
        nieButton.innerText = 'Jesteś pewna?';
        var takButton = document.getElementById('Tak-button');
        var currentFontSize = window.getComputedStyle(takButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        takButton.style.fontSize = newSize + 'px';
    }
}

// Function to display "Huraaaaa!! :3" message
function displayHuraText() {
    if (document.querySelector('.hura-message')) return;
    var textContainer = document.createElement('h1');
    textContainer.innerText = 'Huraaaaa!! :3';
    textContainer.className = 'header_text hura-message';
    document.body.appendChild(textContainer);
}

// Function to set the background image
function setBackgroundImage() {
    document.body.style.backgroundImage = "url('tlo.PNG')";
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed'; // Zapewnia stałe tło
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function () {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);
    setTimeout(function () {
        clearInterval(interval);
        document.body.style.backgroundColor = 'transparent'; // Ustaw tło na przezroczyste, nie resetuj obrazka
        if (callback) {
            callback();
        }
    }, 2000);
}

// Function to display the cat.gif initially
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cat.gif';
    catImage.alt = 'Cat';
    catImage.onload = function () {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.onload = function () {
        imageContainer.appendChild(catHeartImage);
    };
}

// Display the cat.gif initially
displayCat();
