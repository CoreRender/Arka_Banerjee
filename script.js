const cursor = document.getElementById("cursor");
const ring = document.getElementById("cursorRing");
const navbar = document.getElementById("navbar");
const typedEl = document.getElementById("typed-text");
const interactiveItems = document.querySelectorAll("a, button, .liquid-card");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let ringX = mouseX;
let ringY = mouseY;

function moveCursor(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;

  if (cursor) {
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
  }

  document.documentElement.style.setProperty("--mouse-x", `${mouseX}px`);
  document.documentElement.style.setProperty("--mouse-y", `${mouseY}px`);
}

function animateRing() {
  ringX += (mouseX - ringX) * 0.14;
  ringY += (mouseY - ringY) * 0.14;

  if (ring) {
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
  }

  requestAnimationFrame(animateRing);
}

document.addEventListener("mousemove", moveCursor);
animateRing();

interactiveItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    if (!cursor || !ring) return;
    cursor.style.transform = "translate(-50%, -50%) scale(2.25)";
    cursor.style.background = "rgba(109, 240, 255, 0.78)";
    ring.style.transform = "translate(-50%, -50%) scale(1.55)";
    ring.style.borderColor = "rgba(109, 240, 255, 0.68)";
  });

  item.addEventListener("mouseleave", () => {
    if (!cursor || !ring) return;
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
    cursor.style.background = "#f6fbff";
    ring.style.transform = "translate(-50%, -50%) scale(1)";
    ring.style.borderColor = "rgba(246, 251, 255, 0.42)";
  });
});

const words = ["Liquid Glass Web Builder", "Developer", "Gamer", "Creator"];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const word = words[wordIndex];

  if (!deleting) {
    charIndex += 1;
    typedEl.textContent = word.slice(0, charIndex);

    if (charIndex === word.length) {
      deleting = true;
      setTimeout(typeLoop, 1500);
      return;
    }
  } else {
    charIndex -= 1;
    typedEl.textContent = word.slice(0, charIndex);

    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeLoop, deleting ? 48 : 82);
}

setTimeout(typeLoop, 700);

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 18);
});

const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section[id]");

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    navLinks.forEach((link) => link.classList.remove("active"));
    const activeLink = document.querySelector(`.nav-links a[data-section="${entry.target.id}"]`);

    if (activeLink) {
      activeLink.classList.add("active");
    }
  });
}, { threshold: 0.42 });

sections.forEach((section) => navObserver.observe(section));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.14 });

document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));

const skillBars = document.querySelector(".skill-bars");

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.querySelectorAll(".skill-fill").forEach((bar) => {
      bar.style.width = `${bar.dataset.width}%`;
    });

    skillObserver.unobserve(entry.target);
  });
}, { threshold: 0.36 });

if (skillBars) {
  skillObserver.observe(skillBars);
}
