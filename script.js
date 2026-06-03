'use strict';

document.addEventListener('DOMContentLoaded', function () {

  /* ── Tab switching ─────────────────────────────────────────── */
  const allTabs  = document.querySelectorAll('.nav-tab');
  const allPages = document.querySelectorAll('.page');

  function activateTab(tabId) {
    allTabs.forEach(function (t) {
      t.classList.toggle('active', t.dataset.tab === tabId);
    });
    allPages.forEach(function (p) {
      const isTarget = p.id === 'page-' + tabId;
      if (isTarget) {
        p.classList.add('active');
      } else {
        p.classList.remove('active');
      }
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  allTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      activateTab(tab.dataset.tab);
      closeMobileMenu();
    });
  });

  /* ── Mobile menu ───────────────────────────────────────────── */
  var menuBtn  = document.getElementById('mobileMenuBtn');
  var mobileNav = document.getElementById('mobileNav');

  function closeMobileMenu() {
    mobileNav.classList.remove('open');
    menuBtn.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }

  menuBtn.addEventListener('click', function () {
    var isOpen = mobileNav.classList.toggle('open');
    menuBtn.classList.toggle('open', isOpen);
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });

  /* Close mobile menu when clicking outside */
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.site-header')) {
      closeMobileMenu();
    }
  });

});
