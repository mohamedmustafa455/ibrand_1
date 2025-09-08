export interface ContactInfo {
  id: string
  type: "email" | "phone" | "address" | "social"
  title: string
  titleAr: string
  value: string
  valueAr?: string
  icon: string
  description: string
  descriptionAr: string
  link?: string
  gradient: string
  order: number
}

export interface OfficeLocation {
  id: string
  name: string
  nameAr: string
  address: string
  addressAr: string
  phone: string
  email: string
  hours: string
  hoursAr: string
  coordinates: {
    lat: number
    lng: number
  }
  featured: boolean
}

export const contactInfoData: ContactInfo[] = [
  {
    id: "email",
    type: "email",
    title: "Email Us",
    titleAr: "راسلنا",
    value: "ibrandmarketingagency@gmail.com",
    icon: "Mail",
    description: "We respond within 24 hours",
    descriptionAr: "نرد خلال 24 ساعة",
    link: "mailto:ibrandmarketingagency@gmail.com",
    gradient: "from-blue-500 to-cyan-500",
    order: 1
  },
  {
    id: "phone",
    type: "phone",
    title: "Call Us",
    titleAr: "اتصل بنا",
    value: "+20 111 303 9402",
    icon: "Phone",
    description: "Available Sun-Thu",
    descriptionAr: "متاح من الأحد إلى الخميس",
    link: "tel:+201113039402",
    gradient: "from-green-500 to-emerald-500",
    order: 2
  },
  {
    id: "whatsapp",
    type: "social",
    title: "WhatsApp",
    titleAr: "واتساب",
    value: "+20 111 303 9402",
    icon: "MessageCircle",
    description: "Quick response via WhatsApp",
    descriptionAr: "رد سريع عبر واتساب",
    link: "https://wa.me/201113039402",
    gradient: "from-green-500 to-green-600",
    order: 3
  },
  {
    id: "main-office",
    type: "address",
    title: "Main Office",
    titleAr: "الفرع الرئيسي",
    value: "Egypt - Damietta - New Damietta",
    valueAr: "مصر - دمياط - دمياط الجديدة",
    icon: "MapPin",
    description: "Main Branch",
    descriptionAr: "الفرع الرئيسي",
    gradient: "from-purple-500 to-pink-500",
    order: 4
  }
]

export const officeLocationsData: OfficeLocation[] = [
  {
    id: "main-office",
    name: "Main Office - Egypt",
    nameAr: "الفرع الرئيسي - مصر",
    address: "New Damietta, Damietta Governorate, Egypt",
    addressAr: "دمياط الجديدة، محافظة دمياط، مصر",
    phone: "+20 111 303 9402",
    email: "ibrandmarketingagency@gmail.com",
    hours: "Sunday - Thursday: 9:00 AM - 6:00 PM",
    hoursAr: "الأحد - الخميس: 9:00 صباحاً - 6:00 مساءً",
    coordinates: {
      lat: 31.4167,
      lng: 31.8167
    },
    featured: true
  },
  {
    id: "uae-office",
    name: "UAE Branch",
    nameAr: "الفرع الإماراتي",
    address: "Dubai, United Arab Emirates",
    addressAr: "دبي، الإمارات العربية المتحدة",
    phone: "+971 50 123 4567",
    email: "uae@ibrandmarketingagency.com",
    hours: "Sunday - Thursday: 8:00 AM - 5:00 PM",
    hoursAr: "الأحد - الخميس: 8:00 صباحاً - 5:00 مساءً",
    coordinates: {
      lat: 25.2048,
      lng: 55.2708
    },
    featured: false
  },
  {
    id: "saudi-office",
    name: "Saudi Arabia Branch",
    nameAr: "الفرع السعودي",
    address: "Riyadh, Saudi Arabia",
    addressAr: "الرياض، المملكة العربية السعودية",
    phone: "+966 50 987 6543",
    email: "saudi@ibrandmarketingagency.com",
    hours: "Sunday - Thursday: 8:00 AM - 5:00 PM",
    hoursAr: "الأحد - الخميس: 8:00 صباحاً - 5:00 مساءً",
    coordinates: {
      lat: 24.7136,
      lng: 46.6753
    },
    featured: false
  }
]

export const getContactInfo = (): ContactInfo[] => {
  return contactInfoData.sort((a, b) => a.order - b.order)
}

export const getFeaturedOffices = (): OfficeLocation[] => {
  return officeLocationsData.filter(office => office.featured)
}

export const getAllOffices = (): OfficeLocation[] => {
  return officeLocationsData
}

export const getOfficeById = (id: string): OfficeLocation | undefined => {
  return officeLocationsData.find(office => office.id === id)
}












