// Function to handle button click events
function selectOption(option) {
    if (option === 'Tak') {
        // Flash rainbow colors
        flashRainbowColors(function () {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Display the cat-heart.gif
            displayHuraText(); // Display "Huraaaaa!! :3"
            setBackground(); // Set background image
        });
    } else if (option === 'Nie') {
        document.getElementById('Nie-button').innerText = 'Jesteś pewna?';
        var TakButton = document.getElementById('Tak-button');
        var currentFontSize = window.getComputedStyle(TakButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by * 2px
        TakButton.style.fontSize = newSize + 'px';
    }
}

// Function to flash rainbow colors and then execute a callback function
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

// Function to display the initial cat.gif
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

// Function to display "Huraaaaa!! :3" message
function displayHuraText() {
    if (document.querySelector('.hura-message')) return;
    var textContainer = document.createElement('h1');
    textContainer.innerText = 'Huraaaaa!! :3';
    textContainer.className = 'header_text hura-message';
    
    // Style for the text
    textContainer.style.color = '#800000'; // Text color
    textContainer.style.border = '2px solid black'; // Black border
    textContainer.style.padding = '10px'; // Padding around text
    textContainer.style.display = 'inline-block'; // Maintain box structure

    document.body.appendChild(textContainer);
}

// Display the initial cat.gif
displayCat();
