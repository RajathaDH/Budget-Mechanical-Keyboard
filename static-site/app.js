const key = document.querySelector('#key');

const keydownAudio1 = new Audio('../sounds/down-1.mp3');
const keyupAudio1 = new Audio('../sounds/up-1.mp3');

const keyDownSounds = [keydownAudio1];
const keyUpSounds = [keyupAudio1];

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