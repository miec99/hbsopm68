(function () {
  // Nav: solid background after scrolling past the hero, mobile toggle
  var nav = document.querySelector('.nav');
  if (nav) {
    var onScroll = function () { nav.classList.toggle('solid', window.scrollY > 40); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    var toggle = nav.querySelector('.nav-toggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        var open = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      nav.querySelectorAll('.nav-links a').forEach(function (a) {
        a.addEventListener('click', function () { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); });
      });
    }
  }

  // Reveal on scroll
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('in'); });
  }

  // Countdowns: <div class="countdown" data-target="2026-11-18T00:00:00+04:00" data-done="...">
  document.querySelectorAll('.countdown[data-target]').forEach(function (box) {
    var target = new Date(box.getAttribute('data-target')).getTime();
    var parts = { d: box.querySelector('[data-d]'), h: box.querySelector('[data-h]'), m: box.querySelector('[data-m]'), s: box.querySelector('[data-s]') };
    var pad = function (n) { return n < 10 ? '0' + n : '' + n; };
    var tick = function () {
      var diff = target - Date.now();
      if (diff <= 0) {
        box.innerHTML = '<p style="margin:0;font-family:var(--serif);font-style:italic;font-size:26px">' + (box.getAttribute('data-done') || 'Underway') + '</p>';
        clearInterval(timer);
        return;
      }
      var s = Math.floor(diff / 1000);
      parts.d.textContent = Math.floor(s / 86400);
      parts.h.textContent = pad(Math.floor((s % 86400) / 3600));
      parts.m.textContent = pad(Math.floor((s % 3600) / 60));
      parts.s.textContent = pad(s % 60);
    };
    var timer = setInterval(tick, 1000);
    tick();
  });

  // Year in footer
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
