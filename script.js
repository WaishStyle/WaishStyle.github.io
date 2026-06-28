/* ===========================================
   SCRIPT.JS – Main Controller
=========================================== */
document.addEventListener('DOMContentLoaded', () => {
    // ------- PAGE LOADING (FIXED) -------
    const pageLoading = document.getElementById('pageLoading');
    // Wait 1 second, then fade out
    setTimeout(() => {
        pageLoading.classList.add('hidden');
        // After CSS transition (300ms), remove from DOM
        setTimeout(() => {
            pageLoading.remove();
        }, 300);
    }, 1000);

    // ------- RENDER ALL SECTIONS -------
    renderCategories();
    renderProductsGrid('productsGrid', products.slice(0, 8));
    renderSale();
    renderBrands();
    renderTestimonials();
    renderBlogGrid();
    renderFAQ();

    // ------- BANNER CAROUSEL -------
    let currentSlide = 0;
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    function buildSlides() {
        if (!track) return;
        track.innerHTML = bannerImages.map(img => `<div class="carousel-slide"><img src="${img}" alt="Banner"></div>`).join('');
    }
    function moveToSlide(index) {
        track.style.transform = `translateX(-${index * 100}%)`;
    }
    function nextSlide() {
        currentSlide = (currentSlide + 1) % bannerImages.length;
        moveToSlide(currentSlide);
    }
    function prevSlide() {
        currentSlide = (currentSlide - 1 + bannerImages.length) % bannerImages.length;
        moveToSlide(currentSlide);
    }
    buildSlides();
    moveToSlide(0);
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    setInterval(nextSlide, 5000);

    // ------- MOBILE MENU -------
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('mobileOverlay');
    function openMenu() { hamburger.classList.add('active'); mobileMenu.classList.add('active'); overlay.classList.add('active'); }
    function closeMenu() { hamburger.classList.remove('active'); mobileMenu.classList.remove('active'); overlay.classList.remove('active'); }
    hamburger.addEventListener('click', () => hamburger.classList.contains('active') ? closeMenu() : openMenu());
    overlay.addEventListener('click', closeMenu);

    // ------- ACTIVE NAV LINK (FIXED) -------
    function setActiveNav() {
        const hash = window.location.hash || '#home';
        document.querySelectorAll('.nav-desktop a, .mobile-menu a, .mobile-bottom-nav a').forEach(link => {
            const href = link.getAttribute('href');
            link.classList.toggle('active', href === hash);
        });
    }
    window.addEventListener('hashchange', setActiveNav);
    document.querySelectorAll('.nav-desktop a, .mobile-menu a, .mobile-bottom-nav a').forEach(link => {
        link.addEventListener('click', () => setTimeout(setActiveNav, 50));
    });
    setActiveNav();

    // ------- SHOW ALL PRODUCTS (WITH LOADING) -------
    const showBtn = document.getElementById('showListBtn');
    const listOverlay = document.getElementById('productListOverlay');
    const listLoading = document.getElementById('listLoading');
    const listContainer = document.getElementById('listContainer');
    const closeBtn = document.getElementById('closeListBtn');

    showBtn.addEventListener('click', () => {
        listOverlay.classList.add('active');
        listLoading.classList.remove('hidden');
        listLoading.style.display = 'flex';
        listContainer.style.display = 'none';
        document.body.style.overflow = 'hidden';
        // Simulate loading
        setTimeout(() => {
            renderProductsGrid('allProductsGrid', products);
            listLoading.classList.add('hidden');
            setTimeout(() => {
                listLoading.style.display = 'none';
                listContainer.style.display = 'block';
            }, 300);
        }, 1200);
    });

    closeBtn.addEventListener('click', () => {
        listLoading.classList.remove('hidden');
        listLoading.style.display = 'flex';
        listContainer.style.display = 'none';
        setTimeout(() => {
            listOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }, 400);
    });

    // ------- BACK TO TOP -------
    const backBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => backBtn.classList.toggle('visible', window.scrollY > 600));
    backBtn.addEventListener('click', () => window.scrollTo({ top: 0 }));

    // ------- NEWSLETTER -------
    document.getElementById('newsletterForm').addEventListener('submit', e => {
        e.preventDefault();
        alert('✨ Subscribed successfully!');
    });
});