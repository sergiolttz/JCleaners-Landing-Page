// Mostrar navbar al hacer scroll

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

// Animar tarjetas al entrar en viewport
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Solo una vez
      }
    });
  },
  {
    threshold: 0.1
  }
);

cards.forEach(card => observer.observe(card));

// Traducciones para el cambio de idioma
const translations = {
  es: {
    "nav.about": "Sobre Nosotros",
    "nav.services": "Servicios",
    "nav.testimonials": "Testimonios",
    "nav.contact": "Contacto",
    "hero.title": "We take care!",
    "hero.subtitle": "Limpieza residencial y comercial",
    "hero.button": "Contáctanos",
    "about.title": "Sobre Nosotros",
    "about.description":
      "JCleaners Service ofrece servicios de limpieza residencial y comercial de alta calidad. Nos enorgullece servir a nuestra comunidad con integridad, puntualidad y atención al detalle.",
    "services.title": "Nuestros servicios",
    "services.residential.title": "Limpieza Residencial",
    "services.residential.description": "Servicios de limpieza para tu hogar, adaptados a tus necesidades.",
    "services.residential.item1": "Regular",
    "services.residential.item2": "Periódica",
    "services.residential.item3": "Mudanzas",
    "services.residential.item4": "Casas y Apartamentos",
    "services.residential.cta": "Agenda tu limpieza residencial",
    "services.commercial.title": "Limpieza Comercial",
    "services.commercial.description": "Soluciones de limpieza para oficinas, tiendas y eventos.",
    "services.commercial.item1": "Áreas comunes y condominios",
    "services.commercial.item2": "Eventos especiales",
    "services.commercial.item3": "Oficinas",
    "services.commercial.item4": "Negocios y tiendas",
    "services.commercial.cta": "Agenda tu limpieza comercial",
    "testimonials.title": "Testimonios",
    "contact.title": "Contáctanos",
    "contact.email": "Contáctanos por correo",
    "contact.whatsapp": "Escríbenos por WhatsApp"
  },
  en: {
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",
    "hero.title": "We take care!",
    "hero.subtitle": "Residential and Commercial Cleaning",
    "hero.button": "Contact Us",
    "about.title": "About Us",
    "about.description":
      "JCleaners Service provides high-quality residential and commercial cleaning services. We are proud to serve our community with integrity, punctuality, and attention to detail.",
    "services.title": "Our Services",
    "services.residential.title": "Residential Cleaning",
    "services.residential.description": "Cleaning services for your home, tailored to your needs.",
    "services.residential.item1": "Regular",
    "services.residential.item2": "Periodic",
    "services.residential.item3": "Moving",
    "services.residential.item4": "Houses and Apartments",
    "services.residential.cta": "Book your residential cleaning",
    "services.commercial.title": "Commercial Cleaning",
    "services.commercial.description": "Cleaning solutions for offices, shops, and events.",
    "services.commercial.item1": "Common areas and condos",
    "services.commercial.item2": "Special events",
    "services.commercial.item3": "Offices",
    "services.commercial.item4": "Businesses and stores",
    "services.commercial.cta": "Book your commercial cleaning",
    "testimonials.title": "Testimonials",
    "contact.title": "Contact Us",
    "contact.email": "Contact us by email",
    "contact.whatsapp": "Message us on WhatsApp"
  }
};
// Variable para el idioma actual

let currentLang = 'es';

// Función para cambiar el idioma
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

document.addEventListener('DOMContentLoaded', () => {
  const servicesSection = document.querySelector('.services');
  const residentialCard = document.querySelector('.card--residential');
  const commercialCard = document.querySelector('.card--commercial');

  if (servicesSection && residentialCard && commercialCard) {
    residentialCard.addEventListener('mouseenter', () => {
      servicesSection.classList.add('show-residential');
    });

    residentialCard.addEventListener('mouseleave', () => {
      servicesSection.classList.remove('show-residential');
    });

    commercialCard.addEventListener('mouseenter', () => {
      servicesSection.classList.add('show-commercial');
    });

    commercialCard.addEventListener('mouseleave', () => {
      servicesSection.classList.remove('show-commercial');
    });
  }
});

// Mostrar menú de contacto flotante

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggleContactMenu');
  const menu = document.getElementById('contactMenu');
  const floating = document.getElementById('floatingContact');
  const contactSection = document.getElementById('contact');

  // Toggle menú
  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('visible');
  });
});

// Mostrar/ocultar menú de navegación para moviles
document.addEventListener("DOMContentLoaded", () => {

  // === NAVBAR ===
  const realToggle = document.querySelector(".menu-toggle--real");
  const realMenu = document.querySelector(".navbar__menu");

  if (realToggle && realMenu) {
    realToggle.addEventListener("click", () => {
      realMenu.classList.toggle("active");
    });

    realMenu.querySelectorAll("a").forEach(link =>
      link.addEventListener("click", () => {
        realMenu.classList.remove("active");
      })
    );
  }

  // === PSEUDO-NAV (HERO) ===
  const pseudoToggle = document.querySelector(".menu-toggle--pseudo");
  const pseudoMenu = document.querySelector(".nav-links");

  if (pseudoToggle && pseudoMenu) {
    pseudoToggle.addEventListener("click", () => {
      pseudoMenu.classList.toggle("active");
    });

    pseudoMenu.querySelectorAll("a").forEach(link =>
      link.addEventListener("click", () => {
        pseudoMenu.classList.remove("active");
      })
    );
  }
});
