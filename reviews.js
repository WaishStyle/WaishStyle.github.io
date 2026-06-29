/* ================================================
   REVIEWS.JS - نظرات مشتریان
   - - - - - - - - - - - - - - - - - - - - - - - -
   فیلدها:
   name    - اسم مشتری
   avatar  - حرف اول اسم
   country - کشور (ایموجی پرچم + اسم)
   rating  - ستاره از 1 تا 5
   size    - سایزی که خریده (اختیاری)
   color   - رنگی که خریده (اختیاری)
   likes   - تعداد لایک قلب
   date    - تاریخ
   text    - متن نظر
   ================================================ */

const reviews = {

    /* ---------- Reviews for Product #1 ---------- */
    1: [
        {
            name: "E***a.",
            avatar: "E",
            country: "🇷🇺 Russia",
            rating: 5,
            size: "L",
            color: "Dark Brown",
            likes: 24,
            date: "June 02, 2026",
            text: "Very nice top, but if you are short, it will fit like a dress; it spports the chest even without a bra."
        },
        {
            name: "H***R",
            avatar: "H",
            country: "🇷🇺 Russia",
            rating: 5,
            size: "S",
            color: "Dark Brown",
            likes: 18,
            date: "May 06, 2026",
            text: "The top is cool; but the color is a bit different (brighter) and it turned out to be longer than i expeted. The fabric is very nice."
        },
        {
            name: "d***r",
            avatar: "d",
            country: "🇻🇳 Vietnam",
            rating: 4,
            size: "S",
            color: "Dark Brown",
            likes: 11,
            date: "Mar 18, 2026",
            text: "I Love it so much it is soft and comfy"
        }
    ],

    /* ---------- Reviews for Product #2 ---------- */
    2: [
        {
            name: "l***s",
            avatar: "l",
            country: "🇺🇸 United States",
            rating: 5,
            size: "39",
            color: "Balck",
            likes: 31,
            date: "June 23, 2026",
            text: "My slides came superrr fast im so happy and they’re perfect i love them!"
        },
        {
            name: "S***e",
            avatar: "S",
            country: "🇺🇸 United States",
            rating: 5,
            size: "39",
            color: "Rosy Red",
            likes: 20,
            date: "June 23, 2026",
            text: "Nice 👍 nice love it so much"
        },
        {
            name: "4***r",
            avatar: "4",
            country: "🇺🇸 United States",
            rating: 5,
            size: "37",
            color: "Rosy Red",
            likes: 20,
            date: "28",
            text: "..."
        }
    ],

    /* ---------- Reviews for Product #3 ---------- */
    3: [
        {
            name: "a***a",
            avatar: "a",
            country: "🇺🇦 Ukraine",
            rating: 5,
            size: "S",
            color: "Beige",
            likes: 15,
            date: "Aug 28, 2025",
            text: "An amazing set, the skirt is slightly see-through and the straps are like a bra, but it looks very nice. I chose it specifically for this trip, it arrived quickly (in 13 days). I did not communicate with the store."
        },
        {
            name: "D***s",
            avatar: "D",
            country: "🇺🇦 Ukraine",
            rating: 5,
            size: "S",
            color: "Beige",
            likes: 9,
            date: "Aug 07, 2025",
            text: "A wonderful set for a vacation by the sea, the size matches the stated specifications. For a height of 164 cm, the skirt is a bit long, but that's what I wanted. The laces are imitation; they cannot be used to adjust or tighten the elastic on the skirt."
        },
        {
            name: "P***b",
            avatar: "P",
            country: "🇵🇪 Peru",
            rating: 5,
            size: "S",
            color: "Beige",
            likes: 25,
            date: "Oct 14, 2025",
            text: "Beautiful! I ordered it in size S, the top fit perfectly but the skirt was too long for me, also it doesn't come with lining, but for the price it seems fine to me, so I totally recommend it!."
        }
    ],

    /* ---------- Reviews for Product #4 ---------- */
    4: [
        {
            name: "Isabella C.",
            avatar: "I",
            country: "🇺🇸 United States",
            rating: 5,
            size: "M",
            color: "Black",
            likes: 22,
            date: "June 13, 2026",
            text: "Perfect for vacation! So comfortable and stylish. Will buy more colors."
        },
        {
            name: "Luna P.",
            avatar: "L",
            country: "🇫🇷 France",
            rating: 5,
            size: "S",
            color: "Beige",
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
            country: "🇺🇸 United States",
            rating: 5,
            size: "L",
            color: "Green",
            likes: 19,
            date: "June 11, 2026",
            text: "Great product! Exactly as described. Fast shipping too."
        },
        {
            name: "Amelia F.",
            avatar: "A",
            country: "🇬🇧 United Kingdom",
            rating: 4,
            size: "M",
            color: "Pink",
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
            country: "🇺🇸 United States",
            rating: 5,
            size: "One Size",
            color: "Natural",
            likes: 28,
            date: "June 16, 2026",
            text: "Love this bag! Perfect size for the beach. Great quality and very sturdy."
        },
        {
            name: "Zoe K.",
            avatar: "Z",
            country: "🇦🇺 Australia",
            rating: 5,
            size: "One Size",
            color: "Natural",
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
            country: "🇺🇸 United States",
            rating: 5,
            size: "38",
            color: "Brown",
            likes: 17,
            date: "June 9, 2026",
            text: "So comfortable! Perfect for walking around on vacation. Love them!"
        },
        {
            name: "Luna J.",
            avatar: "L",
            country: "🇨🇦 Canada",
            rating: 4,
            size: "37",
            color: "Black",
            likes: 8,
            date: "May 28, 2026",
            text: "Cute sandals, true to size. Good quality for the price."
        }
    ],

    /* ---------- نظر جدید اضافه کن ----------
    8: [
        {
            name: "اسم",
            avatar: "حرف اول",
            country: "🇺🇸 United States",
            rating: 5,
            size: "M",        // اختیاری - اگه نخوای حذف کن
            color: "Black",   // اختیاری - اگه نخوای حذف کن
            likes: 10,
            date: "June 1, 2026",
            text: "متن نظر"
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
                            <span class="reviewer-date">${r.country ? r.country + ' · ' : ''}${r.date}</span>
                        </div>
                        <div class="review-stars">${renderStars(r.rating)}</div>
                    </div>
                    ${(r.size || r.color) ? `
                    <div class="review-meta">
                        ${r.size  ? `<span class="review-tag">Size: ${r.size}</span>`  : ''}
                        ${r.color ? `<span class="review-tag">Color: ${r.color}</span>` : ''}
                    </div>` : ''}
                    <p class="review-text">${r.text}</p>
                    <div class="review-likes">❤️ ${r.likes} found this helpful</div>
                </div>
            `).join('')}
        </div>
    `;
}