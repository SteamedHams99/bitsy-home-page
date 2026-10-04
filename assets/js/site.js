// Small progressive enhancements. The site works fully without this file.
(function () {
  // Mobile menu toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Current year in the footer
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Pre-select the contact reason from a link like contact.html?reason=book-club
  var reason = new URLSearchParams(window.location.search).get('reason');
  var select = document.getElementById('reason');
  if (reason && select && select.querySelector('option[value="' + reason + '"]')) {
    select.value = reason;
  }

  // Fade sections in as they scroll into view
  if ('IntersectionObserver' in window) {
    var items = document.querySelectorAll('.reveal');
    document.documentElement.classList.add('reveal-ready');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px' });
    items.forEach(function (el) { io.observe(el); });
  }
})();
