// Site Settings
export const SITE_SETTINGS = {
  // General Settings
  general: {
    siteName: "iBrand Marketing Agency",
    siteNameAr: "وكالة iBrand للتسويق",
    siteDescription: "Creative Digital Marketing Solutions",
    siteDescriptionAr: "حلول تسويق رقمي إبداعية",
    siteUrl: "https://ibrandmarketingagency.com",
    siteLogo: "/logo.png",
    siteLogoAr: "/logo-ar.png",
    favicon: "/favicon.ico",
    defaultLanguage: "en",
    supportedLanguages: ["en", "ar"],
    timezone: "Africa/Cairo",
    dateFormat: "DD/MM/YYYY",
    timeFormat: "HH:mm"
  },

  // Contact Settings
  contact: {
    email: "ibrandmarketingagency@gmail.com",
    phone: "+20 111 303 9402",
    whatsapp: "+20 111 303 9402",
    address: "Egypt - Damietta - New Damietta",
    addressAr: "مصر - دمياط - دمياط الجديدة",
    workingHours: "Sunday - Thursday: 9:00 AM - 6:00 PM",
    workingHoursAr: "الأحد - الخميس: 9:00 صباحاً - 6:00 مساءً",
    emergencyContact: "+20 111 303 9402"
  },

  // Social Media Settings
  socialMedia: {
    facebook: {
      url: "https://facebook.com/ibrandmarketingagency",
      username: "@ibrandmarketingagency",
      enabled: true
    },
    instagram: {
      url: "https://instagram.com/ibrandmarketingagency",
      username: "@ibrandmarketingagency",
      enabled: true
    },
    twitter: {
      url: "https://twitter.com/ibrandmarketing",
      username: "@ibrandmarketing",
      enabled: true
    },
    linkedin: {
      url: "https://linkedin.com/company/ibrandmarketingagency",
      username: "ibrandmarketingagency",
      enabled: true
    },
    youtube: {
      url: "https://youtube.com/@ibrandmarketingagency",
      username: "@ibrandmarketingagency",
      enabled: true
    },
    tiktok: {
      url: "https://tiktok.com/@ibrandmarketingagency",
      username: "@ibrandmarketingagency",
      enabled: true
    },
    whatsapp: {
      url: "https://wa.me/201113039402",
      number: "+20 111 303 9402",
      enabled: true
    },
    telegram: {
      url: "https://t.me/ibrandmarketingagency",
      username: "@ibrandmarketingagency",
      enabled: true
    }
  },

  // SEO Settings
  seo: {
    defaultTitle: "iBrand Marketing Agency - Creative Digital Marketing Solutions",
    defaultTitleAr: "وكالة iBrand للتسويق - حلول تسويق رقمي إبداعية",
    defaultDescription: "iBrand Marketing Agency provides comprehensive digital marketing services including visual identity design, graphic design, motion graphics, video editing, content writing, and social media management.",
    defaultDescriptionAr: "وكالة iBrand للتسويق تقدم خدمات تسويق رقمي شاملة تشمل تصميم الهوية البصرية والتصميم الجرافيكي والرسوم المتحركة ومونتاج الفيديو وكتابة المحتوى وإدارة وسائل التواصل الاجتماعي.",
    defaultKeywords: "digital marketing, brand identity, graphic design, motion graphics, video editing, content writing, social media marketing, marketing agency, creative design, branding, Egypt, Middle East",
    defaultKeywordsAr: "تسويق رقمي, هوية بصرية, تصميم جرافيكي, رسوم متحركة, مونتاج فيديو, كتابة محتوى, تسويق وسائل التواصل الاجتماعي, وكالة تسويق, تصميم إبداعي, علامات تجارية, مصر, الشرق الأوسط",
    ogImage: "/og-image.jpg",
    ogImageAr: "/og-image-ar.jpg",
    twitterCard: "summary_large_image",
    twitterHandle: "@ibrandmarketing",
    canonicalUrl: "https://ibrandmarketingagency.com",
    robotsTxt: "User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /admin/\nSitemap: https://ibrandmarketingagency.com/sitemap.xml"
  },

  // Analytics Settings
  analytics: {
    googleAnalytics: {
      enabled: true,
      trackingId: "G-XXXXXXXXXX",
      anonymizeIp: true,
      respectDoNotTrack: true
    },
    googleTagManager: {
      enabled: false,
      containerId: "GTM-XXXXXXX"
    },
    facebookPixel: {
      enabled: false,
      pixelId: "XXXXXXXXXX"
    },
    hotjar: {
      enabled: false,
      siteId: "XXXXXXX"
    }
  },

  // Performance Settings
  performance: {
    imageOptimization: {
      enabled: true,
      quality: 85,
      maxWidth: 1920,
      maxHeight: 1080,
      formats: ["webp", "avif"],
      lazyLoading: true
    },
    caching: {
      enabled: true,
      maxAge: 31536000,
      staleWhileRevalidate: 86400
    },
    compression: {
      enabled: true,
      gzip: true,
      brotli: true
    },
    cdn: {
      enabled: false,
      url: "https://cdn.ibrandmarketingagency.com"
    }
  },

  // Security Settings
  security: {
    https: {
      enabled: true,
      redirect: true,
      hsts: true,
      hstsMaxAge: 31536000
    },
    csp: {
      enabled: true,
      directives: {
        "default-src": ["'self'"],
        "script-src": ["'self'", "'unsafe-inline'", "https://www.googletagmanager.com"],
        "style-src": ["'self'", "'unsafe-inline'"],
        "img-src": ["'self'", "data:", "https:"],
        "font-src": ["'self'", "https://fonts.gstatic.com"],
        "connect-src": ["'self'", "https://www.google-analytics.com"]
      }
    },
    rateLimiting: {
      enabled: true,
      windowMs: 15 * 60 * 1000, // 15 minutes
      maxRequests: 100
    }
  },

  // Email Settings
  email: {
    smtp: {
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "ibrandmarketingagency@gmail.com",
        pass: process.env.EMAIL_PASSWORD
      }
    },
    from: {
      name: "iBrand Marketing Agency",
      email: "ibrandmarketingagency@gmail.com"
    },
    templates: {
      contact: "contact-confirmation",
      newsletter: "newsletter-welcome",
      quote: "quote-request"
    }
  },

  // Payment Settings
  payment: {
    stripe: {
      enabled: false,
      publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
      secretKey: process.env.STRIPE_SECRET_KEY,
      currency: "USD"
    },
    paypal: {
      enabled: false,
      clientId: process.env.PAYPAL_CLIENT_ID,
      clientSecret: process.env.PAYPAL_CLIENT_SECRET,
      mode: "sandbox"
    }
  },

  // Content Settings
  content: {
    blog: {
      enabled: true,
      postsPerPage: 6,
      featuredPosts: 3,
      categories: ["Marketing", "Design", "Technology", "Business"]
    },
    portfolio: {
      enabled: true,
      itemsPerPage: 12,
      featuredItems: 6,
      categories: ["Fashion & Beauty", "Business & Services", "Education & Development", "Tourism & Travel"]
    },
    testimonials: {
      enabled: true,
      maxDisplayed: 6,
      autoRotate: true,
      rotationInterval: 5000
    },
    team: {
      enabled: true,
      maxDisplayed: 8,
      showSocialLinks: true
    }
  },

  // Feature Flags
  features: {
    darkMode: true,
    rtlSupport: true,
    multiLanguage: true,
    search: true,
    newsletter: true,
    contactForm: true,
    portfolioGallery: true,
    testimonials: true,
    teamSection: true,
    blog: false,
    ecommerce: false,
    booking: false,
    chat: false
  },

  // Maintenance Settings
  maintenance: {
    enabled: false,
    message: "We're currently performing maintenance. Please check back soon.",
    messageAr: "نحن نقوم حالياً بأعمال الصيانة. يرجى العودة قريباً.",
    allowedIps: ["127.0.0.1", "::1"],
    endTime: null
  }
}

// Environment-specific settings
export const getSettings = () => {
  const env = process.env.NODE_ENV || 'development'
  
  if (env === 'production') {
    return {
      ...SITE_SETTINGS,
      analytics: {
        ...SITE_SETTINGS.analytics,
        googleAnalytics: {
          ...SITE_SETTINGS.analytics.googleAnalytics,
          enabled: true
        }
      },
      performance: {
        ...SITE_SETTINGS.performance,
        cdn: {
          ...SITE_SETTINGS.performance.cdn,
          enabled: true
        }
      }
    }
  }
  
  return SITE_SETTINGS
}

// Helper functions
export const getSetting = (path: string) => {
  const keys = path.split('.')
  let value: any = SITE_SETTINGS
  
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key]
    } else {
      return undefined
    }
  }
  
  return value
}

export const isFeatureEnabled = (feature: string) => {
  return SITE_SETTINGS.features[feature as keyof typeof SITE_SETTINGS.features] || false
}

export const getSocialMediaLinks = () => {
  const links = SITE_SETTINGS.socialMedia
  return Object.entries(links)
    .filter(([_, config]) => config.enabled)
    .reduce((acc, [key, config]) => {
      acc[key] = config
      return acc
    }, {} as Record<string, any>)
}









