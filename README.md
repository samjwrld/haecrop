# HYCROP Agri Solutions - Client Website Template & Reconstruction

A near-exact visual and functional replica of the HYCROP Agri Solutions platform (`hycrop-grow-hub.vercel.app`), engineered with React 19, TypeScript, Vite, Tailwind CSS v4, and Lucide Icons.

The website architecture separates **UI Components** from **Branding & Content Configuration**, allowing you to instantly rebrand and deploy second client websites without touching component source code.

---

## 🚀 Quick Start Guide

### 1. Installation
```bash
npm install
```

### 2. Local Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
```

---

## 🎨 Rebranding & Content Customization System

All company details, branding elements, navigation links, products catalog, images, contact information, job openings, and SEO tags are centralized in a single configuration file:

📁 **`src/config/site.ts`**

### 1. Changing Company Branding
Modify `siteConfig.branding`:
```typescript
branding: {
  companyName: "Your Client Name Agri Solutions",
  shortName: "CLIENT",
  tagline: "Your Custom Tagline Here",
  subtitle: "Your Partner in Agricultural Excellence",
  logoText: "CLIENT",
  logoIcon: "Sprout",
  establishedYear: "2026",
}
```

### 2. Changing Colors & Styling System
Modify the CSS variable tokens in 📁 **`src/index.css`**:
```css
:root {
  --primary: #15803d; /* Change to your primary brand color */
  --primary-dark: #166534;
  --secondary: #d97706; /* Accent color */
  --accent: #16a34a;
}
```

### 3. Updating Contact Information & Google Maps
Modify `siteConfig.contact`:
```typescript
contact: {
  phoneNumbers: ["+91 9876543210"],
  whatsappNumber: "919876543210",
  emailAddresses: ["contact@yourclient.com"],
  address: "Your Street Address, City, State, Pincode",
  workingHours: ["Mon - Fri: 9:00 AM - 6:00 PM"],
  googleMapsEmbedUrl: "https://www.google.com/maps?q=Your+Location&output=embed",
}
```

### 4. Updating Products Catalog
Modify `siteConfig.products` in `src/config/site.ts`. You can add, edit, or delete items:
```typescript
{
  id: "product-1",
  name: "New Product Name",
  category: "insects", // 'insects' | 'fungicides' | 'herbicides' | 'pgr' | 'bactericide'
  categoryLabel: "Insecticides",
  description: "Description of product...",
  features: ["Benefit 1", "Benefit 2"],
  crops: ["Cotton", "Paddy"],
  image: "https://images.unsplash.com/your-image-url",
  isPopular: true
}
```

### 5. Connecting Contact Form Backend
In 📁 **`src/pages/ContactPage.tsx`**, locate the `handleSubmit` function:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  // Replace this placeholder with your API service:
  // e.g. EmailJS, FormSubmit, Supabase, or Custom Backend
  // await fetch('https://formsubmit.co/ajax/your@email.com', { method: 'POST', body: ... })

  setLoading(false);
  setSubmitted(true);
};
```

---

## 🛠 Project Architecture

```
src/
├── components/
│   ├── Header.tsx              # Sticky header with navigation & phone button
│   ├── Hero.tsx                # Hero carousel banner with CTA buttons
│   ├── WhyChooseUs.tsx         # Features grid
│   ├── ProductCategories.tsx   # Category overview cards
│   ├── FeaturedProducts.tsx    # Highlighting popular product cards
│   ├── ProductDetailModal.tsx  # Quick-view modal dialog for product specs
│   ├── StatsSection.tsx        # Experience & customer counters
│   ├── GalleryPreview.tsx      # Home gallery preview
│   ├── Testimonials.tsx        # Farmer review cards
│   ├── ConsultationCta.tsx     # Consultation banner & catalog download
│   ├── Footer.tsx              # Footer navigation & copyright
│   └── ScrollToTop.tsx         # Floating scroll-to-top & WhatsApp button
│
├── pages/
│   ├── Home.tsx                # Home page layout
│   ├── AboutPage.tsx           # Story, vision, mission
│   ├── ProductsPage.tsx        # Full products catalog & category filters
│   ├── ImageGalleryPage.tsx    # Photo gallery & lightbox modal
│   ├── VideoGalleryPage.tsx    # Video gallery & video player modal
│   ├── CareersPage.tsx         # Job openings & job application form
│   └── ContactPage.tsx         # Contact cards, form, & Google Map
│
├── config/
│   └── site.ts                 # Centralized content & branding configuration
│
├── App.tsx                     # React Router routes setup
├── main.tsx                    # Entry point
└── index.css                   # Global CSS & Tailwind design tokens
```

---

## 📄 License
Apache 2.0 / Proprietary to Client.
