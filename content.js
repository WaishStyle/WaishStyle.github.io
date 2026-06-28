/* ===========================================
   CONTENT.JS – Non‑Product Sections
   (Banner, Reviews, Brands, FAQ, Blog)
=========================================== */

// ------ Banner Carousel Images ------
const bannerImages = [
    "https://images.unsplash.com/photo-1607083206968-3448b9c0e166?w=1200&h=500&fit=crop",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=500&fit=crop",
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=500&fit=crop",
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&h=500&fit=crop",
    "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=1200&h=500&fit=crop"
];

// ------ Reviews (Testimonials) ------
const testimonials = [
    { name: "Sarah Johnson", text: "Absolutely love the quality! Fast delivery and the dress fit perfectly.", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
    { name: "Emily Davis", text: "Customer support was amazing, and the bag is even better than the pictures.", rating: 5, avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" },
    { name: "Jessica Lee", text: "Finally an online store that gets sizing right. The trench coat is timeless.", rating: 4.5, avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" }
];

function renderTestimonials() {
    const grid = document.getElementById('testimonialsGrid');
    if (!grid) return;
    grid.innerHTML = testimonials.map(t => `
        <div class="testimonial-card">
            <div class="testimonial-avatar"><img src="${t.avatar}" alt="${t.name}"></div>
            <div class="testimonial-name">${t.name}</div>
            <div class="product-rating">${'<i class="fas fa-star"></i>'.repeat(Math.floor(t.rating))}${t.rating%1?'<i class="fas fa-star-half-alt"></i>':''}</div>
            <p>"${t.text}"</p>
        </div>
    `).join('');
}

// ------ Brands ------
const brands = ["ZARA", "MANGO", "H&M", "BERSHKA", "MASSIMO", "L.CREDI"];

function renderBrands() {
    const grid = document.getElementById('brandsGrid');
    if (!grid) return;
    grid.innerHTML = brands.map(b => `<div class="brand-card">${b}</div>`).join('');
}

// ------ FAQ ------
const faqData = [
    { question: "What is your return policy?", answer: "We offer a 30-day return policy for unworn items with original tags." },
    { question: "How long does shipping take?", answer: "Standard shipping takes 1-3 business days within the US." },
    { question: "Do you ship internationally?", answer: "Yes, we ship to over 50 countries worldwide." },
    { question: "How can I track my order?", answer: "Once your order is shipped, you will receive an email with a tracking number." }
];

function renderFAQ() {
    const list = document.getElementById('faqList');
    if (!list) return;
    list.innerHTML = faqData.map(item => `
        <div class="faq-item">
            <div class="faq-question">${item.question} <i class="fas fa-chevron-down"></i></div>
            <div class="faq-answer">${item.answer}</div>
        </div>
    `).join('');
    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => {
            const parent = q.parentElement;
            const wasActive = parent.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
            if (!wasActive) parent.classList.add('active');
        });
    });
}

// ------ Blog ------
const blogPosts = [
    { id: 1, title: "Autumn 2025 Trends", excerpt: "Discover must-have pieces.", date: "Oct 15, 2025", img: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&h=320&fit=crop", content: "<p>Full article about autumn trends...</p>" },
    { id: 2, title: "Minimalist Work Wardrobe", excerpt: "Effortless chic for office.", date: "Oct 8, 2025", img: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=500&h=320&fit=crop", content: "<p>How to build a capsule...</p>" },
    { id: 3, title: "Ultimate Bag Guide", excerpt: "Perfect bag for every occasion.", date: "Oct 1, 2025", img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&h=320&fit=crop", content: "<p>Bag guide content...</p>" }
];

function renderBlogGrid() {
    const grid = document.getElementById('blogGrid');
    if (!grid) return;
    grid.innerHTML = blogPosts.map(p => `
        <div class="blog-card">
            <div class="blog-image"><img src="${p.img}" alt="${p.title}"></div>
            <div class="blog-info">
                <div class="blog-date">${p.date}</div>
                <h3>${p.title}</h3>
                <p>${p.excerpt}</p>
                <a href="#" class="blog-link" data-id="${p.id}" style="color:var(--pink-500);">Read More <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    `).join('');
}

function openBlogModal(post) {
    const overlay = document.getElementById('blogModalOverlay');
    const content = document.getElementById('blogModalContent');
    content.innerHTML = `
        <button class="modal-close" id="blogModalClose">&times;</button>
        <img src="${post.img}" style="width:100%;border-radius:var(--radius-md);margin-bottom:20px;">
        <h2>${post.title}</h2>
        <p style="color:var(--text-muted);">${post.date}</p>
        <div style="margin-top:20px;">${post.content}</div>
    `;
    overlay.classList.add('active');
    document.getElementById('blogModalClose').onclick = () => overlay.classList.remove('active');
}
document.addEventListener('click', e => {
    if (e.target.id === 'blogModalOverlay') document.getElementById('blogModalOverlay').classList.remove('active');
    const link = e.target.closest('.blog-link');
    if (link) {
        e.preventDefault();
        const id = parseInt(link.dataset.id);
        const post = blogPosts.find(p => p.id === id);
        if (post) openBlogModal(post);
    }
});