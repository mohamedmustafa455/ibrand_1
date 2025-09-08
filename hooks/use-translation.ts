"use client"

import { useState, useEffect, useCallback } from "react"
import { usePathname } from "next/navigation"

interface Translations {
  [key: string]: {
    [key: string]: string
  }
}

const translations: Translations = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",
    "nav.getStarted": "Get Started",
    "nav.viewEarth": "View 3D Earth",
    "nav.career": "Career",

    // Hero
    "hero.title": "We Turn Ideas Into Impact",
    "hero.subtitle":
      "Professional marketing agency delivering creative branding solutions, digital marketing campaigns, and advertising strategies that drive measurable growth for your business.",
    "hero.cta": "Start Your Growth Now",
    "hero.learnMore": "Learn More",
    "hero.avgRoi": "Average ROI Increase",
    "hero.campaigns": "Successful Campaigns",
    "hero.satisfaction": "Client Satisfaction",
    "hero.exploreEarth": "Explore Our Global Reach",

    // About
    "about.title": "About iBrand",
    "about.description":
      "iBrand is an electronic marketing company that aims to elevate client projects, increase their sales, and expand their reach through a specialized team that ensures brand excellence and maximizes the benefits of social media platforms.",
    "about.excellence": "Excellence",
    "about.excellenceDesc":
      "We deliver premium quality in every project, ensuring your brand stands out in the competitive market.",
    "about.collaboration": "Collaboration",
    "about.collaborationDesc":
      "Our team works closely with clients to understand their vision and bring it to life through strategic marketing.",
    "about.innovation": "Innovation",
    "about.innovationDesc":
      "We stay ahead of marketing trends, implementing cutting-edge strategies for maximum impact.",
    "about.results": "Results",
    "about.resultsDesc": "Every campaign is designed with measurable goals, delivering tangible ROI for your business.",
    "about.mission": "Our Mission",
    "about.missionDesc": "Helping clients achieve stronger sales, expand their reach to new audiences, and enhance their market position through smart strategies that ensure competitive superiority and achieve the highest return on investment.",
    "about.vision": "Our Vision",
    "about.visionDesc": "To be the leading global company in achieving success for companies and projects through smart marketing strategies that protect against loss and ensure effective reach to target customers.",
    "about.goal": "Our Goal",
    "about.goalDesc": "Enabling companies and projects to open new markets, achieve wider reach, and increase their sales in the easiest ways, through integrated solutions that help excel and reach the target audience accurately.",
    "about.journey": "Your Journey With Us",
    "about.journeyTitle": "Our Process",
    "about.journeyDesc": "It starts with deep analysis and research of the market, competitors, and audience, through building visual identity, creating engaging content and creative videos, launching effective advertising campaigns, interaction and page management, to continuous development and analysis to ensure the best results.",
    "about.downloadBrochure": "Download Brochure",
    "about.watchVideo": "Watch Our Story",

    // Services
    "services.title": "Our Services",
    "services.description":
      "Comprehensive marketing and branding services designed to elevate your business. From creative design to digital marketing campaigns, we deliver results that matter.",
    "services.voiceover": "Voice-over Services",
    "services.voiceoverDesc":
      "Professional voice-over production for commercials, explainer videos, and brand storytelling that captures your audience's attention.",
    "services.sponsoredAds": "Sponsored Ads",
    "services.sponsoredAdsDesc":
      "Strategic paid advertising campaigns across Google, Facebook, Instagram, and LinkedIn to maximize your ROI and reach target audiences.",
    "services.contentWriting": "Content Writing",
    "services.contentWritingDesc":
      "SEO-optimized content creation including blog posts, website copy, and marketing materials that drive engagement and conversions.",
    "services.monthlyManagement": "Monthly Management",
    "services.monthlyManagementDesc":
      "Comprehensive monthly marketing management including strategy planning, campaign execution, and performance analytics, Respond to page messages and respond to customers",
    "services.videoEditing": "Video Editing",
    "services.videoEditingDesc":
      "Professional video editing services for marketing campaigns, social media content, and promotional materials.",
    "services.visualIdentity": "Visual Identity",
    "services.visualIdentityDesc":
      "Complete brand identity design including logos, color schemes, typography, and brand guidelines for consistent marketing.",
    "services.motionGraphics": "Motion Graphics",
    "services.motionGraphicsDesc":
      "Dynamic motion graphics and animations for digital marketing campaigns, explainer videos, and brand presentations.",
    "services.graphicDesign": "Graphic Design",
    "services.graphicDesignDesc":
      "Creative graphic design solutions for print and digital marketing materials, social media assets, and advertising campaigns.",
    "services.getQuote": "Get Quote",
    "services.learnMore": "Learn More",

    // Portfolio
    "portfolio.title": "Our Portfolio",
    "portfolio.description":
      "Discover how we've helped businesses achieve remarkable growth through strategic marketing campaigns, creative branding solutions, and data-driven advertising strategies.",
    "portfolio.viewProject": "View Project",
    "portfolio.viewAll": "View All Projects",
    "portfolio.allCategories": "All Categories",

    // Testimonials
    "testimonials.title": "What Our Clients Say",
    "testimonials.description":
      "Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about our marketing expertise and the results we&apos;ve delivered for their businesses.",
    "testimonials.readMore": "Read Full Review",

    // Contact
    "contact.title": "Your Success Story Starts Here",
    "contact.subtitle":
      "Contact the Leading Marketing Agency Today — Let's Transform Your Business with Strategic Marketing Solutions and Creative Campaigns That Drive Results.",
    "contact.getInTouch": "Get in Touch",
    "contact.ready":
      "Ready to elevate your brand and drive measurable growth? Our expert marketing team is here to help you achieve your business goals through innovative strategies and creative solutions.",
    "contact.email": "Email Us",
    "contact.call": "Call Us",
    "contact.visit": "Visit Us",
    "contact.whyChoose": "Why Choose iBrand?",
    "contact.name": "Full Name",
    "contact.emailAddress": "Email Address",
    "contact.phone": "Phone Number",
    "contact.message": "Project Details",
    "contact.messagePlaceholder": "Tell us about your project, goals, and how we can help you achieve success...",
    "contact.submit": "Start Your Growth Journey",
    "contact.sendMessage": "Send Message",
    "contact.privacy":
      "By submitting this form, you agree to our privacy policy and terms of service. We'll respond within 24 hours.",
    "contact.scheduleCall": "Schedule a Call",
    "contact.downloadGuide": "Download Marketing Guide",

    // Footer
    "footer.description":
      "Professional marketing agency specializing in creative branding solutions, digital marketing campaigns, and strategic advertising services in the region.",
    "footer.quickLinks": "Quick Links",
    "footer.services": "Our Services",
    "footer.stayConnected": "Stay Connected",
    "footer.newsletter": "Subscribe to our newsletter for marketing tips and industry insights.",
    "footer.readyToGrow": "Ready to Grow?",
    "footer.freeConsultation": "Get a free marketing consultation today.",
    "footer.copyright": "iBrand Marketing Agency. All rights reserved. Professional marketing and branding services.",
    "footer.subscribe": "Subscribe",

    // Service Pages
    "servicePage.hero.subtitle": "Professional {service} services that drive results and elevate your brand",
    "servicePage.features.title": "Key Features",
    "servicePage.packages.title": "Choose Your Package",
    "servicePage.packages.popular": "Most Popular",
    "servicePage.packages.getStarted": "Get Started",
    "servicePage.packages.contactUs": "Contact Us",
    "servicePage.testimonials.title": "Client Success Stories",
    "servicePage.testimonials.verified": "Verified Client",
    "servicePage.faqs.title": "Frequently Asked Questions",
    "servicePage.timeline.title": "Our Process",
    "servicePage.timeline.step": "Step {number}",
    "servicePage.caseStudy.title": "Case Study",
    "servicePage.caseStudy.challenge": "The Challenge",
    "servicePage.caseStudy.solution": "Our Solution",
    "servicePage.caseStudy.results": "Results Achieved",
    "servicePage.cta.title": "Ready to Get Started?",
    "servicePage.cta.subtitle": "Let's discuss your project and create something amazing together",
    "servicePage.cta.button": "Start Your Project",
    "servicePage.gallery.title": "Our Work",
    "servicePage.backToServices": "← Back to All Services",
    "servicePage.relatedServices": "Related Services",
    "servicePage.features.subtitle": "What makes our {service} service exceptional",
    "servicePage.packages.subtitle": "Flexible pricing plans to match your needs and budget",
    "servicePage.testimonials.subtitle": "See how we've helped businesses like yours achieve success",
    "servicePage.process.subtitle": "Our proven methodology ensures quality results every time",
    
    // Common
    "common.loading": "Loading...",
    "common.error": "Something went wrong",
    "common.success": "Success!",
    "common.close": "Close",
    "common.open": "Open",
    "common.save": "Save",
    "common.cancel": "Cancel",
    "common.continue": "Continue",
    "common.back": "Back",
    "common.next": "Next",
    "common.previous": "Previous",

    // Success Partners
    "partners.title": "Our Success Partners",
    "partners.subtitle": "Discover how we've helped our partners achieve exceptional results and remarkable growth in their businesses",
    "partners.badge": "Success Partners",
    "partners.amazingResults": "Amazing Results",
    "partners.seeHowWeHelped": "See how we helped achieve success",
    "partners.wantToBeNext": "Want to be the next success partner?",
    "partners.startJourney": "Start Your Success Journey",
    "partners.of": "of",
    "partners.swipeHint": "Swipe to navigate",
    "partners.dragHint": "Drag to navigate",
    "partners.autoPlay": "Auto-play",
    "partners.pause": "Pause",
    "partners.resume": "Resume",

    // Gallery/Results
    "gallery.results.loading": "Loading results...",
    "gallery.results.empty": "No results to display yet",
    "gallery.header": "Our Work Results",
    "gallery.all": "All",
    "gallery.showAll": "Show all",
    "gallery.showLess": "Show less",
    "gallery.play": "Play",
    "gallery.pause": "Pause",
    "gallery.view": "View",
    "gallery.mediaPreview": "Media preview",
    "gallery.noItems": "No items to display",

    // Portfolio modal and labels
    "portfolio.servicesProvided": "Services Provided",
    "portfolio.resultsAchieved": "Results Achieved",
    "portfolio.imageGallery": "Image Gallery",
    "portfolio.client": "Client",
    "portfolio.duration": "Duration",
    "portfolio.category": "Category",
    "portfolio.noProjects": "No Projects Found",
    "portfolio.tryDifferentCategory": "Try selecting a different category",
  },
  ar: {
    // Header
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.services": "خدماتنا",
    "nav.portfolio": "أعمالنا",
    "nav.testimonials": "آراء العملاء",
    "nav.contact": "اتصل بنا",
    "nav.getStarted": "ابدأ الآن",
    "nav.viewEarth": "عرض الأرض ثلاثية الأبعاد",
    "nav.career": "توظيف",

    // Hero
    "hero.title": "نحول الأفكار إلى تأثير",
    "hero.subtitle":
      "وكالة تسويق محترفة تقدم حلول العلامة التجارية الإبداعية وحملات التسويق الرقمي واستراتيجيات الإعلان التي تحقق نمواً قابلاً للقياس لعملك.",
    "hero.cta": "ابدأ نموك الآن",
    "hero.learnMore": "اعرف المزيد",
    "hero.avgRoi": "متوسط زيادة العائد على الاستثمار",
    "hero.campaigns": "حملة ناجحة",
    "hero.satisfaction": "رضا العملاء",
    "hero.exploreEarth": "استكشف انتشارنا العالمي",

    // About
    "about.title": "عن iBrand",
    "about.description":
      "iBrand هي شركة تسويق إلكتروني تهدف إلى الارتقاء بمشاريع العملاء، زيادة مبيعاتهم، وتوسيع انتشارهم من خلال فريق متخصص يضمن تميز العلامة التجارية وتحقيق أقصى استفادة من منصات السوشيال ميديا.",
    "about.excellence": "التميز",
    "about.excellenceDesc": "نقدم جودة عالية في كل مشروع، مما يضمن تميز علامتك التجارية في السوق التنافسي.",
    "about.collaboration": "التعاون",
    "about.collaborationDesc": "يعمل فريقنا بشكل وثيق مع العملاء لفهم رؤيتهم وتحقيقها من خلال التسويق الاستراتيجي.",
    "about.innovation": "الابتكار",
    "about.innovationDesc": "نبقى في المقدمة في اتجاهات التسويق، وننفذ استراتيجيات متطورة لتحقيق أقصى تأثير.",
    "about.results": "النتائج",
    "about.resultsDesc": "كل حملة مصممة بأهداف قابلة للقياس، وتحقق عائد استثمار ملموس لعملك.",
    "about.mission": "مهمتنا",
    "about.missionDesc": "مساعدة العملاء على تحقيق مبيعات أقوى، توسيع نطاق وصولهم لجمهور جديد، وتعزيز مكانتهم في السوق عبر استراتيجيات ذكية تضمن التفوق في المنافسة وتحقيق أعلى عائد على الاستثمار.",
    "about.vision": "رؤيتنا",
    "about.visionDesc": "أن نكون الشركة الرائدة عالميًا في تحقيق النجاح للشركات والمشاريع من خلال استراتيجيات تسويقية ذكية تحمي من الخسارة وتضمن الوصول الفعال للعملاء المستهدفين.",
    "about.goal": "هدفنا",
    "about.goalDesc": "تمكين الشركات والمشاريع من فتح أسواق جديدة، تحقيق انتشار أوسع، وزيادة مبيعاتها بأسهل الطرق، عبر حلول متكاملة تساعد على التميز والوصول الدقيق للجمهور المستهدف.",
    "about.journey": "رحلة التطور",
    "about.journeyTitle": "عملية العمل",
    "about.journeyDesc": "تبدأ من تحليل وبحث عميق للسوق والمنافسين والجمهور، مرورًا ببناء الهوية البصرية، إنشاء محتوى جذاب وفيديوهات إبداعية، إطلاق حملات إعلانية فعالة، التفاعل وإدارة الصفحات، وصولًا إلى التطوير والتحليل المستمر لضمان أفضل النتائج.",
    "about.downloadBrochure": "تحميل الكتيب",
    "about.watchVideo": "شاهد قصتنا",

    // Services
    "services.title": "خدماتنا",
    "services.description":
      "خدمات تسويق وعلامة تجارية شاملة مصممة لرفع مستوى عملك. من التصميم الإبداعي إلى حملات التسويق الرقمي، نحقق نتائج مهمة.",
    "services.voiceover": "خدمات التعليق الصوتي",
    "services.voiceoverDesc":
      "إنتاج تعليق صوتي محترف للإعلانات التجارية ومقاطع الفيديو التوضيحية وسرد العلامة التجارية الذي يجذب انتباه جمهورك.",
    "services.sponsoredAds": "الإعلانات الممولة",
    "services.sponsoredAdsDesc":
      "حملات إعلانية مدفوعة استراتيجية عبر جوجل وفيسبوك وإنستغرام ولينكد إن لتعظيم عائد الاستثمار والوصول للجمهور المستهدف.",
    "services.contentWriting": "كتابة المحتوى",
    "services.contentWritingDesc":
      "إنشاء محتوى محسن لمحركات البحث بما في ذلك منشورات المدونة ونسخ المواقع والمواد التسويقية التي تحفز المشاركة والتحويلات.",
    "services.monthlyManagement": "الإدارة الشهرية",
    "services.monthlyManagementDesc":
      "إدارة تسويقية شهرية شاملة تشمل التخطيط الاستراتيجي وتنفيذ الحملات وتحليل الأداء.الرد علي رسائل الصفحه و الرد علي العملاء",
    "services.videoEditing": "تحرير الفيديو",
    "services.videoEditingDesc":
      "خدمات تحرير فيديو محترفة للحملات التسويقية ومحتوى وسائل التواصل الاجتماعي والمواد الترويجية.",
    "services.visualIdentity": "الهوية البصرية",
    "services.visualIdentityDesc":
      "تصميم هوية علامة تجارية كاملة بما في ذلك الشعارات وأنظمة الألوان والطباعة وإرشادات العلامة التجارية للتسويق المتسق.",
    "services.motionGraphics": "الرسوم المتحركة",
    "services.motionGraphicsDesc":
      "رسوم متحركة ديناميكية ورسوم متحركة لحملات التسويق الرقمي ومقاطع الفيديو التوضيحية وعروض العلامة التجارية.",
    "services.graphicDesign": "التصميم الجرافيكي",
    "services.graphicDesignDesc":
      "حلول تصميم جرافيكي إبداعية للمواد التسويقية المطبوعة والرقمية وأصول وسائل التواصل الاجتماعي والحملات الإعلانية.",
    "services.getQuote": "احصل على عرض سعر",
    "services.learnMore": "اعرف المزيد",

    // Portfolio
    "portfolio.title": "أعمالنا",
    "portfolio.description":
      "اكتشف كيف ساعدنا الشركات في تحقيق نمو ملحوظ من خلال الحملات التسويقية الاستراتيجية وحلول العلامة التجارية الإبداعية واستراتيجيات الإعلان المدفوعة بالبيانات.",
    "portfolio.viewProject": "عرض المشروع",
    "portfolio.viewAll": "عرض جميع المشاريع",
    "portfolio.allCategories": "جميع الفئات",

    // Testimonials
    "testimonials.title": "ما يقوله عملاؤنا",
    "testimonials.description":
      "لا تأخذ كلامنا فقط. إليك ما يقوله عملاؤنا الراضون عن خبرتنا التسويقية والنتائج التي حققناها لأعمالهم.",
    "testimonials.readMore": "اقرأ المراجعة كاملة",

    // Contact
    "contact.title": "قصة نجاحك تبدأ هنا",
    "contact.subtitle":
      "اتصل بوكالة التسويق الرائدة اليوم — دعنا نحول عملك بحلول التسويق الاستراتيجية والحملات الإبداعية التي تحقق النتائج.",
    "contact.getInTouch": "تواصل معنا",
    "contact.ready":
      "مستعد لرفع مستوى علامتك التجارية وتحقيق نمو قابل للقياس؟ فريق التسويق الخبير لدينا هنا لمساعدتك في تحقيق أهداف عملك من خلال الاستراتيجيات المبتكرة والحلول الإبداعية.",
    "contact.email": "راسلنا",
    "contact.call": "اتصل بنا",
    "contact.visit": "زرنا",
    "contact.whyChoose": "لماذا تختار iBrand؟",
    "contact.name": "الاسم الكامل",
    "contact.emailAddress": "عنوان البريد الإلكتروني",
    "contact.phone": "رقم الهاتف",
    "contact.message": "تفاصيل المشروع",
    "contact.messagePlaceholder": "أخبرنا عن مشروعك وأهدافك وكيف يمكننا مساعدتك في تحقيق النجاح...",
    "contact.submit": "ابدأ رحلة نموك",
    "contact.sendMessage": "إرسال الرسالة",
    "contact.privacy": "بإرسال هذا النموذج، فإنك توافق على سياسة الخصوصية وشروط الخدمة الخاصة بنا. سنرد خلال 24 ساعة.",
    "contact.scheduleCall": "جدولة مكالمة",
    "contact.downloadGuide": "تحميل دليل التسويق",

    // Footer
    "footer.description":
      "وكالة تسويق محترفة متخصصة في حلول العلامة التجارية الإبداعية وحملات التسويق الرقمي وخدمات الإعلان الاستراتيجية في المنطقة.",
    "footer.quickLinks": "روابط سريعة",
    "footer.services": "خدماتنا",
    "footer.stayConnected": "ابق على تواصل",
    "footer.newsletter": "اشترك في نشرتنا الإخبارية للحصول على نصائح التسويق ورؤى الصناعة.",
    "footer.readyToGrow": "مستعد للنمو؟",
    "footer.freeConsultation": "احصل على استشارة تسويقية مجانية اليوم.",
    "footer.copyright": "وكالة iBrand للتسويق. جميع الحقوق محفوظة. خدمات التسويق والعلامة التجارية المحترفة.",
    "footer.subscribe": "اشترك",

    // Service Pages
    "servicePage.hero.subtitle": "خدمات {service} المحترفة التي تحقق النتائج وترفع من مستوى علامتك التجارية",
    "servicePage.features.title": "الميزات الرئيسية",
    "servicePage.packages.title": "اختر الباقة المناسبة",
    "servicePage.packages.popular": "الأكثر شعبية",
    "servicePage.packages.getStarted": "ابدأ الآن",
    "servicePage.packages.contactUs": "تواصل معنا",
    "servicePage.testimonials.title": "قصص نجاح العملاء",
    "servicePage.testimonials.verified": "عميل موثق",
    "servicePage.faqs.title": "الأسئلة الشائعة",
    "servicePage.timeline.title": "عمليتنا",
    "servicePage.timeline.step": "الخطوة {number}",
    "servicePage.caseStudy.title": "دراسة حالة",
    "servicePage.caseStudy.challenge": "التحدي",
    "servicePage.caseStudy.solution": "حلنا",
    "servicePage.caseStudy.results": "النتائج المحققة",
    "servicePage.cta.title": "مستعد للبدء؟",
    "servicePage.cta.subtitle": "دعنا نناقش مشروعك ونبدع شيئاً رائعاً معاً",
    "servicePage.cta.button": "ابدأ مشروعك",
    "servicePage.gallery.title": "أعمالنا",
    "servicePage.backToServices": "← العودة لجميع الخدمات",
    "servicePage.relatedServices": "الخدمات ذات الصلة",
    "servicePage.features.subtitle": "ما يجعل خدمة {service} لدينا استثنائية",
    "servicePage.packages.subtitle": "خطط تسعير مرنة تناسب احتياجاتك وميزانيتك",
    "servicePage.testimonials.subtitle": "شاهد كيف ساعدنا شركات مثل شركتك في تحقيق النجاح",
    "servicePage.process.subtitle": "منهجيتنا المثبتة تضمن نتائج عالية الجودة في كل مرة",

    // Common
    "common.loading": "جاري التحميل...",
    "common.error": "حدث خطأ ما",
    "common.success": "نجح!",
    "common.close": "إغلاق",
    "common.open": "فتح",
    "common.save": "حفظ",
    "common.cancel": "إلغاء",
    "common.continue": "متابعة",
    "common.back": "رجوع",
    "common.next": "التالي",
    "common.previous": "السابق",

    // Success Partners
    "partners.title": "شركاؤنا الناجحون",
    "partners.subtitle": "اكتشف كيف ساعدنا شركاؤنا في تحقيق نتائج عظيمة ونمو ملحوظ في أعمالهم",
    "partners.badge": "شركاؤنا الناجحون",
    "partners.amazingResults": "نتائج رائعة",
    "partners.seeHowWeHelped": "راجع كيف ساعدنا في تحقيق النجاح",
    "partners.wantToBeNext": "هل تريد أن تكون الشريك التالي للنجاح؟",
    "partners.startJourney": "ابدأ رحلة نجاحك",
    "partners.of": "من",
    "partners.swipeHint": "قم بالتمرير للتنقل",
    "partners.dragHint": "قم بسحب للتنقل",
    "partners.autoPlay": "التشغيل التلقائي",
    "partners.pause": "إيقاف",
    "partners.resume": "استئناف",

    // Gallery/Results
    "gallery.results.loading": "جارٍ تحميل النتائج...",
    "gallery.results.empty": "لا توجد نتائج للعرض حاليًا",
    "gallery.header": "نتائج أعمالنا",
    "gallery.all": "الكل",
    "gallery.showAll": "عرض الكل",
    "gallery.showLess": "عرض أقل",
    "gallery.play": "تشغيل",
    "gallery.pause": "إيقاف",
    "gallery.view": "عرض",
    "gallery.mediaPreview": "معاينة وسائط",
    "gallery.noItems": "لا توجد عناصر لعرضها",

    // Portfolio modal and labels
    "portfolio.servicesProvided": "الخدمات المقدمة",
    "portfolio.resultsAchieved": "النتائج المحققة",
    "portfolio.imageGallery": "معرض الصور",
    "portfolio.client": "العميل",
    "portfolio.duration": "المدة",
    "portfolio.category": "الفئة",
    "portfolio.noProjects": "لا توجد مشاريع",
    "portfolio.tryDifferentCategory": "جرب اختيار فئة مختلفة",
  },
}

export function useTranslation() {
  const [currentLang, setCurrentLang] = useState("en")
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [transitionFrom, setTransitionFrom] = useState("en")
  const [transitionTo, setTransitionTo] = useState("en")
  const pathname = typeof window !== "undefined" ? usePathname() : null

  // Initialize language based on route first, then fallback to saved preference
  useEffect(() => {
    try {
      const isArabicRoute = typeof window !== "undefined" && (pathname?.startsWith("/ar") ?? false)
      const routeLang = isArabicRoute ? "ar" : "en"
      const savedLang = localStorage.getItem("language") || routeLang

      const initialLang = routeLang || savedLang
      setCurrentLang(initialLang)
      setTransitionFrom(initialLang)
      setTransitionTo(initialLang)
      localStorage.setItem("language", initialLang)
      applyLanguageSettings(initialLang)
    } catch {
      // no-op
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Keep language in sync when navigating between /ar and non-/ar routes
  useEffect(() => {
    if (pathname == null) return
    const isArabicRoute = pathname.startsWith("/ar")
    const targetLang = isArabicRoute ? "ar" : "en"
    if (targetLang !== currentLang && !isTransitioning) {
      setCurrentLang(targetLang)
      setTransitionFrom(currentLang)
      setTransitionTo(targetLang)
      localStorage.setItem("language", targetLang)
      applyLanguageSettings(targetLang)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  const applyLanguageSettings = useCallback((lang: string) => {
    // Set document direction for Arabic
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = lang

    // Add Arabic font class with smooth transition
    if (lang === "ar") {
      document.documentElement.classList.add("arabic-font")
      document.documentElement.classList.add("rtl-mode")
    } else {
      document.documentElement.classList.remove("arabic-font")
      document.documentElement.classList.remove("rtl-mode")
    }

    // Add smooth transition class
    document.documentElement.classList.add("language-transition")

    // Remove transition class after animation completes
    setTimeout(() => {
      document.documentElement.classList.remove("language-transition")
    }, 300)

    // Force re-render of all components
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }))
  }, [])

  const changeLanguage = useCallback((lang: string) => {
    if (lang === currentLang || isTransitioning) return

    setTransitionFrom(currentLang)
    setTransitionTo(lang)
    setIsTransitioning(true)

    // Add fade out effect
    document.body.classList.add("language-fade-out")

    setTimeout(() => {
      setCurrentLang(lang)
      localStorage.setItem("language", lang)
      applyLanguageSettings(lang)

      // Remove fade out and add fade in
      document.body.classList.remove("language-fade-out")
      document.body.classList.add("language-fade-in")

      setTimeout(() => {
        document.body.classList.remove("language-fade-in")
        setIsTransitioning(false)
      }, 150)
    }, 150)
  }, [currentLang, isTransitioning, applyLanguageSettings])

  const normalizeKey = (rawKey: string) => {
    // Map data ids like "sponsored-ads" to translation keys like services.sponsoredAds
    if (rawKey.startsWith("services.")) {
      const parts = rawKey.split(".")
      const last = parts.pop() as string
      if (last && last.includes("-")) {
        const camel = last.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
        return [...parts, camel].join(".")
      }
    }
    return rawKey
  }

  const t = (key: string): string => {
    const k = normalizeKey(key)
    return translations[currentLang]?.[k] || translations.en[k] || key
  }

  // Debug: Log current language state
  if (typeof window !== "undefined") {
    console.log("Current Language:", currentLang, "isRTL:", currentLang === "ar")
  }

  return {
    currentLang,
    changeLanguage,
    t,
    isRTL: currentLang === "ar",
    isTransitioning,
    transitionFrom,
    transitionTo,
  }
}
