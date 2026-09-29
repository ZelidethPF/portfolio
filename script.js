// Menú móvil
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn?.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('open')));

// Animaciones al entrar en pantalla
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Brillo que sigue el cursor en escritorio
const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', (event) => {
  if (window.innerWidth > 800 && glow) {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  }
});

// Efecto suave de glitch sobre el nombre
const title = document.querySelector('h1');
let glitchTimer;
function glitch() {
  if (!title) return;
  title.style.transform = `translate(${Math.random()*3-1.5}px, ${Math.random()*2-1}px)`;
  setTimeout(() => title.style.transform = '', 90);
}
glitchTimer = setInterval(glitch, 4200);

// Año automático del footer
const footerYear = document.querySelector('footer span');
if (footerYear) footerYear.textContent = `ZELI // ${new Date().getFullYear()}`;
