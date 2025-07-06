const words = ["Graphical Designer.", "Programmer.", "Ethical Hacker.", "Web-Developer." ,"3D Animator.","Music Producer."];
let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;
const textElement = document.getElementById("text");

function type() {
    if (isDeleting) {
        currentWord = words[wordIndex].substring(0, charIndex--);
    } else {
        currentWord = words[wordIndex].substring(0, charIndex++);
    }

    textElement.textContent = currentWord;

    if (!isDeleting && charIndex === words[wordIndex].length) {
        isDeleting = true;
        setTimeout(type, 1000); // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500); // Pause before typing next word
    } else {
        setTimeout(type, isDeleting ? 100 : 200);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 500);
});
