"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, Maximize2, Download, Share2, Heart, Info, Calendar, MapPin, Users, TrendingUp } from "lucide-react"
import { useTheme } from "@/hooks/use-theme"
import { useTranslationContext } from "@/hooks/translation-provider"

interface CompanyCard {
  id: string
  name: string
  nameAr: string
  description: string
  descriptionAr: string
  images: string[]
  category: string
  categoryAr: string
  stats?: {
    projects: number
    clients: number
    experience: string
    location: string
  }
}

interface CompanyGalleryProps {
  serviceId: string
}

// Company name mapping
// Company name mapping
const getCompanyName = (sectionTitle: string): string => {
  const section = sectionTitle.toLowerCase()
  if (section.includes("ابو سعد") || section.includes("أبو سعد") || section.includes("بو سعد")) return "Abu Saad Export and International Transport Company"
  if (section.includes("الإنجاز المعتمد") || section.includes("النجاز المعتمد") || section.includes("الانجاز المعتمد") || sectionTitle === "الانجاز المعتمد") return "Al-Injaz Al-Mu'tamad Company"
  if (section.includes("العلا") || section.includes("al ola") || section.includes("el-ola") || section.includes("al-ola")) return "Al-Ola Export and International Transport Office"
  if (section.includes("رضوان") || section.includes("radwan")) return "Radwan Furniture Factory"
  if (section.includes("تيستي") || section.includes("tasty")) return "Tasty Restaurant"
  if (section.includes("كينج وود") || section.includes("king wood")) return "King Wood Factory"
  if (section.includes("هاي براند") || section.includes("high brand")) return "High Brand Clothing Factory"
  if (section.includes("الاخوة المتحدون") || section.includes("united brothers")) return "United Brothers Factory"
  if (section.includes("اتقان المريد") || section.includes("perfection seeking")) return "Itqan Al-Mureed Academy"
  if (section.includes("مكة") || section.includes("makkah")) return "Makkah Factory"
  if (section.includes("ترحال") || section.includes("travel") || section.includes("tr7al")) return "Tr7al Travel Company"
  if (section.includes("عسل") || section.includes("honey")) return "Asal Group Company"
  if (section.includes("الحبشي") || section.includes("habashy") || section.includes("el-habashy")) return "El-Habashy Furniture Factory"
  if (section.includes("اسنان") || section.includes("dental") || section.includes("dent")) return "Master Dental Center"
  if (section.includes("الجزار") || section.includes("butcher")) return "El-Gazzar Steel Trading and Supply Company"
  if (section.includes("ابن الاسطى") || section.includes("craftsman")) return "Ibn El-Sasty Service Center"
  if (section.includes("الوكيل") || section.includes("agent")) return "El-Wakeel Service Center"
  if (section.includes("بداية مشوارك") || section.includes("journey")) return "Bidaya Mushwarak Academy"
  if (section.includes("كشخة الزين") || section.includes("beauty")) return "Kashkha Al-Zain Store"
  if (section.includes("ماستر") || section.includes("master")) return "Master Dental Center"
  if (section.includes("ووديكس") || section.includes("woodex")) return "Woodex Factory"
  if (section.includes("i brand") || section.includes("ibrand")) return "i Brand Marketing Agency"
  if (section.includes("مكتب الصفوة") || section.includes("الصفوة") || section.includes("safwa") || section.includes("مكتب الصفوت")) return "Al-Safwa Engineering Consultancy Office"
  if (section.includes("عبدالله شوز") || section.includes("abdullah shoes")) return "Abdullah Shoes"
  if (section.includes("مكتب القائد") || section.includes("commander travel") || section.includes("القائد للسفريات")) return "Al-Qaed Travel Office"
  if (section.includes("قراقيش") || section.includes("qaraqish") || section.includes("مخبز قراقيش")) return "Qaraqish Bakery"
  return sectionTitle
}

const getCompanyNameAr = (sectionTitle: string): string => {
  const section = sectionTitle.toLowerCase()
  if (section.includes("ابن الاسطى") || section.includes("craftsman")) return "مركز ابن السطي"
  if (section.includes("الجزار") || section.includes("butcher")) return "شركة الجزار ستيل للتجارة والتوريدات"
  if (section.includes("الحبشي") || section.includes("habashy") || section.includes("el-habashy")) return "مصنع الحبشي للأثاث"
  if (section.includes("الإنجاز المعتمد") || section.includes("النجاز المعتمد") || section.includes("الانجاز المعتمد") || sectionTitle === "الانجاز المعتمد") return "شركة الإنجاز المعتمد"
  if (section.includes("الوكيل") || section.includes("agent")) return "مركز الوكيل"
  if (section.includes("بداية مشوارك") || section.includes("journey")) return "أكاديمية بداية مشوارك"
  if (section.includes("ترحال") || section.includes("travel") || section.includes("tr7al")) return "شركة ترحال للسفريات"
  if (section.includes("عسل") || section.includes("honey")) return "شركة عسل جروب"
  if (section.includes("كشخة الزين") || section.includes("beauty")) return "كشخة الزين"
  if (section.includes("كينج وود") || section.includes("king wood")) return "مصنع كينج وود"
  if (section.includes("ماستر") || section.includes("master") || section.includes("اسنان") || section.includes("dental")) return "مركز ماستر دنتل"
  if (section.includes("مكة") || section.includes("makkah")) return "مصنع مكة"
  if (section.includes("ووديكس") || section.includes("woodex")) return "مصنع وودكس"
  if (section.includes("ابو سعد") || section.includes("أبو سعد") || section.includes("بو سعد")) return "شركة أبو سعد للتصدير والنقل الدولي"
  if (section.includes("اتقان المريد") || section.includes("perfection seeking")) return "أكاديمية إتقان المريد"
  if (section.includes("الاخوة المتحدون") || section.includes("united brothers")) return "مصنع الإخوة المتحدون"
  if (section.includes("العلا") || section.includes("al ola") || section.includes("al-ola") || section.includes("el-ola")) return "مكتب العلا للتصدير والنقل الدولي"
  if (section.includes("تيستي") || section.includes("tasty")) return "مطعم تيستي"
  if (section.includes("رضوان") || section.includes("radwan")) return "مصنع رضوان للأثاث"
  if (section.includes("هاي براند") || section.includes("high brand")) return "مصنع هاي براند للملابس"
  if (section.includes("i brand") || section.includes("ibrand")) return "وكالة iBrand للتسويق"
  if (section.includes("مكتب الصفوة") || section.includes("الصفوة") || section.includes("safwa") || section.includes("مكتب الصفوت")) return "مكتب الصفوة للاستشارات الهندسية"
  if (section.includes("عبدالله شوز") || section.includes("abdullah shoes") || section.includes("عبدالله شوز ")) return "عبد الله شوز"
  if (section.includes("مكتب القائد") || section.includes("commander travel") || section.includes("القائد للسفريات")) return "مكتب القائد للسفريات"
  if (section.includes("قراقيش") || section.includes("qaraqish") || section.includes("مخبز قراقيش")) return "قراقيش للمخبوزات"
  return sectionTitle
}



const getCompanyDescription = (sectionTitle: string): string => {
  const section = sectionTitle.toLowerCase()
  
  if (section.includes("ابن الاسطى") || section.includes("craftsman")) {
    return "Comprehensive automotive service center specializing in car maintenance and repair including electrical systems, suspension, mechanics, and computer diagnostics."
  }
  if (section.includes("الجزار") || section.includes("butcher")) {
    return "Specialized company in trading and supplying all types of iron and construction materials, building supplies, and metal coverings."
  }
  if (section.includes("الحبشي") || section.includes("habashy") || section.includes("el-habashy")) {
    return "Factory specialized in manufacturing and producing classic and modern furniture including bedrooms, living rooms, and travel sets."
  }
  if (section.includes("الإنجاز المعتمد") || section.includes("النجاز المعتمد") || section.includes("الانجاز المعتمد") || sectionTitle === "الانجاز المعتمد") {
    return "Business services company in Dubai, UAE specialized in company establishment, government and commercial transaction clearance, and license renewal services."
  }
  if (section.includes("الوكيل") || section.includes("agent")) {
    return "Maintenance center specialized in repairing car headlights and maintaining glass cracks with high efficiency."
  }
  if (section.includes("بداية مشوارك") || section.includes("journey")) {
    return "Educational academy and nursery for caring and qualifying children with special needs and learning difficulties through specialized courses and psychological support services."
  }
  if (section.includes("ترحال") || section.includes("travel") || section.includes("tr7al")) {
    return "Tourism company specialized in organizing and managing domestic trips and local tourism (coastal cities, Cairo, Upper Egypt, safari and adventure trips)."
  }
  if (section.includes("عسل") || section.includes("honey")) {
    return "Real estate marketing company specialized in selling and marketing residential, commercial, and administrative units in addition to real estate consultations."
  }
  if (section.includes("كشخة الزين") || section.includes("beauty")) {
    return "Store specialized in women's clothing imported from the UAE including Gulf abayas, dresses, casual wear, shoes, bags, and accessories. Elegance is never missed."
  }
  if (section.includes("كينج وود") || section.includes("king wood")) {
    return "Factory for producing and manufacturing high-quality plywood boards with multiple sizes and thicknesses to meet the needs of furniture factories and workshops. Located in Damietta, Egypt."
  }
  if (section.includes("ماستر") || section.includes("master") || section.includes("اسنان") || section.includes("dental")) {
    return "Comprehensive medical center for dental and gum care including teeth cleaning, fillings, root canal treatment, dental implants, and orthodontics."
  }
  if (section.includes("مكة") || section.includes("makkah")) {
    return "Factory for designing and implementing complete aluminum kitchens in various forms (classic - modern - high gloss) with all accessories."
  }
  if (section.includes("ووديكس") || section.includes("woodex")) {
    return "Factory specialized in manufacturing and supplying kitchen materials and supplies including wood and aluminum boards, CNC cutting, and accessories."
  }
  if (section.includes("ابو سعد") || section.includes("أبو سعد") || section.includes("بو سعد")) {
    return "Company specialized in transport, shipping, and international export services from Egypt to Saudi Arabia, UAE, and Libya including import, customs clearance, and packaging."
  }
  if (section.includes("اتقان المريد") || section.includes("perfection seeking")) {
    return "Educational academy specialized in Islamic religious sciences (Quran, Hadith, Fiqh, Aqeedah, Tafsir) with online distance learning programs."
  }
  if (section.includes("الاخوة المتحدون") || section.includes("الإخوة المتحدون") || section.includes("united brothers")) {
    return "Factory specialized in manufacturing all types of kitchens (aluminum, PVC, sink units, libraries, dressing rooms, hoods) with high quality."
  }
  if (section.includes("العلا") || section.includes("al ola") || section.includes("al-ola") || section.includes("el-ola")) {
    return "Office specialized in shipping and international export services from Egypt to Saudi Arabia and UAE with all required SABER certificates."
  }
  if (section.includes("تيستي") || section.includes("tasty")) {
    return "Restaurant specialized in serving various types of pizza in addition to high-quality fast food with comfortable indoor seating."
  }
  if (section.includes("رضوان") || section.includes("radwan")) {
    return "Factory specialized in manufacturing home furniture from the finest types of wood including travel and reception chairs, tables, and large production lines for shipping."
  }
  if (section.includes("هاي براند") || section.includes("high brand")) {
    return "Factory for designing and implementing ready-made clothing of all types (casual - classic - formal) with production of special fashion lines and wholesale supply."
  }
  if (section.includes("i brand") || section.includes("ibrand")) {
    return "Marketing agency providing comprehensive branding and digital marketing solutions."
  }
  if (section.includes("مكتب الصفوة") || section.includes("الصفوة") || section.includes("safwa") || section.includes("مكتب الصفوت")) {
    return "Complete visual identity design for an engineering consultancy office specializing in architectural projects, concrete site supervision, and finishing works in Aswan."
  }
  if (section.includes("عبدالله شوز") || section.includes("abdullah shoes")) {
    return "Premium footwear store in Jordan offering high-quality men's dress shoes with free shipping across the Kingdom. Specializing in modern shoe collections and fashion accessories."
  }
  if (section.includes("مكتب القائد") || section.includes("commander travel") || section.includes("القائد للسفريات")) {
    return "Professional travel agency offering comprehensive travel services including tour packages, visa services, and travel solutions. Your journey starts here."
  }
  if (section.includes("قراقيش") || section.includes("qaraqish") || section.includes("مخبز قراقيش")) {
    return "Eid menu design and branding for a traditional bakery in Assiut, featuring traditional Egyptian sweets and baked goods."
  }
  return "Professional company offering high-quality services and solutions."
}

const getCompanyDescriptionAr = (sectionTitle: string): string => {
  const section = sectionTitle.toLowerCase()
  
  if (section.includes("ابن الاسطى") || section.includes("craftsman")) {
    return "مركز متكامل لصيانة وإصلاح السيارات يشمل كهرباء السيارات، العفشة، الميكانيكا، وكشف الأعطال بالكمبيوتر"
  }
  if (section.includes("الجزار") || section.includes("butcher")) {
    return "شركة متخصصة في تجارة وتوريد جميع أنواع الحديد ومستلزمات البناء والتشييد والتغطيات المعدنية"
  }
  if (section.includes("الحبشي") || section.includes("habashy") || section.includes("el-habashy")) {
    return "مصنع متخصص في تصنيع وإنتاج الأثاث الكلاسيكي والمودرن بما يشمل غرف النوم، الصالونات، وغرف السفر"
  }
  if (section.includes("الإنجاز المعتمد") || section.includes("النجاز المعتمد") || section.includes("الانجاز المعتمد") || sectionTitle === "الانجاز المعتمد") {
    return "شركة خدمات أعمال في دبي، الإمارات العربية المتحدة متخصصة في تأسيس الشركات وتخليص المعاملات الحكومية والتجارية وتجديد الرخص"
  }
  if (section.includes("الوكيل") || section.includes("agent")) {
    return "مركز صيانة متخصص في إصلاح فوانيس السيارات وصيانة شروخ الزجاج بكفاءة عالية"
  }
  if (section.includes("بداية مشوارك") || section.includes("journey")) {
    return "حضانة وأكاديمية تعليمية لرعاية وتأهيل الأطفال ذوي الهمم وصعوبات التعلم من خلال كورسات متخصصة وخدمات دعم نفسي"
  }
  if (section.includes("ترحال") || section.includes("travel") || section.includes("tr7al")) {
    return "شركة سياحة متخصصة في تنظيم وإدارة الرحلات الداخلية والسياحة المحلية (مدن ساحلية، القاهرة، الصعيد، رحلات سفاري ومغامرات)"
  }
  if (section.includes("عسل") || section.includes("honey")) {
    return "شركة تسويق عقاري متخصصة في بيع وتسويق الوحدات السكنية والتجارية والإدارية بالإضافة إلى الاستشارات العقارية"
  }
  if (section.includes("كشخة الزين") || section.includes("beauty")) {
    return "متجر متخصص في ملابس النساء المستوردة من الإمارات العربية المتحدة بما في ذلك العباءات الخليجية والفساتين والملابس العادية والأحذية والحقائب والإكسسوارات. الأناقة ما كتخطاش."
  }
  if (section.includes("كينج وود") || section.includes("king wood")) {
    return "مصنع لإنتاج وتصنيع ألواح الخشب المضغوط عالية الجودة بأحجام وسمكات متعددة لتلبية احتياجات مصانع الأثاث والورش. يقع في دمياط، مصر."
  }
  if (section.includes("ماستر") || section.includes("master") || section.includes("اسنان") || section.includes("dental")) {
    return "مركز طبي متكامل لرعاية وعلاج الأسنان واللثة يشمل تنظيف الأسنان، الحشوات، علاج العصب، زراعة الأسنان، والتقويم"
  }
  if (section.includes("مكة") || section.includes("makkah")) {
    return "مصنع لتصميم وتنفيذ المطابخ الألومنيوم الكاملة بمختلف الأشكال (كلاسيك – مودرن – هاي جلوس) مع تزويدها بجميع الإكسسوارات"
  }
  if (section.includes("ووديكس") || section.includes("woodex")) {
    return "مصنع متخصص في تصنيع وتوريد خامات ومستلزمات المطابخ بما يشمل ألواح الخشب والألومنيوم، القطع باستخدام CNC، والإكسسوارات"
  }
  if (section.includes("ابو سعد") || section.includes("أبو سعد") || section.includes("بو سعد")) {
    return "شركة متخصصة في خدمات النقل والشحن والتصدير الدولي من مصر إلى السعودية والإمارات وليبيا بما يشمل الاستيراد والتخليص الجمركي والتغليف"
  }
  if (section.includes("اتقان المريد") || section.includes("perfection seeking")) {
    return "أكاديمية تعليمية متخصصة في علوم الشرع الإسلامي (القرآن الكريم، الحديث الشريف، الفقه، العقيدة، التفسير) مع برامج أونلاين للتعلم عن بعد"
  }
  if (section.includes("الاخوة المتحدون") || section.includes("الإخوة المتحدون") || section.includes("united brothers")) {
    return "مصنع متخصص في تصنيع المطابخ بجميع أنواعها (ألومنيوم، PVC، وحدات حوض، مكتبات، دريسنج روم، تند) بجودة عالية"
  }
  if (section.includes("العلا") || section.includes("al ola") || section.includes("al-ola") || section.includes("el-ola")) {
    return "مكتب متخصص في خدمات الشحن والتصدير الدولي من مصر إلى السعودية والإمارات مع توفير جميع شهادات سابر المطلوبة"
  }
  if (section.includes("تيستي") || section.includes("tasty")) {
    return "مطعم متخصص في تقديم البيتزا بأنواعها المختلفة بالإضافة إلى الوجبات السريعة عالية الجودة مع جلسات داخلية مريحة"
  }
  if (section.includes("رضوان") || section.includes("radwan")) {
    return "مصنع متخصص في تصنيع الأثاث المنزلي من أجود أنواع الخشب بما يشمل كراسي السفر والاستقبال، الترابيزات، وخطوط إنتاج كبيرة للشحن"
  }
  if (section.includes("هاي براند") || section.includes("high brand")) {
    return "مصنع لتصميم وتنفيذ الملابس الجاهزة بجميع أنواعها (كاجوال – كلاسيك – فورمال) مع إنتاج خطوط أزياء خاصة وتوريد بالجملة"
  }
  if (section.includes("i brand") || section.includes("ibrand")) {
    return "وكالة تسويق تقدم حلول شاملة للعلامات التجارية والتسويق الرقمي"
  }
  if (section.includes("مكتب الصفوة") || section.includes("الصفوة") || section.includes("safwa") || section.includes("مكتب الصفوت")) {
    return "تصميم هوية بصرية شاملة لمكتب استشارات هندسية متخصص في المشاريع المعمارية والإشراف على المواقع الخرسانية وأعمال التشطيبات في أسوان"
  }
  if (section.includes("عبدالله شوز") || section.includes("abdullah shoes")) {
    return "متجر أحذية فاخر في الأردن يقدم أحذية رجالية عالية الجودة مع شحن مجاني لجميع أنحاء المملكة. متخصص في مجموعات أحذية عصرية وإكسسوارات أزياء."
  }
  if (section.includes("مكتب القائد") || section.includes("commander travel") || section.includes("القائد للسفريات")) {
    return "وكالة سفر مهنية تقدم خدمات سفر شاملة تشمل باقات سياحية وخدمات التأشيرات وحلول السفر. رحلتك تبدأ من هنا."
  }
  if (section.includes("قراقيش") || section.includes("qaraqish") || section.includes("مخبز قراقيش")) {
    return "تصميم منيو العيد والهوية البصرية لمخبز تقليدي في أسيوط، يقدم الحلويات والمخبوزات المصرية التقليدية."
  }
  return "شركة احترافية تقدم خدمات وحلول عالية الجودة"
}

const getCompanyStats = (sectionTitle: string) => {
  const section = sectionTitle.toLowerCase()

  if (section.includes("ابن الاسطى") || section.includes("craftsman")) {
    return { projects: 100, clients: 60, experience: "30+ Years", location: "Dakahlia, Egypt" }
  }
  if (section.includes("الجزار") || section.includes("butcher")) {
    return { projects: 40, clients: 25, experience: "25+ Years", location: "Qalyubia, Egypt" }
  }
  if (section.includes("الحبشي") || section.includes("habashy")) {
    return { projects: 110, clients: 70, experience: "9+ Years", location: "Damietta, Egypt" }
  }
  if (section.includes("الإنجاز المعتمد") || section.includes("النجاز المعتمد") || section.includes("الانجاز المعتمد") || sectionTitle === "الانجاز المعتمد") {
    return { projects: 180, clients: 95, experience: "7+ Years", location: "Dubai, UAE" }
  }
  if (section.includes("الوكيل") || section.includes("agent")) {
    return { projects: 120, clients: 75, experience: "9+ Years", location: "Damietta, Egypt" }
  }
  if (section.includes("بداية مشوارك") || section.includes("journey")) {
    return { projects: 400, clients: 250, experience: "4+ Years", location: "Assiut, Egypt" }
  }
  if (section.includes("ترحال") || section.includes("travel")) {
    return { projects: 250, clients: 180, experience: "10+ Years", location: "Cairo (Maadi), Egypt" }
  }
  if (section.includes("عسل") || section.includes("honey")) {
    return { projects: 60, clients: 35, experience: "20+ Years", location: "Damietta, Egypt" }
  }
  if (section.includes("كشخة الزين") || section.includes("beauty")) {
    return { projects: 90, clients: 55, experience: "8+ Years", location: "Casablanca, Morocco" }
  }
  if (section.includes("كينج وود") || section.includes("king wood")) {
    return { projects: 150, clients: 80, experience: "8+ Years", location: "Damietta, Egypt" }
  }
  if (section.includes("ماستر") || section.includes("master") || section.includes("اسنان") || section.includes("dental")) {
    return { projects: 220, clients: 140, experience: "11+ Years", location: "Damietta, Egypt" }
  }
  if (section.includes("مكة") || section.includes("makkah")) {
    return { projects: 500, clients: 300, experience: "15+ Years", location: "Dakahlia, Egypt" }
  }
  if (section.includes("ووديكس") || section.includes("woodex")) {
    return { projects: 130, clients: 85, experience: "6+ Years", location: "Damietta, Egypt" }
  }
  if (section.includes("ابو سعد") || section.includes("أبو سعد")) {
    return { projects: 280, clients: 150, experience: "12+ Years", location: "Damietta, Egypt / Misrata, Libya" }
  }
  if (section.includes("اتقان المريد") || section.includes("perfection seeking")) {
    return { projects: 300, clients: 200, experience: "6+ Years", location: "Baghdad, Iraq" }
  }
  if (section.includes("الاخوة المتحدون") || section.includes("united brothers")) {
    return { projects: 80, clients: 45, experience: "12+ Years", location: "Dakahlia, Egypt" }
  }
  if (section.includes("العلا") || section.includes("al ola")) {
    return { projects: 320, clients: 180, experience: "14+ Years", location: "Riyadh, Saudi Arabia" }
  }
  if (section.includes("تيستي") || section.includes("tasty")) {
    return { projects: 75, clients: 45, experience: "6+ Years", location: "Damietta, Egypt" }
  }
  if (section.includes("رضوان") || section.includes("radwan")) {
    return { projects: 95, clients: 65, experience: "8+ Years", location: "Damietta, Egypt" }
  }
  if (section.includes("هاي براند") || section.includes("high brand")) {
    return { projects: 200, clients: 120, experience: "5+ Years", location: "Damietta, Egypt" }
  }
  if (section.includes("i brand") || section.includes("ibrand")) {
    return { projects: 350, clients: 200, experience: "3+ Years", location: "Damietta, Egypt" }
  }
  if (section.includes("مكتب الصفوة") || section.includes("الصفوة") || section.includes("safwa") || section.includes("مكتب الصفوت")) {
    return { projects: 120, clients: 80, experience: "8+ Years", location: "Aswan, Egypt" }
  }

  if (section.includes("عبدالله شوز") || section.includes("عبدالله شوز ") || section.includes("abdullah shoes") || section.includes("مكتب الصفوت")) {
    return { projects: 120, clients: 80, experience: "8+ Years", location: "Amman, Jordan" }
  }

  if (section.includes("مكتب القائد") || section.includes("القائد للسفريات") || section.includes("commander travel") || section.includes("مكتب الصفوت")) {
    return { projects: 120, clients: 80, experience: "8+ Years", location: "Benghazi, Libya" }
  }

  if (section.includes("قراقيش") || section.includes("qaraqish") || section.includes("مخبز قراقيش")) {
    return { projects: 50, clients: 30, experience: "3+ Years", location: "Assiut, Egypt" }
  }

  return { projects: 100, clients: 60, experience: "5+ Years", location: "Egypt" }
}

const getCategory = (sectionTitle: string): string => {
  const section = sectionTitle.toLowerCase()

  if (section.includes("ابن الاسطى") || section.includes("craftsman")) {
    return "Automotive Services"
  }
  if (section.includes("الجزار") || section.includes("butcher")) {
    return "Steel Trading & Supply"
  }
  if (section.includes("الحبشي") || section.includes("habashy")) {
    return "Furniture Manufacturing"
  }
  if (section.includes("الإنجاز المعتمد") || section.includes("النجاز المعتمد") || section.includes("الانجاز المعتمد") || sectionTitle === "الانجاز المعتمد") {
    return "Business Services"
  }
  if (section.includes("الوكيل") || section.includes("agent")) {
    return "Automotive Services"
  }
  if (section.includes("بداية مشوارك") || section.includes("journey")) {
    return "Special Education"
  }
  if (section.includes("ترحال") || section.includes("travel") || section.includes("tr7al")) {
    return "Tourism & Travel"
  }
  if (section.includes("عسل") || section.includes("honey")) {
    return "Real Estate Marketing"
  }
  if (section.includes("كشخة الزين") || section.includes("beauty")) {
    return "Fashion & Retail"
  }
  if (section.includes("كينج وود") || section.includes("king wood")) {
    return "Wood Manufacturing"
  }
  if (section.includes("ماستر") || section.includes("master") || section.includes("اسنان") || section.includes("dental")) {
    return "Healthcare & Medical Services"
  }
  if (section.includes("مكة") || section.includes("makkah")) {
    return "Kitchen Manufacturing"
  }
  if (section.includes("ووديكس") || section.includes("woodex")) {
    return "Kitchen Materials & Supplies"
  }
  if (section.includes("ابو سعد") || section.includes("أبو سعد") || section.includes("بو سعد")) {
    return "Export & International Transport"
  }
  if (section.includes("اتقان المريد") || section.includes("perfection seeking")) {
    return "Islamic Education"
  }
  if (section.includes("الاخوة المتحدون") || section.includes("united brothers")) {
    return "Kitchen Manufacturing"
  }
  if (section.includes("العلا") || section.includes("al ola") || section.includes("al-ola") || section.includes("el-ola")) {
    return "Export & International Transport"
  }
  if (section.includes("تيستي") || section.includes("tasty")) {
    return "Food & Beverage"
  }
  if (section.includes("رضوان") || section.includes("radwan")) {
    return "Furniture Manufacturing"
  }
  if (section.includes("هاي براند") || section.includes("high brand")) {
    return "Clothing Manufacturing"
  }
  if (section.includes("i brand") || section.includes("ibrand")) {
    return "Marketing & Advertising"
  }
  if (section.includes("مكتب الصفوة") || section.includes("الصفوة") || section.includes("safwa") || section.includes("مكتب الصفوت")) {
    return "Civil Engineering Office"
  }
  if (section.includes("عبدالله شوز") || section.includes("عبدالله شوز ") || section.includes("abdullah shoes")) {
    return "Fashion & Retail"
  }
  if (section.includes("القائد للسفريات") || section.includes("الصفوة") || section.includes("commander travel")) {
    return "Tourism & Travel"
  }

  if (section.includes("قراقيش") || section.includes("qaraqish") || section.includes("مخبز قراقيش")) {
    return "Food & Beverage"
  }

  return "Other"
}
const getCategoryAr = (sectionTitle: string): string => {
  const section = sectionTitle.toLowerCase()

  if (section.includes("ابن الاسطى") || section.includes("craftsman")) {
    return "خدمات السيارات"
  }
  if (section.includes("الجزار") || section.includes("butcher")) {
    return "تجارة وتوريد الحديد"
  }
  if (section.includes("الحبشي") || section.includes("habashy")) {
    return "صناعة الأثاث"
  }
  if (section.includes("الإنجاز المعتمد") || section.includes("النجاز المعتمد") || section.includes("الانجاز المعتمد") || sectionTitle === "الانجاز المعتمد") {
    return "خدمات الأعمال"
  }
  if (section.includes("الوكيل") || section.includes("agent")) {
    return "خدمات السيارات"
  }
  if (section.includes("بداية مشوارك") || section.includes("journey")) {
    return "التعليم الخاص"
  }
  if (section.includes("ترحال") || section.includes("travel") || section.includes("tr7al")) {
    return "السياحة والسفر"
  }
  if (section.includes("عسل") || section.includes("honey")) {
    return "التسويق العقاري"
  }
  if (section.includes("كشخة الزين") || section.includes("beauty")) {
    return "الأزياء والتجزئة"
  }
  if (section.includes("كينج وود") || section.includes("king wood")) {
    return "صناعة الأخشاب"
  }
  if (section.includes("ماستر") || section.includes("master") || section.includes("اسنان") || section.includes("dental")) {
    return "الرعاية الصحية والخدمات الطبية"
  }
  if (section.includes("مكة") || section.includes("makkah")) {
    return "صناعة المطابخ"
  }
  if (section.includes("ووديكس") || section.includes("woodex")) {
    return "خامات ومستلزمات المطابخ"
  }
  if (section.includes("ابو سعد") || section.includes("أبو سعد") || section.includes("بو سعد")) {
    return "التصدير والنقل الدولي"
  }
  if (section.includes("اتقان المريد") || section.includes("perfection seeking")) {
    return "التعليم الإسلامي"
  }
  if (section.includes("الاخوة المتحدون") || section.includes("united brothers")) {
    return "صناعة المطابخ"
  }
  if (section.includes("العلا") || section.includes("al ola") || section.includes("al-ola") || section.includes("el-ola")) {
    return "التصدير والنقل الدولي"
  }
  if (section.includes("تيستي") || section.includes("tasty")) {
    return "الطعام والمشروبات"
  }
  if (section.includes("رضوان") || section.includes("radwan")) {
    return "صناعة الأثاث"
  }
  if (section.includes("هاي براند") || section.includes("high brand")) {
    return "صناعة الملابس"
  }
  if (section.includes("i brand") || section.includes("ibrand")) {
    return "التسويق والإعلان"
  }
  if (section.includes("مكتب الصفوة") || section.includes("الصفوة") || section.includes("safwa") || section.includes("مكتب الصفوت")) {
    return "مكتب هندسة مدنية"
  }
  if (section.includes("عبدالله شوز") || section.includes("عبدالله شوز ") || section.includes("abdullah shoes")) {
    return "الأزياء والتجزئة"
  }
  if (section.includes("مكتب القائد") || section.includes("القائد للسفريات") || section.includes("commander travel")) {
    return "السفر والسياحة"
  }

  if (section.includes("قراقيش") || section.includes("qaraqish") || section.includes("مخبز قراقيش")) {
    return "الطعام والمشروبات"
  }

  return "أخرى"
}

export default function CompanyGallery({ serviceId }: CompanyGalleryProps) {
  const { isDark } = useTheme()
  const { isRTL, t } = useTranslationContext()
  const [companies, setCompanies] = useState<CompanyCard[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCompany, setSelectedCompany] = useState<CompanyCard | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const [autoPlayInterval, setAutoPlayInterval] = useState(5000)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.8)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [showInfo, setShowInfo] = useState(false)

  // Auto-play functionality
  useEffect(() => {
    if (!selectedCompany || !autoPlay) return

    const interval = setInterval(() => {
      setCurrentImageIndex(prev => {
        const nextIndex = prev === selectedCompany.images.length - 1 ? 0 : prev + 1
        return nextIndex
      })
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [selectedCompany, autoPlay, autoPlayInterval])

  useEffect(() => {
    const controller = new AbortController()
    async function fetchCompanies() {
      try {
        setLoading(true)
        const res = await fetch(`/api/service-results?service=${encodeURIComponent(serviceId)}&t=${Date.now()}`, {
          signal: controller.signal,
          cache: "no-store",
        })
        if (!res.ok) throw new Error("Failed to load service results")
        const data = await res.json()

        // Transform sections into company cards
        const companyCards: CompanyCard[] = data.sections.map((section: any) => ({
          id: section.title,
          name: getCompanyName(section.title),
          nameAr: getCompanyNameAr(section.title),
          description: getCompanyDescription(section.title),
          descriptionAr: getCompanyDescriptionAr(section.title),
          images: section.items.map((item: any) => item.src),
          category: getCategory(section.title),
          categoryAr: getCategoryAr(section.title),
          stats: getCompanyStats(section.title)
        }))

        setCompanies(companyCards)
      } catch (e) {
        if ((e as any).name !== "AbortError") {
          console.error("Failed to load companies:", e)
          setCompanies([])
        }
      } finally {
        setLoading(false)
      }
    }
    fetchCompanies()
    return () => controller.abort()
  }, [serviceId])


  const openCompany = (company: CompanyCard) => {
    setSelectedCompany(company)
    setCurrentImageIndex(0)
    setAutoPlay(false)
    setShowInfo(false)
  }

  const closeCompany = () => {
    setSelectedCompany(null)
    setIsPlaying(false)
    setAutoPlay(false)
    setShowInfo(false)
  }

  const goToPreviousImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!selectedCompany) return
    const newIndex = currentImageIndex === 0 ? selectedCompany.images.length - 1 : currentImageIndex - 1
    setCurrentImageIndex(newIndex)
  }

  const goToNextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!selectedCompany) return
    const newIndex = currentImageIndex === selectedCompany.images.length - 1 ? 0 : currentImageIndex + 1
    setCurrentImageIndex(newIndex)
  }

  const handleVideoPlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  const handleVolumeToggle = () => {
    if (videoRef.current) {
      const newMuted = !isMuted
      videoRef.current.muted = newMuted
      setIsMuted(newMuted)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
    }
  }

  const toggleAutoPlay = () => {
    setAutoPlay(!autoPlay)
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const handleDownload = () => {
    if (selectedCompany && selectedCompany.images[currentImageIndex]) {
      const link = document.createElement('a')
      link.href = selectedCompany.images[currentImageIndex]
      link.download = `${selectedCompany.name}-${currentImageIndex + 1}.jpg`
      link.click()
    }
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: selectedCompany?.name || 'iBrand Gallery',
        text: selectedCompany?.description || 'Check out this amazing work!',
        url: window.location.href
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  const isVideo = (filename: string) => /\.(mp4|webm|ogg)$/i.test(filename)
  const isAudio = (filename: string) => /\.(mp3|wav|m4a|aac)$/i.test(filename)

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full"
        />
      </div>
    )
  }

  if (companies.length === 0) {
    return (
      <div className="text-center py-20">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-6xl mb-4">🎨</motion.div>
        <p className={`text-lg ${isDark ? "text-gray-300" : "text-gray-600"}`}>
          {isRTL ? "لا توجد شركات متاحة حالياً" : "No companies available at the moment"}
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Company Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company, index) => (
          <motion.div
            key={company.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 ${isDark ? "bg-slate-800 border border-slate-700" : "bg-white border border-gray-200"
              }`}
            onClick={() => openCompany(company)}
            whileHover={{ y: -5 }}
          >
            {/* Company Image (fit entire image) */}
            <div className="relative h-48 overflow-hidden">
              {company.images.length > 0 && (
                (() => {
                  const coverIndex = index === 1 && company.images.length > 2
                    ? Math.floor(company.images.length / 2)
                    : 0
                  return (
                    <Image
                      src={company.images[coverIndex]}
                      alt={isRTL ? getCompanyNameAr(company.id) : getCompanyName(company.id)}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105 bg-white"
                    />
                  )
                })()
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Category Badge */}
              <motion.div
                className="absolute top-4 right-4"
                whileHover={{ scale: 1.1 }}
              >
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${isDark ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-800"
                  }`}>
                  {isRTL ? company.categoryAr : company.category}
                </span>
              </motion.div>

              {/* Stats Overlay */}
              {company.stats && (
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white text-xs">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-3 h-3" />
                      <span>{company.stats.projects} Projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3 h-3" />
                      <span>{company.stats.clients} Clients</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Company Info */}
            <div className="p-6">
              <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"
                }`}>
                {isRTL ? getCompanyNameAr(company.id) : getCompanyName(company.id)}
              </h3>

              <p className={`text-sm leading-relaxed mb-4 ${isDark ? "text-gray-300" : "text-gray-600"
                }`}>
                {isRTL ? company.descriptionAr : company.description}
              </p>

              {company.stats && (
                <div className="flex items-center gap-4 mb-4 text-xs">
                  <div className={`flex items-center gap-1 ${isDark ? "text-gray-400" : "text-gray-500"
                    }`}>
                    <Calendar className="w-3 h-3" />
                    <span>{company.stats.experience}</span>
                  </div>
                  <div className={`flex items-center gap-1 ${isDark ? "text-gray-400" : "text-gray-500"
                    }`}>
                    <MapPin className="w-3 h-3" />
                    <span>{company.stats.location}</span>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"
                  }`}>
                  {company.images.length} {isRTL ? "صورة" : "images"}
                </span>

                <motion.span
                  className={`text-xs font-semibold ${isDark ? "text-blue-400" : "text-blue-600"
                    }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {isRTL ? "انقر للعرض" : "Click to view"}
                </motion.span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Enhanced Company Modal - Like Portfolio */}
      <AnimatePresence>
        {selectedCompany && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={closeCompany}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={`relative w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-3xl ${isDark ? "bg-slate-900" : "bg-white"
                } shadow-2xl`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeCompany}
                className={`absolute top-4 right-4 z-20 p-3 rounded-full ${isDark ? "bg-slate-800 text-white hover:bg-slate-700" : "bg-white text-gray-800 hover:bg-gray-100"
                  } shadow-lg transition-colors duration-200`}
              >
                <X size={24} />
              </button>

              {/* Image Gallery: grid when few images, carousel when many */}
              <div
                className={`relative h-96 md:h-[500px] overflow-hidden ${isDark ? "bg-slate-900" : "bg-white"}`}
                onMouseEnter={() => setAutoPlay(false)}
                onMouseLeave={() => setAutoPlay(true)}
              >
                {selectedCompany.images.length > 0 && selectedCompany.images.length <= 3 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-3">
                    {selectedCompany.images.map((img, idx) => (
                      <div key={idx} className="relative aspect-square rounded-xl overflow-hidden border bg-white">
                        {isVideo(img) ? (
                          <video src={img} className="absolute inset-0 w-full h-full object-contain bg-black" playsInline />
                        ) : isAudio(img) ? (
                          <div className="absolute inset-0 flex items-center justify-center p-4">
                            <audio src={img} controls className="w-full max-w-xs" />
                          </div>
                        ) : (
                          <Image src={img} alt={`${selectedCompany.name} ${idx + 1}`} fill className="object-contain bg-white" sizes="33vw" />
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    {isVideo(selectedCompany.images[currentImageIndex]) ? (
                      <>
                        <video
                          ref={videoRef}
                          src={selectedCompany.images[currentImageIndex]}
                          className="w-full h-full object-contain"
                          controls={false}
                          onLoadedMetadata={() => {
                            if (videoRef.current) {
                              videoRef.current.volume = volume
                              videoRef.current.muted = isMuted
                            }
                          }}
                        />
                        {/* Center Play/Pause overlay */}
                        <button
                          onClick={(e) => { e.stopPropagation(); handleVideoPlay() }}
                          className={`absolute inset-0 m-auto w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all ${isDark ? "bg-slate-900/60 text-white hover:bg-slate-900/80" : "bg-white/80 text-slate-900 hover:bg-white"}`}
                          style={{ width: 64, height: 64 }}
                        >
                          {isPlaying ? <Pause className="w-10 h-10" /> : <Play className="w-10 h-10" />}
                        </button>
                      </>
                    ) : isAudio(selectedCompany.images[currentImageIndex]) ? (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <motion.div
                            className="text-6xl mb-4"
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            🎵
                          </motion.div>
                          <audio src={selectedCompany.images[currentImageIndex]} controls className="w-full max-w-md" />
                        </div>
                      </div>
                    ) : (
                      <Image
                        src={selectedCompany.images[currentImageIndex]}
                        alt={`${isRTL ? getCompanyNameAr(selectedCompany.id) : getCompanyName(selectedCompany.id)} - Image ${currentImageIndex + 1}`}
                        fill
                        sizes="100vw"
                        className="object-contain"
                        priority={true}
                      />
                    )}

                    {/* Navigation Arrows */}
                    {selectedCompany.images.length > 1 && (
                      <>
                        <button
                          onClick={goToPreviousImage}
                          className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full ${isDark ? "bg-slate-800/80 text-white hover:bg-slate-700" : "bg-white/80 text-gray-800 hover:bg-white"
                            } shadow-lg transition-colors duration-200`}
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button
                          onClick={goToNextImage}
                          className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full ${isDark ? "bg-slate-800/80 text-white hover:bg-slate-700" : "bg-white/80 text-gray-800 hover:bg-white"
                            } shadow-lg transition-colors duration-200`}
                        >
                          <ChevronRight size={24} />
                        </button>
                      </>
                    )}

                    {/* Image Counter */}
                    {selectedCompany.images.length > 1 && (
                      <div className={`absolute bottom-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${isDark ? "bg-slate-800/80 text-white" : "bg-white/80 text-gray-800"
                        }`}>
                        {currentImageIndex + 1} / {selectedCompany.images.length}
                      </div>
                    )}

                    {/* Auto-play Button */}
                    <div className="absolute top-4 left-4">
                      <button
                        onClick={toggleAutoPlay}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${autoPlay
                            ? isDark ? "bg-green-600/90 text-white" : "bg-green-500/90 text-white"
                            : isDark ? "bg-slate-800/80 text-gray-300" : "bg-white/80 text-gray-700"
                          } backdrop-blur-sm transition-colors duration-200`}
                      >
                        {autoPlay ? "⏸️ Auto" : "▶️ Auto"}
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* Company Details - Scrollable Content */}
              <div className="max-h-[calc(90vh-500px)] overflow-y-auto">
                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div>
                      <h2 className={`text-3xl font-bold mb-4 ${isDark ? "text-white" : "text-slate-900"
                        }`}>
                        {isRTL ? getCompanyNameAr(selectedCompany.id) : getCompanyName(selectedCompany.id)}
                      </h2>
                      <p className={`text-lg mb-6 leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"
                        }`}>
                        {isRTL ? selectedCompany.descriptionAr : selectedCompany.description}
                      </p>

                      {/* Category */}
                      <div className="mb-6">
                        <h4 className={`text-lg font-semibold mb-3 ${isDark ? "text-white" : "text-slate-900"
                          }`}>
                          {isRTL ? "التصنيف" : "Category"}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          <span
                            className={`px-4 py-2 rounded-xl text-sm font-medium border shadow-sm transition-transform duration-200 ${isDark ? "bg-slate-800 text-blue-300 border-slate-700 hover:scale-[1.02]" : "bg-white text-blue-800 border-gray-200 hover:scale-[1.02]"
                              }`}
                          >
                            {isRTL ? selectedCompany.categoryAr : selectedCompany.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div>
                      {/* Company Stats */}
                      {selectedCompany.stats && (
                        <div className="mb-6">
                          <h4 className={`text-lg font-semibold mb-3 ${isDark ? "text-white" : "text-slate-900"
                            }`}>
                            {isRTL ? "إحصائيات الشركة" : "Company Statistics"}
                          </h4>
                          <div className="space-y-3">
                            <div className={`p-4 rounded-2xl ${isDark ? "bg-slate-800" : "bg-gray-50"
                              } border ${isDark ? "border-slate-700" : "border-gray-200"
                              }`}>
                              <div className="flex items-center justify-between mb-1">
                                <span className={`font-medium ${isDark ? "text-white" : "text-slate-900"
                                  }`}>
                                  {isRTL ? "المشاريع المكتملة" : "Completed Projects"}
                                </span>
                                <span className={`text-2xl font-bold ${isDark ? "text-blue-400" : "text-blue-600"
                                  }`}>
                                  {selectedCompany.stats.projects}+
                                </span>
                              </div>
                            </div>
                            <div className={`p-4 rounded-2xl ${isDark ? "bg-slate-800" : "bg-gray-50"
                              } border ${isDark ? "border-slate-700" : "border-gray-200"
                              }`}>
                              <div className="flex items-center justify-between mb-1">
                                <span className={`font-medium ${isDark ? "text-white" : "text-slate-900"
                                  }`}>
                                  {isRTL ? "العملاء السعداء" : "Happy Clients"}
                                </span>
                                <span className={`text-2xl font-bold ${isDark ? "text-green-400" : "text-green-600"
                                  }`}>
                                  {selectedCompany.stats.clients}+
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Company Info */}
                      {selectedCompany.stats && (
                        <div className={`p-4 rounded-2xl ${isDark ? "bg-slate-800" : "bg-gray-50"
                          } border ${isDark ? "border-slate-700" : "border-gray-200"
                          }`}>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                                {isRTL ? "الخبرة" : "Experience"}
                              </span>
                              <span className={`font-medium ${isDark ? "text-white" : "text-slate-900"}`}>
                                {selectedCompany.stats.experience}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                                {isRTL ? "الموقع" : "Location"}
                              </span>
                              <span className={`font-medium ${isDark ? "text-white" : "text-slate-900"}`}>
                                {selectedCompany.stats.location}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                                {isRTL ? "التصنيف" : "Category"}
                              </span>
                              <span className={`font-medium ${isDark ? "text-white" : "text-slate-900"}`}>
                                {isRTL ? selectedCompany.categoryAr : selectedCompany.category}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Thumbnail Gallery */}
                  {selectedCompany.images.length > 1 && (
                    <div className="mt-8">
                      <h4 className={`text-lg font-semibold mb-3 ${isDark ? "text-white" : "text-slate-900"
                        }`}>
                        {isRTL ? "معرض الصور" : "Image Gallery"}
                      </h4>
                      <div className="flex gap-3 overflow-x-auto pb-2">
                        {selectedCompany.images.map((image, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`flex-shrink-0 w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all duration-200 ${currentImageIndex === idx
                                ? "border-blue-500 scale-105"
                                : isDark ? "border-slate-600 hover:border-slate-500" : "border-gray-200 hover:border-gray-300"
                              }`}
                          >
                            {isVideo(image) ? (
                              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                                <Play className="w-8 h-8 text-gray-600" />
                              </div>
                            ) : isAudio(image) ? (
                              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                                <span className="text-2xl">🎵</span>
                              </div>
                            ) : (
                              <Image
                                src={image}
                                alt={`${isRTL ? getCompanyNameAr(selectedCompany.id) : getCompanyName(selectedCompany.id)} ${idx + 1}`}
                                width={96}
                                height={96}
                                className="object-contain bg-white"
                              />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
