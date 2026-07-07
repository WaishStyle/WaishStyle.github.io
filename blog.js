/* ================================================
   BLOG.JS - وبلاگ وایش استایل
   - - - - - - - - - - - - - - - - - - - - - - - -
   فیلدهای هر پست:
   title    - عنوان
   excerpt  - خلاصه (حدود ۱۲۰ کاراکتر)
   image    - لینک عکس (حتماً)
   category - دسته‌بندی (مثل "Fashion", "Travel", "Outfit")
   author   - اسم نویسنده
   date     - تاریخ (مثل "June 12, 2026")
   link     - لینک به پست کامل (اختیاری)
   ================================================ */

const blogPosts = [
    {
        title: "How to Style a Boho Dress for Summer Vacations",
        excerpt: "From beach parties to sunset dinners — here's how to rock the bohemian look with ease. Plus, the best accessories to pair with it.",
        image: "https://i.pinimg.com/564x/a7/e2/59/a7e259b60bcaa1153b14307b23afc314.jpg",
        category: "Fashion",
        author: "Elena",
        date: "June 10, 2026",
        link: "#"
    },
    {
        title: "5 Must-Have Bags for Your Next Island Trip",
        excerpt: "Straw totes, woven crossbodies, and chic clutches — we've rounded up the best vacation bags that are both stylish and practical.",
        image: "https://i.pinimg.com/564x/de/ab/26/deab26e80349a2a1edacacf4d59ab4f3.jpg",
        category: "Travel",
        author: "Sofia",
        date: "June 5, 2026",
        link: "#"
    },
    {
        title: "The Perfect Slides: Comfort Meets Luxury",
        excerpt: "Why logo slides are taking over resort wear. From poolside to dinner, these are the ultimate summer staple.",
        image: "https://i.pinimg.com/736x/ab/3b/bc/ab3bbc0f50632302f71029f09aa67a46.jpg",
        category: "Style",
        author: "Liam",
        date: "May 28, 2026",
        link: "#"
    },
    {
        title: "Maxi Dresses That Turn Heads Everywhere",
        excerpt: "Flowing silhouettes, bold colors, and effortless elegance — these maxi dresses are all you need for a dreamy vacation wardrobe.",
        image: "https://i.pinimg.com/736x/74/d9/b7/74d9b7dadf7ba3686d2129c0f623c871.jpg",
        category: "Fashion",
        author: "Mia",
        date: "May 20, 2026",
        link: "#"
    },
    {
        title: "What to Wear to a Beach Wedding",
        excerpt: "Guest style tips for seaside ceremonies. Light fabrics, pastel tones, and the perfect accessories to complete your look.",
        image: "https://i.pinimg.com/564x/03/b8/58/03b858c6688e6f66f95d7b936d7a9cb6.jpg",
        category: "Wedding",
        author: "Elena",
        date: "May 12, 2026",
        link: "#"
    },
    {
        title: "Knit Dresses: The Unexpected Vacation Hero",
        excerpt: "Soft, breathable, and incredibly chic — knit midi dresses are the new must-have for resort evenings and city strolls.",
        image: "https://i.pinimg.com/564x/0b/cd/27/0bcd27aac85071ef1b5b70059a002e46.jpg",
        category: "Style",
        author: "Noah",
        date: "May 5, 2026",
        link: "#"
    }
];

/* ================================================
   ENGINE - رندر وبلاگ
   ================================================ */

function renderBlog() {
    const posts = window.blogPosts || blogPosts || [];
    const list = document.getElementById('blogList');

    if (!list) {
        console.warn('blogList element not found!');
        return;
    }

    if (!posts.length) {
        list.innerHTML = `
            <p style="text-align:center;color:var(--muted);padding:40px 0;grid-column:1/-1;">
                No posts yet. Check back soon! ✨
            </p>
        `;
        return;
    }

    list.innerHTML = posts.map((p, index) => `
        <div class="blog-card" onclick="window.showPost ? window.showPost(${index}) : console.log('showPost not defined')">
            <div class="blog-card-img">
                <img src="${p.image}" alt="${p.title}" loading="lazy">
            </div>
            <div class="blog-card-body">
                <span class="cat-tag">${p.category || 'Style'}</span>
                <h3>${p.title}</h3>
                <p class="excerpt">${p.excerpt || ''}</p>
                <div class="card-meta">
                    <span class="mini-avatar">${p.author?.[0] || 'W'}</span>
                    <span>${p.author || 'WaishStyle'}</span>
                    <span>·</span>
                    <span>${p.date || ''}</span>
                    <span class="read-link">Read More →</span>
                </div>
            </div>
        </div>
    `).join('');
}

/* ================================================
   نمایش پست تکی
   ================================================ */

function showPost(index) {
    const posts = window.blogPosts || blogPosts || [];
    const p = posts[index];
    if (!p) return;

    const blogList = document.getElementById('blogList');
    const singlePost = document.getElementById('singlePost');

    if (!blogList || !singlePost) return;

    blogList.classList.add('hidden');
    singlePost.classList.add('visible');

    document.getElementById('postFullImg').innerHTML = `<img src="${p.image}" alt="${p.title}">`;
    document.getElementById('postFullCategory').textContent = p.category || 'Style';
    document.getElementById('postFullTitle').textContent = p.title;
    document.getElementById('postFullMeta').innerHTML = `
        <span class="author-avatar-lg">${p.author?.[0] || 'W'}</span>
        <span>${p.author || 'WaishStyle'}</span>
        <span>·</span>
        <span>${p.date || ''}</span>
    `;
    document.getElementById('postFullContent').innerHTML = `
        <p>${p.excerpt || ''}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>${p.author || 'WaishStyle'} shares her personal experience with this stunning look. From the fabric quality to the perfect fit — every detail matters when you're traveling in style.</p>
    `;

    window.history.pushState({ post: index }, p.title, `?post=${index}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ================================================
   مخفی کردن پست تکی (بازگشت به لیست)
   ================================================ */

function hidePost() {
    const blogList = document.getElementById('blogList');
    const singlePost = document.getElementById('singlePost');

    if (blogList) blogList.classList.remove('hidden');
    if (singlePost) singlePost.classList.remove('visible');

    const url = new URL(window.location);
    url.searchParams.delete('post');
    window.history.pushState({}, '', url);
}

/* ================================================
   اتصال به پنجره (گلوبال)
   ================================================ */

window.blogPosts = blogPosts;
window.renderBlog = renderBlog;
window.showPost = showPost;
window.hidePost = hidePost;

/* ================================================
   اگر صفحه خالی بود (بدون هش و بدون پارامتر) 
   به‌صورت خودکار وبلاگ رو رندر کن
   ================================================ */

// این تابع فقط زمانی اجرا میشه که توی index.html صدا زده نشده باشه
// و فقط برای مواقعی که مستقیماً blog.js رو لود میکنیم
if (document.getElementById('blogList') && !window.location.hash && !window.location.search.includes('post')) {
    document.addEventListener('DOMContentLoaded', function() {
        renderBlog();
        hidePost();
    });
}
