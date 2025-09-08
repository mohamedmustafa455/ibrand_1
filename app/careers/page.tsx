import type { Metadata } from "next"
import CareersPageClient from "@/components/careers-page-client"

export const metadata: Metadata = {
  title: "Careers at iBrand - Join Our Marketing Team | Marketing Jobs Egypt",
  description: "Join iBrand's dynamic marketing team. Explore career opportunities in digital marketing, creative design, and brand strategy. Build your career with a leading marketing agency in Egypt.",
  keywords: "iBrand careers, marketing jobs Egypt, digital marketing careers, creative jobs, marketing agency jobs, join iBrand team, marketing career opportunities",
  alternates: {
    canonical: "https://ibrand.agency/careers",
  },
  openGraph: {
    title: "Careers at iBrand - Join Our Marketing Team | Marketing Jobs Egypt",
    description: "Join iBrand's dynamic marketing team. Explore career opportunities in digital marketing, creative design, and brand strategy.",
    url: "https://ibrand.agency/careers",
  },
}

export default function CareersPage() {
  return <CareersPageClient />
}


