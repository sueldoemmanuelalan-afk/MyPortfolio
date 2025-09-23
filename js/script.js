// === Navbar ScrollSpy ===
const menuIcon = document.querySelector('.bx-burger-alt');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
      });
      const activeLink = document.querySelector(`header .navbar a[href*="${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
};

// === Menú Hamburguesa (Responsive) ===
menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Opcional: cerrar navbar al hacer click en un enlace (en móviles)
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});

// === Modo Oscuro / Claro con Persistencia ===
const darkModeBtn = document.querySelector('.dark-mode');

// Cambia el tema al hacer click
darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');

  // Guarda el tema actual en localStorage
  const newTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
  localStorage.setItem('theme', newTheme);
});

// Carga el tema guardado o detecta preferencia del sistema
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    // Si el usuario ya eligió un tema, usarlo
    if (savedTheme === 'light') document.body.classList.add('light-theme');
  } else {
    // Si no hay tema guardado, usar el del sistema
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      document.body.classList.add('light-theme');
    }
  }
});

// === Lightbox para certificados ===
function openModal(src) {
  document.getElementById('imgModal').style.display = 'block';
  document.getElementById('modalImg').src = src;
}

function closeModal() {
  document.getElementById('imgModal').style.display = 'none';
}

//educacion

function toggleCertificado(button) {
  const thumbnail = button.nextElementSibling;
  const isVisible = thumbnail.style.display === 'block';
  thumbnail.style.display = isVisible ? 'none' : 'block';
  button.textContent = isVisible ? 'Ver certificado' : 'Ocultar certificado';
}
