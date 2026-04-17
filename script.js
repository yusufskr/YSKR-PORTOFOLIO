document.addEventListener('DOMContentLoaded', function () {

    // Mobile nav
    var burger = document.querySelector('.nav-burger');
    var mobileMenu = document.querySelector('.mobile-menu');
    if (burger && mobileMenu) {
        burger.addEventListener('click', function () {
            mobileMenu.classList.toggle('open');
        });
        mobileMenu.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', function () {
                mobileMenu.classList.remove('open');
            });
        });
    }

    // Reveal cards & sections
    var revealEls = document.querySelectorAll('.card, .hero-top, .hero-bottom');
    var ro = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                ro.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });

    revealEls.forEach(function (el, i) {
        el.classList.add('reveal');
        el.style.transitionDelay = (i * 0.04) + 's';
        ro.observe(el);
    });

    // Animate skill/language bars
    var bars = document.querySelectorAll('.sbar div, .bar-fill');
    var bo = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var el = entry.target;
                var w = el.style.width;
                el.style.width = '0';
                setTimeout(function () { el.style.width = w; }, 80);
                bo.unobserve(el);
            }
        });
    }, { threshold: 0.4 });
    bars.forEach(function (b) { bo.observe(b); });

});
