var nieMessages = [
    "Nie",
    "Jesteś pewna?",
    "Czy aby na pewno?",
    "Czemu mi to robisz :(",
    "No weź, nie bądź taka..",
    "Nie uda ci się odmówić :PP",
    "Klikaj już tak, Głuptasie :3"
];

var nieClickCount = 0;
var takClicked = false; // Flaga do kontrolowania, czy przycisk "Tak" został już kliknięty.
var audio = new Audio('romantic-music.mp3'); // Muzyka

function selectOption(option) {
    if (option === 'Tak' && !takClicked) {
        takClicked = true;
        playMusic(); // Odtwarzanie muzyki
        flashRainbowColors(function () {
            explodeHearts(); // Eksplozja serduszek
            displayCatHeart();
            setBackground();
            setTimeout(displayHuraAndLoveText, 500);
            setTimeout(displayNextSceneButton, 4000);
        });
    } else if (option === 'Nie') {
        handleNieClick();
    }
}

function handleNieClick() {
    var nieButton = document.getElementById('Nie-button');
    shakeButton('Nie-button'); // Drżenie przy kliknięciu
    nieButton.innerText = nieMessages[nieClickCount % nieMessages.length]; 
    nieClickCount++;

    var currentFontSize = parseFloat(window.getComputedStyle(nieButton).fontSize);
    var newSize = currentFontSize * 0.85; // Zmniejsz o 15% na kliknięcie
    nieButton.style.fontSize = newSize + 'px';

    if (newSize <= 5) {
        nieButton.style.display = 'none'; // Ukryj, gdy stanie się za mały
    }

    var TakButton = document.getElementById('Tak-button');
    var currentTakSize = parseFloat(window.getComputedStyle(TakButton).fontSize);
    var newTakSize = currentTakSize * 1.15; // Powiększ o 15% przy każdym kliknięciu "Nie"
    TakButton.style.fontSize = newTakSize + 'px';
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
    huraText.className = 'caveat-text hura-text'; // Zastosowanie animacji bounce

    var loveText = document.createElement('h2');
    loveText.innerText = 'Kocham Cię <3';
    loveText.className = 'caveat-text love-text';
    loveText.style.opacity = 0;

    messageContainer.appendChild(huraText);
    messageContainer.appendChild(loveText);

    var targetContainer = document.getElementById('image-container');
    targetContainer.appendChild(messageContainer);

    setTimeout(function () {
        loveText.style.animation = "fadeIn 2s forwards";
    }, 3000);
}

function displayNextSceneButton() {
    var nextButton = document.createElement('button');
    nextButton.innerText = "Więcej dowiesz się na dcku c:";
    nextButton.className = 'next-scene-button';
    nextButton.onclick = goToNextScene;
    document.body.appendChild(nextButton);
}

function goToNextScene() {
    document.body.innerHTML = '';
    document.body.style.backgroundColor = '#FFB6C1';

    var kotekImage = new Image();
    kotekImage.src = 'kotek.png';
    kotekImage.alt = 'Kotek z serduszkami';
    kotekImage.className = 'kotek-image';

    document.body.appendChild(kotekImage);
}

function explodeHearts() {
    const canvas = document.createElement('canvas');
    canvas.id = 'hearts-canvas';
    document.body.appendChild(canvas);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext('2d');
    const hearts = [];

    class Heart {
        constructor(x, y, color) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 8 + 5;
            this.color = color;
            this.vx = (Math.random() - 0.5) * 4;
            this.vy = Math.random() * -4 - 2;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.size *= 0.96; // Powolne zmniejszanie rozmiaru
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        hearts.forEach((heart, index) => {
            heart.update();
            heart.draw();
            if (heart.size < 1) hearts.splice(index, 1);
        });

        requestAnimationFrame(animate);
    }

    function spawnHearts(x, y) {
        const colors = ['#ff7f7f', '#f39ac4', '#fb607f'];
        for (let i = 0; i < 15; i++) {
            hearts.push(new Heart(x, y, colors[Math.floor(Math.random() * colors.length)]));
        }
    }

    canvas.addEventListener('click', (event) => {
        spawnHearts(event.clientX, event.clientY);
    });

    animate();

    // Usuń płótno po kilku sekundach
    setTimeout(() => {
        document.body.removeChild(canvas);
    }, 6000);
}

function shakeButton(buttonId) {
    var button = document.getElementById(buttonId);
    button.classList.add('shake');
    setTimeout(() => button.classList.remove('shake'), 500);
}

function playMusic() {
    audio.play();
    audio.loop = true; // Powtarzanie muzyki
}

displayCat();
