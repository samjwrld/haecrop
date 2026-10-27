export interface Product {
  id: string;
  name: string;
  category: 'insects' | 'fungicides' | 'herbicides' | 'pgr' | 'bactericide';
  categoryLabel: string;
  description: string;
  features: string[];
  dosage?: string;
  crops?: string[];
  image: string;
  isPopular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration?: string;
}

export interface CareerOpportunity {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export const siteConfig = {
  branding: {
    companyName: "HYCROP Agri Solutions",
    shortName: "HYCROP",
    tagline: "Cultivating Trust, Harvesting Success",
    subtitle: "Your Partner in Agricultural Excellence",
    logoText: "HYCROP",
    logoIcon: "Sprout", // Lucide icon name
    establishedYear: "2025",
  },

  contact: {
    phoneNumbers: ["+91 6303633713", "+91 8688023889"],
    whatsappNumber: "916303633713",
    emailAddresses: ["info@hycrop.com", "support@hycrop.com"],
    address: "Shop No: 229, Ground Floor, Vishnupriya Commercial Complex, Factories Ward, Guntur, Andhra Pradesh, 522003",
    workingHours: [
      "Mon - Fri: 9:00 AM - 6:00 PM",
      "Sat: 9:00 AM - 2:00 PM",
      "Sun: Closed"
    ],
    googleMapsEmbedUrl: "https://www.google.com/maps?q=Shop%20No%20229%2C%20Ground%20Floor%2C%20Vishnupriya%20Commercial%20Complex%2C%20Factories%20Ward%2C%20Guntur%2C%20Andhra%20Pradesh%2C%20522003&output=embed",
  },

  socialLinks: {
    facebook: "https://facebook.com/hycrop",
    instagram: "https://instagram.com/hycrop",
    youtube: "https://youtube.com/@hycrop",
    twitter: "https://twitter.com/hycrop",
    linkedin: "https://linkedin.com/company/hycrop"
  },

  navigation: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { 
      label: "Products", 
      href: "/products",
      subItems: [
        { label: "All Products", href: "/products" },
        { label: "Insecticides", href: "/products/insects" },
        { label: "Fungicides", href: "/products/fungicides" },
        { label: "Herbicides", href: "/products/herbicides" },
        { label: "Plant Growth Regulator (PGR)", href: "/products/pgr" },
        { label: "Bactericides", href: "/products/bactericide" },
      ]
    },
    { 
      label: "Gallery", 
      href: "/ImageGallery",
      subItems: [
        { label: "Image Gallery", href: "/ImageGallery" },
        { label: "Video Gallery", href: "/VideosGallary" },
      ]
    },
    { label: "Careers", href: "/Careers" },
    { label: "Contact Us", href: "/contact" }
  ],

  hero: {
    title: "Cultivating Trust, Harvesting Success",
    description: "Premium fertilizers and pesticides for farmers. Trusted agricultural solutions that deliver proven results and sustainable farming practices.",
    primaryCtaText: "Explore Products",
    primaryCtaLink: "/products",
    secondaryCtaText: "View Gallery",
    secondaryCtaLink: "/ImageGallery",
    slides: [
      {
        id: "slide-1",
        title: "Abundant Harvest with Superior Crop Protection",
        subtitle: "Protect your fields from pests and diseases with HYCROP proven agricultural solutions.",
        image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1920&q=80", // Maize field
        cropType: "Maize Crop Protection"
      },
      {
        id: "slide-2",
        title: "Enhancing Quality & Yield in Chilli Farming",
        subtitle: "Advanced fungicides and plant growth regulators tailored for high-value cash crops.",
        image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb231fc?auto=format&fit=crop&w=1920&q=80", // Red Chilli
        cropType: "Red Chilli Management"
      },
      {
        id: "slide-3",
        title: "Sustainable Solutions for Paddy & Cotton",
        subtitle: "Boost soil vitality and crop resilience against adverse weather conditions.",
        image: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?auto=format&fit=crop&w=1920&q=80", // Paddy
        cropType: "Paddy & Cotton Cultivation"
      }
    ]
  },

  stats: [
    { value: "26+", label: "Years of Experience", description: "In agricultural science and crop protection" },
    { value: "500+", label: "Happy Farmers", description: "Trusting HYCROP for their seasonal crops" },
    { value: "50+", label: "Products", description: "Comprehensive range of insecticides, PGRs & fertilizers" },
    { value: "95%", label: "Customer Satisfaction", description: "Repeat satisfaction across South India" }
  ],

  whyChooseUs: {
    title: "Why Choose HYCROP?",
    subtitle: "Trusted by thousands of farmers for reliable agricultural solutions",
    features: [
      {
        id: "feature-1",
        title: "Crop Protection",
        description: "Advanced pesticides and fungicides to protect your crops from diseases and pests.",
        icon: "ShieldCheck"
      },
      {
        id: "feature-2",
        title: "Organic Solutions",
        description: "Eco-friendly and sustainable farming solutions for organic crop production.",
        icon: "Leaf"
      },
      {
        id: "feature-3",
        title: "Yield Enhancement",
        description: "Premium fertilizers designed to maximize crop yield and vitality.",
        icon: "TrendingUp"
      },
      {
        id: "feature-4",
        title: "Farmer Centric Commitment",
        description: "Timely technical assistance and on-field support for optimal dosing and spray timing.",
        icon: "HeartHandshake"
      }
    ]
  },

  about: {
    title: "About HYCROP",
    subtitle: "Cultivating Trust, Harvesting Success. Your Partner in Agricultural Excellence.",
    storyHeading: "Our Story",
    paragraphs: [
      "Founded in 2025, HYCROP Agri Solutions was born from a clear vision to empower farmers with high quality agricultural solutions that truly make a difference. What began as a modest initiative with big aspirations has now grown into a trusted name in the farming community.",
      "From the very beginning, our journey has been guided by a deep commitment to agricultural excellence. By combining scientific innovation, sustainable practices, and a farmer-first approach, we have built strong relationships that go beyond business partnerships rooted in trust and shared growth.",
      "Over the years, HYCROP has evolved into more than just a provider of crop protection and productivity solutions. We have become a partner to thousands of farmers, dedicated to safeguarding their crops, improving yields, and ultimately enhancing their livelihoods.",
      "Today, HYCROP stands as a symbol of trust and progress in agriculture. While the needs of modern farming continue to evolve, our mission remains the same: to deliver innovative, sustainable, and impactful solutions helping farmers achieve healthier crops, higher yields, and a brighter future."
    ],
    vision: "To lead the agricultural sector by providing eco-safe, scientifically proven, and accessible crop solutions that ensure food security and farming prosperity globally.",
    mission: "To provide prompt technical support to farmers, promote bio-friendly products, and build lifelong partnerships through quality, integrity, and sustainable agricultural practices.",
  },

  productCategories: [
    {
      id: "insects",
      name: "Insecticides",
      tagline: "Insect Control Products",
      description: "Effective against biting, chewing, and sucking pests protecting crops at every growth stage.",
      icon: "Bug"
    },
    {
      id: "fungicides",
      name: "Fungicides",
      tagline: "Disease Prevention & Cure",
      description: "Systemic and contact fungicides to cure leaf spot, blast, blight, and powdery mildew.",
      icon: "ShieldAlert"
    },
    {
      id: "herbicides",
      name: "Herbicides",
      tagline: "Weed Control Solutions",
      description: "Selective and non-selective herbicides to keep fields free from yield-depleting weeds.",
      icon: "Scissors"
    },
    {
      id: "pgr",
      name: "Plant Growth Regulators (PGR)",
      tagline: "Growth & Yield Boosters",
      description: "Hormonal and bio-stimulant formulations to stimulate root growth, flowering, and fruit setting.",
      icon: "Sprout"
    },
    {
      id: "bactericide",
      name: "Bactericides",
      tagline: "Bacterial Infection Control",
      description: "Specialized bio-bactericides to prevent bacterial wilt, leaf blight, and stem rot.",
      icon: "Activity"
    }
  ],

  products: [
    // Insecticides
    {
      id: "abasol",
      name: "ABASOL",
      category: "insects",
      categoryLabel: "Insecticides",
      description: "Powerful broad-spectrum insecticide designed for swift knockdown of mites, thrips, and leaf miners.",
      features: ["Rapid translaminar action", "Effective against resistant pest populations", "Safe for beneficial predators when used as directed"],
      crops: ["Chilli", "Cotton", "Tomato", "Brinjal"],
      image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=600&q=80",
      isPopular: true
    },
    {
      id: "arrows",
      name: "ARROWS",
      category: "insects",
      categoryLabel: "Insecticides",
      description: "Highly effective systemic insecticide controlling sucking pests including aphids and whiteflies.",
      features: ["Long residual control (15-20 days)", "Systemic movement throughout foliage", "Low application rate requirement"],
      crops: ["Cotton", "Paddy", "Vegetables"],
      image: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "astron",
      name: "ASTRON",
      category: "insects",
      categoryLabel: "Insecticides",
      description: "Next-generation caterpillar control solution with ovicidal and larvicidal action.",
      features: ["Stops feeding within 2 hours", "Rainfast within 1 hour", "High thermal stability"],
      crops: ["Chilli", "Pulses", "Soybean"],
      image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb231fc?auto=format&fit=crop&w=600&q=80",
      isPopular: true
    },
    {
      id: "cursar",
      name: "CURSAR",
      category: "insects",
      categoryLabel: "Insecticides",
      description: "Dual-action insecticide targeting both lepidopteran caterpillars and sucking insects.",
      features: ["Contact and stomach poison effect", "Enhances plant greening effect", "Wide crop safety margin"],
      crops: ["Maize", "Cotton", "Vegetables"],
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "dentas",
      name: "DENTAS",
      category: "insects",
      categoryLabel: "Insecticides",
      description: "Specialized formulation against brown plant hopper (BPH) and leafhoppers in paddy fields.",
      features: ["Immediate paralyzing action", "Controls adult and nymph stages", "Protects lower stem canopy"],
      crops: ["Paddy", "Sugarcane"],
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "dinotar",
      name: "DINOTAR",
      category: "insects",
      categoryLabel: "Insecticides",
      description: "Fast-acting neonicotinoid insecticide delivering exceptional control over hard-to-kill sucking pests.",
      features: ["High systemic mobility", "Protects emerging new leaves", "Prevents virus transmission by vectors"],
      crops: ["Chilli", "Cotton", "Watermelon"],
      image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=600&q=80"
    },

    // Fungicides
    {
      id: "amigos-top",
      name: "AMIGOS TOP",
      category: "fungicides",
      categoryLabel: "Fungicides",
      description: "Broad-spectrum systemic fungicide combining strobilurin and triazole chemistry for preventive & curative disease control.",
      features: ["Controls sheath blight, blast, and powdery mildew", "Improves grain quality and luster", "Boosts photosynthesis"],
      crops: ["Paddy", "Chilli", "Groundnut", "Tomato"],
      image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=600&q=80",
      isPopular: true
    },
    {
      id: "casador",
      name: "CASADOR",
      category: "fungicides",
      categoryLabel: "Fungicides",
      description: "Premium curative fungicide offering rapid action against anthracnose and fruit rot.",
      features: ["Curative and eradicant properties", "Translaminar movement in tissues", "Improves post-harvest shelf life"],
      crops: ["Chilli", "Mango", "Grapes"],
      image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb231fc?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "claro-m-45",
      name: "CLARO M 45",
      category: "fungicides",
      categoryLabel: "Fungicides",
      description: "Contact multi-site protective fungicide ideal for resistance management programs.",
      features: ["Broad spectrum disease shield", "Provides essential manganese and zinc nutrition", "Cost-effective spray option"],
      crops: ["Potato", "Tomato", "Paddy", "Apples"],
      image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=600&q=80"
    },

    // Herbicides
    {
      id: "barkel",
      name: "BARKEL",
      category: "herbicides",
      categoryLabel: "Herbicides",
      description: "Post-emergence selective herbicide targeting broadleaf weeds and sedges in paddy and sugarcane.",
      features: ["Selective action - safe for main crop", "Absorbed through roots and foliage", "Single spray weed clean out"],
      crops: ["Paddy", "Sugarcane", "Wheat"],
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "glyphor-71",
      name: "GLYPHOR-71",
      category: "herbicides",
      categoryLabel: "Herbicides",
      description: "Non-selective systemic herbicide for total weed control in non-cropped areas and orchard bunds.",
      features: ["Kills deep-rooted perennial weeds", "Translocates down to root systems", "Inactivated upon soil contact"],
      crops: ["Tea plantation", "Orchards", "Non-crop bunds"],
      image: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?auto=format&fit=crop&w=600&q=80"
    },

    // PGR
    {
      id: "hycrop-growth-booster",
      name: "HYCROP Growth Booster",
      category: "pgr",
      categoryLabel: "Plant Growth Regulators",
      description: "Concentrated plant stimulant rich in amino acids, humic substances, and micronutrients for maximum yield.",
      features: ["Increases crop yields by 30-40%", "Stimulates flower retention & fruit setting", "Enhances drought & stress tolerance"],
      crops: ["All Crops", "Cotton", "Chilli", "Vegetables"],
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=600&q=80",
      isPopular: true
    },
    {
      id: "hycrop-organic-plus",
      name: "HYCROP Organic Plus",
      category: "pgr",
      categoryLabel: "Plant Growth Regulators",
      description: "100% bio-organic plant energizer that enriches soil microbial health and root biomass.",
      features: ["100% certified organic base", "Restores degraded soil structures", "Safe for organic export certification"],
      crops: ["Organic Farming", "Horticulture", "Spices"],
      image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=600&q=80"
    },

    // Bactericides
    {
      id: "hytox",
      name: "HYTOX",
      category: "bactericide",
      categoryLabel: "Bactericides",
      description: "Eco-friendly bactericide and bio-defense activator against bacterial leaf blight and soft rot.",
      features: ["Systemic resistance activator", "Compatible with most fungicides", "Non-phytotoxic formula"],
      crops: ["Paddy", "Chilli", "Pomegranate"],
      image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=600&q=80"
    }
  ] as Product[],

  galleryImages: [
    {
      id: "g1",
      title: "Organic Fertilizer Application",
      category: "Fertilizer",
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80",
      description: "Farmers applying HYCROP organic fertilizer for lush crop growth."
    },
    {
      id: "g2",
      title: "Bio Pesticide Protection",
      category: "Protection",
      image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb231fc?auto=format&fit=crop&w=800&q=80",
      description: "Healthy chilli crop thriving after HYCROP insect control treatment."
    },
    {
      id: "g3",
      title: "Compost & Soil Health",
      category: "Soil Health",
      image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80",
      description: "Enriching soil micro-flora with HYCROP organic soil amendments."
    },
    {
      id: "g4",
      title: "Healthy Paddy Field Harvest",
      category: "Harvest",
      image: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?auto=format&fit=crop&w=800&q=80",
      description: "Abundant green paddy field yield in Guntur district."
    },
    {
      id: "g5",
      title: "Farm Field Application",
      category: "Application",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80",
      description: "Field technician demonstrating optimal spray calibration to farmers."
    },
    {
      id: "g6",
      title: "Spraying Equipment Calibration",
      category: "Equipment",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
      description: "Precision spray technique ensuring zero wastage of pesticides."
    }
  ],

  videoGallery: [
    {
      id: "v1",
      title: "HYCROP Growth Booster Field Results in Chilli Crops",
      description: "Watch how farmer Ramesh achieved a 35% higher yield in Guntur using HYCROP Growth Booster.",
      thumbnail: "https://images.unsplash.com/photo-1592417817098-8f3d6eb231fc?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      duration: "03:45"
    },
    {
      id: "v2",
      title: "Effective BPH Control in Paddy Fields with DENTAS",
      description: "Technical demonstration of DENTAS application on brown plant hopper infested paddy fields.",
      thumbnail: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
      duration: "04:20"
    },
    {
      id: "v3",
      title: "Farmer Awareness Campaign & Soil Testing Drive",
      description: "HYCROP team conducting soil health diagnostics and offering free product consultation in Andhra Pradesh.",
      thumbnail: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      duration: "05:10"
    }
  ],

  careers: {
    title: "Careers at HYCROP",
    subtitle: "Join our passionate team and help transform agricultural productivity across India.",
    openings: [
      {
        id: "job-1",
        title: "Field Technical Agronomist",
        location: "Guntur / Vijayawada, Andhra Pradesh",
        type: "Full-Time",
        description: "Provide timely technical support to farmers, inspect crop health, and guide product selection.",
        responsibilities: [
          "Provide technical support to all farmers on a timely basis.",
          "Conduct field diagnostic visits for disease and pest identification.",
          "Demonstrate proper product application techniques and dosage calculations.",
          "Organize farmer group discussions and field trials."
        ],
        requirements: [
          "B.Sc. or M.Sc. in Agriculture / Horticulture.",
          "1-3 years of field experience in crop protection products.",
          "Strong communication skills in Telugu and English.",
          "Two-wheeler driving license required."
        ]
      },
      {
        id: "job-2",
        title: "Bio-Products Campaigning Specialist",
        location: "Kurnool / Rajahmundry, Andhra Pradesh",
        type: "Full-Time",
        description: "Lead field campaigns, dealer promotion drives, and product awareness workshops.",
        responsibilities: [
          "Participation in campaigning and promoting for sale of Bio Products in different areas.",
          "To conduct campaigns and promotions for sale of Bio Products in different areas.",
          "Build relationships with regional agri-dealers and distributor networks.",
          "Collect farmer feedback and yield testimonials."
        ],
        requirements: [
          "Degree or Diploma in Marketing / Agriculture.",
          "Proven track record in agri-input sales and rural promotion drives.",
          "Willingness to travel across rural farming territories."
        ]
      }
    ]
  },

  testimonials: [
    {
      id: "t1",
      name: "Venkat Rao",
      location: "Guntur, Andhra Pradesh",
      crop: "Chilli Farmer",
      quote: "HYCROP Growth Booster completely transformed my chilli field! The flower drop stopped and my harvest quality was top grade.",
      rating: 5
    },
    {
      id: "t2",
      name: "Srinivas Reddy",
      location: "Kurnool, Andhra Pradesh",
      crop: "Paddy Farmer",
      quote: "BPH attack was destroying my paddy last monsoon until the agronomist recommended DENTAS. Within 24 hours, the pests were completely controlled.",
      rating: 5
    },
    {
      id: "t3",
      name: "K. Nageswara Rao",
      location: "Krishna District",
      crop: "Cotton & Maize",
      quote: "We have been buying HYCROP products for 2 seasons now. Reliable quality, genuine advice, and very affordable prices.",
      rating: 5
    }
  ],

  seo: {
    title: "HYCROP - Cultivating Trust, Harvesting Success",
    description: "Premium fertilizers, fungicides, insecticides, and plant growth regulators for farmers. Trusted agricultural solutions that deliver proven results.",
    keywords: "HYCROP, fertilizers, pesticides, fungicides, PGR, Guntur agriculture, plant growth booster, crop protection, bio fertilizers, India farming solutions",
    ogImage: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1200&q=80"
  }
};
