import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import SuccessPartners from "@/components/success-partners"
import Contact from "@/components/contact"
import Header from "@/components/header"
import FloatingSocial from "@/components/floating-social"
import Footer from "@/components/footer"
import Script from "next/script"

// import StatsSection from "@/components/stats-section"
import LiveStats from "@/components/live-stats"
import FeaturedProjects from "@/components/featured-projects"
// import CustomerJourney from "@/components/customer-journey"
import PortfolioResults from "@/components/portfolio-results"
import ObfuscatedCopyright from "@/components/obfuscated-copyright"

export const metadata: Metadata = {
  title: "iBrand - Leading Marketing Agency in Egypt | Digital Marketing & Branding Services",
  description: "iBrand is a premier marketing agency in Egypt offering comprehensive digital marketing, brand identity design, SEO optimization, and creative advertising solutions. Transform your business with our expert team.",
  keywords: "marketing agency Egypt, digital marketing, brand identity design, SEO services, social media management, advertising agency, creative marketing, Egypt marketing company",
  alternates: {
    canonical: "https://ibrand.agency",
  },
  openGraph: {
    title: "iBrand - Leading Marketing Agency in Egypt | Digital Marketing & Branding",
    description: "iBrand is a premier marketing agency in Egypt offering comprehensive digital marketing, brand identity design, and creative advertising solutions.",
    url: "https://ibrand.agency",
    images: [
      {
        url: "/portfolio/هاي براند/1.jpg",
        width: 1200,
        height: 630,
        alt: "iBrand Portfolio Highlight",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iBrand - Leading Marketing Agency in Egypt",
    description: "Digital marketing, branding, and creative solutions that grow your business.",
    images: ["/portfolio/هاي براند/1.jpg"],
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Script
        id="ld-json-organization"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "iBrand Marketing Agency",
          "url": "https://ibrand.agency",
          "logo": "/globe.svg",
          "sameAs": [
            "https://www.facebook.com/ibrand",
            "https://www.instagram.com/ibrand",
          ],
        })}
      </Script>
      <Header />
      <FloatingSocial />
      <Hero />
      {/* <CustomerJourney /> */}
      <About />
      <Services />
      
      
      
      {/* <Portfolio /> */}
      <PortfolioResults />
      <LiveStats />

      <SuccessPartners />
      <Contact />
      <Footer />
      <ObfuscatedCopyright />
    </main>
  )
}
