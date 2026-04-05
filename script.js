// Toggle Mobile Menu
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}

// Fade-in Animation on Scroll
const faders = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  faders.forEach((fade) => {
    const rect = fade.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      fade.classList.add("show");
    }
  });
});