import { type LucideIcon, Sparkles, SprayCanIcon as Spray, ShoppingBag, Droplets, Scissors, Brush } from "lucide-react"

export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: "hair" | "skin" | "nails" | "tools" | "packages"
  image: string
  featured?: boolean
  bestSeller?: boolean
  new?: boolean
  icon: LucideIcon
  details?: string[]
  ingredients?: string[]
  howToUse?: string[]
  relatedProducts?: string[]
}

export const products: Product[] = [
  {
    id: "hair-shampoo-1",
    name: "Revitalizing Shampoo",
    description: "Nourishing formula for all hair types that cleanses and adds shine.",
    price: 24.99,
    category: "hair",
    image: "/placeholder.svg?height=300&width=300",
    featured: true,
    bestSeller: true,
    icon: Droplets,
    details: [
      "Sulfate-free formula",
      "Infused with argan oil and vitamin E",
      "Suitable for color-treated hair",
      "Paraben-free",
      "16 fl oz / 473 ml",
    ],
    ingredients: [
      "Purified Water",
      "Sodium Lauroyl Methyl Isethionate",
      "Cocamidopropyl Betaine",
      "Sodium Cocoyl Isethionate",
      "Argania Spinosa (Argan) Kernel Oil",
      "Tocopheryl Acetate (Vitamin E)",
    ],
    howToUse: [
      "Apply to wet hair",
      "Massage gently into scalp and hair",
      "Rinse thoroughly",
      "Follow with conditioner for best results",
    ],
    relatedProducts: ["hair-conditioner-1", "hair-mask-1", "hair-oil-1"],
  },
  {
    id: "hair-conditioner-1",
    name: "Hydrating Conditioner",
    description: "Deep conditioning treatment that detangles and smooths hair.",
    price: 26.99,
    category: "hair",
    image: "/placeholder.svg?height=300&width=300",
    bestSeller: true,
    icon: Droplets,
    details: [
      "Silicone-free formula",
      "Contains shea butter and coconut oil",
      "Adds moisture without weighing hair down",
      "Paraben-free",
      "16 fl oz / 473 ml",
    ],
    relatedProducts: ["hair-shampoo-1", "hair-mask-1", "hair-oil-1"],
  },
  {
    id: "hair-mask-1",
    name: "Intensive Repair Mask",
    description: "Weekly treatment to restore damaged hair and split ends.",
    price: 32.99,
    category: "hair",
    image: "/placeholder.svg?height=300&width=300",
    icon: Sparkles,
    details: [
      "Deep conditioning formula",
      "Contains keratin and argan oil",
      "Repairs damage from heat styling",
      "Paraben and sulfate-free",
      "8 oz / 236 ml",
    ],
    relatedProducts: ["hair-shampoo-1", "hair-conditioner-1", "hair-oil-1"],
  },
  {
    id: "hair-oil-1",
    name: "Smoothing Hair Oil",
    description: "Lightweight oil that tames frizz and adds brilliant shine.",
    price: 29.99,
    category: "hair",
    image: "/placeholder.svg?height=300&width=300",
    featured: true,
    icon: Droplets,
    details: [
      "Non-greasy formula",
      "Blend of argan, jojoba, and almond oils",
      "Heat protectant up to 450°F",
      "Silicone-free",
      "3.4 fl oz / 100 ml",
    ],
    relatedProducts: ["hair-shampoo-1", "hair-conditioner-1", "hair-mask-1"],
  },
  {
    id: "skin-cleanser-1",
    name: "Gentle Facial Cleanser",
    description: "Removes makeup and impurities without stripping natural oils.",
    price: 28.99,
    category: "skin",
    image: "/placeholder.svg?height=300&width=300",
    bestSeller: true,
    icon: Spray,
    details: [
      "pH balanced formula",
      "Contains aloe vera and chamomile",
      "Suitable for sensitive skin",
      "Fragrance-free",
      "6.7 fl oz / 200 ml",
    ],
    relatedProducts: ["skin-toner-1", "skin-moisturizer-1", "skin-serum-1"],
  },
  {
    id: "skin-moisturizer-1",
    name: "Daily Hydrating Moisturizer",
    description: "Lightweight, non-greasy formula for all-day hydration.",
    price: 34.99,
    category: "skin",
    image: "/placeholder.svg?height=300&width=300",
    featured: true,
    icon: Droplets,
    details: [
      "Oil-free formula",
      "Contains hyaluronic acid and vitamin E",
      "SPF 30 protection",
      "Non-comedogenic",
      "1.7 oz / 50 ml",
    ],
    relatedProducts: ["skin-cleanser-1", "skin-toner-1", "skin-serum-1"],
  },
  {
    id: "nails-polish-1",
    name: "Long-Wear Nail Polish",
    description: "Chip-resistant formula with brilliant color that lasts up to 10 days.",
    price: 18.99,
    category: "nails",
    image: "/placeholder.svg?height=300&width=300",
    new: true,
    icon: Brush,
    details: [
      "10-free formula (no harmful chemicals)",
      "High-shine finish",
      "Quick-drying formula",
      "Vegan and cruelty-free",
      "0.5 fl oz / 15 ml",
    ],
    relatedProducts: ["nails-topcoat-1", "nails-basecoat-1", "nails-remover-1"],
  },
  {
    id: "tools-hairdryer-1",
    name: "Professional Ionic Hair Dryer",
    description: "Powerful dryer that reduces frizz and drying time.",
    price: 149.99,
    category: "tools",
    image: "/placeholder.svg?height=300&width=300",
    featured: true,
    icon: Scissors,
    details: [
      "1875 watts",
      "3 heat settings and 2 speed settings",
      "Cool shot button",
      "Concentrator and diffuser attachments included",
      "9 ft salon-length cord",
    ],
    relatedProducts: ["tools-straightener-1", "tools-curler-1", "hair-oil-1"],
  },
  {
    id: "packages-haircare-1",
    name: "Complete Hair Care Set",
    description: "Everything you need for a professional hair care routine at home.",
    price: 79.99,
    category: "packages",
    image: "/placeholder.svg?height=300&width=300",
    bestSeller: true,
    icon: ShoppingBag,
    details: [
      "Includes Revitalizing Shampoo (16 oz)",
      "Hydrating Conditioner (16 oz)",
      "Intensive Repair Mask (8 oz)",
      "Smoothing Hair Oil (3.4 oz)",
      "Detangling brush",
      "Comes in a reusable storage bag",
    ],
    relatedProducts: ["hair-shampoo-1", "hair-conditioner-1", "hair-mask-1", "hair-oil-1"],
  },
  {
    id: "packages-skincare-1",
    name: "Essential Skincare Collection",
    description: "A complete regimen for healthy, glowing skin.",
    price: 89.99,
    category: "packages",
    image: "/placeholder.svg?height=300&width=300",
    new: true,
    icon: ShoppingBag,
    details: [
      "Includes Gentle Facial Cleanser (6.7 oz)",
      "Balancing Toner (6.7 oz)",
      "Daily Hydrating Moisturizer (1.7 oz)",
      "Brightening Serum (1 oz)",
      "Eye Cream (0.5 oz)",
      "Comes in a luxury gift box",
    ],
    relatedProducts: ["skin-cleanser-1", "skin-toner-1", "skin-moisturizer-1", "skin-serum-1"],
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getRelatedProducts(productId: string): Product[] {
  const product = getProductById(productId)
  if (!product || !product.relatedProducts) return []

  return product.relatedProducts
    .map((id) => getProductById(id))
    .filter((product): product is Product => product !== undefined)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured)
}

export function getBestSellerProducts(): Product[] {
  return products.filter((product) => product.bestSeller)
}

export function getNewProducts(): Product[] {
  return products.filter((product) => product.new)
}

export function getProductsByCategory(category: Product["category"]): Product[] {
  return products.filter((product) => product.category === category)
}
