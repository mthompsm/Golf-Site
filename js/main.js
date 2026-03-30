/* =============================================
   Par Excellence Golf Academy - Main JS
   ============================================= */

(function () {
  'use strict';

  /* ---- Sticky nav active link ---- */
  function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
      const href = link.getAttribute('href');
      link.classList.remove('active');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  /* ---- Hamburger menu toggle ---- */
  function initMobileMenu() {
    const toggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    if (!toggle || !navLinks) return;

    toggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', false);
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', false);
      }
    });
  }

  /* ---- Smooth scroll for anchor links ---- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  }

  /* ---- Scroll-triggered fade-in animations ---- */
  function initScrollAnimations() {
    const items = document.querySelectorAll('.fade-in');
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            // Stagger delay for card grids
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    items.forEach((item, i) => {
      // Auto-stagger siblings inside card grids
      const parent = item.parentElement;
      if (parent && (parent.classList.contains('card-grid') ||
          parent.classList.contains('testimonials-grid') ||
          parent.classList.contains('pricing-grid'))) {
        const siblings = Array.from(parent.children);
        item.dataset.delay = siblings.indexOf(item) * 100;
      }
      observer.observe(item);
    });
  }

  /* ---- Contact form handling ---- */
  function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const btn = form.querySelector('[type="submit"]');
      const successMsg = document.getElementById('formSuccess');

      // Basic validation
      let valid = true;
      form.querySelectorAll('[required]').forEach(field => {
        if (!field.value.trim()) {
          valid = false;
          field.style.borderColor = '#dc3545';
          field.addEventListener('input', () => {
            field.style.borderColor = '';
          }, { once: true });
        }
      });

      // Email format check
      const emailField = form.querySelector('[type="email"]');
      if (emailField && emailField.value && !/\S+@\S+\.\S+/.test(emailField.value)) {
        valid = false;
        emailField.style.borderColor = '#dc3545';
      }

      if (!valid) {
        shakeForm(form);
        return;
      }

      // Simulate submission
      btn.textContent = 'Sending…';
      btn.disabled = true;

      setTimeout(() => {
        form.style.display = 'none';
        if (successMsg) {
          successMsg.classList.add('visible');
          successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 1200);
    });
  }

  function shakeForm(form) {
    form.style.animation = 'shake 0.4s ease';
    form.addEventListener('animationend', () => {
      form.style.animation = '';
    }, { once: true });
  }

  /* ---- Navbar scroll effect ---- */
  function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 80) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
      } else {
        navbar.style.boxShadow = '0 2px 12px rgba(0,0,0,0.25)';
      }
      lastScroll = currentScroll;
    }, { passive: true });
  }

  /* ---- Pricing card focus ring accessibility ---- */
  function initPricingCards() {
    document.querySelectorAll('.pricing-card .btn').forEach(btn => {
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          btn.click();
        }
      });
    });
  }

  /* ---- Add shake keyframe to page ---- */
  function addShakeKeyframe() {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        20%       { transform: translateX(-8px); }
        40%       { transform: translateX(8px); }
        60%       { transform: translateX(-6px); }
        80%       { transform: translateX(6px); }
      }
    `;
    document.head.appendChild(style);
  }

  /* ---- Init all ---- */
  document.addEventListener('DOMContentLoaded', () => {
    setActiveNav();
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
    initContactForm();
    initNavbarScroll();
    initPricingCards();
    addShakeKeyframe();
  });

})();
