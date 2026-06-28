// =============================================
// product.js – اینجا محصولاتت رو اضافه کن
// =============================================

const products = {
    1: {
        name: "Elegant Midi Dress",
        price: "$62.30",
        oldPrice: "$89.00",
        img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=1000&fit=crop",
        description: "Stunning midi dress crafted from soft, breathable fabric with a flattering A-line silhouette.",
        affiliateLink: "https://www.amazon.com/s?k=women+midi+dress"
    },
    2: {
        name: "Classic Black Leather Bag",
        price: "$87.50",
        oldPrice: "$125.00",
        img: "https://images.unsplash.com/photo-1543163521-1bf539c16dd2?w=800&h=1000&fit=crop",
        description: "Genuine leather bag with multiple compartments and gold-tone hardware.",
        affiliateLink: "https://www.amazon.com/s?k=women+leather+bag"
    },
    3: {
        name: "Wool Trench Coat",
        price: "$132.30",
        oldPrice: "$189.00",
        img: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&h=1000&fit=crop",
        description: "Classic double-breasted wool trench coat. A timeless investment piece.",
        affiliateLink: "https://www.amazon.com/s?k=women+trench+coat"
    },
    4: {
        name: "Rose Gold Women's Watch",
        price: "$168.00",
        oldPrice: "$210.00",
        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=1000&fit=crop",
        description: "Minimalist rose gold watch with a sleek mesh strap. Effortlessly elegant.",
        affiliateLink: "https://www.amazon.com/s?k=rose+gold+watch+women"
    }
    // محصول جدید اضافه کن اینجا:
    // 5: {
    //     name: "اسم محصول",
    //     price: "$XX",
    //     oldPrice: "$XX",
    //     img: "لینک عکس",
    //     description: "توضیحات",
    //     affiliateLink: "لینک افیلیت"
    // }
};

function loadProduct() {
    const hash = window.location.hash.replace('#', '');
    const id = parseInt(hash);
    const product = products[id];

    const container = document.getElementById('product-container');
    const notFound = document.getElementById('not-found');

    if (!product) {
        container.style.display = 'none';
        notFound.style.display = 'flex';
        return;
    }

    document.title = `${product.name} – WaishStyle`;
    document.getElementById('prod-img').src = product.img;
    document.getElementById('prod-img').alt = product.name;
    document.getElementById('prod-name').textContent = product.name;
    document.getElementById('prod-price').textContent = product.price;
    document.getElementById('prod-old-price').textContent = product.oldPrice;
    document.getElementById('prod-desc').textContent = product.description;
    document.getElementById('prod-btn').href = product.affiliateLink;

    container.style.display = 'grid';
    notFound.style.display = 'none';
}

window.addEventListener('hashchange', loadProduct);
window.addEventListener('DOMContentLoaded', loadProduct);
