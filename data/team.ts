export interface TeamMember {
  id: string
  name: string
  nameAr: string
  position: string
  positionAr: string
  department: string
  departmentAr: string
  avatar: string
  bio: string
  bioAr: string
  skills: string[]
  skillsAr: string[]
  experience: string
  experienceAr: string
  education: string
  educationAr: string
  socialLinks?: {
    linkedin?: string
    twitter?: string
    instagram?: string
    portfolio?: string
  }
  featured: boolean
  order: number
}

export const teamData: TeamMember[] = [
  {
    id: "mohamed-sarhan",
    name: "Mohamed Sarhan",
    nameAr: "محمد سرحان",
    position: "Founder & CEO",
    positionAr: "المؤسس والرئيس التنفيذي",
    department: "Leadership",
    departmentAr: "القيادة",
    avatar: "/team/mohamed-sarhan.jpg",
    bio: "Visionary leader with over 8 years of experience in digital marketing and brand development. Founded iBrand with the mission to transform businesses through creative marketing solutions.",
    bioAr: "قائد رؤيوي مع أكثر من 8 سنوات من الخبرة في التسويق الرقمي وتطوير العلامات التجارية. أسس iBrand بهدف تحويل الأعمال من خلال حلول التسويق الإبداعية.",
    skills: ["Strategic Planning", "Brand Development", "Digital Marketing", "Team Leadership"],
    skillsAr: ["التخطيط الاستراتيجي", "تطوير العلامات التجارية", "التسويق الرقمي", "قيادة الفريق"],
    experience: "8+ years",
    experienceAr: "8+ سنوات",
    education: "Bachelor's in Marketing & Business Administration",
    educationAr: "بكالوريوس في التسويق وإدارة الأعمال",
    socialLinks: {
      linkedin: "https://linkedin.com/in/mohamed-sarhan",
      twitter: "https://twitter.com/mohamed_sarhan",
      portfolio: "https://mohamed-sarhan.vercel.app"
    },
    featured: true,
    order: 1
  },
  {
    id: "ahmed-hassan",
    name: "Ahmed Hassan",
    nameAr: "أحمد حسن",
    position: "Creative Director",
    positionAr: "المدير الإبداعي",
    department: "Creative Design",
    departmentAr: "التصميم الإبداعي",
    avatar: "/team/ahmed-hassan.jpg",
    bio: "Award-winning creative director with expertise in brand identity design, visual communication, and creative strategy. Leads our design team to deliver exceptional creative solutions.",
    bioAr: "مدير إبداعي حائز على جوائز مع خبرة في تصميم الهوية البصرية والتواصل البصري والاستراتيجية الإبداعية. يقود فريق التصميم لتقديم حلول إبداعية استثنائية.",
    skills: ["Brand Design", "Visual Identity", "Creative Strategy", "Adobe Creative Suite"],
    skillsAr: ["تصميم العلامات التجارية", "الهوية البصرية", "الاستراتيجية الإبداعية", "Adobe Creative Suite"],
    experience: "6+ years",
    experienceAr: "6+ سنوات",
    education: "Bachelor's in Graphic Design",
    educationAr: "بكالوريوس في التصميم الجرافيكي",
    socialLinks: {
      linkedin: "https://linkedin.com/in/ahmed-hassan",
      portfolio: "https://ahmed-hassan.design"
    },
    featured: true,
    order: 2
  },
  {
    id: "sarah-mahmoud",
    name: "Sarah Mahmoud",
    nameAr: "سارة محمود",
    position: "Digital Marketing Manager",
    positionAr: "مدير التسويق الرقمي",
    department: "Digital Marketing",
    departmentAr: "التسويق الرقمي",
    avatar: "/team/sarah-mahmoud.jpg",
    bio: "Results-driven digital marketing expert specializing in paid advertising, social media marketing, and conversion optimization. Delivers measurable ROI for our clients.",
    bioAr: "خبيرة تسويق رقمي تركز على النتائج متخصصة في الإعلانات المدفوعة والتسويق عبر وسائل التواصل الاجتماعي وتحسين التحويلات. تحقق عائد استثمار قابل للقياس لعملائنا.",
    skills: ["Google Ads", "Facebook Ads", "Social Media Marketing", "Conversion Optimization"],
    skillsAr: ["Google Ads", "Facebook Ads", "التسويق عبر وسائل التواصل الاجتماعي", "تحسين التحويلات"],
    experience: "5+ years",
    experienceAr: "5+ سنوات",
    education: "Master's in Digital Marketing",
    educationAr: "ماجستير في التسويق الرقمي",
    socialLinks: {
      linkedin: "https://linkedin.com/in/sarah-mahmoud",
      twitter: "https://twitter.com/sarah_mahmoud"
    },
    featured: true,
    order: 3
  },
  {
    id: "omar-khalil",
    name: "Omar Khalil",
    nameAr: "عمر خليل",
    position: "Senior Graphic Designer",
    positionAr: "مصمم جرافيكي كبير",
    department: "Creative Design",
    departmentAr: "التصميم الإبداعي",
    avatar: "/team/omar-khalil.jpg",
    bio: "Talented graphic designer with a passion for creating visually stunning designs that communicate brand messages effectively. Specializes in print and digital design.",
    bioAr: "مصمم جرافيكي موهوب مع شغف بإنشاء تصميمات بصرية مذهلة تنقل رسائل العلامات التجارية بفعالية. متخصص في التصميم للطباعة والرقمي.",
    skills: ["Adobe Creative Suite", "Typography", "Layout Design", "Print Design"],
    skillsAr: ["Adobe Creative Suite", "الخطوط", "تصميم التخطيط", "التصميم للطباعة"],
    experience: "4+ years",
    experienceAr: "4+ سنوات",
    education: "Bachelor's in Visual Arts",
    educationAr: "بكالوريوس في الفنون البصرية",
    socialLinks: {
      linkedin: "https://linkedin.com/in/omar-khalil",
      portfolio: "https://omar-khalil.design"
    },
    featured: false,
    order: 4
  },
  {
    id: "fatima-zahra",
    name: "Fatima Zahra",
    nameAr: "فاطمة الزهراء",
    position: "Content Writer",
    positionAr: "كاتبة محتوى",
    department: "Content Creation",
    departmentAr: "إنشاء المحتوى",
    avatar: "/team/fatima-zahra.jpg",
    bio: "Skilled content writer with expertise in creating engaging, SEO-optimized content that drives traffic and conversions. Fluent in Arabic and English.",
    bioAr: "كاتبة محتوى ماهرة مع خبرة في إنشاء محتوى جذاب ومحسن لمحركات البحث يدفع حركة المرور والتحويلات. تتحدث العربية والإنجليزية بطلاقة.",
    skills: ["Content Writing", "SEO Writing", "Copywriting", "Content Strategy"],
    skillsAr: ["كتابة المحتوى", "كتابة SEO", "كتابة الإعلانات", "استراتيجية المحتوى"],
    experience: "3+ years",
    experienceAr: "3+ سنوات",
    education: "Bachelor's in Journalism",
    educationAr: "بكالوريوس في الصحافة",
    socialLinks: {
      linkedin: "https://linkedin.com/in/fatima-zahra",
      twitter: "https://twitter.com/fatima_zahra"
    },
    featured: false,
    order: 5
  },
  {
    id: "ali-ibrahim",
    name: "Ali Ibrahim",
    nameAr: "علي إبراهيم",
    position: "Motion Graphics Designer",
    positionAr: "مصمم الرسوم المتحركة",
    department: "Creative Design",
    departmentAr: "التصميم الإبداعي",
    avatar: "/team/ali-ibrahim.jpg",
    bio: "Creative motion graphics designer specializing in creating dynamic visual content for digital marketing campaigns and brand storytelling.",
    bioAr: "مصمم رسوم متحركة إبداعي متخصص في إنشاء محتوى بصري ديناميكي للحملات التسويقية الرقمية وسرد العلامات التجارية.",
    skills: ["After Effects", "Motion Graphics", "Video Editing", "Animation"],
    skillsAr: ["After Effects", "الرسوم المتحركة", "مونتاج الفيديو", "الرسوم المتحركة"],
    experience: "3+ years",
    experienceAr: "3+ سنوات",
    education: "Bachelor's in Animation",
    educationAr: "بكالوريوس في الرسوم المتحركة",
    socialLinks: {
      linkedin: "https://linkedin.com/in/ali-ibrahim",
      portfolio: "https://ali-ibrahim.motion"
    },
    featured: false,
    order: 6
  }
]

export const getFeaturedTeam = (): TeamMember[] => {
  return teamData.filter(member => member.featured).sort((a, b) => a.order - b.order)
}

export const getAllTeam = (): TeamMember[] => {
  return teamData.sort((a, b) => a.order - b.order)
}

export const getTeamByDepartment = (department: string): TeamMember[] => {
  return teamData.filter(member => member.department === department).sort((a, b) => a.order - b.order)
}

export const getTeamMemberById = (id: string): TeamMember | undefined => {
  return teamData.find(member => member.id === id)
}









