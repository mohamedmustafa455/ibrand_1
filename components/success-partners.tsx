"use client"

import { motion, useAnimation } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Award, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useTranslationContext } from "@/hooks/translation-provider"
import { useTheme } from "@/hooks/use-theme"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Partner {
  id: string
  name: string
  nameAr: string
  logo: string
  industry: string
  industryAr: string
  description: string
  descriptionAr: string
  results: {
    metric: string
    metricAr: string
    value: string
    description: string
    descriptionAr: string
  }[]
  testimonial: string
  testimonialAr: string
  rating: number
}
const partners: Partner[] = [
  {
    id: "partner-1",
    name: "King Wood",
    nameAr: "كينج وود",
    logo: "/Partners/king.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-2",
    name: "Abu Saad",
    nameAr: "أبو سعد",
    logo: "/Partners/أبو سعد.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-3",
    name: "Home Tools",
    nameAr: "أدوات منزلية",
    logo: "/Partners/أدوات منزلية.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-4",
    name: "Itqan Al-Mureed",
    nameAr: "إتقان المريد",
    logo: "/Partners/إتقان المريد.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-5",
    name: "Ibn Al-Asta",
    nameAr: "ابن الاسطى",
    logo: "/Partners/ابن الاسطى.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-6",
    name: "Abu Zahra",
    nameAr: "ابو زهرة",
    logo: "/Partners/ابو زهرة.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-7",
    name: "Tijan Academy",
    nameAr: "اكاديمية تيجان",
    logo: "/Partners/اكاديمية تيجان.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-8",
    name: "Al-Andalus",
    nameAr: "الأندلس",
    logo: "/Partners/الأندلس.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-9",
    name: "United Brothers",
    nameAr: "الإخوة المتحدون",
    logo: "/Partners/الإخوة المتحدون.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-10",
    name: "Al-Israa",
    nameAr: "الإسراء",
    logo: "/Partners/الإسراء.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-11",
    name: "Al-Imam",
    nameAr: "الإمام",
    logo: "/Partners/الإمام.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-12",
    name: "Al-Emar Real Estate",
    nameAr: "الاعمار عقارات",
    logo: "/Partners/الاعمار عقارات.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-13",
    name: "Al-Injaz",
    nameAr: "الانجاز",
    logo: "/Partners/الانجاز.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-14",
    name: "Al-Baraka Kitchens",
    nameAr: "البركة مطابخ",
    logo: "/Partners/البركة مطابخ.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-15",
    name: "El-Gazzar",
    nameAr: "الجزار",
    logo: "/Partners/الجزار.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-16",
    name: "El-Joker",
    nameAr: "الجوكر",
    logo: "/Partners/الجوكر.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-17",
    name: "El-Habashy",
    nameAr: "الحبشي",
    logo: "/Partners/الحبشي.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-18",
    name: "El-Rawahil",
    nameAr: "الرواحل",
    logo: "/Partners/الرواحل.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-19",
    name: "El-Salenty",
    nameAr: "السلنتي",
    logo: "/Partners/السلنتي.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-20",
    name: "El-Ola",
    nameAr: "العلا",
    logo: "/Partners/العلا.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-21",
    name: "El-Metwaly",
    nameAr: "المتولي",
    logo: "/Partners/المتولي.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-22",
    name: "El-Wakeel",
    nameAr: "الوكيل",
    logo: "/Partners/الوكيل.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-23",
    name: "Elite Fashion",
    nameAr: "ايليت ملابس",
    logo: "/Partners/ايليت ملابس.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-24",
    name: "Bidaya",
    nameAr: "بداية",
    logo: "/Partners/بداية.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-25",
    name: "BM Fashion",
    nameAr: "بي ام ملابس",
    logo: "/Partners/بي ام ملابس.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-26",
    name: "Tadrees",
    nameAr: "تدريس",
    logo: "/Partners/تدريس.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-27",
    name: "Terhal",
    nameAr: "ترحال",
    logo: "/Partners/ترحال.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-28",
    name: "Techniya",
    nameAr: "تقنية",
    logo: "/Partners/تقنية.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-29",
    name: "Tasty",
    nameAr: "تيستي",
    logo: "/Partners/تيستي.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-30",
    name: "Tharaa",
    nameAr: "ثراء",
    logo: "/Partners/ثراء.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-31",
    name: "Barber",
    nameAr: "حلاقة",
    logo: "/Partners/حلاقة.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-32",
    name: "Car Protection",
    nameAr: "حماية سيارات",
    logo: "/Partners/حماية سيارات.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-33",
    name: "Hamza",
    nameAr: "حمزة",
    logo: "/Partners/حمزة.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-34",
    name: "Radwan",
    nameAr: "رضوان",
    logo: "/Partners/رضوان.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-35",
    name: "Rayhana",
    nameAr: "ريحانة",
    logo: "/Partners/ريحانة.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-36",
    name: "Zomorod",
    nameAr: "زمرد",
    logo: "/Partners/زمرد.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-37",
    name: "Skin Care",
    nameAr: "سكين كير",
    logo: "/Partners/سكين كير.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-38",
    name: "Shahd Furniture",
    nameAr: "شهد اثاث",
    logo: "/Partners/شهد اثاث.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-39",
    name: "Aref",
    nameAr: "عارف",
    logo: "/Partners/عارف.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-40",
    name: "Honey",
    nameAr: "عسل",
    logo: "/Partners/عسل.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-41",
    name: "Omara",
    nameAr: "عمارة",
    logo: "/Partners/عمارة.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-42",
    name: "Victor Dental",
    nameAr: "فيكتور اسنان",
    logo: "/Partners/فيكتور اسنان.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-43",
    name: "Victoria",
    nameAr: "فيكتوريا",
    logo: "/Partners/فيكتوريا.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-44",
    name: "Future Real Estate",
    nameAr: "فيوتشر عقارات",
    logo: "/Partners/فيوتشر عقارات.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-45",
    name: "Karaqeish",
    nameAr: "قراقيش",
    logo: "/Partners/قراقيش.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-46",
    name: "Kado Store",
    nameAr: "كادو ستور",
    logo: "/Partners/كادو ستور.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-47",
    name: "Crepiano",
    nameAr: "كريبيانو",
    logo: "/Partners/كريبيانو.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-48",
    name: "Khashkhat El-Zein",
    nameAr: "كشخة الزين",
    logo: "/Partners/كشخة الزين.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-49",
    name: "Master",
    nameAr: "ماستر",
    logo: "/Partners/ماستر.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-50",
    name: "Maya Fashion",
    nameAr: "مايا ملابس",
    logo: "/Partners/مايا ملابس.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-51",
    name: "Mogahed Furniture",
    nameAr: "مجاهد مفروشات",
    logo: "/Partners/مجاهد مفروشات.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-52",
    name: "Moaz",
    nameAr: "معاذ",
    logo: "/Partners/معاذ.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-53",
    name: "Makkah Kitchens",
    nameAr: "مكة للمطابخ",
    logo: "/Partners/مكة للمطابخ.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-54",
    name: "Sudanese Fashion",
    nameAr: "ملابس سوداني",
    logo: "/Partners/ملابس سوداني.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-55",
    name: "Mobile",
    nameAr: "موبايل",
    logo: "/Partners/موبايل.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-56",
    name: "My Care",
    nameAr: "مي كير",
    logo: "/Partners/مي كير.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-57",
    name: "Makeup Artist",
    nameAr: "ميكب ارتست",
    logo: "/Partners/ميكب ارتست.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-58",
    name: "Hacker",
    nameAr: "هاكر",
    logo: "/Partners/هاكر.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-59",
    name: "Hacking",
    nameAr: "هاكينج",
    logo: "/Partners/هاكينج.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
  {
    id: "partner-60",
    name: "Yaksh Fashion",
    nameAr: "ياكش ملابس",
    logo: "/Partners/ياكش ملابس.jpg",
    industry: "General",
    industryAr: "عام",
    description: "Placeholder description...",
    descriptionAr: "وصف افتراضي...",
    results: [],
    testimonial: "Placeholder testimonial...",
    testimonialAr: "رأي افتراضي...",
    rating: 5,
  },
]

export default function SuccessPartners() {
  const { isRTL } = useTranslationContext()
  const { isDark } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [marqueePartners, setMarqueePartners] = useState<Partner[]>([])
  const controls = useAnimation()
  const currentXRef = useRef(0)

  useEffect(() => {
    const shuffled = [...partners].sort(() => Math.random() - 0.5)
    setMarqueePartners(shuffled)

    // تشغيل الماركي التلقائي
    controls.start({
      x: isRTL ? ["0%", "100%"] : ["0%", "-100%"],
      transition: { duration: 40, ease: "linear", repeat: Infinity },
    })
  }, [isRTL, controls])

  // تحريك يدوي بالسهمين (يدعم RTL/LTR)
  const handleScroll = (dir: "left" | "right") => {
    controls.stop()
    const base = dir === "left" ? -200 : 200
    const delta = isRTL ? -base : base
    const fromX = typeof currentXRef.current === "number" ? currentXRef.current : 0
    const toX = fromX + delta
    controls.start({ x: toX, transition: { duration: 0.5, ease: "easeInOut" } })
  }

  return (
    <section
      ref={ref}
      className={`relative py-20 overflow-hidden ${
        isDark
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
          : "bg-gradient-to-br from-blue-50 via-white to-indigo-50"
      }`}
    >
      <div className="container mx-auto px-4 relative z-10 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-200/50 dark:border-blue-700/50 mb-6">
            <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span
              className={`text-sm font-medium ${
                isDark ? "text-blue-300" : "text-blue-700"
              }`}
            >
              {isRTL ? "شركاء النجاح" : "Success Partners"}
            </span>
          </div>
          <h2
            className={`text-4xl md:text-5xl font-black mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {isRTL ? "شركاؤنا في النجاح" : "Our Success Partners"}
            </span>
          </h2>
        </motion.div>

        {/* Infinite Marquee */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex items-center gap-24 whitespace-nowrap will-change-transform"
            animate={controls}
            onUpdate={(latest) => {
              const xVal = (latest as any).x
              if (typeof xVal === "number") currentXRef.current = xVal
            }}
          >
            {(() => {
              const source =
                marqueePartners.length > 0 ? marqueePartners : partners
              return [...source, ...source, ...source, ...source, ...source, ...source].map((p, idx) => (
                <div key={`loop-${p.id}-${idx}`} className="shrink-0">
                  <div
                    className={`w-24 h-24 rounded-full overflow-hidden border ${
                      isDark
                        ? "border-slate-700 bg-slate-800"
                        : "border-gray-200 bg-white"
                    } hover:scale-105 transition-transform duration-300`}
                  >
                    <Image
                      src={p.logo}
                      alt={isRTL ? p.nameAr : p.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        try {
                          ;(e.target as HTMLImageElement).src = "/window.svg"
                        } catch {}
                      }}
                      unoptimized
                    />
                  </div>
                </div>
              ))
            })()}
          </motion.div>

          {/* Navigation Arrows */}
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-slate-800/70 p-2 rounded-full shadow hover:scale-110 transition"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-white" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-slate-800/70 p-2 rounded-full shadow hover:scale-110 transition"
          >
            <ChevronRight className="w-6 h-6 text-gray-800 dark:text-white" />
          </button>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p
            className={`text-lg mb-6 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {isRTL
              ? "هل تريد أن تكون شريك النجاح التالي؟"
              : "Want to be the next success partner?"}
          </p>
          <Button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className={`px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${
              isDark
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                : "bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
            } text-white shadow-xl hover:shadow-2xl hover:scale-105`}
          >
            {isRTL ? "ابدأ رحلة النجاح" : "Start Your Success Journey"}
            <ArrowRight
              className={`w-5 h-5 ${isRTL ? "mr-2 ml-0" : "ml-2"}`}
            />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
