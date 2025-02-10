// Function to handle button click events
function selectOption(option) {
    if (option === 'Tak') {
        // Flash rainbow colors
        flashRainbowColors(function () {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Display cat-heart.gif
            displayHuraText(); // Display "Huraaaaa!! :3" and "Kocham Cię <3"
            setBackground(); // Set background image
        });
        
        // Increase the font size of "Tak" button only
        var TakButton = document.getElementById('Tak-button');
        var currentFontSize = window.getComputedStyle(TakButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) + 4; // Increase by 4px
        TakButton.style.fontSize = newSize + 'px';
        
    } else if (option === 'Nie') {
        document.getElementById('Nie-button').innerText = nextNieText(); // Change "Nie" button text
    }
}

// Function to generate sequential text for "Nie" button
let nieClickCount = 0;
function nextNieText() {
    const texts = [
        "Jesteś pewna?", 
        "Czy aby na pewno?", 
        "Czemu mi to robisz :(", 
        "No weź, nie bądź taka..", 
        "Nie uda ci się odmówić :PP", 
        "Klikaj już tak, Głuptasie :3"
    ];
    return texts[nieClickCount++] || texts[texts.length - 1];
}

// Function to flash rainbow colors and execute a callback
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function () {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function () {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
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
        document.getElementById('options').style.display = 'none';
    };
}

// Function to set the background image
function setBackground() {
    document.body.style.backgroundImage = "url('tlo.PNG')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
}

// Function to display "Huraaaaa!! :3" and "Kocham Cię <3"
function displayHuraText() {
    if (document.querySelector('.hura-message')) return;
    
    // Huraaaaa text
    var huraText = document.createElement('h1');
    huraText.innerText = 'Huraaaaa!! :3';
    huraText.className = 'hura-message';
    huraText.style.color = '#800000'; // Text color
    huraText.style.fontFamily = 'Caveat, cursive';
    huraText.style.position = 'absolute';
    huraText.style.top = '20%'; // Position higher on the page
    huraText.style.left = '50%';
    huraText.style.transform = 'translateX(-50%)';
    
    // Kocham Cię text
    var loveText = document.createElement('h1');
    loveText.innerText = 'Kocham Cię <3';
    loveText.className = 'love-message';
    loveText.style.color = '#800000';
    loveText.style.fontFamily = 'Caveat, cursive';
    loveText.style.position = 'absolute';
    loveText.style.bottom = '5%'; // Fixed at the bottom
    loveText.style.left = '50%';
    loveText.style.transform = 'translateX(-50%)';

    document.body.appendChild(huraText);
    document.body.appendChild(loveText);
}

// Display the initial cat.gif
displayCat();
