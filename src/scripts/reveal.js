// Scroll-reveal + rule-draw for the editorial layout.
// Elements start hidden (`.reveal`) and become visible (`.is-in`) when scrolled
// into view. Critical guarantee: content visibility must never depend on the
// observer firing — under reduced motion, without IntersectionObserver, or in a
// nested iframe, everything is shown immediately.
(function () {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var fadeSel =
    ".mvt h2, .mvt-kicker, .beat, .route-kicker, .route .line, .close p, .dry-kicker, .dry .item, .abstract, .shapes .shape, .aside";
  var ruleSel = ".dry, .route, .facts-block";

  var fades = [].slice.call(document.querySelectorAll(fadeSel));
  fades.forEach(function (el) {
    el.classList.add("reveal");
  });

  var rules = [].slice.call(document.querySelectorAll(ruleSel));
  var all = fades.concat(rules);

  function showAll() {
    all.forEach(function (el) {
      el.classList.add("is-in");
    });
  }

  // Nested iframe or no IntersectionObserver support: reveal everything at once.
  if (window.self !== window.top || !("IntersectionObserver" in window)) {
    showAll();
    return;
  }

  // Direct pages: animate each element the moment it scrolls into view.
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
  );
  all.forEach(function (el) {
    io.observe(el);
  });
})();
