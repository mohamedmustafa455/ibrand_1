export interface SuccessPartner {
  id: string
  name: string
  nameAr: string
  logo: string
  industry: string
  industryAr: string
  description: string
  descriptionAr: string
  results: {
    metric: string
    value: string
    metricAr: string
  }[]
  services: string[]
  servicesAr: string[]
  testimonial?: string
  testimonialAr?: string
  website?: string
  featured: boolean
}

export const successPartnersData: SuccessPartner[] = [
  {
    id: "high-brand",
    name: "High Brand",
    nameAr: "هاي براند",
    logo: "/partners/high-brand-logo.png",
    industry: "Fashion & Luxury",
    industryAr: "الأزياء والفخامة",
    description: "Leading luxury fashion brand that achieved remarkable growth through comprehensive brand identity redesign and marketing campaigns.",
    descriptionAr: "علامة أزياء فاخرة رائدة حققت نمواً ملحوظاً من خلال إعادة تصميم شاملة للهوية البصرية والحملات التسويقية.",
    results: [
      { metric: "Brand Recognition", value: "+180%", metricAr: "الاعتراف بالعلامة التجارية" },
      { metric: "Sales Growth", value: "+250%", metricAr: "نمو المبيعات" },
      { metric: "Market Share", value: "+120%", metricAr: "الحصة السوقية" }
    ],
    services: ["Visual Identity", "Graphic Design", "Marketing Campaigns"],
    servicesAr: ["الهوية البصرية", "التصميم الجرافيكي", "الحملات التسويقية"],
    testimonial: "iBrand transformed our brand completely. The results exceeded our expectations.",
    testimonialAr: "قامت iBrand بتحويل علامتنا التجارية بالكامل. النتائج تجاوزت توقعاتنا.",
    featured: true
  },
  {
    id: "king-wood",
    name: "King Wood",
    nameAr: "كينج وود",
    logo: "/partners/king-wood-logo.png",
    industry: "Furniture & Interior Design",
    industryAr: "الأثاث والتصميم الداخلي",
    description: "Premium furniture company that expanded its market reach through strategic marketing and creative design solutions.",
    descriptionAr: "شركة أثاث فاخرة وسعت نطاقها السوقي من خلال التسويق الاستراتيجي وحلول التصميم الإبداعية.",
    results: [
      { metric: "Lead Generation", value: "+400%", metricAr: "توليد العملاء المحتملين" },
      { metric: "Website Traffic", value: "+280%", metricAr: "حركة الموقع" },
      { metric: "Store Visits", value: "+150%", metricAr: "زيارات المتجر" }
    ],
    services: ["Graphic Design", "Digital Marketing", "Content Creation"],
    servicesAr: ["التصميم الجرافيكي", "التسويق الرقمي", "إنشاء المحتوى"],
    testimonial: "The marketing campaign designed by iBrand exceeded our expectations.",
    testimonialAr: "الحملة التسويقية التي صممتها iBrand تجاوزت توقعاتنا.",
    featured: true
  },
  {
    id: "united-brothers",
    name: "United Brothers",
    nameAr: "الاخوة المتحدون",
    logo: "/partners/united-brothers-logo.png",
    industry: "Food & Beverage",
    industryAr: "الطعام والمشروبات",
    description: "Traditional food company that modernized its brand identity and expanded its market presence through innovative marketing strategies.",
    descriptionAr: "شركة طعام تقليدية حديثت هويتها البصرية وسعت وجودها السوقي من خلال استراتيجيات تسويقية مبتكرة.",
    results: [
      { metric: "Market Share", value: "+120%", metricAr: "الحصة السوقية" },
      { metric: "Customer Loyalty", value: "+200%", metricAr: "ولاء العملاء" },
      { metric: "Product Recognition", value: "+180%", metricAr: "الاعتراف بالمنتج" }
    ],
    services: ["Brand Identity", "Packaging Design", "Marketing Campaign"],
    servicesAr: ["الهوية البصرية", "تصميم العبوات", "الحملة التسويقية"],
    testimonial: "iBrand helped us connect with our customers in a meaningful way.",
    testimonialAr: "ساعدتنا iBrand في التواصل مع عملائنا بطريقة هادفة.",
    featured: true
  },
  {
    id: "perfection-seeking",
    name: "Perfection Seeking",
    nameAr: "اتقان المريد",
    logo: "/partners/perfection-seeking-logo.png",
    industry: "Education & Training",
    industryAr: "التعليم والتدريب",
    description: "Educational platform that achieved significant growth through strategic branding and content marketing.",
    descriptionAr: "منصة تعليمية حققت نمواً كبيراً من خلال العلامة التجارية الاستراتيجية والتسويق بالمحتوى.",
    results: [
      { metric: "Student Enrollment", value: "+180%", metricAr: "تسجيل الطلاب" },
      { metric: "Institutional Partnerships", value: "+150%", metricAr: "الشراكات المؤسسية" },
      { metric: "Course Completion", value: "+200%", metricAr: "إكمال الدورات" }
    ],
    services: ["Educational Branding", "Digital Marketing", "Content Creation"],
    servicesAr: ["العلامة التجارية التعليمية", "التسويق الرقمي", "إنشاء المحتوى"],
    testimonial: "The educational branding created by iBrand helped us reach more students.",
    testimonialAr: "العلامة التجارية التعليمية التي أنشأتها iBrand ساعدتنا في الوصول إلى المزيد من الطلاب.",
    featured: true
  },
  {
    id: "al-jazzar",
    name: "Al-Jazzar",
    nameAr: "الجزار",
    logo: "/partners/al-jazzar-logo.png",
    industry: "Food Retail",
    industryAr: "بيع الطعام بالتجزئة",
    description: "Traditional butcher shop that transformed into a modern brand through innovative design and marketing.",
    descriptionAr: "محل جزارة تقليدي تحول إلى علامة تجارية حديثة من خلال التصميم والتسويق المبتكر.",
    results: [
      { metric: "Sales Growth", value: "+150%", metricAr: "نمو المبيعات" },
      { metric: "New Locations", value: "3", metricAr: "مواقع جديدة" },
      { metric: "Customer Base", value: "+200%", metricAr: "قاعدة العملاء" }
    ],
    services: ["Graphic Design", "Brand Identity", "Marketing Materials"],
    servicesAr: ["التصميم الجرافيكي", "الهوية البصرية", "المواد التسويقية"],
    testimonial: "iBrand transformed our traditional shop into a modern brand.",
    testimonialAr: "حولت iBrand متجرنا التقليدي إلى علامة تجارية حديثة.",
    featured: false
  },
  {
    id: "beauty-salon",
    name: "Beauty Salon",
    nameAr: "صالون تجميل",
    logo: "/partners/beauty-salon-logo.png",
    industry: "Beauty & Wellness",
    industryAr: "الجمال والعافية",
    description: "Beauty salon that increased its client base through effective social media marketing and visual branding.",
    descriptionAr: "صالون تجميل زاد قاعدة عملائه من خلال التسويق الفعال عبر وسائل التواصل الاجتماعي والعلامة التجارية البصرية.",
    results: [
      { metric: "Client Base", value: "+200%", metricAr: "قاعدة العملاء" },
      { metric: "Online Engagement", value: "+180%", metricAr: "التفاعل عبر الإنترنت" },
      { metric: "Appointment Bookings", value: "+250%", metricAr: "حجوزات المواعيد" }
    ],
    services: ["Visual Identity", "Social Media Management", "Digital Marketing"],
    servicesAr: ["الهوية البصرية", "إدارة وسائل التواصل الاجتماعي", "التسويق الرقمي"],
    testimonial: "The social media management by iBrand helped us connect with our clients.",
    testimonialAr: "ساعدتنا إدارة وسائل التواصل الاجتماعي من iBrand في التواصل مع عملائنا.",
    featured: false
  },
  {
    id: "makkah-services",
    name: "Makkah Services",
    nameAr: "خدمات مكة",
    logo: "/partners/makkah-services-logo.png",
    industry: "Tourism & Travel",
    industryAr: "السياحة والسفر",
    description: "Tourism services company that expanded its reach through strategic digital marketing and brand development.",
    descriptionAr: "شركة خدمات سياحية وسعت نطاقها من خلال التسويق الرقمي الاستراتيجي وتطوير العلامة التجارية.",
    results: [
      { metric: "Tourist Bookings", value: "+300%", metricAr: "حجوزات السياح" },
      { metric: "Service Inquiries", value: "+220%", metricAr: "استفسارات الخدمات" },
      { metric: "Customer Satisfaction", value: "95%", metricAr: "رضا العملاء" }
    ],
    services: ["Brand Development", "Digital Marketing", "Content Strategy"],
    servicesAr: ["تطوير العلامة التجارية", "التسويق الرقمي", "استراتيجية المحتوى"],
    testimonial: "iBrand helped us reach more tourists and improve our services.",
    testimonialAr: "ساعدتنا iBrand في الوصول إلى المزيد من السياح وتحسين خدماتنا.",
    featured: false
  },
  {
    id: "honey-products",
    name: "Honey Products",
    nameAr: "منتجات العسل",
    logo: "/partners/honey-products-logo.png",
    industry: "Natural Products",
    industryAr: "المنتجات الطبيعية",
    description: "Natural honey products company that achieved market success through attractive packaging design and marketing campaigns.",
    descriptionAr: "شركة منتجات عسل طبيعية حققت نجاحاً سوقياً من خلال تصميم عبوات جذابة والحملات التسويقية.",
    results: [
      { metric: "Product Sales", value: "+180%", metricAr: "مبيعات المنتجات" },
      { metric: "Brand Recognition", value: "+150%", metricAr: "الاعتراف بالعلامة التجارية" },
      { metric: "Export Growth", value: "+200%", metricAr: "نمو التصدير" }
    ],
    services: ["Packaging Design", "Brand Identity", "Marketing Campaigns"],
    servicesAr: ["تصميم العبوات", "الهوية البصرية", "الحملات التسويقية"],
    testimonial: "The packaging design by iBrand made our products stand out in the market.",
    testimonialAr: "جعل تصميم العبوات من iBrand منتجاتنا تبرز في السوق.",
    featured: false
  }
]

export const getFeaturedPartners = (): SuccessPartner[] => {
  return successPartnersData.filter(partner => partner.featured)
}

export const getAllPartners = (): SuccessPartner[] => {
  return successPartnersData
}

export const getPartnersByIndustry = (industry: string): SuccessPartner[] => {
  return successPartnersData.filter(partner => partner.industry === industry)
}

export const getPartnerById = (id: string): SuccessPartner | undefined => {
  return successPartnersData.find(partner => partner.id === id)
}










