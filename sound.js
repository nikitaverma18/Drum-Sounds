function playSound(key) {
    switch (key) {
        case 'a':
            document.getElementById("kick-sound").play();
            animateButton('dham');
            break;
        case 's':
            document.getElementById("snare-sound").play();
            animateButton('dhum');
            break;
        case 'd':
            document.getElementById("hit-sound").play();
            animateButton('dhram');
            break;
        case 'f':
            document.getElementById("beat-sound").play();
            animateButton('dhidim');
            break;
        case 'c':
            document.getElementById("boom-sound").play();
            animateButton('dhudum');
            break;
        default:
            console.log("No sound mapped to this key.");
            alert("Key not mapped to any sound!"); 
            break;
    }
}

function animateButton(buttonId) {
    const button = document.getElementById(buttonId);
    button.classList.add("active"); 
    setTimeout(() => button.classList.remove("active"), 200); 
}

// Keyboard event listener
document.addEventListener("keydown", function(event) {
    playSound(event.key.toLowerCase()); 
});

// Adding mouseover event listeners to images
const images = document.querySelectorAll('.drum-image');
images.forEach(image => {
    image.addEventListener('mouseover', () => {
        const key = image.nextElementSibling.textContent.toLowerCase();
        playSound(key);
    });
});
