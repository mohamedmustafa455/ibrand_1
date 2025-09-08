export interface Testimonial {
  id: string
  name: string
  nameAr: string
  company: string
  companyAr: string
  avatar: string
  rating: number
  text: string
  textAr: string
  resultStats?: {
    metric: string
    value: string
    metricAr: string
  }[]
  service: string
  date: string
}

export const testimonialsData: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Ahmed Hassan",
    nameAr: "أحمد حسن",
    company: "High Brand Fashion",
    companyAr: "هاي براند للأزياء",
    avatar: "/testimonials/ahmed-hassan.jpg",
    rating: 5,
    text: "iBrand transformed our brand identity completely. The new visual design increased our brand recognition by 180% and sales by 250%. Their team is professional, creative, and delivers exceptional results.",
    textAr: "قامت iBrand بتحويل هويتنا البصرية بالكامل. التصميم الجديد زاد من معرفة علامتنا التجارية بنسبة 180% والمبيعات بنسبة 250%. فريقهم محترف ومبدع ويقدم نتائج استثنائية.",
    resultStats: [
      { metric: "Brand Recognition", value: "+180%", metricAr: "الاعتراف بالعلامة التجارية" },
      { metric: "Sales Growth", value: "+250%", metricAr: "نمو المبيعات" }
    ],
    service: "visual-identity",
    date: "2024-01-15"
  },
  {
    id: "testimonial-2",
    name: "Sarah Al-Mahmoud",
    nameAr: "سارة المحمود",
    company: "King Wood Furniture",
    companyAr: "كينج وود للأثاث",
    avatar: "/testimonials/sarah-mahmoud.jpg",
    rating: 5,
    text: "The marketing campaign designed by iBrand exceeded our expectations. We saw a 400% increase in qualified leads and 280% growth in website traffic. Their strategic approach and creative execution are outstanding.",
    textAr: "الحملة التسويقية التي صممتها iBrand تجاوزت توقعاتنا. شهدنا زيادة بنسبة 400% في العملاء المحتملين المؤهلين و280% نمو في زيارات الموقع. نهجهم الاستراتيجي والتنفيذ الإبداعي متميزان.",
    resultStats: [
      { metric: "Lead Generation", value: "+400%", metricAr: "توليد العملاء المحتملين" },
      { metric: "Website Traffic", value: "+280%", metricAr: "حركة الموقع" }
    ],
    service: "graphic-design",
    date: "2024-02-20"
  },
  {
    id: "testimonial-3",
    name: "Mohammed Al-Rashid",
    nameAr: "محمد الراشد",
    company: "United Brothers Food",
    companyAr: "الاخوة المتحدون للطعام",
    avatar: "/testimonials/mohammed-rashid.jpg",
    rating: 5,
    text: "iBrand's content writing and social media management services helped us increase our market share by 120% and improve customer loyalty by 200%. Their content is engaging and drives real results.",
    textAr: "خدمات كتابة المحتوى وإدارة وسائل التواصل الاجتماعي من iBrand ساعدتنا في زيادة حصتنا السوقية بنسبة 120% وتحسين ولاء العملاء بنسبة 200%. محتواهم جذاب ويحقق نتائج حقيقية.",
    resultStats: [
      { metric: "Market Share", value: "+120%", metricAr: "الحصة السوقية" },
      { metric: "Customer Loyalty", value: "+200%", metricAr: "ولاء العملاء" }
    ],
    service: "content-writing",
    date: "2024-03-10"
  },
  {
    id: "testimonial-4",
    name: "Fatima Al-Zahra",
    nameAr: "فاطمة الزهراء",
    company: "Perfection Seeking Education",
    companyAr: "اتقان المريد للتعليم",
    avatar: "/testimonials/fatima-zahra.jpg",
    rating: 5,
    text: "The educational branding and marketing materials created by iBrand helped us increase student enrollment by 180% and grow institutional partnerships by 150%. Their understanding of educational marketing is exceptional.",
    textAr: "العلامة التجارية التعليمية والمواد التسويقية التي أنشأتها iBrand ساعدتنا في زيادة تسجيل الطلاب بنسبة 180% ونمو الشراكات المؤسسية بنسبة 150%. فهمهم للتسويق التعليمي استثنائي.",
    resultStats: [
      { metric: "Student Enrollment", value: "+180%", metricAr: "تسجيل الطلاب" },
      { metric: "Institutional Partnerships", value: "+150%", metricAr: "الشراكات المؤسسية" }
    ],
    service: "visual-identity",
    date: "2024-04-05"
  },
  {
    id: "testimonial-5",
    name: "Omar Al-Khalil",
    nameAr: "عمر الخليل",
    company: "Al-Jazzar Butcher",
    companyAr: "الجزار للحوم",
    avatar: "/testimonials/omar-khalil.jpg",
    rating: 5,
    text: "iBrand's graphic design and marketing materials transformed our traditional butcher shop into a modern brand. We saw a 150% increase in sales and expanded to 3 new locations.",
    textAr: "التصميم الجرافيكي والمواد التسويقية من iBrand حولت محل الجزارة التقليدي إلى علامة تجارية حديثة. شهدنا زيادة بنسبة 150% في المبيعات وتوسعنا إلى 3 مواقع جديدة.",
    resultStats: [
      { metric: "Sales Growth", value: "+150%", metricAr: "نمو المبيعات" },
      { metric: "New Locations", value: "3", metricAr: "مواقع جديدة" }
    ],
    service: "graphic-design",
    date: "2024-05-12"
  },
  {
    id: "testimonial-6",
    name: "Layla Al-Mansouri",
    nameAr: "ليلى المنصوري",
    company: "Beauty Salon",
    companyAr: "صالون تجميل",
    avatar: "/testimonials/layla-mansouri.jpg",
    rating: 5,
    text: "The visual identity and social media management by iBrand helped us increase our client base by 200% and improve our online presence significantly. Their creative approach is exactly what we needed.",
    textAr: "الهوية البصرية وإدارة وسائل التواصل الاجتماعي من iBrand ساعدتنا في زيادة قاعدة عملائنا بنسبة 200% وتحسين وجودنا عبر الإنترنت بشكل كبير. نهجهم الإبداعي هو بالضبط ما نحتاجه.",
    resultStats: [
      { metric: "Client Base", value: "+200%", metricAr: "قاعدة العملاء" },
      { metric: "Online Engagement", value: "+180%", metricAr: "التفاعل عبر الإنترنت" }
    ],
    service: "monthly-management",
    date: "2024-06-18"
  }
]

export const getTestimonialsByService = (serviceId: string): Testimonial[] => {
  return testimonialsData.filter(testimonial => testimonial.service === serviceId)
}

export const getFeaturedTestimonials = (count: number = 6): Testimonial[] => {
  return testimonialsData.slice(0, count)
}












