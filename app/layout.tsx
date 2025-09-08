import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/hooks/use-theme"
import { TranslationProvider } from "@/hooks/translation-provider"
import FloatingWhatsApp from "@/components/floating-whatsapp"
import ObfuscatedCopyright from "@/components/obfuscated-copyright"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://ibrand.agency'),
  title: "iBrand - Professional Marketing & Branding Agency | Digital Marketing Services",
  description:
    "Leading marketing agency specializing in creative branding solutions, digital marketing campaigns, and SEO strategies. Transform your business through data-driven marketing and creative campaigns.",
  keywords:
    "marketing agency, branding services, digital marketing, advertising campaigns, SEO optimization, content marketing, social media management, professional marketing, creative branding solutions, مصر, وكالة تسويق, تسويق رقمي",
  authors: [{ name: "iBrand Marketing Agency" }],
  alternates: {
    canonical: "https://ibrand.agency",
  },
  openGraph: {
    title: "iBrand - Professional Marketing & Branding Agency",
    description:
      "Transform your business through expert marketing and branding services. 500+ successful campaigns, 300% average ROI increase.",
    url: "https://ibrand.agency",
    siteName: "iBrand",
    images: [
      {
        url: "/globe.svg",
        width: 1200,
        height: 630,
        alt: "iBrand Marketing Agency - Professional Marketing Services",
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "Egypt",
  },
  twitter: {
    card: "summary_large_image",
    title: "iBrand - Professional Marketing & Branding Agency",
    description:
      "Leading marketing agency delivering creative branding solutions and digital marketing campaigns that drive results.",
    images: ["/globe.svg"],
    creator: "@ibrand",
    site: "@ibrand",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="iBrand" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <meta name="author" content="iBrand Marketing Agency" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="iBrand" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="icon" href="/globe.svg" type="image/svg+xml" />
        <link rel="alternate" hrefLang="en" href="https://ibrand.agency" />
        <link rel="alternate" hrefLang="ar" href="https://ibrand.agency/ar" />
        <link rel="alternate" hrefLang="x-default" href="https://ibrand.agency" />
        <meta name="whatsapp-business" content="+20 111 303 9402" />
        <meta name="google" content="notranslate" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                // Set English as default language
                if (!localStorage.getItem('language')) {
                  localStorage.setItem('language', 'en');
                }
                
                // Initialize theme
                const savedTheme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
                
                if (shouldBeDark) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
                
                // Set document direction and language
                const savedLang = localStorage.getItem('language') || 'en';
                document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
                document.documentElement.lang = savedLang;
                
                // Add Arabic font class
                if (savedLang === 'ar') {
                  document.documentElement.classList.add('arabic-font', 'rtl-mode');
                } else {
                  document.documentElement.classList.remove('arabic-font', 'rtl-mode');
                }
                
                // Preload Arabic font for better performance
                const link = document.createElement('link');
                link.rel = 'preload';
                link.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@100;200;300;400;500;600;700;800;900&display=swap';
                link.as = 'style';
                document.head.appendChild(link);
                
                // Preload additional Arabic fonts for better fallbacks
                const cairoLink = document.createElement('link');
                cairoLink.rel = 'preload';
                cairoLink.href = 'https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap';
                cairoLink.as = 'style';
                document.head.appendChild(cairoLink);
                
                const tajawalLink = document.createElement('link');
                tajawalLink.rel = 'preload';
                tajawalLink.href = 'https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap';
                tajawalLink.as = 'style';
                document.head.appendChild(tajawalLink);
              } catch (e) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "iBrand Marketing Agency",
              alternateName: "iBrand",
              description: "Professional marketing agency specializing in creative branding solutions, digital marketing campaigns, and advertising strategies.",
              descriptionAr: "وكالة تسويق محترفة متخصصة في حلول العلامة التجارية الإبداعية وحملات التسويق الرقمي واستراتيجيات الإعلان.",
              url: "https://ibrand.agency",
              logo: "https://ibrand.agency/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+20 111 303 9402",
                contactType: "customer service",
                email: "ibrandmarketingagency@gmail.com",
                availableLanguage: ["English", "Arabic"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Central District",
                addressLocality: "New Damietta",
                addressRegion: "Damietta",
                addressCountry: "EG",
              },
              sameAs: [
                "https://facebook.com/ibrand",
                "https://twitter.com/ibrand",
                "https://instagram.com/ibrand",
                "https://linkedin.com/company/ibrand",
              ],
              service: [
                "Digital Marketing",
                "Brand Identity Design",
                "Content Marketing",
                "SEO Optimization",
                "Social Media Management",
                "Paid Advertising",
                "Voice-over Services",
                "Video Editing",
                "Motion Graphics",
                "Graphic Design",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Marketing Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Digital Marketing",
                      description: "Comprehensive digital marketing solutions including SEO, PPC, and social media marketing"
                    }
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Brand Identity Design",
                      description: "Complete brand identity design including logos, color schemes, and brand guidelines"
                    }
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Content Marketing",
                      description: "Strategic content creation and marketing campaigns"
                    }
                  }
                ]
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "iBrand Marketing Agency",
              url: "https://ibrand.agency",
              description: "Professional marketing agency offering creative branding solutions and digital marketing services",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://ibrand.agency/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "iBrand Marketing Agency",
              description: "Professional marketing agency in Egypt offering digital marketing and branding services",
              url: "https://ibrand.agency",
              telephone: "+20 111 303 9402",
              email: "ibrandmarketingagency@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Central District",
                addressLocality: "New Damietta",
                addressRegion: "Damietta",
                addressCountry: "EG"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "31.4167",
                longitude: "31.8167"
              },
              openingHours: "Mo-Fr 09:00-18:00",
              priceRange: "$$",
              areaServed: "Egypt",
              serviceArea: {
                "@type": "Country",
                name: "Egypt"
              }
            }),
          }}
        />
        {/* Google Analytics Placeholder */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Google Analytics will be added here
              // gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <TranslationProvider>
            {children}
            <FloatingWhatsApp />
            <ObfuscatedCopyright />
          </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
