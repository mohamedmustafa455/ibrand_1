import { Mic, Target, PenTool, Calendar, Video, Palette, Play, Layers } from "lucide-react"

export interface ServiceData {
  id: string
  icon: any
  slug: string
  heroImage: string
  galleryImages: string[]
  features: {
    icon: string
    title: string
    description: string
    titleAr?: string
    descriptionAr?: string
  }[]
  testimonials: {
    name: string
    company: string
    avatar: string
    rating: number
    text: string
    textAr?: string
    companyAr?: string
    resultStats?: {
      metric: string
      value: string
      metricAr?: string
    }
  }[]
  faqs: {
    question: string
    answer: string
    questionAr?: string
    answerAr?: string
  }[]
  timeline: {
    step: number
    title: string
    description: string
    duration: string
    titleAr?: string
    descriptionAr?: string
    durationAr?: string
  }[]
  caseStudy?: {
    client: string
    challenge: string
    solution: string
    results: {
      metric: string
      value: string
      description: string
    }[]
  }
}

export const servicesData: ServiceData[] = [
  {
    id: "voiceover",
    slug: "voiceover",
    icon: Mic,
    heroImage: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    features: [
      {
        icon: "🎙️",
        title: "Studio Quality Recording",
        description: "Professional recording equipment and acoustically treated studios for crystal clear audio",
        titleAr: "تسجيل بجودة الاستوديو",
        descriptionAr: "معدات احترافية وغرف معالجة صوتيًا لصوت نقي وواضح"
      },
      {
        icon: "🌍",
        title: "Multilingual Voice Talents",
        description: "Native speakers in Arabic, English, and other languages for authentic delivery",
        titleAr: "أصوات متعددة اللغات",
        descriptionAr: "متحدثون أصليون بالعربية والإنجليزية ولغات أخرى لتقديم أصيل"
      },
      {
        icon: "🎯",
        title: "Targeted Voice Matching",
        description: "Perfect voice selection based on your target audience and brand personality",
        titleAr: "مطابقة صوت مستهدفة",
        descriptionAr: "اختيار صوت مثالي بحسب جمهورك المستهدف وشخصية علامتك"
      },
      {
        icon: "⚡",
        title: "Fast Turnaround",
        description: "Quick delivery without compromising quality, with rush options available",
        titleAr: "تسليم سريع",
        descriptionAr: "تسليم سريع دون المساس بالجودة، مع خيارات استعجال"
      }
    ],
    testimonials: [
      {
        name: "Sarah Al-Mahmoud",
        company: "TechStart Arabia",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b882?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5,
        text: "The voice-over quality exceeded our expectations. The Arabic narrator perfectly captured our brand's tone and our product demo video engagement increased by 280%.",
        textAr: "جودة التعليق الصوتي فاقت توقعاتنا. الراوي العربي جسّد نبرة علامتنا بدقة وارتفعت تفاعلات فيديو العرض التجريبي بنسبة 280%.",
        companyAr: "TechStart Arabia",
        resultStats: {
          metric: "Video Engagement",
          metricAr: "تفاعل الفيديو",
          value: "+280%"
        }
      },
      {
        name: "Ahmed Hassan",
        company: "Golden Properties",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5,
        text: "Professional service from start to finish. The bilingual voice-over for our real estate campaign helped us reach both Arabic and English speaking clients effectively.",
        textAr: "خدمة احترافية من البداية للنهاية. التعليق الصوتي باللغتين ساعدنا على الوصول بفعالية لعملاء عرب وإنجليز.",
        companyAr: "Golden Properties"
      },
      {
        name: "Layla Kassem",
        company: "Beauty Bloom",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5,
        text: "The voice talent perfectly matched our luxury brand image. Our social media ads with professional voice-over saw a 150% increase in conversion rates.",
        textAr: "الصوت المختار طابق هوية علامتنا الفاخرة تمامًا. إعلانات السوشيال مع تعليق احترافي حققت زيادة 150% في التحويلات.",
        companyAr: "Beauty Bloom"
      }
    ],
    faqs: [
      {
        question: "What types of voice-over services do you offer?",
        answer: "We offer commercial voice-overs, explainer videos, e-learning content, audiobooks, and brand storytelling in multiple languages including Arabic and English.",
        questionAr: "ما أنواع خدمات التعليق الصوتي التي تقدمونها؟",
        answerAr: "نقدم تعليقًا صوتيًا للإعلانات التجارية، الفيديوهات التوضيحية، محتوى التعليم الإلكتروني، الكتب الصوتية، وسرد الهوية الصوتية للعلامة التجارية. يتوفر التعليق الصوتي باللغتين العربية والإنجليزية، مع توفير أصوات ذكور وإناث وبفئات عمرية ولهجات متعددة بما يحقق أفضل تطابق مع شخصية علامتك والجمهور المستهدف."
      },
      {
        question: "How do you ensure voice quality and consistency?",
        answer: "We use professional studio equipment, experienced voice talents, and quality control processes to ensure consistent, high-quality audio output.",
        questionAr: "كيف تضمنون جودة الصوت والثبات في الأداء؟",
        answerAr: "نستخدم معدات تسجيل احترافية داخل غرف معالجة صوتيًا، مع مهندسي صوت ذوي خبرة لضبط مستويات الصوت وإزالة الضوضاء وتحسين النقاء. كما نعتمد عملية تدقيق متعددة المراحل تشمل المراجعة اللغوية، ومطابقة النبرة مع شخصية العلامة، وتجارب استماع على أجهزة مختلفة لضمان ثبات الجودة عبر جميع المنصات."
      },
      {
        question: "Can you match existing brand voice guidelines?",
        answer: "Absolutely! We work with your existing brand voice guidelines to ensure the voice-over perfectly matches your brand personality and tone.",
        questionAr: "هل يمكنكم مطابقة دليل الصوت الحالي الخاص بعلامتنا؟",
        answerAr: "بالتأكيد. نراجع دليل الصوت الخاص بعلامتك ونستخلص السمات الرئيسية (النبرة، الإيقاع، درجة الرسمية، الكلمات المفضلة والمحظورة)، ثم نعرض عينات أصوات متوافقة وننفّذ تجربة أداء قصيرة قبل التسجيل النهائي لضمان التطابق التام."
      },
      {
        question: "What file formats do you provide?",
        answer: "We provide multiple formats including MP3, WAV, and AIFF files, optimized for different platforms and use cases.",
        questionAr: "ما صيغ الملفات التي توفرونها؟",
        answerAr: "نوفر ملفات بصيغ متعددة مثل MP3 وWAV وAIFF بجودات متفاوتة وفق الاستخدام (إعلانات سوشيال ميديا، إذاعة، تلفزيون، بودكاست). كما يمكننا تسليم ملفات مقسمة حسب المشاهد، مع أسماء مسارات واضحة وميتابيانات مرتبة لتسهيل النشر."
      }
    ],
    timeline: [
      {
        step: 1,
        title: "Project Briefing",
        description: "We discuss your project requirements, target audience, and desired tone",
        duration: "30 minutes",
        titleAr: "موجز المشروع",
        descriptionAr: "نناقش متطلبات المشروع والجمهور المستهدف والنبرة المطلوبة",
        durationAr: "30 دقيقة"
      },
      {
        step: 2,
        title: "Voice Talent Selection",
        description: "Choose from our curated selection of professional voice talents",
        duration: "2 hours",
        titleAr: "اختيار الموهبة الصوتية",
        descriptionAr: "الاختيار من قائمة مواهب صوتية احترافية",
        durationAr: "ساعتان"
      },
      {
        step: 3,
        title: "Recording & Production",
        description: "Professional studio recording with quality control and editing",
        duration: "24-48 hours",
        titleAr: "التسجيل والإنتاج",
        descriptionAr: "تسجيل استوديو احترافي مع ضبط جودة وتحرير",
        durationAr: "24-48 ساعة"
      },
      {
        step: 4,
        title: "Review & Delivery",
        description: "Final review, revisions if needed, and delivery in your preferred formats",
        duration: "2-4 hours",
        titleAr: "المراجعة والتسليم",
        descriptionAr: "مراجعة نهائية وتعديلات إن لزم وتسليم بالصيغة المطلوبة",
        durationAr: "2-4 ساعات"
      }
    ],
    caseStudy: {
      client: "Arabian Luxury Hotels",
      challenge: "Create compelling voice-overs for a multi-language hotel marketing campaign targeting both local and international guests",
      solution: "We provided professional Arabic and English voice-overs with cultural sensitivity, using premium voice talents that matched the luxury brand positioning",
      results: [
        {
          metric: "Booking Inquiries",
          value: "+320%",
          description: "Increase in direct booking inquiries after campaign launch"
        },
        {
          metric: "Brand Recognition",
          value: "+180%",
          description: "Improvement in brand recall among target demographics"
        },
        {
          metric: "Customer Satisfaction",
          value: "9.2/10",
          description: "Average rating for the marketing campaign voice-over quality"
        }
      ]
    }
  },
  {
    id: "sponsored-ads",
    slug: "sponsored-ads", 
    icon: Target,
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    features: [
      {
        icon: "🎯",
        title: "Precision Targeting",
        description: "Advanced audience targeting using demographics, interests, behaviors, and lookalike audiences",
        titleAr: "استهداف دقيق",
        descriptionAr: "استهداف متقدم للجمهور باستخدام البيانات الديموغرافية والاهتمامات والسلوك والجمهور المشابه"
      },
      {
        icon: "📊",
        title: "Real-time Analytics",
        description: "Comprehensive tracking and reporting with actionable insights for continuous optimization",
        titleAr: "تحليلات لحظية",
        descriptionAr: "تتبع شامل وتقارير واضحة مع رؤى قابلة للتنفيذ للتحسين المستمر"
      },
      {
        icon: "💰",
        title: "ROI Optimization",
        description: "Continuous bid optimization and budget allocation for maximum return on investment",
        titleAr: "تعظيم العائد على الاستثمار",
        descriptionAr: "تحسين مستمر للمزايدات وتوزيع الميزانية لتحقيق أعلى عائد"
      },
      {
        icon: "🚀",
        title: "Multi-Platform Management",
        description: "Seamless campaign management across Google, Facebook, Instagram, LinkedIn, and TikTok",
        titleAr: "إدارة متعددة المنصات",
        descriptionAr: "إدارة سلسة للحملات عبر Google وFacebook وInstagram وLinkedIn وTikTok"
      }
    ],
    testimonials: [
      {
        name: "Omar Al-Rashid",
        company: "Elite Fashion",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5,
        text: "Our sponsored ads campaign generated 5x ROI within the first month. The targeting was so precise that our cost per acquisition dropped by 60%.",
        textAr: "حققت حملتنا للإعلانات الممولة عائد 5x خلال الشهر الأول. كان الاستهداف دقيقًا جدًا مما خفّض تكلفة الاكتساب بنسبة 60%.",
        companyAr: "Elite Fashion",
        resultStats: {
          metric: "Return on Ad Spend",
          metricAr: "العائد على الإنفاق الإعلاني",
          value: "500%"
        }
      },
      {
        name: "Fatima Al-Zahra",
        company: "EduTech Solutions",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5,
        text: "The team's expertise in Arabic market targeting is exceptional. We reached our enrollment goals 3 months ahead of schedule thanks to their strategic approach.",
        textAr: "خبرة الفريق في استهداف السوق العربي استثنائية. بلغنا أهداف التسجيل قبل 3 أشهر من الموعد بفضل منهجهم الاستراتيجي.",
        companyAr: "EduTech Solutions"
      },
      {
        name: "Mohammed Farouk",
        company: "Green Energy Co",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5,
        text: "Impressive results! Our lead quality improved dramatically, and we're now converting 40% more prospects into customers. Best marketing investment we've made.",
        textAr: "نتائج مبهرة! تحسّنت جودة العملاء المحتملين بشكل كبير، ونحوّل الآن 40% المزيد من العملاء المحتملين إلى مشترين. أفضل استثمار تسويقي قمنا به.",
        companyAr: "Green Energy Co"
      }
    ],
    faqs: [
      {
        question: "Which advertising platforms do you specialize in?",
        answer: "We manage campaigns on Google Ads, Facebook, Instagram, LinkedIn, TikTok, Snapchat, and Twitter, choosing the best platforms for your target audience.",
        questionAr: "ما المنصات الإعلانية التي تتخصصون بها؟",
        answerAr: "ندير الحملات على Google Ads وFacebook وInstagram وLinkedIn وTikTok وSnapchat وX (Twitter). نختار المنصة وفقًا لهدفك (وعي/زيارات/مبيعات)، وخصائص جمهورك (العمر، الاهتمامات، اللغة، المواقع)، وتكلفة الوصول المتوقعة لضمان أعلى عائد على الإنفاق الإعلاني."
      },
      {
        question: "How do you measure campaign success?",
        answer: "We track key metrics including ROAS, conversion rates, cost per acquisition, click-through rates, and overall campaign performance to ensure optimal results.",
        questionAr: "كيف تقيسون نجاح الحملات؟",
        answerAr: "نقيس النجاح عبر مؤشرات رئيسية مثل ROAS، معدل التحويل، تكلفة الاستحواذ، نسبة النقر، وقيمة العميل طويلة الأمد. نُنشئ تتبعًا دقيقًا للأحداث عبر Google Analytics وPixel وUTM ونُقدم تقارير أسبوعية وملخصات شهرية واضحة قابلة للتنفيذ."
      },
      {
        question: "What makes your targeting strategy unique?",
        answer: "We combine advanced audience insights, behavioral data, and cultural understanding to create highly targeted campaigns that resonate with your specific market.",
        questionAr: "ما الذي يجعل استراتيجية الاستهداف لديكم مميزة؟",
        answerAr: "نمزج بين التخصص التقني (جمهور شبيه، شرائح مخصّصة، استبعاد ذكي)، والبعد الثقافي (لهجات، مواسم، عادات شراء)، واختبارات A/B مستمرة للإعلانات والصفحات المقصودة. هذا يقلل الهدر ويرفع جودة العملاء المحتملين."
      },
      {
        question: "How often do you optimize campaigns?",
        answer: "We continuously monitor and optimize campaigns daily, with comprehensive performance reviews and strategy adjustments based on real-time data.",
        questionAr: "كل متى يتم تحسين الحملات؟",
        answerAr: "نراقب الأداء يوميًا ونُجري تعديلات على الميزانيات والمزايدات والجمهور والكرياتيف. كما نعقد مراجعات أسبوعية للتكتيكات وتقارير شهرية للاستراتيجية، مع توصيات واضحة للتوسّع وتقليل التكاليف."
      }
    ],
    timeline: [
      {
        step: 1,
        title: "Strategy Development",
        description: "Comprehensive market research and campaign strategy planning",
        duration: "3-5 days",
        titleAr: "تطوير الاستراتيجية",
        descriptionAr: "بحث سوق شامل وتخطيط استراتيجية الحملة",
        durationAr: "3-5 أيام"
      },
      {
        step: 2,
        title: "Campaign Setup",
        description: "Account setup, audience creation, and ad creative development",
        duration: "2-3 days",
        titleAr: "إعداد الحملة",
        descriptionAr: "إعداد الحساب وإنشاء الجمهور وتطوير الكرياتيف الإعلاني",
        durationAr: "2-3 أيام"
      },
      {
        step: 3,
        title: "Launch & Optimization",
        description: "Campaign launch with daily monitoring and optimization",
        duration: "Ongoing",
        titleAr: "الإطلاق والتحسين",
        descriptionAr: "إطلاق الحملة مع متابعة يومية وتحسين مستمر",
        durationAr: "مستمر"
      },
      {
        step: 4,
        title: "Reporting & Scaling",
        description: "Performance analysis and strategic scaling of successful campaigns",
        duration: "Weekly",
        titleAr: "التقارير والتوسّع",
        descriptionAr: "تحليل الأداء وتوسيع الحملات الناجحة استراتيجيًا",
        durationAr: "أسبوعي"
      }
    ]
  },
  {
    id: "content-writing",
    slug: "content-writing",
    icon: PenTool,
    heroImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    features: [
      {
        icon: "📝",
        title: "SEO-Optimized Content",
        description: "Every piece is crafted with SEO best practices to rank higher and drive organic traffic",
        titleAr: "محتوى محسّن لمحركات البحث",
        descriptionAr: "صياغة المحتوى وفق أفضل ممارسات SEO لرفع الترتيب وجلب زيارات عضوية"
      },
      {
        icon: "🎭",
        title: "Brand Voice Consistency",
        description: "We develop and maintain your unique brand voice across all content pieces",
        titleAr: "ثبات صوت العلامة",
        descriptionAr: "تطوير صوت مميز للعلامة والحفاظ عليه عبر جميع المحتويات"
      },
      {
        icon: "🔍",
        title: "Research-Driven Writing",
        description: "In-depth industry research ensures accurate, valuable, and engaging content",
        titleAr: "كتابة مدفوعة بالبحث",
        descriptionAr: "بحث معمّق يضمن محتوى دقيقًا وقيّمًا وجذّابًا"
      },
      {
        icon: "📈",
        title: "Conversion-Focused",
        description: "Strategic content designed to guide readers through your sales funnel",
        titleAr: "محور على التحويل",
        descriptionAr: "محتوى استراتيجي يوجّه القارئ عبر مسار المبيعات"
      }
    ],
    testimonials: [
      {
        name: "Nadia Qureshi",
        company: "Health & Wellness Hub",
        avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5,
        text: "The content quality is outstanding! Our blog traffic increased by 400% in 6 months, and we're now ranking on the first page for our target keywords.",
        resultStats: {
          metric: "Organic Traffic",
          metricAr: "زيارات عضوية",
          value: "+400%"
        }
      },
      {
        name: "Khalid Al-Mansouri",
        company: "Legal Associates",
        avatar: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5,
        text: "Professional, engaging content that perfectly captures our expertise. Client inquiries from our blog have increased significantly since we started working with iBrand.",
        textAr: "محتوى احترافي وجذّاب يعكس خبرتنا بدقة. ارتفع عدد الاستفسارات من المدونة بشكل ملحوظ منذ بدأنا التعاون مع iBrand.",
        companyAr: "Legal Associates"
      },
      {
        name: "Amira Hassan",
        company: "Digital Solutions Inc",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5,
        text: "The team understands our technical industry deeply. Their content has positioned us as thought leaders and helped us close bigger deals with enterprise clients.",
        textAr: "الفريق يفهم صناعتنا التقنية بعمق. محتواهم وضعنا كقادة فكر وساعدنا على إبرام صفقات أكبر مع عملاء المؤسسات.",
        companyAr: "Digital Solutions Inc"
      }
    ],
    faqs: [
      {
        question: "What types of content do you create?",
        answer: "We create blog posts, website copy, social media content, email newsletters, whitepapers, case studies, and technical documentation tailored to your industry.",
        questionAr: "ما أنواع المحتوى الذي تقدمونه؟",
        answerAr: "نكتب المقالات والمدونات، محتوى صفحات المواقع، محتوى السوشيال ميديا، النشرات البريدية، الدراسات البيضاء، دراسات الحالة، والوثائق التقنية. نلائم الأسلوب ونبرة الصوت مع شخصية علامتك والجمهور المستهدف لضمان التأثير والتحويل."
      },
      {
        question: "How do you ensure content quality and accuracy?",
        answer: "Our content goes through multiple review stages including research, writing, editing, and fact-checking to ensure accuracy and high quality.",
        questionAr: "كيف تضمنون جودة المحتوى ودقته؟",
        answerAr: "يخضع المحتوى لخطوات منهجية: بحث مصادر موثوقة، صياغة أولية، تحرير لغوي وأسلوب، تدقيق معلوماتي وروابط، مراجعة SEO، ثم مراجعة نهائية من منظور تجربة المستخدم."
      },
      {
        question: "Can you write for specialized industries?",
        answer: "Yes! Our writers have expertise across various industries including healthcare, technology, finance, legal, and engineering sectors.",
        questionAr: "هل يمكنكم الكتابة لقطاعات متخصصة؟",
        answerAr: "نعم، لدينا خبرة في قطاعات مثل الصحة والتقنية والمالية والقانون والهندسة. نراجع المعايير الخاصة بكل قطاع ونستعين بخبراء موضوعيين عند الحاجة لضمان الدقة والامتثال."
      },
      {
        question: "How do you optimize content for search engines?",
        answer: "We conduct keyword research, optimize meta descriptions, use proper heading structures, and follow Google's latest SEO guidelines for all content.",
        questionAr: "كيف تُحسنون المحتوى لمحركات البحث؟",
        answerAr: "نُجري بحث كلمات مفتاحية، ونستخدم هيكلة عناوين سليمة، ونحسّن الميتا، وننشئ روابط داخلية وخارجية محسوبة، ونراعي تجربة القراءة وسرعة الصفحة وإشارات E-E-A-T وفق إرشادات Google الحديثة."
      }
    ],
    timeline: [
      {
        step: 1,
        title: "Content Strategy",
        description: "Develop content strategy aligned with your business goals and SEO objectives",
        duration: "2-3 days",
        titleAr: "استراتيجية المحتوى",
        descriptionAr: "تطوير استراتيجية محتوى متماشية مع أهداف العمل وSEO",
        durationAr: "2-3 أيام"
      },
      {
        step: 2,
        title: "Research & Planning",
        description: "Keyword research, topic ideation, and content calendar creation",
        duration: "1-2 days",
        titleAr: "البحث والتخطيط",
        descriptionAr: "بحث الكلمات المفتاحية، ابتكار المواضيع، وإنشاء تقويم المحتوى",
        durationAr: "1-2 يوم"
      },
      {
        step: 3,
        title: "Writing & Editing",
        description: "Professional writing, SEO optimization, and quality editing",
        duration: "3-5 days",
        titleAr: "الكتابة والتحرير",
        descriptionAr: "كتابة احترافية وتحسين SEO وتحرير عالي الجودة",
        durationAr: "3-5 أيام"
      },
      {
        step: 4,
        title: "Review & Publishing",
        description: "Client review, revisions, and content publishing or delivery",
        duration: "1-2 days",
        titleAr: "المراجعة والنشر",
        descriptionAr: "مراجعة العميل، التعديلات، ونشر المحتوى أو تسليمه",
        durationAr: "1-2 يوم"
      }
    ]
  },
  {
    id: "monthly-management",
    slug: "monthly-management",
    icon: Calendar,
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    features: [
      {
        icon: "📋",
        title: "Comprehensive Strategy",
        description: "End-to-end marketing strategy development and execution across all channels",
        titleAr: "استراتيجية شاملة",
        descriptionAr: "تطوير وتنفيذ استراتيجية تسويقية متكاملة عبر جميع القنوات"
      },
      {
        icon: "👥",
        title: "Dedicated Team",
        description: "A full marketing team including strategist, designer, writer, and account manager",
        titleAr: "فريق متخصص",
        descriptionAr: "فريق تسويقي كامل يشمل استراتيجي ومصمم وكاتب ومدير حسابات"
      },
      {
        icon: "💬",
        title: "Page Message Management",
        description: "Professional response to all page messages and client inquiries",
        titleAr: "إدارة رسائل الصفحة",
        descriptionAr: "رد احترافي على جميع رسائل الصفحة واستفسارات العملاء"
      },
      {
        icon: "🤝",
        title: "Client Communication",
        description: "Active engagement and response to client needs and feedback",
        titleAr: "تواصل مع العملاء",
        descriptionAr: "تفاعل نشط ورد على احتياجات العملاء وملاحظاتهم"
      },
      {
        icon: "📊",
        title: "Monthly Reporting",
        description: "Detailed performance reports with insights and recommendations for improvement",
        titleAr: "تقارير شهرية",
        descriptionAr: "تقارير أداء مفصلة مع رؤى وتوصيات للتحسين"
      },
      {
        icon: "🔄",
        title: "Continuous Optimization",
        description: "Regular testing and optimization based on data to improve campaign performance",
        titleAr: "تحسين مستمر",
        descriptionAr: "اختبار وتحسين منتظم بناءً على البيانات لتحسين أداء الحملات"
      }
    ],
    testimonials: [
      {
        name: "Yussef Al-Khairy",
        company: "Luxury Real Estate",
        avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5,
        text: "Having iBrand manage our marketing has been transformative. Our lead generation increased by 250% and we closed 40% more deals this year.",
        resultStats: {
          metric: "Lead Generation",
          value: "+250%"
        }
      },
      {
        name: "Reem Abdullah",
        company: "Boutique Hotels Group",
        avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5,
        text: "The monthly management service is like having an entire marketing department. Our bookings have increased by 180% since we started working with them."
      },
      {
        name: "Tariq Al-Mahmoud",
        company: "Tech Innovations LLC",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5,
        text: "Professional, strategic, and results-driven. Our brand visibility has skyrocketed and we're now the go-to company in our industry segment."
      }
    ],
    faqs: [
      {
        question: "What's included in monthly management service?",
        answer: "Complete marketing management including strategy, content creation, social media, advertising, email marketing, SEO, performance reporting, page message management, and client communication.",
        questionAr: "ما الذي تتضمنه خدمة الإدارة الشهرية؟",
        answerAr: "تتضمن تخطيط الاستراتيجية، إدارة المحتوى، إدارة السوشيال ميديا، الإعلانات المدفوعة، التسويق بالبريد الإلكتروني، تحسين الظهور في محركات البحث، إعداد تقارير أداء دورية، إدارة رسائل الصفحة، والتواصل مع العملاء مع توصيات قابلة للتنفيذ."
      },
      {
        question: "How often do we meet to discuss strategy?",
        answer: "We have regular strategy calls (monthly, bi-weekly, or weekly depending on your package) to review performance and plan ahead.",
        questionAr: "كم مرة نجتمع لمراجعة الاستراتيجية؟",
        answerAr: "نعقد اجتماعات منتظمة حسب الباقة (أسبوعية/نصف شهرية/شهرية) لاستعراض النتائج وتحديث الأولويات وخطة المحتوى والإعلانات للفترة التالية."
      },
      {
        question: "Can you integrate with our existing tools and CRM?",
        answer: "Yes! We integrate with most popular tools including HubSpot, Salesforce, Mailchimp, Google Analytics, and many others.",
        questionAr: "هل تندمجون مع أدواتنا الحالية وCRM؟",
        answerAr: "نعم، نتكامل مع HubSpot وSalesforce وMailchimp وGoogle Analytics وغيرها. ننفذ إعدادات التتبع والأتمتة ونوحّد البيانات لإعداد تقارير واضحة ومركّزة."
      },
      {
        question: "How do you measure success in monthly management?",
        answer: "We track key performance indicators including lead generation, conversion rates, website traffic, social media engagement, and overall ROI.",
        questionAr: "كيف تقيسون النجاح في الإدارة الشهرية؟",
        answerAr: "نقيس توليد العملاء المحتملين، معدلات التحويل، زيارات الموقع، تفاعل السوشيال، ونسبة العائد على الاستثمار. كما نحدد أهدافًا شهرية واضحة مع مؤشرات قيادة مبكرة للتحكم في المسار."
      }
    ],
    timeline: [
      {
        step: 1,
        title: "Onboarding & Audit",
        description: "Comprehensive analysis of current marketing efforts and goal setting",
        duration: "Week 1"
      },
      {
        step: 2,
        title: "Strategy Development",
        description: "Create detailed marketing strategy and campaign planning",
        duration: "Week 2"
      },
      {
        step: 3,
        title: "Implementation",
        description: "Launch campaigns across all agreed channels with monitoring",
        duration: "Week 3-4"
      },
      {
        step: 4,
        title: "Optimization & Reporting",
        description: "Continuous optimization and monthly performance reporting",
        duration: "Ongoing"
      }
    ]
  },
  {
    id: "video-editing",
    slug: "video-editing",
    icon: Video,
    heroImage: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1551818255-e6e10975cd17?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    features: [
      {
        icon: "🎬",
        title: "Professional Editing",
        description: "Hollywood-level editing with advanced techniques, transitions, and effects",
        titleAr: "تحرير احترافي",
        descriptionAr: "تحرير بمستوى هوليوودي بتقنيات متقدمة وانتقالات ومؤثرات"
      },
      {
        icon: "🎨",
        title: "Creative Storytelling",
        description: "Compelling narratives that engage viewers and drive action",
        titleAr: "سرد إبداعي",
        descriptionAr: "حكايات جذابة تشرك المشاهدين وتدفعهم لاتخاذ إجراء"
      },
      {
        icon: "🎵",
        title: "Audio Enhancement",
        description: "Professional audio mixing, sound effects, and music synchronization",
        titleAr: "تحسين الصوت",
        descriptionAr: "مزج صوت احترافي ومؤثرات صوتية وتزامن موسيقى"
      },
      {
        icon: "📱",
        title: "Multi-Platform Optimization",
        description: "Videos optimized for different platforms and aspect ratios",
        titleAr: "تحسين متعدد المنصات",
        descriptionAr: "فيديوهات محسّنة لمختلف المنصات ونِسَب الأبعاد"
      }
    ],
    testimonials: [
      {
        name: "Salim Al-Rashid",
        company: "Adventure Tourism",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5,
        text: "The promotional video they edited for our tours was stunning! It went viral on social media and bookings increased by 300% in the following month.",
        resultStats: {
          metric: "Video Engagement",
          metricAr: "تفاعل الفيديو",
          value: "2.5M views"
        }
      },
      {
        name: "Maryam Al-Zahra",
        company: "Artisan Crafts",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b882?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5,
        text: "Beautiful storytelling through video editing. Our product showcase videos now convert 40% better than our previous attempts.",
        textAr: "سرد بصري جميل عبر المونتاج. عروض منتجاتنا الآن تحقق تحويلًا أعلى بنسبة 40%.",
        companyAr: "Artisan Crafts"
      },
      {
        name: "Hassan Al-Mahmoud",
        company: "Corporate Solutions",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5,
        text: "Professional and creative team. Our corporate presentation videos now look cinematic and have helped us win several big contracts.",
        textAr: "فريق محترف ومبدع. فيديوهات عروضنا المؤسسية أصبحت سينمائية وساعدتنا في الفوز بعقود كبيرة.",
        companyAr: "Corporate Solutions"
      }
    ],
    faqs: [
      {
        question: "What types of videos do you edit?",
        answer: "We edit promotional videos, social media content, corporate presentations, product demos, event highlights, and educational content.",
        questionAr: "ما أنواع الفيديوهات التي تقومون بتحريرها؟",
        answerAr: "نحرر الفيديوهات الترويجية، محتوى السوشيال، العروض المؤسسية، عروض المنتجات، تغطيات الفعاليات، والمحتوى التعليمي. نهتم بالسرد المتماسك والإيقاع المناسب للمنصة والجمهور."
      },
      {
        question: "What file formats do you accept for raw footage?",
        answer: "We accept all major video formats including MP4, MOV, AVI, MKV, and professional formats like ProRes and DNxHD.",
        questionAr: "ما صيغ اللقطات الخام التي تقبلونها؟",
        answerAr: "نقبل صيغًا شائعة مثل MP4 وMOV وAVI وMKV وصيغًا احترافية مثل ProRes وDNxHD. نوصي بتسليم أعلى جودة متاحة لتوسّع مساحة المعالجة دون فقد."
      },
      {
        question: "Can you add subtitles and captions?",
        answer: "Yes! We provide subtitle services in Arabic and English, including accurate timing and styling to match your brand.",
        questionAr: "هل تضيفون ترجمة وSubtitles؟",
        answerAr: "نعم، نوفر ترجمة عربية/إنجليزية مع توقيت دقيق وخيارات تصميم متوافقة مع الهوية البصرية. كما نوفر ملفات SRT/ASS أو حرق الترجمة داخل الفيديو حسب الاستخدام."
      },
      {
        question: "How do you ensure video quality across different platforms?",
        answer: "We optimize videos for each platform's specific requirements, including aspect ratios, file sizes, and quality settings.",
        questionAr: "كيف تضمنون جودة الفيديو عبر المنصات؟",
        answerAr: "نجهز نسخًا متعددة بأبعاد ونِسَب عرض مناسبة (9:16/1:1/16:9)، ونستخدم إعدادات ترميز مختلفة (Bitrate/Codec) بحسب المنصة للحفاظ على الجودة مع حجم ملف مناسب."
      }
    ],
    timeline: [
      {
        step: 1,
        title: "Project Planning",
        description: "Review footage, understand requirements, and create editing plan",
        duration: "1 day",
        titleAr: "تخطيط المشروع",
        descriptionAr: "مراجعة اللقطات وفهم المتطلبات ووضع خطة المونتاج",
        durationAr: "يوم واحد"
      },
      {
        step: 2,
        title: "Rough Cut",
        description: "Initial edit with basic cuts, sequencing, and structure",
        duration: "2-3 days",
        titleAr: "النسخة الأولية",
        descriptionAr: "تحرير مبدئي بالقصّات الأساسية والترتيب والبنية",
        durationAr: "2-3 أيام"
      },
      {
        step: 3,
        title: "Fine Editing",
        description: "Advanced effects, color grading, audio mixing, and transitions",
        duration: "2-4 days",
        titleAr: "التحرير المتقدم",
        descriptionAr: "مؤثرات متقدمة وتدرّج لوني ومزج صوتي وانتقالات",
        durationAr: "2-4 أيام"
      },
      {
        step: 4,
        title: "Final Review",
        description: "Client review, revisions, and final export in required formats",
        duration: "1-2 days",
        titleAr: "المراجعة النهائية",
        descriptionAr: "مراجعة العميل والتعديلات والتصدير النهائي بالصيغة المطلوبة",
        durationAr: "1-2 يوم"
      }
    ]
  },
  {
    id: "visual-identity",
    slug: "visual-identity",
    icon: Palette,
    heroImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    features: [
      {
        icon: "🎨",
        title: "Complete Brand Identity",
        description: "Logo, color palette, typography, and visual guidelines for consistent branding",
        titleAr: "هوية بصرية متكاملة",
        descriptionAr: "شعار ولوحة ألوان وخطوط ودليل مرئي لاتساق الهوية"
      },
      {
        icon: "📐",
        title: "Scalable Design Systems",
        description: "Flexible design elements that work across all mediums and applications",
        titleAr: "أنظمة تصميم قابلة للتوسع",
        descriptionAr: "عناصر تصميم مرنة تعمل عبر جميع الوسائط والتطبيقات"
      },
      {
        icon: "💼",
        title: "Business Applications",
        description: "Business cards, letterheads, presentations, and marketing materials",
        titleAr: "تطبيقات تجارية",
        descriptionAr: "بطاقات أعمال وأوراق رسمية وعروض ومواد تسويقية"
      },
      {
        icon: "🌟",
        title: "Brand Strategy",
        description: "Strategic positioning and messaging that differentiates your brand",
        titleAr: "استراتيجية العلامة",
        descriptionAr: "تموضع ورسائل استراتيجية تميز علامتك"
      },
      {
        icon: "🖥️",
        title: "Identity Applications",
        description: "Digital applications including website design, social media templates, and digital assets",
        titleAr: "تطبيقات الهوية",
        descriptionAr: "تطبيقات رقمية تشمل تصميم الموقع وقوالب السوشيال والأصول الرقمية"
      }
    ],
    testimonials: [
      {
        name: "Aisha Al-Mansouri",
        company: "Gourmet Delights",
        avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5,
        text: "The brand identity they created perfectly captures our premium positioning. Our restaurant's bookings increased by 200% after the rebrand launch.",
        resultStats: {
          metric: "Brand Recognition",
          value: "+200%"
        }
      },
      {
        name: "Ibrahim Al-Kindi",
        company: "Tech Innovations",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5,
        text: "Professional and creative approach to our tech startup branding. The visual identity helped us secure our Series A funding round."
      },
      {
        name: "Noura Al-Sabbagh",
        company: "Wellness Spa Chain",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5,
        text: "Elegant and sophisticated brand identity that perfectly represents our luxury spa experience. Customer satisfaction scores improved significantly."
      }
    ],
    faqs: [
      {
        question: "What's included in a complete brand identity package?",
        answer: "Logo design, color palette, typography, brand guidelines, business card design, and marketing material templates.",
        questionAr: "ما الذي تتضمنه حزمة الهوية البصرية الكاملة؟",
        answerAr: "تشمل تصميم الشعار، لوحة الألوان، نظام الطTypography، دليل استخدام الهوية، تصاميم الكروت والبروشورات والقوالب التسويقية. نسلم حزمة ملفات منظمة وجاهزة للطباعة والنشر."
      },
      {
        question: "How do you ensure the brand identity is unique?",
        answer: "We conduct thorough research on your industry, competitors, and target audience to create a distinctive and memorable brand identity.",
        questionAr: "كيف تضمنون تميّز الهوية البصرية؟",
        answerAr: "نبدأ ببحث معمّق في السوق، وتحليل المنافسين والجمهور، وتحديد مكانة العلامة ورسائلها. ثم نُطور مفاهيم متعددة ونخضعها لاختبارات قابلية التذكّر والتفرّد قبل اعتماد المسار النهائي."
      },
      {
        question: "Can you redesign an existing brand?",
        answer: "Absolutely! We specialize in brand evolution and modernization while maintaining brand equity and recognition.",
        questionAr: "هل يمكنكم إعادة تصميم علامة قائمة؟",
        answerAr: "نعم، نُجري تطويرًا متدرجًا يحافظ على رصيد العلامة ويميّزها بصريًا وحديثًا. نحدّد العناصر التي يجب الحفاظ عليها وتلك التي يلزم تحديثها، مع خطة إطلاق دقيقة."
      },
      {
        question: "What file formats do you provide?",
        answer: "We provide vector files (AI, EPS, SVG), high-resolution rasters (PNG, JPG), and PDFs. All logos come in color, black, and white versions.",
        questionAr: "ما صيغ الملفات التي تسلمونها؟",
        answerAr: "نسلم ملفات متجهة AI/EPS/SVG ونسخ PNG/JPG عالية الدقة وملفات PDF للطباعة. نوفر نسخ الشعار بالألوان والأسود والأبيض والحجم الأفقي والعمودي والاستخدامات الصغيرة."
      }
    ],
    timeline: [
      {
        step: 1,
        title: "Brand Discovery",
        description: "Deep dive into your business, values, and target audience",
        duration: "3-5 days",
        titleAr: "استكشاف العلامة",
        descriptionAr: "فهم عميق لنشاطك وقيمك والجمهور المستهدف",
        durationAr: "3-5 أيام"
      },
      {
        step: 2,
        title: "Concept Development",
        description: "Create initial brand concepts and logo designs",
        duration: "5-7 days",
        titleAr: "تطوير المفهوم",
        descriptionAr: "ابتكار مفاهيم أولية وتصميمات الشعار",
        durationAr: "5-7 أيام"
      },
      {
        step: 3,
        title: "Design Refinement",
        description: "Refine chosen concept and develop complete identity system",
        duration: "7-10 days",
        titleAr: "تنقيح التصميم",
        descriptionAr: "تنقيح المفهوم المختار وتطوير نظام هوية كامل",
        durationAr: "7-10 أيام"
      },
      {
        step: 4,
        title: "Guidelines & Delivery",
        description: "Create brand guidelines and deliver all brand assets",
        duration: "3-5 days",
        titleAr: "الدليل والتسليم",
        descriptionAr: "إنشاء دليل الهوية وتسليم جميع الأصول",
        durationAr: "3-5 أيام"
      }
    ]
  },
  {
    id: "motion-graphics",
    slug: "motion-graphics",
    icon: Play,
    heroImage: "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1618359057154-e21ae64350b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1596348158371-67eb9d9c4142?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    features: [
      {
        icon: "✨",
        title: "Dynamic Animations",
        description: "Engaging 2D and 3D animations that bring your brand to life",
        titleAr: "تحريكات ديناميكية",
        descriptionAr: "رسوم متحركة ثنائية وثلاثية الأبعاد تُنعش علامتك"
      },
      {
        icon: "📺",
        title: "Explainer Videos",
        description: "Clear, compelling explainer videos that simplify complex concepts",
        titleAr: "فيديوهات توضيحية",
        descriptionAr: "فيديوهات واضحة وجذابة تبسط المفاهيم المعقدة"
      },
      {
        icon: "🎪",
        title: "Interactive Elements",
        description: "Interactive motion graphics for presentations and digital platforms",
        titleAr: "عناصر تفاعلية",
        descriptionAr: "موشن جرافيك تفاعلي للعروض والمنصات الرقمية"
      },
      {
        icon: "🚀",
        title: "Brand Integration",
        description: "Seamless integration of your brand elements into animated content",
        titleAr: "دمج الهوية",
        descriptionAr: "دمج سلس لعناصر علامتك داخل المحتوى المتحرك"
      }
    ],
    testimonials: [
      {
        name: "Layla Al-Hashimi",
        company: "EdTech Solutions",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5,
        text: "The animated explainer video perfectly explains our complex software. Student engagement increased by 180% and sign-ups doubled.",
        resultStats: {
          metric: "Student Engagement",
          value: "+180%"
        }
      },
      {
        name: "Rashid Al-Maktoum",
        company: "Finance Corp",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5,
        text: "Outstanding motion graphics for our corporate presentation. The board was impressed and approved our expansion budget immediately."
      },
      {
        name: "Zeina Al-Amir",
        company: "Health Innovation",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5,
        text: "The 3D animation of our medical device helped investors understand the technology better. We secured our funding goal within weeks."
      }
    ],
    faqs: [
      {
        question: "What types of motion graphics do you create?",
        answer: "We create explainer videos, logo animations, infographic animations, product demos, and interactive presentations.",
        questionAr: "ما أنواع الرسوم المتحركة التي تنفذونها؟",
        answerAr: "ننفذ فيديوهات توضيحية، تحريك شعارات، إنفوجرافيك متحرك، عروض منتجات، وعروض تفاعلية. نراعي الهدف من القطعة ونضبط الإيقاع البصري والصوتي وفق المنصة."
      },
      {
        question: "What software do you use for motion graphics?",
        answer: "We use industry-standard software including After Effects, Cinema 4D, Blender, and Adobe Animate for professional results.",
        questionAr: "ما البرامج التي تستخدمونها؟",
        answerAr: "نستخدم After Effects وCinema 4D وBlender وAdobe Animate وتقنيات Compositing حديثة. نلتزم بقوالب تنظيم المشاريع لضمان سهولة التعديلات والتسليم."
      },
      {
        question: "Can you create animations from our existing brand materials?",
        answer: "Yes! We can work with your existing logos, colors, and brand elements to create cohesive animated content.",
        questionAr: "هل يمكنكم إنشاء تحريك من مواد علامتنا الحالية؟",
        answerAr: "نعم، نبني الحركة انطلاقًا من الشعار والألوان والخطوط الحالية ونضيف عناصر بصرية تدعم الهوية. نلتزم بأسلوب متسق يعزّز التعرّف البصري على علامتك."
      },
      {
        question: "How do you ensure animations work across different platforms?",
        answer: "We optimize animations for various platforms including web, social media, presentations, and mobile devices.",
        questionAr: "كيف تضمنون توافق الرسوم المتحركة عبر المنصات؟",
        answerAr: "نُعد نسخًا بأبعاد ونِسَب مختلفة، ونستخدم إعدادات ضغط مناسبة لحجم الملف دون فقد ملحوظ للجودة. كما نوفّر نسخًا بخلفية شفافة إذا لزم للاستخدامات المتقدمة."
      }
    ],
    timeline: [
      {
        step: 1,
        title: "Concept & Storyboard",
        description: "Develop concept, script, and detailed storyboard",
        duration: "2-3 days"
      },
      {
        step: 2,
        title: "Style Frames",
        description: "Create style frames and design elements",
        duration: "2-3 days"
      },
      {
        step: 3,
        title: "Animation Production",
        description: "Create the animation with all effects and transitions",
        duration: "5-10 days"
      },
      {
        step: 4,
        title: "Audio & Final Edit",
        description: "Add audio, music, and final polish",
        duration: "1-2 days"
      }
    ]
  },
  {
    id: "graphic-design",
    slug: "graphic-design",
    icon: Layers,
    heroImage: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    features: [
      {
        icon: "🎨",
        title: "Creative Design Solutions",
        description: "Innovative designs that capture attention and communicate your message effectively",
        titleAr: "حلول تصميم إبداعية",
        descriptionAr: "تصاميم مبتكرة تجذب الانتباه وتوصل رسالتك بفاعلية"
      },
      {
        icon: "📱",
        title: "Multi-Platform Assets",
        description: "Designs optimized for print, digital, and social media platforms",
        titleAr: "أصول متعددة المنصات",
        descriptionAr: "تصاميم محسّنة للطباعة والرقمي ومنصات السوشيال"
      },
      {
        icon: "⚡",
        title: "Fast Turnaround",
        description: "Quick delivery without compromising on quality or creativity",
        titleAr: "تنفيذ سريع",
        descriptionAr: "تسليم سريع دون الإخلال بالجودة أو الإبداع"
      },
      {
        icon: "🎯",
        title: "Brand Consistency",
        description: "All designs aligned with your brand guidelines and visual identity",
        titleAr: "اتساق الهوية",
        descriptionAr: "التزام كامل بدليل علامتك والهوية البصرية"
      }
    ],
    testimonials: [
      {
        name: "Mansour Al-Zahra",
        company: "Events & Exhibitions",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5,
        text: "Exceptional design quality! Our event materials looked professional and helped us attract premium sponsors. Revenue increased by 150% this season.",
        resultStats: {
          metric: "Event Revenue",
          value: "+150%"
        }
      },
      {
        name: "Leila Al-Qasimi",
        company: "Luxury Boutique",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b882?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5,
        text: "Beautiful, elegant designs that perfectly match our luxury brand. Our social media engagement has tripled since we started using their graphics."
      },
      {
        name: "Jamal Al-Rashid",
        company: "Construction Group",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5,
        text: "Professional designs that communicate trust and expertise. Our proposal win rate improved significantly with their high-quality presentation materials."
      }
    ],
    faqs: [
      {
        question: "What types of graphic design do you offer?",
        answer: "We create social media graphics, brochures, flyers, presentations, infographics, packaging design, and digital marketing materials.",
        questionAr: "ما أنواع التصميم الجرافيكي التي تقدمونها؟",
        answerAr: "نُصمم منشورات السوشيال، البروشورات، الفلايرز، العروض، الإنفوجرافيك، التغليف، ومواد التسويق الرقمية. نُراعي التسلسل البصري والهرمية الطباعية لضمان الوضوح والتأثير."
      },
      {
        question: "Do you provide print-ready files?",
        answer: "Yes! All print designs include high-resolution, CMYK, print-ready files with proper bleeds and crop marks.",
        questionAr: "هل تسلمون ملفات جاهزة للطباعة؟",
        answerAr: "نعم، نسلّم ملفات CMYK عالية الدقة مع نزيف طباعي (Bleed) وعلامات قص (Crop Marks) وملفات PDF/X جاهزة للمطابع، مع معاينة ألوان تقريبية."
      },
      {
        question: "Can you match our existing brand style?",
        answer: "Absolutely! We work within your brand guidelines or help develop a consistent visual style for your business.",
        questionAr: "هل تلتزمون بأسلوب علامتنا الحالي؟",
        answerAr: "نعمل ضمن دليل علامتك، أو نُنشئ نظامًا بصريًا متسقًا إذا لم يكن موجودًا. نضبط الألوان والخطوط والمسافات ونحدد أنماط العناصر لضمان التناسق عبر جميع المواد."
      },
      {
        question: "How do you ensure design quality and consistency?",
        answer: "We follow established design principles, maintain brand consistency, and provide multiple revision rounds to ensure your satisfaction.",
        questionAr: "كيف تضمنون جودة وتناسق التصميم؟",
        answerAr: "نلتزم بمبادئ التصميم المعروفة (التباين، المحاذاة، التسلسل الهرمي)، ونحافظ على اتساق الهوية، ونقدّم جولات مراجعة محددة بإطار زمني، مع نماذج تطبيقات حقيقية قبل الاعتماد النهائي."
      }
    ],
    timeline: [
      {
        step: 1,
        title: "Project Brief",
        description: "Understand requirements, objectives, and design preferences",
        duration: "1 day"
      },
      {
        step: 2,
        title: "Concept Development",
        description: "Create initial design concepts and layouts",
        duration: "1-2 days"
      },
      {
        step: 3,
        title: "Design Creation",
        description: "Develop final designs with all elements and refinements",
        duration: "2-3 days"
      },
      {
        step: 4,
        title: "Final Delivery",
        description: "Client review, revisions, and delivery of all files",
        duration: "1 day"
      }
    ]
  }
]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find(service => service.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map(service => service.slug)
}
