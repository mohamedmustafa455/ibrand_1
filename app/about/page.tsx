import type { Metadata } from "next"
import About from "@/components/about"
import Contact from "@/components/contact"
import Header from "@/components/header"
import FloatingSocial from "@/components/floating-social"
import Footer from "@/components/footer"  
import WhyChooseUs from "@/components/why-choose-us"
import StatsSection from "@/components/stats-section"

export const metadata: Metadata = {
  title: "About iBrand - Leading Marketing Agency in Egypt | Our Story & Mission",
  description: "Discover iBrand's journey from startup to leading marketing agency. Learn about our mission, values, and commitment to delivering exceptional marketing solutions in Egypt and beyond.",
  keywords: "about iBrand, marketing agency Egypt, our story, company mission, marketing team, creative agency, digital marketing Egypt",
  alternates: {
    canonical: "https://ibrand.agency/about",
  },
  openGraph: {
    title: "About iBrand - Leading Marketing Agency in Egypt",
    description: "Discover iBrand's journey from startup to leading marketing agency. Learn about our mission, values, and commitment to delivering exceptional marketing solutions.",
    url: "https://ibrand.agency/about",
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <FloatingSocial />
      <div className="pt-20">
        <About />
        <WhyChooseUs />
        <StatsSection />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
