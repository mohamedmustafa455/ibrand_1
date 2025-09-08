import type { Metadata } from "next"
import TestimonialsPage from "@/components/testimonials-page"
import Contact from "@/components/contact"
import Header from "@/components/header"
import FloatingSocial from "@/components/floating-social"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Client Testimonials - iBrand Marketing Agency | What Our Clients Say",
  description: "Read authentic client testimonials and success stories from iBrand marketing agency. See how we've helped businesses achieve remarkable growth through our marketing services.",
  keywords: "iBrand testimonials, client reviews, marketing agency reviews, success stories, customer feedback, marketing results, Egypt marketing agency reviews",
  alternates: {
    canonical: "https://ibrand.agency/testimonials",
  },
  openGraph: {
    title: "Client Testimonials - iBrand Marketing Agency | What Our Clients Say",
    description: "Read authentic client testimonials and success stories from iBrand marketing agency. See how we've helped businesses achieve remarkable growth.",
    url: "https://ibrand.agency/testimonials",
  },
}

export default function TestimonialsPageWrapper() {
  return (
    <main className="min-h-screen">
      <Header />
      <FloatingSocial />
      <div className="pt-20">
        <TestimonialsPage />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

