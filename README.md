# 📱 Phones & Accessories//Phone Repair Shop

An elegant and responsive e-commerce platform for selling phones, accessories, headphones, and more — designed to be fast, modern, and user-friendly.

---

## 🚀 Live Preview
[Coming Soon – Deployed on Vercel]

---

## 🧠 Features

### 👥 Authentication
- Sign up, login, reset password
- Authenticated user sessions
- Secure routes (JWT/Auth Guard ready)

### 🛍️ Shopping Experience
- Product browsing by category (Phones, Accessories, Tablets, etc.)
- Filters: Brand, Price, Color, Keywords
- Sorting: New, Lowest Price, Highest Price, Recommended
- Product detail pages with image, description, and variations
- Add to Cart, Quantity Management
- Reviews and Ratings system

### 📦 Order Management
- Checkout workflow
- Inventory status per product (e.g. Sold Out, Low Stock)

### 📱 Responsive UI
- Mobile-first design
- Built from clean, reusable components
- Light/Dark mode toggle

### 💬 Communication
- Direct shop inquiry/chat

---

## 🛠️ Tech Stack

### Frontend:
- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/) (utility-first design)
- [Framer Motion](https://www.framer.com/motion/) (smooth animations)
- [TypeScript](https://www.typescriptlang.org/) (strict mode FTW)

### Backend:
- [Node.js](https://nodejs.org/)
- [Strapi](https://strapi.io/) or [Sanity](https://www.sanity.io/) (CMS)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (with Mongoose)
- [Firebase Auth](https://firebase.google.com/products/auth) / Auth0

---

## 🧱 Folder Structure

```plaintext
phoneshop-site
/
├── components       # Reusable UI Components
├── pages            # Next.js Routes
│   ├── index.jsx    # Landing page with filters
│   └── products/[id].jsx  # Product details
├── public           # Static assets (logos, icons)
├── styles           # Global Tailwind styles
└── README.md
```


---

## 🧪 Development Setup

### 1. Clone the repo

```bash
git clone https://github.com/pacc-jean/phoneshop-site.git
cd phoneshop-site
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the dev server

```bash
npm run dev
```

---

## 🤝 Contributing
All pull requests are welcome! Please open an issue first to discuss what you would like to change.

---

## 📸 Design Reference
Design built in Figma — see /figma folder or request access to the working file.

---

## 👑 Creator
[**Luca**](https://github.com/pacc-jean) – Software developer with big dreams and clean code.

---

## 📜 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.