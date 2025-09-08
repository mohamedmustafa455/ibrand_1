export interface SocialLink {
  id: string
  name: string
  nameAr: string
  url: string
  icon: string
  color: string
  description: string
  descriptionAr: string
  order: number
}

export const socialLinksData: SocialLink[] = [
  {
    id: "facebook",
    name: "Facebook",
    nameAr: "فيسبوك",
    url: "https://facebook.com/ibrandmarketingagency",
    icon: "Facebook",
    color: "from-blue-600 to-blue-700",
    description: "Follow us on Facebook for latest updates and news",
    descriptionAr: "تابعنا على فيسبوك للحصول على أحدث التحديثات والأخبار",
    order: 1
  },
  {
    id: "instagram",
    name: "Instagram",
    nameAr: "انستغرام",
    url: "https://instagram.com/ibrandmarketingagency",
    icon: "Instagram",
    color: "from-purple-500 to-pink-500",
    description: "Check out our creative work on Instagram",
    descriptionAr: "شاهد أعمالنا الإبداعية على انستغرام",
    order: 2
  },
  {
    id: "twitter",
    name: "Twitter",
    nameAr: "تويتر",
    url: "https://twitter.com/ibrandmarketing",
    icon: "Twitter",
    color: "from-blue-400 to-blue-500",
    description: "Stay updated with our latest tweets and insights",
    descriptionAr: "ابق على اطلاع مع أحدث التغريدات والرؤى",
    order: 3
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    nameAr: "لينكد إن",
    url: "https://linkedin.com/company/ibrandmarketingagency",
    icon: "Linkedin",
    color: "from-blue-700 to-blue-800",
    description: "Connect with us professionally on LinkedIn",
    descriptionAr: "تواصل معنا مهنياً على لينكد إن",
    order: 4
  },
  {
    id: "youtube",
    name: "YouTube",
    nameAr: "يوتيوب",
    url: "https://youtube.com/@ibrandmarketingagency",
    icon: "Youtube",
    color: "from-red-600 to-red-700",
    description: "Watch our video content and tutorials",
    descriptionAr: "شاهد محتوى الفيديو والدروس التعليمية",
    order: 5
  },
  {
    id: "tiktok",
    name: "TikTok",
    nameAr: "تيك توك",
    url: "https://tiktok.com/@ibrandmarketingagency",
    icon: "Music",
    color: "from-black to-gray-800",
    description: "Follow us on TikTok for creative content",
    descriptionAr: "تابعنا على تيك توك للمحتوى الإبداعي",
    order: 6
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    nameAr: "واتساب",
    url: "https://wa.me/201113039402",
    icon: "MessageCircle",
    color: "from-green-500 to-green-600",
    description: "Contact us directly on WhatsApp",
    descriptionAr: "تواصل معنا مباشرة على واتساب",
    order: 7
  },
  {
    id: "telegram",
    name: "Telegram",
    nameAr: "تليجرام",
    url: "https://t.me/ibrandmarketingagency",
    icon: "Send",
    color: "from-blue-500 to-blue-600",
    description: "Join our Telegram channel for updates",
    descriptionAr: "انضم إلى قناتنا على تليجرام للحصول على التحديثات",
    order: 8
  }
]

export const getSocialLinks = (): SocialLink[] => {
  return socialLinksData.sort((a, b) => a.order - b.order)
}

export const getFeaturedSocialLinks = (count: number = 6): SocialLink[] => {
  return socialLinksData.slice(0, count).sort((a, b) => a.order - b.order)
}

export const getSocialLinkById = (id: string): SocialLink | undefined => {
  return socialLinksData.find(link => link.id === id)
}









