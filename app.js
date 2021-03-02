const key = document.querySelector('#key');

const keydownAudio1 = new Audio('sounds/down1.mp3');
const keydownAudio2 = new Audio('sounds/down2.mp3');
const keydownAudio3 = new Audio('sounds/down3.mp3');
const keydownAudio4 = new Audio('sounds/down4.mp3');
const keyupAudio1 = new Audio('sounds/up1.mp3');
const keyupAudio2 = new Audio('sounds/up2.mp3');
const keyupAudio3 = new Audio('sounds/up3.mp3');
const keyupAudio4 = new Audio('sounds/up4.mp3');

const keyDownSounds = [keydownAudio1, keydownAudio2, keydownAudio3, keydownAudio4];
const keyUpSounds = [keyupAudio1, keyupAudio2, keyupAudio3, keyupAudio4];

document.addEventListener('keydown', (e) => {
    if (!e.repeat) {
        const randomSound = keyDownSounds[Math.floor(Math.random() * keyDownSounds.length)];
        randomSound.currentTime = 0;
        randomSound.play();

        key.innerText = e.key == ' ' ? 'Space' : e.key;
    }
});

document.addEventListener('keyup', (e) => {
    const randomSound = keyUpSounds[Math.floor(Math.random() * keyUpSounds.length)];
    randomSound.currentTime = 0;
    randomSound.play();
});