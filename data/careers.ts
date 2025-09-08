export interface JobPosition {
  id: string
  title: string
  titleAr: string
  department: string
  departmentAr: string
  location: string
  locationAr: string
  type: "full-time" | "part-time" | "contract" | "internship"
  typeAr: string
  experience: string
  experienceAr: string
  salary: string
  salaryAr: string
  description: string
  descriptionAr: string
  requirements: string[]
  requirementsAr: string[]
  responsibilities: string[]
  responsibilitiesAr: string[]
  benefits: string[]
  benefitsAr: string[]
  skills: string[]
  skillsAr: string[]
  postedDate: string
  deadline: string
  isActive: boolean
}

export const careersData: JobPosition[] = [
  {
    id: "senior-graphic-designer",
    title: "Senior Graphic Designer",
    titleAr: "مصمم جرافيكي كبير",
    department: "Creative Design",
    departmentAr: "التصميم الإبداعي",
    location: "Cairo, Egypt",
    locationAr: "القاهرة، مصر",
    type: "full-time",
    typeAr: "دوام كامل",
    experience: "3-5 years",
    experienceAr: "3-5 سنوات",
    salary: "Competitive salary + benefits",
    salaryAr: "راتب تنافسي + مزايا",
    description: "We're looking for a talented Senior Graphic Designer to join our creative team. You'll be responsible for creating stunning visual designs for our clients across various industries.",
    descriptionAr: "نبحث عن مصمم جرافيكي كبير موهوب للانضمام إلى فريقنا الإبداعي. ستكون مسؤولاً عن إنشاء تصميمات بصرية مذهلة لعملائنا في مختلف الصناعات.",
    requirements: [
      "Bachelor's degree in Graphic Design or related field",
      "3-5 years of professional design experience",
      "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign)",
      "Strong portfolio showcasing creative work",
      "Experience with brand identity design",
      "Excellent communication and collaboration skills"
    ],
    requirementsAr: [
      "درجة البكالوريوس في التصميم الجرافيكي أو مجال ذي صلة",
      "3-5 سنوات من الخبرة المهنية في التصميم",
      "إتقان Adobe Creative Suite (Photoshop, Illustrator, InDesign)",
      "محفظة قوية تعرض الأعمال الإبداعية",
      "خبرة في تصميم الهوية البصرية",
      "مهارات ممتازة في التواصل والتعاون"
    ],
    responsibilities: [
      "Create compelling visual designs for marketing campaigns",
      "Develop brand identities and style guides",
      "Collaborate with marketing and development teams",
      "Present design concepts to clients",
      "Stay updated with design trends and best practices",
      "Mentor junior designers"
    ],
    responsibilitiesAr: [
      "إنشاء تصميمات بصرية مقنعة للحملات التسويقية",
      "تطوير الهويات البصرية وأدلة النمط",
      "التعاون مع فرق التسويق والتطوير",
      "عرض مفاهيم التصميم للعملاء",
      "البقاء محدثاً بآخر اتجاهات التصميم وأفضل الممارسات",
      "إرشاد المصممين المبتدئين"
    ],
    benefits: [
      "Competitive salary package",
      "Health insurance",
      "Professional development opportunities",
      "Flexible working hours",
      "Remote work options",
      "Creative and collaborative work environment"
    ],
    benefitsAr: [
      "حزمة راتب تنافسية",
      "تأمين صحي",
      "فرص التطوير المهني",
      "ساعات عمل مرنة",
      "خيارات العمل عن بُعد",
      "بيئة عمل إبداعية وتعاونية"
    ],
    skills: [
      "Adobe Creative Suite",
      "Brand Design",
      "Typography",
      "Color Theory",
      "Layout Design",
      "Print Design",
      "Digital Design"
    ],
    skillsAr: [
      "Adobe Creative Suite",
      "تصميم العلامات التجارية",
      "الخطوط",
      "نظرية الألوان",
      "تصميم التخطيط",
      "التصميم للطباعة",
      "التصميم الرقمي"
    ],
    postedDate: "2024-01-15",
    deadline: "2024-02-15",
    isActive: true
  },
  {
    id: "digital-marketing-specialist",
    title: "Digital Marketing Specialist",
    titleAr: "متخصص التسويق الرقمي",
    department: "Digital Marketing",
    departmentAr: "التسويق الرقمي",
    location: "Cairo, Egypt",
    locationAr: "القاهرة، مصر",
    type: "full-time",
    typeAr: "دوام كامل",
    experience: "2-4 years",
    experienceAr: "2-4 سنوات",
    salary: "Competitive salary + performance bonuses",
    salaryAr: "راتب تنافسي + مكافآت الأداء",
    description: "Join our digital marketing team to create and execute innovative marketing campaigns across various digital platforms.",
    descriptionAr: "انضم إلى فريق التسويق الرقمي لإنشاء وتنفيذ حملات تسويقية مبتكرة عبر منصات رقمية مختلفة.",
    requirements: [
      "Bachelor's degree in Marketing or related field",
      "2-4 years of digital marketing experience",
      "Experience with Google Ads, Facebook Ads, and social media platforms",
      "Knowledge of SEO and content marketing",
      "Analytical mindset and data-driven approach",
      "Excellent written and verbal communication skills"
    ],
    requirementsAr: [
      "درجة البكالوريوس في التسويق أو مجال ذي صلة",
      "2-4 سنوات من الخبرة في التسويق الرقمي",
      "خبرة في Google Ads و Facebook Ads ومنصات التواصل الاجتماعي",
      "معرفة بـ SEO والتسويق بالمحتوى",
      "عقلية تحليلية ونهج قائم على البيانات",
      "مهارات ممتازة في التواصل الكتابي والشفهي"
    ],
    responsibilities: [
      "Develop and execute digital marketing strategies",
      "Manage paid advertising campaigns",
      "Create engaging content for social media",
      "Analyze campaign performance and optimize results",
      "Collaborate with creative and content teams",
      "Stay updated with digital marketing trends"
    ],
    responsibilitiesAr: [
      "تطوير وتنفيذ استراتيجيات التسويق الرقمي",
      "إدارة حملات الإعلانات المدفوعة",
      "إنشاء محتوى جذاب لوسائل التواصل الاجتماعي",
      "تحليل أداء الحملات وتحسين النتائج",
      "التعاون مع فرق الإبداع والمحتوى",
      "البقاء محدثاً بآخر اتجاهات التسويق الرقمي"
    ],
    benefits: [
      "Competitive salary with performance bonuses",
      "Health insurance",
      "Professional development budget",
      "Flexible working hours",
      "Remote work options",
      "Dynamic and fast-paced work environment"
    ],
    benefitsAr: [
      "راتب تنافسي مع مكافآت الأداء",
      "تأمين صحي",
      "ميزانية التطوير المهني",
      "ساعات عمل مرنة",
      "خيارات العمل عن بُعد",
      "بيئة عمل ديناميكية وسريعة"
    ],
    skills: [
      "Google Ads",
      "Facebook Ads",
      "Social Media Marketing",
      "SEO",
      "Content Marketing",
      "Analytics",
      "Email Marketing"
    ],
    skillsAr: [
      "Google Ads",
      "Facebook Ads",
      "التسويق عبر وسائل التواصل الاجتماعي",
      "SEO",
      "التسويق بالمحتوى",
      "التحليلات",
      "التسويق عبر البريد الإلكتروني"
    ],
    postedDate: "2024-01-20",
    deadline: "2024-02-20",
    isActive: true
  },
  {
    id: "content-writer",
    title: "Content Writer",
    titleAr: "كاتب محتوى",
    department: "Content Creation",
    departmentAr: "إنشاء المحتوى",
    location: "Remote / Cairo, Egypt",
    locationAr: "عن بُعد / القاهرة، مصر",
    type: "full-time",
    typeAr: "دوام كامل",
    experience: "1-3 years",
    experienceAr: "1-3 سنوات",
    salary: "Competitive salary per word/project",
    salaryAr: "راتب تنافسي لكل كلمة/مشروع",
    description: "We're seeking a creative and skilled content writer to create engaging content for our clients across various industries.",
    descriptionAr: "نبحث عن كاتب محتوى إبداعي وماهر لإنشاء محتوى جذاب لعملائنا في مختلف الصناعات.",
    requirements: [
      "Bachelor's degree in Journalism, Communications, or related field",
      "1-3 years of content writing experience",
      "Excellent writing skills in Arabic and English",
      "Experience with SEO content writing",
      "Ability to research and write on various topics",
      "Strong attention to detail and grammar"
    ],
    requirementsAr: [
      "درجة البكالوريوس في الصحافة أو الاتصالات أو مجال ذي صلة",
      "1-3 سنوات من الخبرة في كتابة المحتوى",
      "مهارات كتابة ممتازة بالعربية والإنجليزية",
      "خبرة في كتابة المحتوى المحسن لمحركات البحث",
      "القدرة على البحث والكتابة في مواضيع مختلفة",
      "اهتمام قوي بالتفاصيل والقواعد النحوية"
    ],
    responsibilities: [
      "Write engaging blog posts and articles",
      "Create website content and product descriptions",
      "Develop social media content",
      "Write email marketing campaigns",
      "Conduct research on various topics",
      "Collaborate with marketing and design teams"
    ],
    responsibilitiesAr: [
      "كتابة مقالات ومدونات جذابة",
      "إنشاء محتوى المواقع ووصف المنتجات",
      "تطوير محتوى وسائل التواصل الاجتماعي",
      "كتابة حملات التسويق عبر البريد الإلكتروني",
      "إجراء البحث في مواضيع مختلفة",
      "التعاون مع فرق التسويق والتصميم"
    ],
    benefits: [
      "Competitive per-word/project rates",
      "Flexible working hours",
      "Remote work options",
      "Creative freedom",
      "Professional development opportunities",
      "Collaborative work environment"
    ],
    benefitsAr: [
      "أسعار تنافسية لكل كلمة/مشروع",
      "ساعات عمل مرنة",
      "خيارات العمل عن بُعد",
      "حرية إبداعية",
      "فرص التطوير المهني",
      "بيئة عمل تعاونية"
    ],
    skills: [
      "Content Writing",
      "SEO Writing",
      "Copywriting",
      "Research",
      "Arabic Writing",
      "English Writing",
      "Social Media Content"
    ],
    skillsAr: [
      "كتابة المحتوى",
      "كتابة SEO",
      "كتابة الإعلانات",
      "البحث",
      "الكتابة بالعربية",
      "الكتابة بالإنجليزية",
      "محتوى وسائل التواصل الاجتماعي"
    ],
    postedDate: "2024-01-25",
    deadline: "2024-02-25",
    isActive: true
  }
]

export const getActiveJobs = (): JobPosition[] => {
  return careersData.filter(job => job.isActive)
}

export const getJobsByDepartment = (department: string): JobPosition[] => {
  return careersData.filter(job => job.department === department && job.isActive)
}

export const getJobById = (id: string): JobPosition | undefined => {
  return careersData.find(job => job.id === id)
}












