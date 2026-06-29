/* ================================================
   REVIEWS.JS - نظرات مشتریان
   - - - - - - - - - - - - - - - - - - - - - - - -
   برای هر محصول نظرات جداگانه تعریف کن
   rating: از 1 تا 5
   likes: تعداد لایک قلب
   ================================================ */

const reviews = {

    /* ---------- Reviews for Product #1 ---------- */
    1: [
        {
            name: "Sarah M.",
            avatar: "S",        // حرف اول اسم
            rating: 5,
            likes: 24,
            date: "June 12, 2026",
            text: "Absolutely love this dress! The fabric is so soft and it fits perfectly. Got so many compliments on vacation!"
        },
        {
            name: "Emma K.",
            avatar: "E",
            rating: 5,
            likes: 18,
            date: "June 8, 2026",
            text: "Perfect summer dress. Runs true to size, very flowy and comfortable. Will definitely buy again!"
        },
        {
            name: "Jessica L.",
            avatar: "J",
            rating: 4,
            likes: 11,
            date: "May 30, 2026",
            text: "Beautiful dress, color is exactly as shown. Shipping was fast too!"
        }
    ],

    /* ---------- Reviews for Product #2 ---------- */
    2: [
        {
            name: "Olivia R.",
            avatar: "O",
            rating: 5,
            likes: 31,
            date: "June 15, 2026",
            text: "Amazing quality for the price! Looks so expensive in person."
        },
        {
            name: "Mia T.",
            avatar: "M",
            rating: 5,
            likes: 20,
            date: "June 10, 2026",
            text: "Super cute and versatile. Wore it to the beach and got so many compliments!"
        }
    ],

    /* ---------- Reviews for Product #3 ---------- */
    3: [
        {
            name: "Sophia W.",
            avatar: "S",
            rating: 5,
            likes: 15,
            date: "June 14, 2026",
            text: "Love this! Great quality and perfect fit. Highly recommend."
        },
        {
            name: "Ava B.",
            avatar: "A",
            rating: 4,
            likes: 9,
            date: "June 5, 2026",
            text: "Really nice product. Looks exactly like the photos."
        }
    ],

    /* ---------- Reviews for Product #4 ---------- */
    4: [
        {
            name: "Isabella C.",
            avatar: "I",
            rating: 5,
            likes: 22,
            date: "June 13, 2026",
            text: "Perfect for vacation! So comfortable and stylish. Will buy more colors."
        },
        {
            name: "Luna P.",
            avatar: "L",
            rating: 5,
            likes: 14,
            date: "June 7, 2026",
            text: "Exactly as described. Great quality and fast shipping!"
        }
    ],

    /* ---------- Reviews for Product #5 ---------- */
    5: [
        {
            name: "Charlotte D.",
            avatar: "C",
            rating: 5,
            likes: 19,
            date: "June 11, 2026",
            text: "Great product! Exactly as described. Fast shipping too."
        },
        {
            name: "Amelia F.",
            avatar: "A",
            rating: 4,
            likes: 13,
            date: "June 3, 2026",
            text: "Beautiful and well made. Very happy with this purchase!"
        }
    ],

    /* ---------- Reviews for Product #6 - کیف ---------- */
    6: [
        {
            name: "Harper G.",
            avatar: "H",
            rating: 5,
            likes: 28,
            date: "June 16, 2026",
            text: "Love this bag! Perfect size for the beach. Great quality and very sturdy."
        },
        {
            name: "Zoe K.",
            avatar: "Z",
            rating: 5,
            likes: 16,
            date: "June 9, 2026",
            text: "Exactly what I was looking for! Fits everything and looks so cute."
        }
    ],

    /* ---------- Reviews for Product #7 - دمپایی ---------- */
    7: [
        {
            name: "Evelyn H.",
            avatar: "E",
            rating: 5,
            likes: 17,
            date: "June 9, 2026",
            text: "So comfortable! Perfect for walking around on vacation. Love them!"
        },
        {
            name: "Luna J.",
            avatar: "L",
            rating: 4,
            likes: 8,
            date: "May 28, 2026",
            text: "Cute sandals, true to size. Good quality for the price."
        }
    ],

    /* ---------- نظر جدید اضافه کن ----------
    8: [
        {
            name: "اسم مشتری",
            avatar: "حرف اول",
            rating: 5,
            likes: 10,
            date: "June 1, 2026",
            text: "متن نظر اینجا"
        },
        // نظر دوم برای همین محصول
        {
            name: "اسم مشتری دوم",
            avatar: "حرف اول",
            rating: 4,
            likes: 5,
            date: "June 2, 2026",
            text: "متن نظر دوم"
        }
    ],
    */

};

/* ================================================
   ENGINE - دست نزن
   ================================================ */
function renderStars(rating) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) html += '<span class="star full">★</span>';
        else if (i - 0.5 <= rating) html += '<span class="star half">★</span>';
        else html += '<span class="star empty">★</span>';
    }
    return html;
}

function renderReviews(productId) {
    const productReviews = reviews[productId];
    const container = document.getElementById('reviews-container');
    if (!container) return;

    if (!productReviews || productReviews.length === 0) {
        container.innerHTML = '<p style="color:#777;text-align:center;padding:20px;">No reviews yet.</p>';
        return;
    }

    const avg = (productReviews.reduce((sum, r) => sum + r.rating, 0) / productReviews.length).toFixed(1);
    const totalLikes = productReviews.reduce((sum, r) => sum + r.likes, 0);

    container.innerHTML = `
        <div class="reviews-avg">
            <span class="avg-score">${avg}</span>
            <div>
                <div class="stars-row">${renderStars(parseFloat(avg))}</div>
                <span class="reviews-count">${productReviews.length} reviews · ❤️ ${totalLikes} people found this helpful</span>
            </div>
        </div>
        <div class="reviews-list">
            ${productReviews.map(r => `
                <div class="review-card">
                    <div class="review-top">
                        <div class="reviewer-avatar">${r.avatar}</div>
                        <div class="reviewer-info">
                            <span class="reviewer-name">${r.name}</span>
                            <span class="reviewer-date">${r.date}</span>
                        </div>
                        <div class="review-stars">${renderStars(r.rating)}</div>
                    </div>
                    <p class="review-text">${r.text}</p>
                    <div class="review-likes">❤️ ${r.likes} found this helpful</div>
                </div>
            `).join('')}
        </div>
    `;
}
