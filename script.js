// Glowing cursor follow
const cursor = document.getElementById("cursorGlow");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top  = e.clientY + "px";
});

// Bounce text animation re-trigger on hover
document.querySelectorAll(".hover-bounce").forEach((box) => {
  box.addEventListener("mouseenter", () => {
    const texts = box.querySelectorAll("h2, h3, p, span");
    texts.forEach((el, i) => {
      el.style.animation = "none";
      // force reflow
      void el.offsetWidth;
      el.style.animation = `bounceText 0.6s ease ${i * 0.05}s`;
    });
  });
});

// Optional: cursor grows on hovering glass boxes
document.querySelectorAll(".glass-box").forEach((box) => {
  box.addEventListener("mouseenter", () => {
    cursor.style.width = "450px";
    cursor.style.height = "450px";
    cursor.style.background =
      "radial-gradient(circle, rgba(255,0,204,0.3), transparent 70%)";
  });
  box.addEventListener("mouseleave", () => {
    cursor.style.width = "300px";
    cursor.style.height = "300px";
    cursor.style.background =
      "radial-gradient(circle, rgba(0,255,225,0.25), transparent 70%)";
  });
});
