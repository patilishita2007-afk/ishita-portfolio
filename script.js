// Typing Animation
const words = [
  "Flutter Developer",
  "Web Developer",
  "Cyber Security Enthusiast",
  "Tech Learner"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {
  let currentWord = words[wordIndex];

  if (!isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  }

  let speed = 120;

  if (!isDeleting && charIndex === currentWord.length) {
    speed = 1200;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 400;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();
