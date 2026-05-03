// Cursor Glow
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Popup Close
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Scroll Animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});

// Touch Effect for Mobile
document.addEventListener("click", (e) => {
  const ripple = document.createElement("span");
  ripple.style.position = "fixed";
  ripple.style.left = e.clientX + "px";
  ripple.style.top = e.clientY + "px";
  ripple.style.width = "20px";
  ripple.style.height = "20px";
  ripple.style.background = "rgba(0,200,255,0.5)";
  ripple.style.borderRadius = "50%";
  ripple.style.transform = "translate(-50%, -50%)";
  ripple.style.pointerEvents = "none";
  ripple.style.animation = "ripple 0.6s linear";

  document.body.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
});
