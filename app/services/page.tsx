"use client"

import Services from "@/components/services"
import Contact from "@/components/contact"
import Header from "@/components/header"
import FloatingSocial from "@/components/floating-social"
import Footer from "@/components/footer"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <FloatingSocial />
      <div className="pt-20">
        <Services />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
