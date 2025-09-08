export interface MetaData {
  title: string
  titleAr: string
  description: string
  descriptionAr: string
  keywords: string[]
  keywordsAr: string[]
  ogImage: string
  ogType: string
  canonicalUrl: string
}

export const defaultMetaData: MetaData = {
  title: "iBrand Marketing Agency - Creative Digital Marketing Solutions",
  titleAr: "وكالة iBrand للتسويق - حلول تسويق رقمي إبداعية",
  description: "iBrand Marketing Agency provides comprehensive digital marketing services including visual identity design, graphic design, motion graphics, video editing, content writing, and social media management.",
  descriptionAr: "وكالة iBrand للتسويق تقدم خدمات تسويق رقمي شاملة تشمل تصميم الهوية البصرية والتصميم الجرافيكي والرسوم المتحركة ومونتاج الفيديو وكتابة المحتوى وإدارة وسائل التواصل الاجتماعي.",
  keywords: [
    "digital marketing",
    "brand identity",
    "graphic design",
    "motion graphics",
    "video editing",
    "content writing",
    "social media marketing",
    "marketing agency",
    "creative design",
    "branding",
    "Egypt",
    "Middle East"
  ],
  keywordsAr: [
    "تسويق رقمي",
    "هوية بصرية",
    "تصميم جرافيكي",
    "رسوم متحركة",
    "مونتاج فيديو",
    "كتابة محتوى",
    "تسويق وسائل التواصل الاجتماعي",
    "وكالة تسويق",
    "تصميم إبداعي",
    "علامات تجارية",
    "مصر",
    "الشرق الأوسط"
  ],
  ogImage: "/og-image.jpg",
  ogType: "website",
  canonicalUrl: "https://ibrandmarketingagency.com"
}

export const pageMetaData: Record<string, MetaData> = {
  home: {
    ...defaultMetaData,
    title: "iBrand Marketing Agency - Transform Your Business with Creative Marketing",
    titleAr: "وكالة iBrand للتسويق - حول عملك بالتسويق الإبداعي",
    description: "Transform your business with iBrand's creative marketing solutions. We specialize in visual identity, graphic design, digital marketing, and content creation.",
    descriptionAr: "حول عملك مع حلول التسويق الإبداعية من iBrand. نتخصص في الهوية البصرية والتصميم الجرافيكي والتسويق الرقمي وإنشاء المحتوى.",
    canonicalUrl: "https://ibrandmarketingagency.com"
  },
  about: {
    ...defaultMetaData,
    title: "About iBrand Marketing Agency - Our Story & Team",
    titleAr: "عن وكالة iBrand للتسويق - قصتنا وفريقنا",
    description: "Learn about iBrand Marketing Agency's journey, our talented team, and our commitment to delivering exceptional marketing solutions.",
    descriptionAr: "تعرف على رحلة وكالة iBrand للتسويق وفريقنا الموهوب والتزامنا بتقديم حلول تسويقية استثنائية.",
    canonicalUrl: "https://ibrandmarketingagency.com/about"
  },
  services: {
    ...defaultMetaData,
    title: "Our Services - Comprehensive Marketing Solutions",
    titleAr: "خدماتنا - حلول تسويقية شاملة",
    description: "Explore our comprehensive range of marketing services including visual identity, graphic design, motion graphics, video editing, and content creation.",
    descriptionAr: "استكشف مجموعة خدماتنا التسويقية الشاملة تشمل الهوية البصرية والتصميم الجرافيكي والرسوم المتحركة ومونتاج الفيديو وإنشاء المحتوى.",
    canonicalUrl: "https://ibrandmarketingagency.com/services"
  },
  "visual-identity": {
    ...defaultMetaData,
    title: "Visual Identity Design - Create Memorable Brand Identity",
    titleAr: "تصميم الهوية البصرية - أنشئ هوية بصرية لا تُنسى",
    description: "Create a memorable and professional brand identity with our visual identity design services. Logo design, brand guidelines, and complete brand identity packages.",
    descriptionAr: "أنشئ هوية بصرية لا تُنسى واحترافية مع خدمات تصميم الهوية البصرية. تصميم الشعارات ودليل العلامة التجارية وحزم الهوية البصرية الكاملة.",
    canonicalUrl: "https://ibrandmarketingagency.com/services/visual-identity"
  },
  "graphic-design": {
    ...defaultMetaData,
    title: "Graphic Design Services - Creative Visual Solutions",
    titleAr: "خدمات التصميم الجرافيكي - حلول بصرية إبداعية",
    description: "Professional graphic design services for marketing materials, social media content, print materials, and digital assets.",
    descriptionAr: "خدمات تصميم جرافيكي احترافية للمواد التسويقية ومحتوى وسائل التواصل الاجتماعي والمواد المطبوعة والأصول الرقمية.",
    canonicalUrl: "https://ibrandmarketingagency.com/services/graphic-design"
  },
  "motion-graphics": {
    ...defaultMetaData,
    title: "Motion Graphics - Dynamic Visual Content",
    titleAr: "الرسوم المتحركة - محتوى بصري ديناميكي",
    description: "Create engaging motion graphics and animated content for your marketing campaigns. Professional animation and visual effects.",
    descriptionAr: "أنشئ رسوم متحركة ومحتوى متحرك جذاب لحملاتك التسويقية. رسوم متحركة وتأثيرات بصرية احترافية.",
    canonicalUrl: "https://ibrandmarketingagency.com/services/motion-graphics"
  },
  "video-editing": {
    ...defaultMetaData,
    title: "Video Editing Services - Professional Video Production",
    titleAr: "خدمات مونتاج الفيديو - إنتاج فيديو احترافي",
    description: "Professional video editing and post-production services. Create compelling video content for marketing and social media.",
    descriptionAr: "خدمات مونتاج وإنتاج فيديو احترافية. أنشئ محتوى فيديو مقنع للتسويق ووسائل التواصل الاجتماعي.",
    canonicalUrl: "https://ibrandmarketingagency.com/services/video-editing"
  },
  "content-writing": {
    ...defaultMetaData,
    title: "Content Writing Services - Engaging Copy & Content",
    titleAr: "خدمات كتابة المحتوى - نصوص ومحتوى جذاب",
    description: "Professional content writing services for websites, blogs, social media, and marketing materials. SEO-optimized content that converts.",
    descriptionAr: "خدمات كتابة محتوى احترافية للمواقع والمدونات ووسائل التواصل الاجتماعي والمواد التسويقية. محتوى محسن لمحركات البحث يحقق التحويلات.",
    canonicalUrl: "https://ibrandmarketingagency.com/services/content-writing"
  },
  "sponsored-ads": {
    ...defaultMetaData,
    title: "Sponsored Ads Management - Targeted Advertising",
    titleAr: "إدارة الإعلانات المدفوعة - إعلانات مستهدفة",
    description: "Professional sponsored ads management for Facebook, Instagram, Google Ads, and other platforms. Maximize your ROI with targeted advertising.",
    descriptionAr: "إدارة احترافية للإعلانات المدفوعة على فيسبوك وانستغرام وجوجل أدز ومنصات أخرى. ارفع عائد استثمارك مع الإعلانات المستهدفة.",
    canonicalUrl: "https://ibrandmarketingagency.com/services/sponsored-ads"
  },
  "voiceover": {
    ...defaultMetaData,
    title: "Voiceover Services - Professional Audio Recording",
    titleAr: "خدمات التسجيل الصوتي - تسجيل صوتي احترافي",
    description: "Professional voiceover services in Arabic and English. High-quality audio recording for commercials, videos, and multimedia content.",
    descriptionAr: "خدمات تسجيل صوتي احترافية بالعربية والإنجليزية. تسجيل صوتي عالي الجودة للإعلانات والفيديوهات والمحتوى المتعدد الوسائط.",
    canonicalUrl: "https://ibrandmarketingagency.com/services/voiceover"
  },
  "monthly-management": {
    ...defaultMetaData,
    title: "Monthly Marketing Management - Complete Digital Marketing",
    titleAr: "الإدارة الشهرية للتسويق - تسويق رقمي شامل",
    description: "Complete monthly marketing management services. Social media management, content creation, and ongoing marketing support.",
    descriptionAr: "خدمات إدارة تسويق شهرية شاملة. إدارة وسائل التواصل الاجتماعي وإنشاء المحتوى والدعم التسويقي المستمر.",
    canonicalUrl: "https://ibrandmarketingagency.com/services/monthly-management"
  },
  portfolio: {
    ...defaultMetaData,
    title: "Our Portfolio - Creative Marketing Projects",
    titleAr: "أعمالنا - مشاريع تسويق إبداعية",
    description: "Explore our portfolio of successful marketing projects and creative campaigns. See how we've helped businesses grow and succeed.",
    descriptionAr: "استكشف محفظة أعمالنا من المشاريع التسويقية الناجحة والحملات الإبداعية. شاهد كيف ساعدنا الشركات على النمو والنجاح.",
    canonicalUrl: "https://ibrandmarketingagency.com/portfolio"
  },
  careers: {
    ...defaultMetaData,
    title: "Careers at iBrand - Join Our Creative Team",
    titleAr: "الوظائف في iBrand - انضم إلى فريقنا الإبداعي",
    description: "Join our creative team at iBrand Marketing Agency. Explore career opportunities in marketing, design, and digital media.",
    descriptionAr: "انضم إلى فريقنا الإبداعي في وكالة iBrand للتسويق. استكشف فرص العمل في التسويق والتصميم والوسائط الرقمية.",
    canonicalUrl: "https://ibrandmarketingagency.com/careers"
  },
  contact: {
    ...defaultMetaData,
    title: "Contact iBrand Marketing Agency - Get Started Today",
    titleAr: "اتصل بوكالة iBrand للتسويق - ابدأ اليوم",
    description: "Contact iBrand Marketing Agency for your next project. Get a free consultation and quote for your marketing needs.",
    descriptionAr: "اتصل بوكالة iBrand للتسويق لمشروعك القادم. احصل على استشارة مجانية وعرض سعر لاحتياجاتك التسويقية.",
    canonicalUrl: "https://ibrandmarketingagency.com/contact"
  }
}

export const getMetaData = (page: string): MetaData => {
  return pageMetaData[page] || defaultMetaData
}

export const getPageMetaData = (page: string): MetaData => {
  return pageMetaData[page] || defaultMetaData
}









