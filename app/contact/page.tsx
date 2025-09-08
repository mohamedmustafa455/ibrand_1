import type { Metadata } from "next"
import Contact from "@/components/contact"
import Header from "@/components/header"
import FloatingSocial from "@/components/floating-social"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Contact iBrand - Get in Touch | Marketing Agency Egypt",
  description: "Contact iBrand marketing agency for professional marketing services. Get a free consultation for your digital marketing, branding, and advertising needs. Located in Egypt.",
  keywords: "contact iBrand, marketing agency contact, free consultation, digital marketing Egypt, branding services contact, advertising agency Egypt",
  alternates: {
    canonical: "https://ibrand.agency/contact",
  },
  openGraph: {
    title: "Contact iBrand - Get in Touch | Marketing Agency Egypt",
    description: "Contact iBrand marketing agency for professional marketing services. Get a free consultation for your digital marketing and branding needs.",
    url: "https://ibrand.agency/contact",
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <FloatingSocial />
      <div className="pt-20">
        <Contact />
        <Footer />
      </div>
    </main>
  )
}


