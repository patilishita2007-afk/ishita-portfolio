const glow = document.querySelector(".glow");

window.addEventListener("mousemove", (e) => {
  glow.style.left = e.pageX + "px";
  glow.style.top = (e.pageY - 200) + "px";
});