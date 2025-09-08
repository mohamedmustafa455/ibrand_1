export interface NavigationItem {
  id: string
  name: string
  nameAr: string
  href: string
  description?: string
  descriptionAr?: string
  icon?: string
  order: number
  children?: NavigationItem[]
}

export const navigationData: NavigationItem[] = [
  {
    id: "home",
    name: "Home",
    nameAr: "الرئيسية",
    href: "/",
    description: "Welcome to iBrand Marketing Agency",
    descriptionAr: "مرحباً بكم في وكالة iBrand للتسويق",
    icon: "Home",
    order: 1
  },
  {
    id: "about",
    name: "About Us",
    nameAr: "من نحن",
    href: "/about",
    description: "Learn more about our company and team",
    descriptionAr: "تعرف على المزيد عن شركتنا وفريقنا",
    icon: "Users",
    order: 2
  },
  {
    id: "services",
    name: "Services",
    nameAr: "الخدمات",
    href: "/services",
    description: "Explore our comprehensive marketing services",
    descriptionAr: "استكشف خدماتنا التسويقية الشاملة",
    icon: "Briefcase",
    order: 3,
    children: [
      {
        id: "visual-identity",
        name: "Visual Identity",
        nameAr: "الهوية البصرية",
        href: "/services/visual-identity",
        order: 1
      },
      {
        id: "graphic-design",
        name: "Graphic Design",
        nameAr: "التصميم الجرافيكي",
        href: "/services/graphic-design",
        order: 2
      },
      {
        id: "motion-graphics",
        name: "Motion Graphics",
        nameAr: "الرسوم المتحركة",
        href: "/services/motion-graphics",
        order: 3
      },
      {
        id: "video-editing",
        name: "Video Editing",
        nameAr: "مونتاج الفيديو",
        href: "/services/video-editing",
        order: 4
      },
      {
        id: "content-writing",
        name: "Content Writing",
        nameAr: "كتابة المحتوى",
        href: "/services/content-writing",
        order: 5
      },
      {
        id: "sponsored-ads",
        name: "Sponsored Ads",
        nameAr: "الإعلانات المدفوعة",
        href: "/services/sponsored-ads",
        order: 6
      },
      {
        id: "voiceover",
        name: "Voiceover",
        nameAr: "التسجيل الصوتي",
        href: "/services/voiceover",
        order: 7
      },
      {
        id: "monthly-management",
        name: "Monthly Management",
        nameAr: "الإدارة الشهرية",
        href: "/services/monthly-management",
        order: 8
      }
    ]
  },
  {
    id: "portfolio",
    name: "Portfolio",
    nameAr: "أعمالنا",
    href: "/portfolio",
    description: "View our latest projects and success stories",
    descriptionAr: "شاهد أحدث مشاريعنا وقصص النجاح",
    icon: "FolderOpen",
    order: 4
  },
  {
    id: "careers",
    name: "Careers",
    nameAr: "الوظائف",
    href: "/careers",
    description: "Join our team and grow with us",
    descriptionAr: "انضم إلى فريقنا ونم معنا",
    icon: "Briefcase",
    order: 5
  },
  {
    id: "contact",
    name: "Contact",
    nameAr: "اتصل بنا",
    href: "/contact",
    description: "Get in touch with us for your next project",
    descriptionAr: "تواصل معنا لمشروعك القادم",
    icon: "Mail",
    order: 6
  }
]

export const footerNavigationData: NavigationItem[] = [
  {
    id: "company",
    name: "Company",
    nameAr: "الشركة",
    href: "#",
    order: 1,
    children: [
      {
        id: "about",
        name: "About Us",
        nameAr: "من نحن",
        href: "/about",
        order: 1
      },
      {
        id: "team",
        name: "Our Team",
        nameAr: "فريقنا",
        href: "/about#team",
        order: 2
      },
      {
        id: "careers",
        name: "Careers",
        nameAr: "الوظائف",
        href: "/careers",
        order: 3
      },
      {
        id: "contact",
        name: "Contact",
        nameAr: "اتصل بنا",
        href: "/contact",
        order: 4
      }
    ]
  },
  {
    id: "services",
    name: "Services",
    nameAr: "الخدمات",
    href: "#",
    order: 2,
    children: [
      {
        id: "visual-identity",
        name: "Visual Identity",
        nameAr: "الهوية البصرية",
        href: "/services/visual-identity",
        order: 1
      },
      {
        id: "graphic-design",
        name: "Graphic Design",
        nameAr: "التصميم الجرافيكي",
        href: "/services/graphic-design",
        order: 2
      },
      {
        id: "motion-graphics",
        name: "Motion Graphics",
        nameAr: "الرسوم المتحركة",
        href: "/services/motion-graphics",
        order: 3
      },
      {
        id: "video-editing",
        name: "Video Editing",
        nameAr: "مونتاج الفيديو",
        href: "/services/video-editing",
        order: 4
      },
      {
        id: "content-writing",
        name: "Content Writing",
        nameAr: "كتابة المحتوى",
        href: "/services/content-writing",
        order: 5
      },
      {
        id: "sponsored-ads",
        name: "Sponsored Ads",
        nameAr: "الإعلانات المدفوعة",
        href: "/services/sponsored-ads",
        order: 6
      },
      {
        id: "voiceover",
        name: "Voiceover",
        nameAr: "التسجيل الصوتي",
        href: "/services/voiceover",
        order: 7
      },
      {
        id: "monthly-management",
        name: "Monthly Management",
        nameAr: "الإدارة الشهرية",
        href: "/services/monthly-management",
        order: 8
      }
    ]
  },
  {
    id: "portfolio",
    name: "Portfolio",
    nameAr: "أعمالنا",
    href: "#",
    order: 3,
    children: [
      {
        id: "all-projects",
        name: "All Projects",
        nameAr: "جميع المشاريع",
        href: "/portfolio",
        order: 1
      },
      {
        id: "case-studies",
        name: "Case Studies",
        nameAr: "دراسات الحالة",
        href: "/portfolio#case-studies",
        order: 2
      },
      {
        id: "success-stories",
        name: "Success Stories",
        nameAr: "قصص النجاح",
        href: "/portfolio#success-stories",
        order: 3
      }
    ]
  },
  {
    id: "support",
    name: "Support",
    nameAr: "الدعم",
    href: "#",
    order: 4,
    children: [
      {
        id: "help-center",
        name: "Help Center",
        nameAr: "مركز المساعدة",
        href: "/help",
        order: 1
      },
      {
        id: "faq",
        name: "FAQ",
        nameAr: "الأسئلة الشائعة",
        href: "/faq",
        order: 2
      },
      {
        id: "privacy-policy",
        name: "Privacy Policy",
        nameAr: "سياسة الخصوصية",
        href: "/privacy",
        order: 3
      },
      {
        id: "terms-of-service",
        name: "Terms of Service",
        nameAr: "شروط الخدمة",
        href: "/terms",
        order: 4
      }
    ]
  }
]

export const getMainNavigation = (): NavigationItem[] => {
  return navigationData.sort((a, b) => a.order - b.order)
}

export const getFooterNavigation = (): NavigationItem[] => {
  return footerNavigationData.sort((a, b) => a.order - b.order)
}

export const getNavigationItemById = (id: string): NavigationItem | undefined => {
  return navigationData.find(item => item.id === id)
}

export const getFooterNavigationItemById = (id: string): NavigationItem | undefined => {
  return footerNavigationData.find(item => item.id === id)
}









