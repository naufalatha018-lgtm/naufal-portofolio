/**
 * Naufal Network Portfolio
 * Static site - Netlify ready
 */
(function () {
    'use strict';

    const CONFIG = {
        loadingDelay: 1500,
        loadingFadeOut: 500,
        scrollThreshold: 100,
        backToTopThreshold: 300,
        navOffset: 80,
        animateRootMargin: '0px 0px -20% 0px',
    };

    const SELECTORS = {
        loadingScreen: '.loading-screen',
        year: '#year',
        menuToggle: '.menu-toggle',
        navLinks: '#nav-menu',
        navbar: '.navbar',
        backToTop: '.back-to-top',
        darkModeToggle: '.dark-mode-toggle',
        projectsGrid: '.projects-grid',
        projectCard: '.project-card',
        projectBtn: '.btn--project',
        navDropdown: '.nav-dropdown',
        navDropdownTrigger: '.nav-dropdown__trigger',
        blogGrid: '#blog-grid',
    };

    const CLASSES = {
        scrolled: 'is-scrolled',
        active: 'is-active',
        visible: 'is-visible',
        open: 'is-open',
        animate: 'animate-on-scroll',
        animateVisible: 'is-visible',
    };

    /* --------------------------------------------------------------------------
       Blog Data (tambah artikel baru dengan menambah object ke array)
       -------------------------------------------------------------------------- */
    const BLOG_ARTICLES = [
        {
            title: 'Memulai Belajar Elektronika Dasar',
            date: '2024-01-15',
            excerpt: 'Panduan singkat untuk pemula yang ingin memulai belajar elektronika dari dasar. Mulai dari komponen hingga rangkaian sederhana.',
            content: '<p>Elektronika adalah ilmu yang mempelajari aliran elektron dalam konduktor. Untuk memulai, Anda memerlukan pemahaman dasar tentang komponen seperti resistor, kapasitor, dan transistor.</p><p>Langkah pertama adalah menyiapkan peralatan dasar: multimeter, solder, dan kit komponen. Mulailah dengan proyek sederhana seperti LED blink untuk memahami konsep dasar.</p><p>Praktik langsung melalui proyek kecil akan mempercepat pemahaman. Jangan ragu untuk bereksperimen dan belajar dari kesalahan.</p>',
        },
        {
            title: 'Membuat Website Portfolio dengan HTML, CSS, dan JavaScript',
            date: '2024-02-20',
            excerpt: 'Tutorial membuat website portfolio statis tanpa framework. Cocok untuk pemula yang ingin belajar web development.',
            content: '<p>Website portfolio adalah cara terbaik untuk memamerkan karya dan keahlian Anda. Dengan HTML, CSS, dan JavaScript murni, Anda dapat membuat portfolio yang profesional tanpa dependency berat.</p><p>Struktur dasar meliputi: header dengan navigasi, section hero, about, projects, dan contact. Gunakan CSS Grid dan Flexbox untuk layout yang responsif.</p><p>Deploy ke Netlify atau Vercel untuk hosting gratis. Pastikan semua path asset menggunakan relative path agar berjalan dengan baik.</p>',
        },
    ];

    function $(selector, context = document) {
        return context.querySelector(selector);
    }

    function $$(selector, context = document) {
        return context.querySelectorAll(selector);
    }

    /* --------------------------------------------------------------------------
       Loading
       -------------------------------------------------------------------------- */
    function initLoading() {
        const screen = $(SELECTORS.loadingScreen);
        if (!screen) return;
        setTimeout(() => {
            screen.style.opacity = '0';
            setTimeout(() => { screen.style.display = 'none'; }, CONFIG.loadingFadeOut);
        }, CONFIG.loadingDelay);
    }

    /* --------------------------------------------------------------------------
       Footer Year
       -------------------------------------------------------------------------- */
    function initFooterYear() {
        const el = $(SELECTORS.year);
        if (el) el.textContent = new Date().getFullYear();
    }

    /* --------------------------------------------------------------------------
       Mobile Menu & Dropdown
       -------------------------------------------------------------------------- */
    function closeAllDropdowns() {
        $$(SELECTORS.navDropdown).forEach((d) => {
            d.classList.remove(CLASSES.open);
            const btn = d.querySelector(SELECTORS.navDropdownTrigger);
            if (btn) btn.setAttribute('aria-expanded', 'false');
        });
    }

    function initMobileMenu() {
        const toggle = $(SELECTORS.menuToggle);
        const links = $(SELECTORS.navLinks);
        if (!toggle || !links) return;

        toggle.addEventListener('click', () => {
            const isOpen = links.classList.toggle(CLASSES.open);
            toggle.classList.toggle(CLASSES.active, isOpen);
            toggle.setAttribute('aria-expanded', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
            closeAllDropdowns();
        });

        links.addEventListener('click', (e) => {
            if (e.target.closest('a')) {
                links.classList.remove(CLASSES.open);
                toggle.classList.remove(CLASSES.active);
                toggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    }

    function initNavDropdown() {
        const triggers = $$(SELECTORS.navDropdownTrigger);
        const dropdowns = $$(SELECTORS.navDropdown);

        triggers.forEach((btn) => {
            const dropdown = btn.closest(SELECTORS.navDropdown);
            if (!dropdown) return;
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const isOpen = dropdown.classList.toggle(CLASSES.open);
                btn.setAttribute('aria-expanded', isOpen);
                dropdowns.forEach((d) => {
                    if (d !== dropdown) {
                        d.classList.remove(CLASSES.open);
                        const otherBtn = d.querySelector(SELECTORS.navDropdownTrigger);
                        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
                    }
                });
            });
        });
        document.addEventListener('click', () => closeAllDropdowns());
    }

    /* --------------------------------------------------------------------------
       Scroll Handlers
       -------------------------------------------------------------------------- */
    function initScrollHandlers() {
        const navbar = $(SELECTORS.navbar);
        const backToTop = $(SELECTORS.backToTop);
        let ticking = false;

        function updateScrollState() {
            const scrollY = window.scrollY;
            navbar?.classList.toggle(CLASSES.scrolled, scrollY > CONFIG.scrollThreshold);
            backToTop?.classList.toggle(CLASSES.visible, scrollY > CONFIG.backToTopThreshold);
            ticking = false;
        }

        function onScroll() {
            if (!ticking) {
                requestAnimationFrame(updateScrollState);
                ticking = true;
            }
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        updateScrollState();
    }

    function initBackToTop() {
        const btn = $(SELECTORS.backToTop);
        if (btn) btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    /* --------------------------------------------------------------------------
       Dark Mode
       -------------------------------------------------------------------------- */
    function initDarkMode() {
        const toggle = $(SELECTORS.darkModeToggle);
        if (!toggle) return;

        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' || (!savedTheme && prefersDark.matches)) {
            document.body.setAttribute('data-theme', 'dark');
        }

        toggle.addEventListener('click', () => {
            const isDark = document.body.getAttribute('data-theme') === 'dark';
            if (isDark) {
                document.body.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
            } else {
                document.body.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    /* --------------------------------------------------------------------------
       Smooth Scroll
       -------------------------------------------------------------------------- */
    function initSmoothScroll() {
        document.addEventListener('click', (e) => {
            const anchor = e.target.closest('a[href^="#"]');
            if (!anchor) return;
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;
            const target = $(targetId);
            if (target) {
                e.preventDefault();
                const top = target.getBoundingClientRect().top + window.scrollY - CONFIG.navOffset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    }

    /* --------------------------------------------------------------------------
       Project Modal
       -------------------------------------------------------------------------- */
    function initProjectModal() {
        const grid = $(SELECTORS.projectsGrid);
        if (!grid) return;

        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.innerHTML = `
            <div class="modal-content">
                <button type="button" class="modal-close" aria-label="Tutup">&times;</button>
                <div class="modal-video"></div>
                <div class="modal-info">
                    <h3></h3>
                    <p></p>
                    <a href="#" class="btn btn--project" target="_blank" rel="noopener noreferrer">Tonton di YouTube</a>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        const modalVideo = modal.querySelector('.modal-video');
        const modalTitle = modal.querySelector('.modal-info h3');
        const modalDesc = modal.querySelector('.modal-info p');
        const modalLink = modal.querySelector('.modal-info a');

        function closeModal() {
            modal.classList.remove(CLASSES.open);
            modalVideo.innerHTML = '';
            document.body.style.overflow = '';
        }

        function openModal(videoSrc, title, description, youtubeLink) {
            modalVideo.innerHTML = `<iframe src="${videoSrc}" frameborder="0" allowfullscreen title="${title}"></iframe>`;
            modalTitle.textContent = title;
            modalDesc.textContent = description;
            modalLink.href = youtubeLink;
            modal.classList.add(CLASSES.open);
            document.body.style.overflow = 'hidden';
        }

        grid.addEventListener('click', (e) => {
            const card = e.target.closest(SELECTORS.projectCard);
            if (!card || e.target.closest(SELECTORS.projectBtn)) return;
            const iframe = card.querySelector('iframe');
            const titleEl = card.querySelector('h3');
            const linkEl = card.querySelector(SELECTORS.projectBtn);
            const descEl = card.querySelector('.project-info p');
            if (iframe && titleEl && linkEl) {
                openModal(iframe.src, titleEl.textContent, descEl?.textContent ?? '', linkEl.href);
            }
        });

        modal.querySelector('.modal-close')?.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
    }

    /* --------------------------------------------------------------------------
       Blog System
       -------------------------------------------------------------------------- */
    function initBlog() {
        const grid = $(SELECTORS.blogGrid);
        if (!grid) return;

        if (BLOG_ARTICLES.length === 0) {
            grid.innerHTML = '<p class="blog-empty">Belum ada artikel. Tambahkan object baru ke array BLOG_ARTICLES di script.js.</p>';
            return;
        }

        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.innerHTML = `
            <div class="modal-content">
                <button type="button" class="modal-close" aria-label="Tutup">&times;</button>
                <div class="modal-article">
                    <h3 class="modal-article__title"></h3>
                    <span class="modal-article__date"></span>
                    <div class="modal-article__content"></div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        const modalTitle = modal.querySelector('.modal-article__title');
        const modalDate = modal.querySelector('.modal-article__date');
        const modalContent = modal.querySelector('.modal-article__content');

        function closeModal() {
            modal.classList.remove(CLASSES.open);
            document.body.style.overflow = '';
        }

        function openArticle(article) {
            modalTitle.textContent = article.title;
            modalDate.textContent = formatDate(article.date);
            modalContent.innerHTML = article.content;
            modal.classList.add(CLASSES.open);
            document.body.style.overflow = 'hidden';
        }

        function formatDate(dateStr) {
            const d = new Date(dateStr);
            return d.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
        }

        BLOG_ARTICLES.forEach((article, index) => {
            const card = document.createElement('article');
            card.className = 'blog-card animate-on-scroll';
            card.setAttribute('data-index', index);
            card.innerHTML = `
                <h3 class="blog-card__title">${escapeHtml(article.title)}</h3>
                <span class="blog-card__date">${formatDate(article.date)}</span>
                <p class="blog-card__excerpt">${escapeHtml(article.excerpt)}</p>
            `;
            card.addEventListener('click', () => openArticle(article));
            grid.appendChild(card);
        });

        modal.querySelector('.modal-close')?.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    /* --------------------------------------------------------------------------
       Certificate Modal
       -------------------------------------------------------------------------- */
    function initCertModal() {
        document.addEventListener('click', (e) => {
            const btn = e.target.closest('.btn--cert');
            if (!btn) return;

            const src = btn.getAttribute('data-cert-src');
            if (!src) return;

            let modal = $('.modal--cert');
            if (!modal) {
                modal = document.createElement('div');
                modal.className = 'modal modal--cert';
                modal.setAttribute('role', 'dialog');
                modal.setAttribute('aria-modal', 'true');
                modal.innerHTML = `
                    <div class="modal-content">
                        <button type="button" class="modal-close" aria-label="Tutup">&times;</button>
                        <img class="modal-cert__img" src="" alt="Sertifikat">
                    </div>
                `;
                document.body.appendChild(modal);

                modal.querySelector('.modal-close').addEventListener('click', () => {
                    modal.classList.remove(CLASSES.open);
                    document.body.style.overflow = '';
                });
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        modal.classList.remove(CLASSES.open);
                        document.body.style.overflow = '';
                    }
                });
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape') {
                        modal.classList.remove(CLASSES.open);
                        document.body.style.overflow = '';
                    }
                });
            }

            modal.querySelector('.modal-cert__img').src = src;
            modal.classList.add(CLASSES.open);
            document.body.style.overflow = 'hidden';
        });
    }

    /* --------------------------------------------------------------------------
       Scroll Animations
       -------------------------------------------------------------------------- */
    function initScrollAnimations() {
        const selector = '.hero-content, .hero-image, .about-text, .about-image, .service-card, .project-card, .blog-card, .cert-card, .contact-card';
        const elements = $$(selector);
        if (!elements.length) return;

        elements.forEach((el) => el.classList.add(CLASSES.animate));

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add(CLASSES.animateVisible);
                });
            },
            { rootMargin: CONFIG.animateRootMargin, threshold: 0.1 }
        );

        elements.forEach((el) => observer.observe(el));
    }

    /* --------------------------------------------------------------------------
       Bootstrap
       -------------------------------------------------------------------------- */
    function init() {
        initLoading();
        initFooterYear();
        initMobileMenu();
        initNavDropdown();
        initScrollHandlers();
        initBackToTop();
        initDarkMode();
        initSmoothScroll();
        initProjectModal();
        initBlog();
        initCertModal();
        initScrollAnimations();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
