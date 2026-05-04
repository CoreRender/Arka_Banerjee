// ── Custom Cursor
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursorRing');
let rx = 0, ry = 0, mx = 0, my = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';

  // Parallax dots
  const dx = (mx / window.innerWidth  - 0.5) * 30;
  const dy = (my / window.innerHeight - 0.5) * 30;
  document.getElementById('dot1').style.transform = `translate(${dx}px,${dy}px)`;
  document.getElementById('dot2').style.transform = `translate(${dx*1.4}px,${dy*1.4}px)`;
  document.getElementById('dot3').style.transform = `translate(${dx*0.7}px,${dy*0.7}px)`;

  // Orb parallax
  document.querySelector('#home .orb-1').style.transform =
    `translateX(calc(-50% + ${dx}px)) translateY(${dy}px)`;
  document.querySelector('#home .orb-2').style.transform =
    `translate(${-dx*0.5}px,${-dy*0.5}px)`;
});

// Smooth ring follow
(function animateRing() {
  rx += (mx - rx) * 0.14;
  ry += (my - ry) * 0.14;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animateRing);
})();

// Cursor scale on hover
document.querySelectorAll('a,button,.btn-primary,.tech-card,.learning-card,.bio-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(2.2)';
    cursor.style.background = 'rgba(255,255,255,0.5)';
    ring.style.transform = 'translate(-50%,-50%) scale(1.5)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(1)';
    cursor.style.background = '#fff';
    ring.style.transform = 'translate(-50%,-50%) scale(1)';
  });
});

// ── Typing animation
const words = ['Web Builder', 'Developer', 'Gamer', 'Creator'];
let wi = 0, ci = 0, deleting = false;
const typedEl = document.getElementById('typed-text');
function type() {
  const word = words[wi];
  if (!deleting) {
    typedEl.textContent = word.slice(0, ++ci);
    if (ci === word.length) { deleting = true; setTimeout(type, 1600); return; }
  } else {
    typedEl.textContent = word.slice(0, --ci);
    if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
  }
  setTimeout(type, deleting ? 60 : 100);
}
setTimeout(type, 1200);

// ── Nav scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ── Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
sections.forEach(s =>
  new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[data-section="${e.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.4 }).observe(s)
);

// ── Scroll reveal
const revealObs = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// ── Skill bar animation
new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
    }
  });
}, { threshold: 0.3 }).observe(document.querySelector('.skill-bars'));
