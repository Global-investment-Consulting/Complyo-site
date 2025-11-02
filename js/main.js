(function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');
    const yearEl = document.getElementById('copyright-year');

    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    if (!navToggle || !navList) {
        return;
    }

    navToggle.addEventListener('click', function () {
        const isOpen = navList.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    document.addEventListener('click', function (event) {
        if (!navList.classList.contains('is-open')) {
            return;
        }

        if (event.target === navToggle || navToggle.contains(event.target)) {
            return;
        }

        if (!navList.contains(event.target)) {
            navList.classList.remove('is-open');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
})();
