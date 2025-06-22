document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      nav.classList.add('visible');
    } else {
      nav.classList.remove('visible');
    }
  });

});

const translations = {
  es: {
    "nav.about": "Sobre Nosotros",
    "nav.services": "Servicios",
    "nav.testimonials": "Testimonios",
    "nav.contact": "Contacto",
    "hero.title": "We take care",
    "hero.subtitle": "Limpieza residencial y comercial",
    "hero.button": "Contáctanos",
    "about.title": "Sobre Nosotros",
    "about.description": "JCleaners Service ofrece servicios de limpieza residencial y comercial de alta calidad. Nos enorgullece servir a nuestra comunidad con integridad, puntualidad y atención al detalle."
  },
  en: {
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",
    "hero.title": "We take care",
    "hero.subtitle": "Residential and Commercial Cleaning",
    "hero.button": "Contact Us",
    "about.title": "About Us",
    "about.description": "JCleaners Service provides high-quality residential and commercial cleaning services. We are proud to serve our community with integrity, punctuality, and attention to detail."
  }
};

let currentLang = 'es';

function toggleLanguage() {
  currentLang = currentLang === 'es' ? 'en' : 'es';

  // Actualizar botones
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.textContent = currentLang === 'es' ? 'EN' : 'ES';
  });

  // Actualizar textos
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = translations[currentLang][key] || el.textContent;
  });
}

// Asignar evento a todos los botones de cambio de idioma
document.querySelectorAll('.lang-toggle').forEach(btn => {
  btn.addEventListener('click', toggleLanguage);
});

