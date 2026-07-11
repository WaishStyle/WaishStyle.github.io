/* ================================================
   PRODUCTS.JS - محصولات وایش استایل
   ================================================ */

const products = {
    1: {
        name: "Bohemian Paisley Sequin Halter Mini Dress",
        rating: 4.7,
        ratingCount: 340,
        sold: 340,
        shipFrom: "United States",
        images: [
            "https://i.pinimg.com/736x/3c/54/a9/3c54a959fe31364104227dc9d01b0cd2.jpg",
            "https://i.pinimg.com/736x/40/9b/aa/409baae37ac2159eeac0943a88fffa94.jpg",
            "https://i.pinimg.com/736x/51/fa/52/51fa52ec0bed5957c4336e2e78d87b26.jpg"
        ],
        colors: [
            { hex: "#8B4513", name: "MultiColor" },
            { hex: "#000000", name: "Dark Brown" },
            { hex: "#F5F5DC", name: "Lv" }
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
        description: "Flowy A-line halter mini dress with shimmering paisley sequin details. Perfect for beach festivals, vacation nights, and bohemian summer looks.",
        link: "https://s.click.aliexpress.com/e/_c3eDnKez"
    },
    2: {
        name: "Luxury Logo Slide Sandals",
        rating: 5.0,
        ratingCount: 5,
        sold: 78,
        shipFrom: "United States",
        images: [
            "https://i.pinimg.com/736x/ab/3b/bc/ab3bbc0f50632302f71029f09aa67a46.jpg",
            "https://i.pinimg.com/736x/ba/0a/24/ba0a24047705c9c5d890545a28058f03.jpg"
        ],
        colors: [
            { hex: "#000000", name: "Black" },
            { hex: "#2E5FDB", name: "Blue" },
            { hex: "#FFD700", name: "Yellow" },
            { hex: "#E0339E", name: "Rosy Red" }
        ],
        sizes: ["35", "36", "37", "38", "39", "40", "41"],
        description: "Sleek slide sandals with signature logo detail. Non-slip flat sole for all-day comfort — perfect for pool days, resort walks, and luxury vacation looks.",
        link: "https://s.click.aliexpress.com/e/_c3qcoOhx"
    },
    3: {
        name: "Boho Fringe Halter & Maxi Skirt Set",
        rating: 4.5,
        ratingCount: 19,
        sold: 247,
        shipFrom: "Unknown",
        images: [
            "https://i.pinimg.com/736x/a7/e2/59/a7e259b60bcaa1153b14307b23afc314.jpg",
            "https://i.pinimg.com/564x/c0/5b/ee/c05beee04a58fe62d0784dd2e19febe1.jpg"
        ],
        colors: [
            { hex: "#FFFFFF", name: "Beige" }
        ],
        sizes: ["S", "M", "L"],
        description: "Elegant halter crop top with backless design and a flowing fringe maxi skirt. Perfect resort wear for beach days, island getaways, and summer vacation looks.",
        link: "https://s.click.aliexpress.com/e/_c3iCsqZ7"
    },
    4: {
        name: "Chain Halter Maxi Gown",
        rating: 4.7,
        ratingCount: 52,
        sold: 600,
        shipFrom: "United States",
        images: [
            "https://i.pinimg.com/736x/74/d9/b7/74d9b7dadf7ba3686d2129c0f623c871.jpg",
            "https://i.pinimg.com/736x/ab/20/eb/ab20eb5e9e2f67597d13193098216283.jpg"
        ],
        colors: [
            { hex: "#000000", name: "Black" },
            { hex: "#2E5FDB", name: "Blue" },
            { hex: "#FF69B4", name: "Pink" },
            { hex: "#FFD700", name: "Yellow" }
        ],
        sizes: ["S", "M", "L"],
        description: "Flowing maxi gown with luxury chain halter detail and deep backless neckline. Perfect for resort evenings, poolside dinners, and unforgettable tropical vacation nights.",
        link: "https://s.click.aliexpress.com/e/_c3HQgkCp"
    },
    5: {
        name: "Floral Halter Crop Top & Split Maxi Skirt Set",
        rating: 4.7,
        ratingCount: 11,
        sold: 144,
        shipFrom: "United States",
        images: [
            "https://i.pinimg.com/564x/03/b8/58/03b858c6688e6f66f95d7b936d7a9cb6.jpg",
            "https://i.pinimg.com/736x/23/7d/4f/237d4f1d8b65457a4819ac5fea6d2e64.jpg"
        ],
        colors: [
            { hex: "#F0E0A8", name: "SK1" }
        ],
        sizes: ["S", "M", "L"],
        description: "Elegant cowl neck halter crop top with flowing floral split maxi skirt. Perfect for resort terraces, island dining, and effortless Mediterranean vacation looks.",
        link: "https://s.click.aliexpress.com/e/_c4eYhigh"
    },
    6: {
        name: "Paris Milano Straw Beach Tote Bag",
        rating: 4.9,
        ratingCount: 19,
        sold: 484,
        shipFrom: "United States",
        images: [
            "https://i.pinimg.com/564x/de/ab/26/deab26e80349a2a1edacacf4d59ab4f3.jpg",
            "https://i.pinimg.com/736x/cc/9d/4a/cc9d4aa09ca43c934ffb62a0fb845cb5.jpg"
        ],
        colors: [
            { hex: "#FFFFFF", name: "Beige" },
            { hex: "#D2B48C", name: "Khaki" },
            { hex: "#000000", name: "Black" },
            { hex: "#FF69B4", name: "Pink" }
        ],
        sizes: ["30", "35", "40", "Max"],
        description: "Handwoven straw tote with iconic Paris Milano detail. Lightweight mesh design — perfect for tropical beach days, island hopping, and summer vacation essentials.",
        link: "https://s.click.aliexpress.com/e/_c35qABB3"
    },
    7: {
        name: "Textured Knit Button-Front Midi Dress",
        rating: 4.9,
        ratingCount: 50,
        sold: 700,
        shipFrom: "United States",
        images: [
            "https://i.pinimg.com/564x/0b/cd/27/0bcd27aac85071ef1b5b70059a002e46.jpg",
            "https://i.pinimg.com/736x/29/81/3d/29813d50e81ef07b1b8cc49fe5376c49.jpg"
        ],
        colors: [
            { hex: "#FFFFFF", name: "White" },
            { hex: "#000000", name: "Black" },
            { hex: "#2E5FDB", name: "Blue" },
            { hex: "#FF69B4", name: "Pink" },
            { hex: "#8B4513", name: "Brown" },
            { hex: "#D2B48C", name: "Khaki" },
            { hex: "#FFD700", name: "Yellow" },
            { hex: "#000080", name: "Navy Blue" },
            { hex: "#800020", name: "Burgundy" },
            { hex: "#006400", name: "Dark Green" }
        ],
        sizes: ["S", "M", "L", "XL", "XXL"],
        description: "Elegant textured knit midi dress with gold button front detail and faux pockets. Perfect for island walks, coastal dining, and effortlessly chic European vacation looks.",
        link: "https://s.click.aliexpress.com/e/_c2yUJ7vn"
    }
};

window.products = products;
