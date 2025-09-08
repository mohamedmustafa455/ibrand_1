import type { Metadata } from "next"
import Portfolio from "@/components/portfolio"
import Contact from "@/components/contact"
import Header from "@/components/header"
import FloatingSocial from "@/components/floating-social"
import Footer from "@/components/footer"
import PortfolioResults from "@/components/portfolio-results"
import FeaturedProjects from "@/components/featured-projects"

export const metadata: Metadata = {
  title: "Portfolio - iBrand Marketing Agency | Our Creative Projects & Success Stories",
  description: "Explore iBrand's impressive portfolio of successful marketing campaigns, brand designs, and digital projects. See how we've helped businesses grow across various industries.",
  keywords: "iBrand portfolio, marketing projects, brand design examples, digital campaigns, creative work, marketing case studies, Egypt marketing agency",
  alternates: {
    canonical: "https://ibrand.agency/portfolio",
  },
  openGraph: {
    title: "Portfolio - iBrand Marketing Agency | Our Creative Projects",
    description: "Explore iBrand's impressive portfolio of successful marketing campaigns, brand designs, and digital projects.",
    url: "https://ibrand.agency/portfolio",
    images: [
      {
        url: "/portfolio/كينج وود/1.jpg",
        width: 1200,
        height: 630,
        alt: "iBrand Portfolio Grid",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iBrand Portfolio | Creative Projects & Success Stories",
    description: "Browse our best work across branding, design, and marketing.",
    images: ["/portfolio/كينج وود/1.jpg"],
  },
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <FloatingSocial />
      <div className="pt-20">
      <PortfolioResults />

        <Portfolio />
        <FeaturedProjects />

        {/* Single elegant results section with tabs */}

        <Contact />
        <Footer />
      </div>
    </main>
  )
}


