export interface PortfolioResult {
  id: string
  title: string
  titleAr: string
  category: string
  categoryAr: string
  description: string
  descriptionAr: string
  results: {
    metric: string
    value: string
    metricAr: string
    description: string
    descriptionAr: string
  }[]
  services: string[]
  servicesAr: string[]
  client: string
  clientAr: string
  duration: string
  durationAr: string
  images: string[]
  featured: boolean
  order: number
}

export const portfolioResultsData: PortfolioResult[] = [
  {
    id: "high-brand-results",
    title: "High Brand Transformation",
    titleAr: "تحول هاي براند",
    category: "Fashion & Luxury",
    categoryAr: "الأزياء والفخامة",
    description: "Complete brand identity redesign and marketing campaign for a luxury fashion brand that achieved remarkable growth.",
    descriptionAr: "إعادة تصميم كاملة للهوية البصرية وحملة تسويقية لعلامة أزياء فاخرة حققت نمواً ملحوظاً.",
    results: [
      {
        metric: "Brand Recognition",
        value: "+180%",
        metricAr: "الاعتراف بالعلامة التجارية",
        description: "Increase in brand awareness and recognition",
        descriptionAr: "زيادة في الوعي والاعتراف بالعلامة التجارية"
      },
      {
        metric: "Sales Growth",
        value: "+250%",
        metricAr: "نمو المبيعات",
        description: "Significant increase in sales revenue",
        descriptionAr: "زيادة كبيرة في إيرادات المبيعات"
      },
      {
        metric: "Market Share",
        value: "+120%",
        metricAr: "الحصة السوقية",
        description: "Expansion in market presence and share",
        descriptionAr: "توسع في الوجود والحصة السوقية"
      }
    ],
    services: ["Visual Identity", "Graphic Design", "Marketing Campaigns"],
    servicesAr: ["الهوية البصرية", "التصميم الجرافيكي", "الحملات التسويقية"],
    client: "High Brand Fashion",
    clientAr: "هاي براند للأزياء",
    duration: "3 months",
    durationAr: "3 أشهر",
    images: [
      "/portfolio/هاي براند/1.jpg",
      "/portfolio/هاي براند/2.jpg",
      "/portfolio/هاي براند/3.jpg",
      "/portfolio/هاي براند/4.jpg"
    ],
    featured: true,
    order: 1
  },
  {
    id: "king-wood-results",
    title: "King Wood Marketing Success",
    titleAr: "نجاح تسويق كينج وود",
    category: "Furniture & Interior Design",
    categoryAr: "الأثاث والتصميم الداخلي",
    description: "Comprehensive marketing campaign for a premium furniture company that expanded its market reach significantly.",
    descriptionAr: "حملة تسويقية شاملة لشركة أثاث فاخرة وسعت نطاقها السوقي بشكل كبير.",
    results: [
      {
        metric: "Lead Generation",
        value: "+400%",
        metricAr: "توليد العملاء المحتملين",
        description: "Dramatic increase in qualified leads",
        descriptionAr: "زيادة كبيرة في العملاء المحتملين المؤهلين"
      },
      {
        metric: "Website Traffic",
        value: "+280%",
        metricAr: "حركة الموقع",
        description: "Substantial growth in website visitors",
        descriptionAr: "نمو كبير في زوار الموقع"
      },
      {
        metric: "Store Visits",
        value: "+150%",
        metricAr: "زيارات المتجر",
        description: "Increased foot traffic to physical stores",
        descriptionAr: "زيادة في حركة المرور للمتاجر الفعلية"
      }
    ],
    services: ["Graphic Design", "Digital Marketing", "Content Creation"],
    servicesAr: ["التصميم الجرافيكي", "التسويق الرقمي", "إنشاء المحتوى"],
    client: "King Wood Furniture",
    clientAr: "كينج وود للأثاث",
    duration: "4 months",
    durationAr: "4 أشهر",
    images: [
      "/portfolio/كينج وود/1.jpg",
      "/portfolio/كينج وود/4.jpg",
      "/portfolio/كينج وود/5.jpg",
      "/portfolio/كينج وود/6.jpg"
    ],
    featured: true,
    order: 2
  },
  {
    id: "united-brothers-results",
    title: "United Brothers Brand Success",
    titleAr: "نجاح علامة الاخوة المتحدون",
    category: "Food & Beverage",
    categoryAr: "الطعام والمشروبات",
    description: "Brand identity and marketing campaign for a traditional food company that modernized its market presence.",
    descriptionAr: "الهوية البصرية والحملة التسويقية لشركة طعام تقليدية حديثت وجودها السوقي.",
    results: [
      {
        metric: "Market Share",
        value: "+120%",
        metricAr: "الحصة السوقية",
        description: "Significant increase in market share",
        descriptionAr: "زيادة كبيرة في الحصة السوقية"
      },
      {
        metric: "Customer Loyalty",
        value: "+200%",
        metricAr: "ولاء العملاء",
        description: "Improved customer retention and loyalty",
        descriptionAr: "تحسين الاحتفاظ بالعملاء والولاء"
      },
      {
        metric: "Product Recognition",
        value: "+180%",
        metricAr: "الاعتراف بالمنتج",
        description: "Enhanced product recognition and awareness",
        descriptionAr: "تحسين الاعتراف والوعي بالمنتج"
      }
    ],
    services: ["Brand Identity", "Packaging Design", "Marketing Campaign"],
    servicesAr: ["الهوية البصرية", "تصميم العبوات", "الحملة التسويقية"],
    client: "United Brothers Food Co.",
    clientAr: "الاخوة المتحدون للطعام",
    duration: "2 months",
    durationAr: "شهران",
    images: [
      "/portfolio/الاخوة المتحدون/1.jpg",
      "/portfolio/الاخوة المتحدون/27.jpg",
      "/portfolio/الاخوة المتحدون/3.jpg",
      "/portfolio/الاخوة المتحدون/4.jpg"
    ],
    featured: true,
    order: 3
  },
  {
    id: "perfection-seeking-results",
    title: "Perfection Seeking Educational Growth",
    titleAr: "نمو اتقان المريد التعليمي",
    category: "Education & Training",
    categoryAr: "التعليم والتدريب",
    description: "Educational platform branding and marketing materials that achieved significant growth in student enrollment.",
    descriptionAr: "العلامة التجارية التعليمية والمواد التسويقية التي حققت نمواً كبيراً في تسجيل الطلاب.",
    results: [
      {
        metric: "Student Enrollment",
        value: "+180%",
        metricAr: "تسجيل الطلاب",
        description: "Dramatic increase in student registrations",
        descriptionAr: "زيادة كبيرة في تسجيل الطلاب"
      },
      {
        metric: "Institutional Partnerships",
        value: "+150%",
        metricAr: "الشراكات المؤسسية",
        description: "Growth in educational partnerships",
        descriptionAr: "نمو في الشراكات التعليمية"
      },
      {
        metric: "Course Completion",
        value: "+200%",
        metricAr: "إكمال الدورات",
        description: "Improved course completion rates",
        descriptionAr: "تحسين معدلات إكمال الدورات"
      }
    ],
    services: ["Educational Branding", "Digital Marketing", "Content Creation"],
    servicesAr: ["العلامة التجارية التعليمية", "التسويق الرقمي", "إنشاء المحتوى"],
    client: "Perfection Seeking Education",
    clientAr: "اتقان المريد للتعليم",
    duration: "3 months",
    durationAr: "3 أشهر",
    images: [
      "/portfolio/اتقان المريد/2.png",
      "/portfolio/اتقان المريد/4.png",
      "/portfolio/اتقان المريد/7.png",
      "/portfolio/اتقان المريد/9.png"
    ],
    featured: true,
    order: 4
  },
  {
    id: "al-jazzar-results",
    title: "Al-Jazzar Modern Transformation",
    titleAr: "التحول الحديث للجزار",
    category: "Food Retail",
    categoryAr: "بيع الطعام بالتجزئة",
    description: "Traditional butcher shop transformation into a modern brand through innovative design and marketing.",
    descriptionAr: "تحول محل جزارة تقليدي إلى علامة تجارية حديثة من خلال التصميم والتسويق المبتكر.",
    results: [
      {
        metric: "Sales Growth",
        value: "+150%",
        metricAr: "نمو المبيعات",
        description: "Significant increase in sales revenue",
        descriptionAr: "زيادة كبيرة في إيرادات المبيعات"
      },
      {
        metric: "New Locations",
        value: "3",
        metricAr: "مواقع جديدة",
        description: "Expansion to new locations",
        descriptionAr: "توسع إلى مواقع جديدة"
      },
      {
        metric: "Customer Base",
        value: "+200%",
        metricAr: "قاعدة العملاء",
        description: "Expansion of customer base",
        descriptionAr: "توسع قاعدة العملاء"
      }
    ],
    services: ["Graphic Design", "Brand Identity", "Marketing Materials"],
    servicesAr: ["التصميم الجرافيكي", "الهوية البصرية", "المواد التسويقية"],
    client: "Al-Jazzar Butcher",
    clientAr: "الجزار للحوم",
    duration: "2 months",
    durationAr: "شهران",
    images: [
      "/portfolio/الجزار/1.jpg",
      "/portfolio/الجزار/2.jpg",
      "/portfolio/الجزار/3.jpg",
      "/portfolio/الجزار/4.jpg"
    ],
    featured: false,
    order: 5
  }
]

export const getFeaturedResults = (): PortfolioResult[] => {
  return portfolioResultsData.filter(result => result.featured).sort((a, b) => a.order - b.order)
}

export const getAllResults = (): PortfolioResult[] => {
  return portfolioResultsData.sort((a, b) => a.order - b.order)
}

export const getResultsByCategory = (category: string): PortfolioResult[] => {
  return portfolioResultsData.filter(result => result.category === category).sort((a, b) => a.order - b.order)
}

export const getResultById = (id: string): PortfolioResult | undefined => {
  return portfolioResultsData.find(result => result.id === id)
}









