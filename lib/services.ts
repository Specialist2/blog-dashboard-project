import { Scissors, Paintbrush, Gem, UserCheck, SpadeIcon as Spa, Brush } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface ServiceType {
  id: number
  slug: string
  name: string
  shortDescription: string
  fullDescription: string
  price: string
  icon: LucideIcon
  duration: string
  benefits: string[]
  process: string[]
  priceOptions: {
    name: string
    price: string
    duration: string
    description: string
  }[]
  faqs: {
    question: string
    answer: string
  }[]
  relatedServices: number[]
}

export const services: ServiceType[] = [
  {
    id: 1,
    slug: "haircut-styling",
    name: "Haircut & Styling",
    shortDescription: "Professional haircuts, styling, and blowouts for all hair types.",
    fullDescription:
      "Our expert stylists provide personalized haircuts and styling services tailored to your unique features, lifestyle, and preferences. Whether you're looking for a complete transformation or a simple trim, our team will help you achieve the perfect look.",
    price: "From $45",
    icon: Scissors,
    duration: "45-60 min",
    benefits: [
      "Personalized consultation with expert stylists",
      "Precision cutting techniques for all hair types",
      "Styling tips and product recommendations",
      "Complimentary scalp massage with every service",
      "Refreshments during your appointment",
    ],
    process: [
      "Initial consultation to discuss your desired look",
      "Relaxing shampoo and conditioning treatment",
      "Precision haircut tailored to your face shape and hair type",
      "Professional styling with premium products",
      "Styling tips and product recommendations for at-home maintenance",
    ],
    priceOptions: [
      {
        name: "Women's Haircut & Style",
        price: "$45-$75",
        duration: "60 min",
        description: "Includes consultation, shampoo, cut, and style",
      },
      {
        name: "Men's Haircut & Style",
        price: "$35-$55",
        duration: "45 min",
        description: "Includes consultation, shampoo, cut, and style",
      },
      {
        name: "Children's Haircut (12 & under)",
        price: "$25-$35",
        duration: "30 min",
        description: "Includes shampoo, cut, and simple style",
      },
      {
        name: "Blowout & Style",
        price: "$35-$55",
        duration: "45 min",
        description: "Includes shampoo and professional styling",
      },
      {
        name: "Special Occasion Styling",
        price: "$65-$95",
        duration: "60-90 min",
        description: "Formal styling for weddings, proms, and special events",
      },
    ],
    faqs: [
      {
        question: "How often should I get a haircut?",
        answer:
          "For maintaining your style, we recommend every 4-6 weeks for short hair and every 6-8 weeks for longer styles. For growing out your hair, every 8-12 weeks is sufficient to keep ends healthy.",
      },
      {
        question: "Do I need to wash my hair before my appointment?",
        answer:
          "It's not necessary as we provide a complimentary shampoo with every haircut service. However, if you have product buildup or extremely dirty hair, a pre-wash may be helpful.",
      },
      {
        question: "Should I bring reference photos?",
        answer:
          "Yes! Reference photos are extremely helpful for communicating your desired style. We encourage bringing multiple angles if possible.",
      },
    ],
    relatedServices: [2, 6],
  },
  {
    id: 2,
    slug: "hair-coloring",
    name: "Hair Coloring",
    shortDescription: "Full color, highlights, balayage, and color correction services.",
    fullDescription:
      "Transform your look with our premium hair coloring services. Our color specialists are trained in the latest techniques and use high-quality products to ensure beautiful, long-lasting results while maintaining the health of your hair.",
    price: "From $85",
    icon: Paintbrush,
    duration: "90-180 min",
    benefits: [
      "Customized color formulations for your unique hair",
      "Ammonia-free and low-chemical options available",
      "Color-protecting treatments included",
      "Expert advice on maintaining your color",
      "Complimentary touch-up within two weeks if needed",
    ],
    process: [
      "Detailed consultation to understand your color goals",
      "Hair analysis to determine the best approach",
      "Custom color formulation",
      "Professional application using advanced techniques",
      "Processing time with complimentary refreshments",
      "Shampoo and conditioning with color-protecting products",
      "Styling and home care instructions",
    ],
    priceOptions: [
      {
        name: "Single Process Color",
        price: "$85-$115",
        duration: "90 min",
        description: "All-over color application for gray coverage or color change",
      },
      {
        name: "Partial Highlights",
        price: "$95-$135",
        duration: "120 min",
        description: "Highlights applied to top and crown sections",
      },
      {
        name: "Full Highlights",
        price: "$125-$175",
        duration: "150 min",
        description: "Highlights throughout entire head",
      },
      {
        name: "Balayage/Ombre",
        price: "$150-$250",
        duration: "180 min",
        description: "Hand-painted highlights for a natural, sun-kissed look",
      },
      {
        name: "Color Correction",
        price: "Starting at $200",
        duration: "180+ min",
        description: "Customized service to fix previous color issues (consultation required)",
      },
    ],
    faqs: [
      {
        question: "How long will my color last?",
        answer:
          "Color longevity depends on several factors including the type of color service, your hair's porosity, and your maintenance routine. Generally, permanent color lasts 4-6 weeks before roots become noticeable, while highlights can last 6-8 weeks.",
      },
      {
        question: "How can I maintain my color between appointments?",
        answer:
          "Use sulfate-free, color-safe shampoo and conditioner, wash with lukewarm water, protect your hair from sun and chlorine exposure, and use weekly color-depositing masks or conditioners as recommended by your stylist.",
      },
      {
        question: "Is it safe to color my hair during pregnancy?",
        answer:
          "While most research suggests hair coloring is safe during pregnancy, we recommend consulting with your doctor first. We offer gentler, low-chemical options that many pregnant clients prefer.",
      },
    ],
    relatedServices: [1, 6],
  },
  {
    id: 3,
    slug: "manicure-pedicure",
    name: "Manicure & Pedicure",
    shortDescription: "Nail care, polish, gel, and nail art for hands and feet.",
    fullDescription:
      "Treat your hands and feet to our luxurious nail services. Our skilled nail technicians provide meticulous care using premium products and sterilized tools to ensure beautiful results and a relaxing experience.",
    price: "From $35",
    icon: Gem,
    duration: "30-60 min",
    benefits: [
      "Sterilized tools and equipment for each client",
      "Premium, long-lasting polish options",
      "Relaxing hand and foot massage included",
      "Cuticle care and nail shaping",
      "Paraffin treatments available for extra hydration",
    ],
    process: [
      "Nail assessment and consultation",
      "Gentle removal of previous polish",
      "Precise nail shaping and cuticle care",
      "Exfoliation to remove dead skin cells",
      "Relaxing massage with hydrating lotion",
      "Polish application or gel curing",
      "Quick-dry treatment for regular polish",
    ],
    priceOptions: [
      {
        name: "Classic Manicure",
        price: "$35",
        duration: "30 min",
        description: "Includes nail shaping, cuticle care, hand massage, and polish",
      },
      {
        name: "Gel Manicure",
        price: "$45",
        duration: "45 min",
        description: "Long-lasting gel polish with nail prep and cuticle care",
      },
      {
        name: "Classic Pedicure",
        price: "$45",
        duration: "45 min",
        description: "Includes foot soak, exfoliation, nail care, massage, and polish",
      },
      {
        name: "Deluxe Pedicure",
        price: "$65",
        duration: "60 min",
        description: "Classic pedicure plus extended massage, paraffin treatment, and hot towel wrap",
      },
      {
        name: "Mani-Pedi Combo",
        price: "$75",
        duration: "75 min",
        description: "Classic manicure and pedicure package",
      },
    ],
    faqs: [
      {
        question: "How long does gel polish last?",
        answer:
          "Gel polish typically lasts 2-3 weeks without chipping, depending on your activities and how quickly your nails grow.",
      },
      {
        question: "Is it safe to get manicures during pregnancy?",
        answer:
          "Yes, but we recommend our well-ventilated stations and can use pregnancy-safe products. Our deluxe pedicures can be especially relieving for swollen feet during pregnancy.",
      },
      {
        question: "How often should I get a pedicure?",
        answer:
          "For optimal foot health, we recommend a pedicure every 4-6 weeks. Those with active lifestyles or specific foot concerns may benefit from more frequent visits.",
      },
    ],
    relatedServices: [4, 5],
  },
  {
    id: 4,
    slug: "facial-treatments",
    name: "Facial Treatments",
    shortDescription: "Customized facials, peels, and skin treatments for all skin types.",
    fullDescription:
      "Revitalize your skin with our customized facial treatments. Our licensed estheticians analyze your skin's needs and provide targeted treatments to address concerns while promoting overall skin health and radiance.",
    price: "From $65",
    icon: UserCheck,
    duration: "45-75 min",
    benefits: [
      "Personalized skin analysis and treatment plan",
      "Professional-grade products and equipment",
      "Deep cleansing and exfoliation",
      "Extractions performed with proper technique",
      "Relaxing facial massage to improve circulation",
      "Customized masks for your skin concerns",
    ],
    process: [
      "Skin analysis and consultation about concerns",
      "Gentle cleansing to remove makeup and impurities",
      "Exfoliation to remove dead skin cells",
      "Steam treatment to open pores (when appropriate)",
      "Extractions if needed",
      "Treatment masks tailored to your skin type",
      "Facial massage with serums and moisturizers",
      "SPF application and skincare recommendations",
    ],
    priceOptions: [
      {
        name: "Express Facial",
        price: "$65",
        duration: "30 min",
        description: "Quick refresh with cleansing, exfoliation, and hydration",
      },
      {
        name: "Classic Facial",
        price: "$85",
        duration: "60 min",
        description: "Comprehensive facial with customized treatment for your skin type",
      },
      {
        name: "Anti-Aging Facial",
        price: "$110",
        duration: "75 min",
        description: "Targets fine lines and loss of elasticity with specialized products",
      },
      {
        name: "Acne Treatment Facial",
        price: "$95",
        duration: "60 min",
        description: "Deep cleansing and targeted treatment for acne-prone skin",
      },
      {
        name: "Chemical Peel",
        price: "$125",
        duration: "45 min",
        description: "Exfoliating treatment to improve skin texture and tone",
      },
    ],
    faqs: [
      {
        question: "How often should I get a facial?",
        answer:
          "For optimal results, we recommend a professional facial every 4-6 weeks, which aligns with your skin's natural renewal cycle. Your esthetician may suggest a different schedule based on your specific skin concerns.",
      },
      {
        question: "Will my face be red after a facial?",
        answer:
          "Mild redness is normal and typically subsides within a few hours. More intensive treatments like chemical peels may cause redness for 1-2 days. We provide post-treatment care instructions to minimize this effect.",
      },
      {
        question: "Should I avoid wearing makeup after a facial?",
        answer:
          "We recommend avoiding makeup for at least 24 hours after a facial to allow your skin to breathe and maximize the benefits of your treatment.",
      },
    ],
    relatedServices: [3, 6],
  },
  {
    id: 5,
    slug: "massage-therapy",
    name: "Massage Therapy",
    shortDescription: "Relaxing and therapeutic massages to relieve stress and tension.",
    fullDescription:
      "Experience the healing power of touch with our therapeutic massage services. Our licensed massage therapists customize each session to address your specific needs, whether you're seeking relaxation, pain relief, or stress reduction.",
    price: "From $75",
    icon: Spa,
    duration: "60-90 min",
    benefits: [
      "Stress reduction and relaxation",
      "Relief from muscle tension and pain",
      "Improved circulation and flexibility",
      "Enhanced immune function",
      "Better sleep quality",
      "Reduced anxiety and improved mood",
    ],
    process: [
      "Brief health assessment and discussion of concerns",
      "Customization of pressure and techniques",
      "Relaxing environment with soft music and aromatherapy",
      "Targeted massage focusing on problem areas",
      "Stretching and range of motion techniques when appropriate",
      "Post-massage water and recommendations",
    ],
    priceOptions: [
      {
        name: "Swedish Massage",
        price: "$75",
        duration: "60 min",
        description: "Gentle, relaxing massage with long, flowing strokes",
      },
      {
        name: "Deep Tissue Massage",
        price: "$85",
        duration: "60 min",
        description: "Firm pressure targeting chronic muscle tension and knots",
      },
      {
        name: "Hot Stone Massage",
        price: "$95",
        duration: "75 min",
        description: "Heated stones and massage techniques for deep relaxation",
      },
      {
        name: "Prenatal Massage",
        price: "$85",
        duration: "60 min",
        description: "Safe, comfortable massage for expectant mothers",
      },
      {
        name: "Extended Massage",
        price: "$115",
        duration: "90 min",
        description: "Longer session for comprehensive full-body treatment",
      },
    ],
    faqs: [
      {
        question: "What should I wear during my massage?",
        answer:
          "You'll undress to your comfort level and will be professionally draped with a sheet throughout the session, exposing only the area being worked on. Many clients prefer to remove most clothing for optimal treatment, but this is entirely your choice.",
      },
      {
        question: "Is it normal to feel sore after a massage?",
        answer:
          "Mild soreness for 24-48 hours can be normal, especially after deep tissue work. This is similar to the feeling after a workout. Drinking plenty of water helps minimize this effect.",
      },
      {
        question: "How often should I get a massage?",
        answer:
          "For stress management and wellness, monthly massages are beneficial. For specific issues like chronic pain or injury recovery, weekly or bi-weekly sessions may be recommended initially.",
      },
    ],
    relatedServices: [3, 4],
  },
  {
    id: 6,
    slug: "makeup-application",
    name: "Makeup Application",
    shortDescription: "Professional makeup for special events, photoshoots, or everyday glam.",
    fullDescription:
      "Enhance your natural beauty with our professional makeup services. Whether you're preparing for a special occasion, photoshoot, or just want to learn new techniques, our makeup artists will create a flawless look tailored to your preferences.",
    price: "From $55",
    icon: Brush,
    duration: "45-60 min",
    benefits: [
      "Customized looks to complement your features",
      "High-quality, long-wearing products",
      "Professional techniques for flawless application",
      "Guidance on colors that enhance your complexion",
      "False lash application available",
      "Product recommendations for your personal kit",
    ],
    process: [
      "Consultation to discuss your desired look and occasion",
      "Skin prep with appropriate primers and moisturizers",
      "Foundation matching and flawless application",
      "Contouring and highlighting to enhance features",
      "Eye makeup application tailored to your eye shape",
      "Lip color application with long-lasting techniques",
      "Setting spray for extended wear",
    ],
    priceOptions: [
      {
        name: "Special Event Makeup",
        price: "$75",
        duration: "60 min",
        description: "Full-face makeup application for weddings, parties, and special occasions",
      },
      {
        name: "Bridal Makeup",
        price: "$125",
        duration: "75 min",
        description: "Premium service including consultation and long-wearing products",
      },
      {
        name: "Everyday Makeup",
        price: "$55",
        duration: "45 min",
        description: "Natural-looking enhancement for daily wear",
      },
      {
        name: "Makeup Lesson",
        price: "$95",
        duration: "90 min",
        description: "One-on-one instruction on application techniques with product recommendations",
      },
      {
        name: "False Lash Application",
        price: "$25",
        duration: "15 min",
        description: "Add-on service for strip or individual lashes",
      },
    ],
    faqs: [
      {
        question: "Should I arrive with a clean face?",
        answer:
          "Yes, please arrive with a clean, moisturized face for the best results. If you're coming directly from work, we can provide makeup removal wipes.",
      },
      {
        question: "How long will my makeup last?",
        answer:
          "With our professional techniques and products, your makeup should last 8-12 hours. For weddings and special events, we use specific long-wear products that can extend this even further.",
      },
      {
        question: "Can I bring reference photos?",
        answer:
          "Reference photos are extremely helpful for communicating your desired look. We can adapt styles to suit your features and coloring.",
      },
    ],
    relatedServices: [1, 4],
  },
]

export function getServiceBySlug(slug: string): ServiceType | undefined {
  return services.find((service) => service.slug === slug)
}

export function getServiceById(id: number): ServiceType | undefined {
  return services.find((service) => service.id === id)
}

export function getRelatedServices(serviceId: number): ServiceType[] {
  const service = getServiceById(serviceId)
  if (!service) return []

  return service.relatedServices
    .map((id) => getServiceById(id))
    .filter((service): service is ServiceType => service !== undefined)
}
