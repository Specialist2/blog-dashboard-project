import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { products, getFeaturedProducts, getBestSellerProducts, getNewProducts } from "@/lib/products"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AddToCartButton } from "@/components/add-to-cart-button"
import { formatCurrency } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Shop | Elegance Salon",
  description: "Shop premium hair care, skin care, and beauty products from Elegance Salon.",
}

export default function ShopPage() {
  const featuredProducts = getFeaturedProducts()
  const bestSellers = getBestSellerProducts()
  const newArrivals = getNewProducts()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Shop Our Products</h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Premium salon-quality products for your hair, skin, and beauty needs.
          </p>
        </div>

        {/* Featured Products */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Featured Products</h2>
            <Link href="/shop/featured" className="text-pink-600 hover:text-pink-700 font-medium">
              View all
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Best Sellers */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Best Sellers</h2>
            <Link href="/shop/best-sellers" className="text-pink-600 hover:text-pink-700 font-medium">
              View all
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* New Arrivals */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">New Arrivals</h2>
            <Link href="/shop/new-arrivals" className="text-pink-600 hover:text-pink-700 font-medium">
              View all
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* All Products */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">All Products</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Elegance Salon</h3>
              <p className="text-gray-300">
                123 Beauty Street
                <br />
                New York, NY 10001
                <br />
                (555) 123-4567
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Hours</h3>
              <p className="text-gray-300">
                Monday - Friday: 9am - 8pm
                <br />
                Saturday: 9am - 6pm
                <br />
                Sunday: 10am - 5pm
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  Instagram
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  Facebook
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} Elegance Salon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ProductCard({ product }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48 bg-gray-100">
        <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          {product.new && <Badge className="bg-blue-500 hover:bg-blue-600">New</Badge>}
          {product.bestSeller && <Badge className="bg-amber-500 hover:bg-amber-600">Best Seller</Badge>}
        </div>
      </div>
      <CardHeader className="pb-2 pt-4">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg">{product.name}</CardTitle>
          <product.icon className="h-4 w-4 text-pink-500 mt-1" />
        </div>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-2">
        <span className="font-semibold text-lg">{formatCurrency(product.price)}</span>
        <AddToCartButton id={product.id} type="product" />
      </CardFooter>
    </Card>
  )
}
