export interface ContentWritingProject {
  id: string
  title: string
  titleAr: string
  description: string
  descriptionAr: string
  category: string
  categoryAr: string
  client: string
  clientAr: string
  duration: string
  durationAr: string
  services: string[]
  images: string[]
  results: {
    metric: string
    metricAr: string
    value: string
    description: string
    descriptionAr: string
  }[]
}

export const contentWritingPortfolio: ContentWritingProject[] = [
  // 1) مصنع هاي براند للملابس - صور 2-4
  {
    id: "high-brand-factory",
    title: "High Brand Clothing Factory",
    titleAr: "مصنع هاي براند للملابس",
    description: "End-to-end content strategy and copywriting to elevate a clothing factory's brand and sales.",
    descriptionAr: "استراتيجية محتوى شاملة وكتابة نصوص لرفع علامة مصنع الملابس وزيادة المبيعات.",
    category: "Clothing & Fashion",
    categoryAr: "الملابس والأزياء",
    client: "High Brand Factory",
    clientAr: "مصنع هاي براند",
    duration: "3 months",
    durationAr: "3 أشهر",
    services: ["Content Strategy", "Copywriting", "Social Media Content"],
    images: [
      "/new/content-writing/slide_2.png",
      "/new/content-writing/slide_3.png",
      "/new/content-writing/slide_4.png"
    ],
    results: [
      {
        metric: "Sales Increase",
        metricAr: "زيادة المبيعات",
        value: "+45%",
        description: "Significant boost in online sales through targeted content",
        descriptionAr: "زيادة كبيرة في المبيعات عبر الإنترنت من خلال المحتوى المستهدف"
      },
      {
        metric: "Engagement Rate",
        metricAr: "معدل التفاعل",
        value: "+78%",
        description: "Higher customer engagement on social media platforms",
        descriptionAr: "تفاعل أعلى للعملاء على منصات التواصل الاجتماعي"
      }
    ]
  },

  // 2) محل كشخة الزين للملابس - صور 5-7
  {
    id: "khashkhat-al-zain-clothing",
    title: "Khashkhat Al Zain Clothing Store",
    titleAr: "محل كشخة الزين للملابس",
    description: "Product copy and social content to drive in-store traffic and online conversions for a clothing retailer.",
    descriptionAr: "كتابة وصف المنتجات ومحتوى سوشيال لزيادة زيارات المتجر والتحويلات عبر الإنترنت لمتجر ملابس.",
    category: "Clothing & Fashion",
    categoryAr: "الملابس والأزياء",
    client: "Khashkhat Al Zain",
    clientAr: "كشخة الزين",
    duration: "4 months",
    durationAr: "4 أشهر",
    services: ["Brand Storytelling", "Social Media Content", "Product Marketing"],
    images: [
      "/new/content-writing/slide_5.png",
      "/new/content-writing/slide_6.png",
      "/new/content-writing/slide_7.png"
    ],
    results: [
      {
        metric: "Brand Awareness",
        metricAr: "الوعي بالعلامة التجارية",
        value: "+65%",
        description: "Increased brand recognition and market visibility",
        descriptionAr: "زيادة في الاعتراف بالعلامة التجارية والرؤية في السوق"
      },
      {
        metric: "Customer Retention",
        metricAr: "الاحتفاظ بالعملاء",
        value: "+52%",
        description: "Improved customer loyalty and repeat purchases",
        descriptionAr: "تحسين ولاء العملاء والمشتريات المتكررة"
      }
    ]
  },

  // 3) مصنع الجزار ستيل - صناعة الحديد والصلب - صور 8-10
  {
    id: "al-jazzar-steel",
    title: "Al Jazzar Steel Factory",
    titleAr: "مصنع الجزار ستيل",
    description: "Technical content and case studies to present steel and iron manufacturing capabilities.",
    descriptionAr: "محتوى تقني ودراسات حالة لعرض قدرات تصنيع الحديد والصلب.",
    category: "Steel & Industrial Manufacturing",
    categoryAr: "صناعة الحديد والصلب",
    client: "Al Jazzar Steel",
    clientAr: "مصنع الجزار ستيل",
    duration: "2 months",
    durationAr: "شهران",
    services: ["Technical Writing", "Case Studies", "Industry Reports"],
    images: [
      "/new/content-writing/slide_8.png",
      "/new/content-writing/slide_9.png",
      "/new/content-writing/slide_10.png"
    ],
    results: [
      {
        metric: "Lead Generation",
        metricAr: "توليد العملاء المحتملين",
        value: "+120%",
        description: "Increased qualified leads through educational content",
        descriptionAr: "زيادة في العملاء المحتملين المؤهلين من خلال المحتوى التعليمي"
      },
      {
        metric: "Industry Authority",
        metricAr: "السلطة في الصناعة",
        value: "+65%",
        description: "Enhanced reputation as industry thought leader",
        descriptionAr: "تعزيز السمعة كقائد فكري في الصناعة"
      }
    ]
  },

  // 4-أ) مكتب العلا للتصدير والنقل الدولي - صور 11-13
  {
    id: "al-ula-export-logistics",
    title: "Al Ula Export & International Logistics",
    titleAr: "مكتب العلا للتصدير والنقل الدولي",
    description: "Content and documentation support for an export and international logistics office.",
    descriptionAr: "محتوى ودعم توثيق لمكتب متخصص في التصدير والنقل الدولي.",
    category: "Export & Logistics",
    categoryAr: "تصدير ونقل",
    client: "Al Ula Logistics",
    clientAr: "مكتب العلا",
    duration: "2 months",
    durationAr: "شهران",
    services: ["International Content", "Logistics Writing", "Trade Documentation"],
    images: [
      "/new/content-writing/slide_11.png",
      "/new/content-writing/slide_12.png",
      "/new/content-writing/slide_13.png"
    ],
    results: [
      {
        metric: "International Reach",
        metricAr: "الوصول الدولي",
        value: "+120%",
        description: "Expanded market presence across key destinations",
        descriptionAr: "توسع الحضور في الأسواق عبر وجهات رئيسية"
      },
      {
        metric: "Export Volume",
        metricAr: "حجم التصدير",
        value: "+60%",
        description: "Increase in monthly export operations",
        descriptionAr: "زيادة في عمليات التصدير الشهرية"
      }
    ]
  },
  // 4-ب) أبو سعد للتصدير والنقل الدولي - صور 14-16
  {
    id: "abu-saad-export-logistics",
    title: "Abu Saad Export & International Logistics",
    titleAr: "أبو سعد للتصدير والنقل الدولي",
    description: "Marketing content and process guides to streamline international shipping and export services.",
    descriptionAr: "محتوى تسويقي وأدلة إجراءات لتبسيط الشحن الدولي وخدمات التصدير.",
    category: "Export & Logistics",
    categoryAr: "تصدير ونقل",
    client: "Abu Saad Logistics",
    clientAr: "أبو سعد",
    duration: "2 months",
    durationAr: "شهران",
    services: ["International Content", "Logistics Writing", "Trade Documentation"],
    images: [
      "/new/content-writing/slide_14.png",
      "/new/content-writing/slide_15.png",
      "/new/content-writing/slide_16.png"
    ],
    results: [
      {
        metric: "International Reach",
        metricAr: "الوصول الدولي",
        value: "+140%",
        description: "New corridors opened and stronger global presence",
        descriptionAr: "فتح ممرات جديدة وتعزيز الحضور العالمي"
      },
      {
        metric: "Export Volume",
        metricAr: "حجم التصدير",
        value: "+70%",
        description: "Higher shipment volume and faster processing",
        descriptionAr: "زيادة حجم الشحنات وتسريع الإجراءات"
      }
    ]
  },

  // 5-أ) مصنع كينج وود لتوريد الخشب - صور 17-19
  {
    id: "king-wood-factory",
    title: "King Wood Factory - Wood Supply",
    titleAr: "مصنع كينج وود لتوريد الخشب",
    description: "Product descriptions and technical content showcasing wood types and supply capabilities.",
    descriptionAr: "وصف المنتجات ومحتوى تقني يستعرض أنواع الخشب وقدرات التوريد.",
    category: "Wood Supply",
    categoryAr: "توريد الخشب",
    client: "King Wood",
    clientAr: "كينج وود",
    duration: "1.5 months",
    durationAr: "شهر ونصف",
    services: ["Product Descriptions", "Craftsmanship Stories", "Design Content"],
    images: [
      "/new/content-writing/slide_17.png",
      "/new/content-writing/slide_18.png",
      "/new/content-writing/slide_19.png"
    ],
    results: [
      {
        metric: "Customer Trust",
        metricAr: "ثقة العملاء",
        value: "+70%",
        description: "Improved trust through detailed specifications",
        descriptionAr: "ثقة أعلى عبر المواصفات التفصيلية"
      },
      {
        metric: "Inbound Leads",
        metricAr: "عملاء محتملون واردون",
        value: "+40%",
        description: "More qualified inquiries from furniture makers",
        descriptionAr: "استفسارات مؤهلة أكثر من صناع الأثاث"
      }
    ]
  },
  // 5-ب) مصنع رضوان للأثاث الخشبي - صور 20-22
  {
    id: "radwan-furniture-factory",
    title: "Radwan Wooden Furniture Factory",
    titleAr: "مصنع رضوان للأثاث الخشبي",
    description: "Story-driven content and product marketing to highlight craftsmanship and finishes.",
    descriptionAr: "محتوى قصصي وتسويق للمنتجات لإبراز الحرفية والتشطيبات.",
    category: "Furniture Manufacturing",
    categoryAr: "صناعة الأثاث",
    client: "Radwan Furniture",
    clientAr: "مصنع رضوان",
    duration: "1.5 months",
    durationAr: "شهر ونصف",
    services: ["Product Descriptions", "Craftsmanship Stories", "Design Content"],
    images: [
      "/new/content-writing/slide_20.png",
      "/new/content-writing/slide_21.png",
      "/new/content-writing/slide_22.png"
    ],
    results: [
      {
        metric: "Customer Trust",
        metricAr: "ثقة العملاء",
        value: "+80%",
        description: "Higher perceived quality and brand preference",
        descriptionAr: "جودة مُدركة أعلى وتفضيل للعلامة"
      },
      {
        metric: "Premium Pricing",
        metricAr: "التسعير الفاخر",
        value: "+25%",
        description: "Better margins from improved positioning",
        descriptionAr: "هوامش أفضل بفضل تحسين التمركز"
      }
    ]
  },

  // 6) شركة الإخوة المتحدون لتجهيز المطابخ - صور 23-25
  {
    id: "united-brothers-kitchens",
    title: "United Brothers - Kitchen Fit-Outs",
    titleAr: "شركة الإخوة المتحدون لتجهيز المطابخ",
    description: "Marketing content and installation guides for a kitchen fit-out and equipment company.",
    descriptionAr: "محتوى تسويقي وأدلة تركيب لشركة تجهيزات ومعدات المطابخ.",
    category: "Kitchen Equipment",
    categoryAr: "معدات المطابخ",
    client: "United Brothers",
    clientAr: "الإخوة المتحدون",
    duration: "2.5 months",
    durationAr: "شهران ونصف",
    services: ["Product Marketing", "Design Content", "Installation Guides"],
    images: [
      "/new/content-writing/slide_23.png",
      "/new/content-writing/slide_24.png",
      "/new/content-writing/slide_25.png"
    ],
    results: [
      {
        metric: "Installation Requests",
        metricAr: "طلبات التركيب",
        value: "+150%",
        description: "More customers requesting professional installation",
        descriptionAr: "المزيد من العملاء يطلبون التركيب الاحترافي"
      },
      {
        metric: "Design Consultations",
        metricAr: "استشارات التصميم",
        value: "+95%",
        description: "Increased demand for design consultation services",
        descriptionAr: "زيادة الطلب على خدمات استشارات التصميم"
      }
    ]
  },

  // السفر والجوازات - صور 26-28
  {
    id: "travel-visa-content",
    title: "United Brothers - Passport & Travel Services",
    titleAr: "شركة الإخوة المتحدون (لتجهيز جوازات السفر والسفر عموماً)",
    description: "Content and service pages for a passports preparation and general travel services provider.",
    descriptionAr: "محتوى وصفحات خدمات لشركة متخصصة في تجهيز جوازات السفر والخدمات العامة للسفر.",
    category: "Travel Services",
    categoryAr: "خدمات السفر",
    client: "United Brothers Travel",
    clientAr: "الإخوة المتحدون للسفر",
    duration: "3 months",
    durationAr: "3 أشهر",
    services: ["Travel Guides", "Visa Information", "Destination Content"],
    images: [
      "/new/content-writing/slide_26.png",
      "/new/content-writing/slide_27.png",
      "/new/content-writing/slide_28.png"
    ],
    results: [
      {
        metric: "Visa Applications",
        metricAr: "طلبات التأشيرة",
        value: "+180%",
        description: "Significant increase in visa application inquiries",
        descriptionAr: "زيادة كبيرة في استفسارات طلبات التأشيرة"
      },
      {
        metric: "Travel Bookings",
        metricAr: "حجوزات السفر",
        value: "+110%",
        description: "More customers booking travel packages",
        descriptionAr: "المزيد من العملاء يحجزون حزم السفر"
      }
    ]
  },

  // الشقق - صورة 29
  {
    id: "apartment-content",
    title: "Apartment & Real Estate",
    titleAr: "الشقق والعقارات",
    description: "Content marketing for real estate companies to showcase properties effectively",
    descriptionAr: "تسويق المحتوى لشركات العقارات لعرض العقارات بفعالية",
    category: "Real Estate",
    categoryAr: "عقارات",
    client: "Premium Properties",
    clientAr: "العقارات الفاخرة",
    duration: "2 months",
    durationAr: "شهران",
    services: ["Property Descriptions", "Real Estate Marketing", "Investment Content"],
    images: [
      "/new/content-writing/slide_29.png"
    ],
    results: [
      {
        metric: "Property Views",
        metricAr: "مشاهدات العقار",
        value: "+220%",
        description: "Increased property listing views and inquiries",
        descriptionAr: "زيادة مشاهدات قوائم العقارات والاستفسارات"
      },
      {
        metric: "Sales Conversion",
        metricAr: "تحويل المبيعات",
        value: "+75%",
        description: "Higher conversion rate from views to sales",
        descriptionAr: "معدل تحويل أعلى من المشاهدات إلى المبيعات"
      }
    ]
  },

  // المطاعم - صور 30-32
  {
    id: "restaurant-content",
    title: "Testy Restaurant",
    titleAr: "مطعم تيستي",
    description: "Content creation for Testy restaurant to attract customers and showcase culinary excellence",
    descriptionAr: "إنشاء محتوى لمطعم تيستي لجذب العملاء وعرض التميز الطهي",
    category: "Food & Beverage",
    categoryAr: "طعام ومشروبات",
    client: "Testy Restaurant",
    clientAr: "مطعم تيستي",
    duration: "3 months",
    durationAr: "3 أشهر",
    services: ["Menu Descriptions", "Food Photography", "Restaurant Marketing"],
    images: [
      "/new/content-writing/slide_30.png",
      "/new/content-writing/slide_31.png",
      "/new/content-writing/slide_32.png"
    ],
    results: [
      {
        metric: "Customer Reservations",
        metricAr: "حجوزات العملاء",
        value: "+160%",
        description: "Significant increase in table reservations",
        descriptionAr: "زيادة كبيرة في حجوزات الطاولات"
      },
      {
        metric: "Social Media Engagement",
        metricAr: "تفاعل وسائل التواصل",
        value: "+200%",
        description: "Higher engagement on food-related content",
        descriptionAr: "تفاعل أعلى على المحتوى المتعلق بالطعام"
      }
    ]
  },
  {
    id: "commander-office",
    title: "Al-Qaed Travel Office",
    titleAr: "مكتب القائد للسفريات",
    description: "Al-Qaed Travel offers safe, organized trips between Egypt and Libya with post-arrival payment and full travel support.",
    descriptionAr: "مكتب القائد للسفريات يوفر رحلات آمنة ومنظمة بين مصر وليبيا مع خدمة الدفع بعد الوصول ودعم كامل لإجراءات السفر.",
    category: "Travel Services",
    categoryAr: "خدمات السفر",
    client: "Al-Qaed Travel",
    clientAr: "مكتب القائد للسفريات",
    duration: "3 months",
    durationAr: "3 أشهر",
    services: ["Menu Descriptions", "Food Photography", "Restaurant Marketing"],
    images: [
      "/new/content-writing/Slide1.png",
      "/new/content-writing/Slide2.png",
      "/new/content-writing/Slide3.png",
      "/new/content-writing/Slide4.png",
      "/new/content-writing/Slide5.png",
      "/new/content-writing/Slide6.png",
      "/new/content-writing/Slide7.png",
      "/new/content-writing/Slide8.png",
      "/new/content-writing/Slide9.png",
      "/new/content-writing/Slide10.png",
      "/new/content-writing/Slide11.png",
      "/new/content-writing/Slide12.png",
      "/new/content-writing/Slide13.png",
      "/new/content-writing/Slide14.png",

      
      
    ],
    results: [
      {
        metric: "Customer Reservations",
        metricAr: "حجوزات العملاء",
        value: "+160%",
        description: "Significant increase in table reservations",
        descriptionAr: "زيادة كبيرة في حجوزات الطاولات"
      },
      {
        metric: "Social Media Engagement",
        metricAr: "تفاعل وسائل التواصل",
        value: "+200%",
        description: "Higher engagement on food-related content",
        descriptionAr: "تفاعل أعلى على المحتوى المتعلق بالطعام"
      }
    ]
  },

  // شركة ibrand - صور 33-38
  {
    id: "ibrand-company-content",
    title: "iBrand Company Profile",
    titleAr: "ملف شركة أي براند",
    description: "Comprehensive content strategy for iBrand company to establish market leadership",
    descriptionAr: "استراتيجية محتوى شاملة لشركة أي براند لترسيخ القيادة في السوق",
    category: "Company Branding",
    categoryAr: "علامة الشركة",
    client: "iBrand Company",
    clientAr: "شركة أي براند",
    duration: "6 months",
    durationAr: "6 أشهر",
    services: ["Company Profile", "Brand Storytelling", "Corporate Communication"],
    images: [
      "/new/content-writing/slide_33.png",
      "/new/content-writing/slide_34.png",
      "/new/content-writing/slide_35.png",
      "/new/content-writing/slide_36.png",
      "/new/content-writing/slide_37.png",
      "/new/content-writing/slide_38.png"
    ],
    results: [
      {
        metric: "Market Position",
        metricAr: "الموقف في السوق",
        value: "Top 3",
        description: "Established as top 3 content writing service provider",
        descriptionAr: "ترسيخ كأفضل 3 مزودي خدمات كتابة المحتوى"
      },
      {
        metric: "Client Retention",
        metricAr: "احتفاظ العملاء",
        value: "+95%",
        description: "Exceptional client retention rate through quality content",
        descriptionAr: "معدل احتفاظ استثنائي بالعملاء من خلال المحتوى عالي الجودة"
      },
      {
        metric: "Industry Recognition",
        metricAr: "الاعتراف بالصناعة",
        value: "+300%",
        description: "Increased industry awards and recognition",
        descriptionAr: "زيادة في جوائز الصناعة والاعتراف"
      }
    ]
  }
]

export default contentWritingPortfolio
