// Common Types
export type Language = 'en' | 'ar'
export type Theme = 'light' | 'dark'
export type Direction = 'ltr' | 'rtl'

// Navigation Types
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

// Service Types
export interface Service {
  id: string
  name: string
  nameAr: string
  slug: string
  description: string
  descriptionAr: string
  icon: string
  color: string
  features: string[]
  featuresAr: string[]
  price?: string
  priceAr?: string
  duration?: string
  durationAr?: string
  order: number
}

// Portfolio Types
export interface PortfolioItem {
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
  servicesAr: string[]
  images: string[]
  video?: string
  featured: boolean
  order: number
  results?: {
    increase: string
    increaseAr: string
    metric: string
    metricAr: string
  }
}

// Testimonial Types
export interface Testimonial {
  id: string
  name: string
  nameAr: string
  company: string
  companyAr: string
  position: string
  positionAr: string
  avatar: string
  rating: number
  text: string
  textAr: string
  results: {
    increase: string
    increaseAr: string
    metric: string
    metricAr: string
  }
  serviceId: string
  date: string
  featured: boolean
  order: number
}

// Team Types
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
  social: {
    linkedin?: string
    twitter?: string
    instagram?: string
    github?: string
  }
  featured: boolean
  order: number
}

// Contact Types
export interface ContactInfo {
  id: string
  title: string
  titleAr: string
  value: string
  valueAr: string
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
  order: number
}

// Social Media Types
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

// Career Types
export interface JobPosition {
  id: string
  title: string
  titleAr: string
  department: string
  departmentAr: string
  location: string
  locationAr: string
  type: string
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
  active: boolean
  featured: boolean
  order: number
}

// Success Partner Types
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
    increase: string
    increaseAr: string
    metric: string
    metricAr: string
  }
  services: string[]
  servicesAr: string[]
  testimonial: string
  testimonialAr: string
  featured: boolean
  order: number
}

// Portfolio Result Types
export interface PortfolioResult {
  id: string
  title: string
  titleAr: string
  category: string
  categoryAr: string
  description: string
  descriptionAr: string
  detailedResults: string[]
  detailedResultsAr: string[]
  services: string[]
  servicesAr: string[]
  client: {
    name: string
    nameAr: string
    industry: string
    industryAr: string
  }
  duration: string
  durationAr: string
  images: string[]
  featured: boolean
  order: number
}

// Meta Data Types
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

// Form Types
export interface ContactFormData {
  name: string
  email: string
  phone: string
  company: string
  service: string
  message: string
  budget: string
  timeline: string
}

export interface NewsletterFormData {
  email: string
  name?: string
  interests?: string[]
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
  errors?: Record<string, string[]>
}

// Gallery Types
export interface GalleryItem {
  id: string
  src: string
  title: string
  titleAr: string
  description: string
  descriptionAr: string
  category: string
  categoryAr: string
  type: 'image' | 'video' | 'audio'
  featured: boolean
  order: number
}

export interface GallerySection {
  title: string
  titleAr: string
  items: GalleryItem[]
}

// Company Types
export interface CompanyCard {
  id: string
  name: string
  nameAr: string
  description: string
  descriptionAr: string
  images: string[]
  category: string
  categoryAr: string
}

// Animation Types
export interface AnimationConfig {
  initial: Record<string, any>
  animate: Record<string, any>
  transition: Record<string, any>
  exit?: Record<string, any>
}

// Theme Types
export interface ThemeColors {
  primary: Record<string, string>
  secondary: Record<string, string>
  accent: Record<string, string>
}

// Settings Types
export interface SiteSettings {
  general: {
    siteName: string
    siteNameAr: string
    siteDescription: string
    siteDescriptionAr: string
    siteUrl: string
    siteLogo: string
    siteLogoAr: string
    favicon: string
    defaultLanguage: string
    supportedLanguages: string[]
    timezone: string
    dateFormat: string
    timeFormat: string
  }
  contact: {
    email: string
    phone: string
    whatsapp: string
    address: string
    addressAr: string
    workingHours: string
    workingHoursAr: string
    emergencyContact: string
  }
  socialMedia: Record<string, {
    url: string
    username: string
    enabled: boolean
  }>
  seo: {
    defaultTitle: string
    defaultTitleAr: string
    defaultDescription: string
    defaultDescriptionAr: string
    defaultKeywords: string
    defaultKeywordsAr: string
    ogImage: string
    ogImageAr: string
    twitterCard: string
    twitterHandle: string
    canonicalUrl: string
    robotsTxt: string
  }
  analytics: {
    googleAnalytics: {
      enabled: boolean
      trackingId: string
      anonymizeIp: boolean
      respectDoNotTrack: boolean
    }
    googleTagManager: {
      enabled: boolean
      containerId: string
    }
    facebookPixel: {
      enabled: boolean
      pixelId: string
    }
    hotjar: {
      enabled: boolean
      siteId: string
    }
  }
  performance: {
    imageOptimization: {
      enabled: boolean
      quality: number
      maxWidth: number
      maxHeight: number
      formats: string[]
      lazyLoading: boolean
    }
    caching: {
      enabled: boolean
      maxAge: number
      staleWhileRevalidate: number
    }
    compression: {
      enabled: boolean
      gzip: boolean
      brotli: boolean
    }
    cdn: {
      enabled: boolean
      url: string
    }
  }
  security: {
    https: {
      enabled: boolean
      redirect: boolean
      hsts: boolean
      hstsMaxAge: number
    }
    csp: {
      enabled: boolean
      directives: Record<string, string[]>
    }
    rateLimiting: {
      enabled: boolean
      windowMs: number
      maxRequests: number
    }
  }
  email: {
    smtp: {
      host: string
      port: number
      secure: boolean
      auth: {
        user: string
        pass: string | undefined
      }
    }
    from: {
      name: string
      email: string
    }
    templates: {
      contact: string
      newsletter: string
      quote: string
    }
  }
  payment: {
    stripe: {
      enabled: boolean
      publishableKey: string | undefined
      secretKey: string | undefined
      currency: string
    }
    paypal: {
      enabled: boolean
      clientId: string | undefined
      clientSecret: string | undefined
      mode: string
    }
  }
  content: {
    blog: {
      enabled: boolean
      postsPerPage: number
      featuredPosts: number
      categories: string[]
    }
    portfolio: {
      enabled: boolean
      itemsPerPage: number
      featuredItems: number
      categories: string[]
    }
    testimonials: {
      enabled: boolean
      maxDisplayed: number
      autoRotate: boolean
      rotationInterval: number
    }
    team: {
      enabled: boolean
      maxDisplayed: number
      showSocialLinks: boolean
    }
  }
  features: {
    darkMode: boolean
    rtlSupport: boolean
    multiLanguage: boolean
    search: boolean
    newsletter: boolean
    contactForm: boolean
    portfolioGallery: boolean
    testimonials: boolean
    teamSection: boolean
    blog: boolean
    ecommerce: boolean
    booking: boolean
    chat: boolean
  }
  maintenance: {
    enabled: boolean
    message: string
    messageAr: string
    allowedIps: string[]
    endTime: string | null
  }
}









