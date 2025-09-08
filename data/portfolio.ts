export interface PortfolioItem {
  id: string
  title: string
  titleAr: string
  category: string
  categoryAr: string
  description: string
  descriptionAr: string
  images: string[]
  services: string[]
  results: {
    metric: string
    value: string
    description: string
  }[]
  client: string
  duration: string
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "high-brand",
    title: "High Brand Factory",
    titleAr: "مصنع هاي براند للملابس",
    category: "Clothing, Fashion & Luxury Wear",
    categoryAr: "الملابس والأزياء والملابس الفاخرة",
    description: "Complete brand identity redesign and marketing campaign for a luxury fashion factory.",
    descriptionAr: "إعادة تصميم كاملة للهوية البصرية وحملة تسويقية لمصنع أزياء فاخرة.",
    images: [
      "/portfolio/هاي براند/1.jpg",
      "/portfolio/هاي براند/2.jpg", 
      "/portfolio/هاي براند/3.jpg",
      "/portfolio/هاي براند/4.jpg",
      "/portfolio/هاي براند/5(1).jpg",
      "/portfolio/هاي براند/6(1).jpg",
      "/portfolio/هاي براند/7.jpg",
      "/portfolio/هاي براند/8.jpg"
    ],
    services: ["Clothing", "Graphic Design", "Marketing Materials"],
    results: [
      { metric: "Brand Recognition", value: "+180%", description: "Increase in brand recognition" },
      { metric: "Sales Growth", value: "+250%", description: "Increase in sales" }
    ],
    client: "High Brand Fashion Factory",
    duration: "3 months"
  },
  {
    id: "king-wood",
    title: "King Wood Factory",
    titleAr: "مصنع كينج وود",
    category: "Furniture & Interior Design",
    categoryAr: "الأثاث والتصميم الداخلي",
    description: "Comprehensive marketing campaign for a premium furniture factory.",
    descriptionAr: "حملة تسويقية شاملة لمصنع أثاث فاخر.",
    images: [
      "/portfolio/كينج وود/1.jpg",
      "/portfolio/كينج وود/4.jpg",
      "/portfolio/كينج وود/5.jpg",
      "/portfolio/كينج وود/6.jpg",
      "/portfolio/كينج وود/8.jpg",
      "/portfolio/كينج وود/10.jpg",
      "/portfolio/كينج وود/11.jpg",
      "/portfolio/كينج وود/12.jpg"
    ],
    services: ["Product Photography", "Catalog Design", "Digital Marketing"],
    results: [
      { metric: "Lead Generation", value: "+400%", description: "Increase in qualified leads" },
      { metric: "Website Traffic", value: "+280%", description: "Increase in website visitors" }
    ],
    client: "King Wood Furniture Factory",
    duration: "4 months"
  },
  {
    id: "united-brothers",
    title: "United Brothers Factory",
    titleAr: "مصنع الإخوة المتحدون",
    category: "Kitchen Equipment & Food Solutions",
    categoryAr: "تجهيز المطابخ وحلول الطعام",
    description: "Brand identity and marketing campaign for a kitchen factory.",
    descriptionAr: "الهوية البصرية والحملة التسويقية لمصنع مطابخ.",
    images: [
      "/portfolio/الاخوة المتحدون/1.jpg",
      "/portfolio/الاخوة المتحدون/27.jpg",
      "/portfolio/الاخوة المتحدون/3.jpg",
      "/portfolio/الاخوة المتحدون/4.jpg",
      "/portfolio/الاخوة المتحدون/HPL 2.jpg",
      "/portfolio/الاخوة المتحدون/POLY LAC.jpg"
    ],
    services: ["Brand Identity", "Packaging Design", "Marketing Campaign"],
    results: [
      { metric: "Market Share", value: "+120%", description: "Increase in market share" },
      { metric: "Customer Loyalty", value: "+200%", description: "Improvement in customer loyalty" }
    ],
    client: "United Brothers Kitchen Factory",
    duration: "2 months"
  },
  {
    id: "perfection-seeking",
    title: "Perfection Seeking Academy",
    titleAr: "أكاديمية إتقان المريد",
    category: "Qur'an Education & Memorization",
    categoryAr: "تعليم وتحفيظ القرآن الكريم",
    description: "Educational platform branding and marketing materials for Islamic studies academy.",
    descriptionAr: "علامة تجارية لمنصة تعليمية ومواد تسويقية لأكاديمية العلوم الشرعية.",
    images: [
      "/portfolio/اتقان المريد/2.png",
      "/portfolio/اتقان المريد/4.png",
      "/portfolio/اتقان المريد/7.png",
      "/portfolio/اتقان المريد/9.png",
      "/portfolio/اتقان المريد/13.png",
      "/portfolio/اتقان المريد/16.png"
    ],
    services: ["Educational Branding", "Digital Marketing", "Content Creation"],
    results: [
      { metric: "Student Enrollment", value: "+180%", description: "Increase in student enrollment" },
      { metric: "Institution Partnerships", value: "+150%", description: "Growth in institutional partnerships" }
    ],
    client: "Perfection Seeking Islamic Academy",
    duration: "3 months"
  },
  {
    id: "abu-saad",
    title: "Abu Saad International Trading Company",
    titleAr: "شركة أبو سعد للتصدير والنقل الدولي",
    category: "Export, Import & International Transport",
    categoryAr: "التصدير والاستيراد والنقل الدولي",
    description: "Branding and marketing campaign for an export, import, and international transport company.",
    descriptionAr: "الهوية البصرية وحملة تسويقية لشركة تعمل في التصدير والاستيراد والنقل الدولي.",
    images: [
      "/portfolio/أبو سعد/1.png",
      "/portfolio/أبو سعد/2.png",
      "/portfolio/أبو سعد/3.png",
      "/portfolio/أبو سعد/5.png",
      "/portfolio/أبو سعد/6.png",
      "/portfolio/أبو سعد/9.png"
    ],
    services: ["Export", "Digital Campaigns", "Logistics Marketing"],
    results: [
      { metric: "Property Sales", value: "+220%", description: "Increase in property sales" },
      { metric: "Client Acquisition", value: "+180%", description: "Growth in client acquisition" }
    ],
    client: "Abu Saad International Trading Company",
    duration: "4 months"
  },
  {
    id: "elegant-beauty",
    title: "Kashkha Al-Zain store",
    titleAr: "كشخة الزين",
    category: "Fashion & Cosmetics",
    categoryAr: "الأزياء ومستحضرات التجميل",
    description: "Beauty and cosmetics brand identity design for women's clothing boutique.",
    descriptionAr: "تصميم هوية بصرية لعلامة تجارية في مجال الجمال ومستحضرات التجميل.",
    images: [
      "/portfolio/كشخة الزين/1.jpg",
      "/portfolio/كشخة الزين/2تصميم كشخة الزين .png",
      "/portfolio/كشخة الزين/3تصميم كشخة الزين .png",
      "/portfolio/كشخة الزين/4تصميم كشخة الزين  (1).png",
      "/portfolio/كشخة الزين/5تصميم كشخة الزين .png"
    ],
    services: ["Fashion Branding", "ready-to-wear", "Fashion Marketing"],
    results: [
      { metric: "Product Sales", value: "+300%", description: "Increase in product sales" },
      { metric: "Social Media Engagement", value: "+450%", description: "Growth in social media engagement" }
    ],
    client: "Kashkha Al-Zain store",
    duration: "3 months"
  },
  {
    id: "radwan",
    title: "Radwan Furniture Factory",
    titleAr: "مصنع رضوان للأثاث",
    category: "Wooden Furniture",
    categoryAr: "الأثاث الخشبي",
    description: "Comprehensive wooden furniture factory presentation and marketing visuals that highlight craftsmanship, textures, and product variety.",
    descriptionAr: "عرض شامل لمصنع الأثاث الخشبي مع تصاميم تسويقية تُبرز الحرفية وجودة الخامات وتنوع المنتجات.",
    images: [
      "/portfolio/رضوان/1.jpg",
      "/portfolio/رضوان/13.jpg",
      "/portfolio/رضوان/40.jpg",
      "/portfolio/رضوان/42.jpg",
      "/portfolio/رضوان/2- .png",
      "/portfolio/رضوان/4- .png"
    ],
    services: ["Wood Furniture Branding", "Catalog Design", "Digital Marketing"],
    results: [
      { metric: "Customer Retention", value: "+200%", description: "Improvement in customer retention" },
      { metric: "Daily Sales", value: "+180%", description: "Increase in daily sales" }
    ],
    client: "Radwan Furniture Factory",
    duration: "2 months"
  },
  {
    id: "testy",
    title: "Testy Restaurant",
    titleAr: "مطعم تيستي",
    category: "Food Delivery & Restaurants",
    categoryAr: "توصيل الطعام والمطاعم",
    description: "Food delivery and restaurant branding for pizza and fast food restaurant.",
    descriptionAr: "علامة تجارية لتوصيل الطعام والمطاعم.",
    images: [
      "/portfolio/تيستي/13.jpg",
      "/portfolio/تيستي/15.jpg",
      "/portfolio/تيستي/16.jpg",
      "/portfolio/تيستي/17.jpg",
      "/portfolio/تيستي/18.jpg",
      "/portfolio/تيستي/19.jpg"
    ],
    services: ["Food Delivery Branding", "Digital Marketing", "App Design"],
    results: [
      { metric: "Order Volume", value: "+250%", description: "Increase in order volume" },
      { metric: "Customer Satisfaction", value: "95%", description: "High customer satisfaction rate" }
    ],
    client: "Testy Restaurant",
    duration: "3 months"
  },
  {
    id: "journey-start",
    title: "Journey Start Academy",
    titleAr: "أكاديمية بداية مشوارك",
    category: "Education & Career Development",
    categoryAr: "التعليم وتطوير المهن",
    description: "Career development and educational platform branding for special needs children academy.",
    descriptionAr: "علامة تجارية لمنصة تطوير المهن والتعليم لأكاديمية أطفال ذوي الهمم.",
    images: [
      "/portfolio/بداية مشوارك/2.png",
      "/portfolio/بداية مشوارك/3.png",
      "/portfolio/بداية مشوارك/4.png",
      "/portfolio/بداية مشوارك/هينزل عندنا .png"
    ],
    services: ["Career Development Branding", "Educational Content", "Digital Marketing"],
    results: [
      { metric: "Career Placements", value: "+180%", description: "Increase in successful career placements" },
      { metric: "Student Success", value: "+220%", description: "Improvement in student success rates" }
    ],
    client: "Journey Start Academy",
    duration: "4 months"
  },
  {
    id: "maktab-al-safwa",
    title: "Al-Safwa Engineering Consultancy Office",
    titleAr: "مكتب الصفوة للاستشارات الهندسية",
    category: "Engineering Consultancy & Architecture",
    categoryAr: "الاستشارات الهندسية والمعمارية",
    description: "Complete visual identity design for an engineering consultancy office specializing in architectural projects, concrete site supervision, and finishing works in Aswan.",
    descriptionAr: "تصميم هوية بصرية شاملة لمكتب استشارات هندسية متخصص في المشاريع المعمارية والإشراف على المواقع الخرسانية وأعمال التشطيبات في أسوان.",
    images: [
      "/portfolio/مكتب الصفوة/1.png",
      "/portfolio/مكتب الصفوة/2.png",
      "/portfolio/مكتب الصفوة/3.png",
      "/portfolio/مكتب الصفوة/4.png",
      "/portfolio/مكتب الصفوة/5.png",
      "/portfolio/مكتب الصفوة/6.png",
      "/portfolio/مكتب الصفوة/7.png",
      "/portfolio/مكتب الصفوة/8.png",
      "/portfolio/مكتب الصفوة/9.png",
      "/portfolio/مكتب الصفوة/10.png",
      "/portfolio/مكتب الصفوة/11.jpg",
      "/portfolio/مكتب الصفوة/12.png",
      "/portfolio/مكتب الصفوة/13.png",
      "/portfolio/مكتب الصفوة/14.png",
      "/portfolio/مكتب الصفوة/15.jpg",
      "/portfolio/مكتب الصفوة/16.png",
      "/portfolio/مكتب الصفوة/17.jpg",
      "/portfolio/مكتب الصفوة/18.jpg"
    ],
    services: ["Visual Identity", "Brand Design", "Engineering Branding"],
    results: [
      { metric: "Professional Recognition", value: "+200%", description: "Increase in professional recognition" },
      { metric: "Client Trust", value: "+180%", description: "Improvement in client trust and credibility" }
    ],
    client: "Al-Safwa Engineering Consultancy Office",
    duration: "2 months"
  }

  
]

export function getPortfolioByCategory(category: string): PortfolioItem[] {
  return portfolioData.filter(item => item.category === category || item.categoryAr === category)
}

export function getPortfolioById(id: string): PortfolioItem | undefined {
  return portfolioData.find(item => item.id === id)
}

export function getAllPortfolioCategories(): string[] {
  const categories = new Set<string>()
  portfolioData.forEach(item => {
    categories.add(item.category)
    categories.add(item.categoryAr)
  })
  return Array.from(categories)
}
