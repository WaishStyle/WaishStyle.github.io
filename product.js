/* ===========================================
   PRODUCT.JS – Product‑Related Sections
   (Products, Categories, Sale, Affiliate Modal)
=========================================== */

// ------ Product List ------
const products = [
    {
        id: 1,
        name: "Elegant Midi Dress",
        oldPrice: "$89.00",
        price: "$62.30",
        discount: "-30%",
        rating: 5,
        img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=520&fit=crop",
        badge: "Sale",
        description: "Turn heads in this stunning midi dress. Crafted from soft, breathable fabric with a flattering A‑line silhouette.",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Black", "Burgundy", "Navy"],
        affiliateLink: "https://www.amazon.com/s?k=women+midi+dress"
    },
    {
        id: 2,
        name: "Silk Blouse with Floral Print",
        oldPrice: "$54.00",
        price: "$43.20",
        discount: "-20%",
        rating: 4.5,
        img: "https://images.unsplash.com/photo-1434389677669-e08b4cda4a56?w=400&h=520&fit=crop",
        badge: null,
        description: "Luxurious silk blouse with a vibrant floral print. Perfect for office or brunch.",
        sizes: ["S", "M", "L"],
        colors: ["White/Blue", "Pink/Green"],
        affiliateLink: "https://www.amazon.com/s?k=silk+blouse+women"
    },
    {
        id: 3,
        name: "Classic Black Leather Bag",
        oldPrice: "$125.00",
        price: "$87.50",
        discount: "-30%",
        rating: 5,
        img: "https://images.unsplash.com/photo-1543163521-1bf539c16dd2?w=400&h=520&fit=crop",
        badge: "Trending",
        description: "Genuine leather bag with multiple compartments and gold‑tone hardware.",
        sizes: ["One Size"],
        colors: ["Black", "Brown", "Burgundy"],
        affiliateLink: "https://www.amazon.com/s?k=women+leather+bag"
    },
    {
        id: 4,
        name: "Rose Gold Women's Watch",
        oldPrice: "$210.00",
        price: "$168.00",
        discount: "-20%",
        rating: 4.5,
        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=520&fit=crop",
        badge: null,
        description: "Minimalist rose gold watch with a sleek mesh strap.",
        sizes: ["Adjustable"],
        colors: ["Rose Gold", "Silver", "Gold"],
        affiliateLink: "https://www.amazon.com/s?k=rose+gold+watch+women"
    },
    {
        id: 5,
        name: "Wool Trench Coat",
        oldPrice: "$189.00",
        price: "$132.30",
        discount: "-30%",
        rating: 5,
        img: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=520&fit=crop",
        badge: "Hot",
        description: "Classic double‑breasted wool trench coat. A timeless investment.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Camel", "Black", "Grey"],
        affiliateLink: "https://www.amazon.com/s?k=women+trench+coat"
    },
    {
        id: 6,
        name: "Handwoven Silk Scarf",
        oldPrice: "$32.00",
        price: "$25.60",
        discount: "-20%",
        rating: 4,
        img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=520&fit=crop",
        badge: null,
        description: "Artisan‑crafted silk scarf. Soft and lightweight.",
        sizes: ["70x180 cm"],
        colors: ["Multi", "Blue", "Red"],
        affiliateLink: "https://www.amazon.com/s?k=silk+scarf+women"
    },
    {
        id: 7,
        name: "Evening Heels",
        oldPrice: "$98.00",
        price: "$73.50",
        discount: "-25%",
        rating: 4.5,
        img: "https://images.unsplash.com/photo-1543163521-1bf539c16dd2?w=400&h=520&fit=crop",
        badge: null,
        description: "Elegant pointed‑toe heels with cushioned insoles.",
        sizes: ["36", "37", "38", "39", "40"],
        colors: ["Black", "Nude", "Red"],
        affiliateLink: "https://www.amazon.com/s?k=women+evening+heels"
    },
    {
        id: 8,
        name: "Cotton Linen Set",
        oldPrice: "$75.00",
        price: "$52.50",
        discount: "-30%",
        rating: 5,
        img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=520&fit=crop",
        badge: "Popular",
        description: "Relaxed button‑down shirt and high‑waisted shorts in a cotton‑linen blend.",
        sizes: ["S", "M", "L"],
        colors: ["White", "Beige", "Sage"],
        affiliateLink: "https://www.amazon.com/s?k=women+linen+set"
    },
    {
        id: 9,
        name: "Minimalist Crossbody Bag",
        oldPrice: "$86.00",
        price: "$68.80",
        discount: "-20%",
        rating: 4,
        img: "https://images.unsplash.com/photo-1543163521-1bf539c16dd2?w=400&h=520&fit=crop",
        badge: null,
        description: "Vegan leather crossbody bag with adjustable strap.",
        sizes: ["One Size"],
        colors: ["Black", "Tan", "Olive"],
        affiliateLink: "https://www.amazon.com/s?k=women+crossbody+bag"
    },
    {
        id: 10,
        name: "Lace Evening Gown",
        oldPrice: "$145.00",
        price: "$101.50",
        discount: "-30%",
        rating: 5,
        img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=520&fit=crop",
        badge: "Exclusive",
        description: "Floor‑length lace gown with illusion neckline.",
        sizes: ["XS", "S", "M", "L"],
        colors: ["Black", "Navy", "Red"],
        affiliateLink: "https://www.amazon.com/s?k=lace+evening+gown"
    },
    {
        id: 11,
        name: "Chelsea Leather Boots",
        oldPrice: "$160.00",
        price: "$128.00",
        discount: "-20%",
        rating: 4.5,
        img: "https://images.unsplash.com/photo-1543163521-1bf539c16dd2?w=400&h=520&fit=crop",
        badge: null,
        description: "Polished leather Chelsea boots with elastic side panels.",
        sizes: ["36", "37", "38", "39", "40", "41"],
        colors: ["Black", "Brown", "Burgundy"],
        affiliateLink: "https://www.amazon.com/s?k=chelsea+boots+women"
    },
    {
        id: 12,
        name: "Pleated Midi Skirt",
        oldPrice: "$48.00",
        price: "$38.40",
        discount: "-20%",
        rating: 4,
        img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=520&fit=crop",
        badge: null,
        description: "Twirl‑worthy pleated midi skirt. Dress it up or down.",
        sizes: ["XS", "S", "M", "L"],
        colors: ["Black", "Navy", "Blush"],
        affiliateLink: "https://www.amazon.com/s?k=pleated+midi+skirt"
    }
];

// ------ Product Card & Grid ------
function createProductCard(product) {
    const fullStars = Math.floor(product.rating);
    const halfStar = product.rating % 1 >= 0.5;
    let starsHTML = '';
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) starsHTML += '<i class="fas fa-star"></i>';
        else if (i === fullStars && halfStar) starsHTML += '<i class="fas fa-star-half-alt"></i>';
        else starsHTML += '<i class="far fa-star"></i>';
    }
    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                <img src="${product.img}" alt="${product.name}" loading="lazy">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">${starsHTML}<span>(${product.rating})</span></div>
                <div class="product-price"><span class="current">${product.price}</span><span class="old">${product.oldPrice}</span></div>
            </div>
        </div>
    `;
}
function renderProductsGrid(containerId, productList) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = productList.map(createProductCard).join('');
}

// ------ Affiliate Modal ------
function openProductModal(product) {
    const overlay = document.getElementById('modalOverlay');
    const content = document.getElementById('modalContent');
    const fullStars = Math.floor(product.rating);
    const halfStar = product.rating % 1 >= 0.5;
    let starsHTML = '';
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) starsHTML += '<i class="fas fa-star"></i>';
        else if (i === fullStars && halfStar) starsHTML += '<i class="fas fa-star-half-alt"></i>';
        else starsHTML += '<i class="far fa-star"></i>';
    }
    const sizesHTML = product.sizes.map(s => `<span style="display:inline-block;background:#f0f0f0;padding:6px 12px;border-radius:20px;margin:4px;">${s}</span>`).join('');
    const colorsHTML = product.colors.map(c => `<span style="display:inline-block;background:#f0f0f0;padding:6px 12px;border-radius:20px;margin:4px;">${c}</span>`).join('');
    content.innerHTML = `
        <button class="modal-close" id="modalClose">&times;</button>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:30px;align-items:start;">
            <div style="border-radius:var(--radius-md);overflow:hidden;"><img src="${product.img}" alt="${product.name}" style="width:100%;height:auto;object-fit:cover;"></div>
            <div>
                <h2 style="font-size:1.8rem;margin-bottom:8px;color:var(--text-dark);">${product.name}</h2>
                <div class="product-rating" style="margin-bottom:12px;">${starsHTML}<span>(${product.rating})</span></div>
                <div style="margin-bottom:20px;">
                    <span style="font-size:1.4rem;font-weight:700;color:var(--text-dark);">${product.price}</span>
                    <span style="text-decoration:line-through;color:var(--text-muted);margin-left:12px;">${product.oldPrice}</span>
                    ${product.badge ? `<span style="background:var(--pink-500);color:#fff;padding:4px 10px;border-radius:20px;font-size:0.8rem;margin-left:10px;">${product.badge}</span>` : ''}
                </div>
                <p style="color:var(--text-muted);margin-bottom:20px;line-height:1.7;">${product.description}</p>
                <div style="margin-bottom:16px;"><strong style="display:block;margin-bottom:6px;">Available Sizes:</strong><div>${sizesHTML}</div></div>
                <div style="margin-bottom:24px;"><strong style="display:block;margin-bottom:6px;">Colors:</strong><div>${colorsHTML}</div></div>
                <button class="btn-primary" id="modalBuyBtn" data-link="${product.affiliateLink}" style="width:100%;justify-content:center;"><i class="fas fa-external-link-alt"></i> Buy Now</button>
            </div>
        </div>
    `;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.getElementById('modalClose').onclick = closeModal;
    document.getElementById('modalBuyBtn').onclick = function() {
        window.open(this.dataset.link, '_blank');
        closeModal();
    };
}
function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = '';
}
document.addEventListener('click', e => {
    if (e.target.id === 'modalOverlay') closeModal();
    const card = e.target.closest('.product-card');
    if (card) {
        const id = parseInt(card.dataset.id);
        const product = products.find(p => p.id === id);
        if (product) openProductModal(product);
    }
});

// ------ Categories ------
const categories = [
    { name: "Dresses", count: 248, img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop" },
    { name: "Bags & Shoes", count: 165, img: "https://images.unsplash.com/photo-1543163521-1bf539c16dd2?w=400&h=400&fit=crop" },
    { name: "Accessories", count: 92, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop" },
    { name: "Beauty", count: 134, img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop" },
    { name: "Home & Living", count: 76, img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop" },
    { name: "Scarves", count: 112, img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=400&fit=crop" },
    { name: "Coats", count: 89, img: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=400&fit=crop" },
    { name: "Evening Wear", count: 58, img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop" }
];
function renderCategories() {
    const grid = document.getElementById('categoriesGrid');
    if (!grid) return;
    grid.innerHTML = categories.map(c => `
        <div class="category-card">
            <img src="${c.img}" alt="${c.name}" loading="lazy">
            <div class="overlay"><h3>${c.name}</h3><span>${c.count} products</span></div>
        </div>
    `).join('');
}

// ------ Sale Section ------
const saleData = {
    title: "🔥 Summer Sale",
    subtitle: "Up to 50% Off Selected Items",
    description: "Limited time offer on top brands. Grab your favourites before they're gone!",
    bannerImg: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=450&fit=crop",
    endDate: new Date(Date.now() + 3*86400000 + 18*3600000 + 42*60000 + 15*1000)
};
function renderSale() {
    const container = document.getElementById('saleContainer');
    if (!container) return;
    container.innerHTML = `
        <div class="offer-banner">
            <div class="offer-content">
                <span class="label">${saleData.title}</span>
                <h2>${saleData.subtitle}</h2>
                <p>${saleData.description}</p>
                <div class="offer-timer">
                    <div class="timer-box"><span class="num" id="timerDays">03</span><span class="unit">Days</span></div>
                    <div class="timer-box"><span class="num" id="timerHours">18</span><span class="unit">Hrs</span></div>
                    <div class="timer-box"><span class="num" id="timerMins">42</span><span class="unit">Min</span></div>
                    <div class="timer-box"><span class="num" id="timerSecs">15</span><span class="unit">Sec</span></div>
                </div>
                <button class="btn-gold" onclick="document.getElementById('special').scrollIntoView({behavior:'smooth'})"><i class="fas fa-bolt"></i> Shop the Sale</button>
            </div>
            <div class="offer-image"><img src="${saleData.bannerImg}" alt="Sale" loading="lazy"></div>
        </div>
    `;
    startSaleTimer();
}
function startSaleTimer() {
    function update() {
        const now = new Date();
        let diff = saleData.endDate - now;
        if (diff < 0) diff = 0;
        document.getElementById('timerDays').textContent = String(Math.floor(diff/86400000)).padStart(2,'0');
        document.getElementById('timerHours').textContent = String(Math.floor((diff%86400000)/3600000)).padStart(2,'0');
        document.getElementById('timerMins').textContent = String(Math.floor((diff%3600000)/60000)).padStart(2,'0');
        document.getElementById('timerSecs').textContent = String(Math.floor((diff%60000)/1000)).padStart(2,'0');
    }
    update();
    setInterval(update, 1000);
}