import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AddToCartButton } from "@/components/add-to-cart-button"
import { getProductById, getRelatedProducts } from "@/lib/products"
import { formatCurrency } from "@/lib/utils"

interface ProductPageProps {
  params: {
    id: string
  }
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = getProductById(params.id)

  if (!product) {
    return {
      title: "Product Not Found | Elegance Salon",
    }
  }

  return {
    title: `${product.name} | Elegance Salon Shop`,
    description: product.description,
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(product.id)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back button */}
        <div className="mb-8">
          <Button asChild variant="ghost" size="sm" className="gap-2">
            <Link href="/shop">
              <ArrowLeft className="h-4 w-4" />
              Back to shop
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Product Image */}
          <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              {product.new && <Badge className="bg-blue-500 hover:bg-blue-600">New</Badge>}
              {product.bestSeller && <Badge className="bg-amber-500 hover:bg-amber-600">Best Seller</Badge>}
              {product.featured && <Badge className="bg-pink-500 hover:bg-pink-600">Featured</Badge>}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="flex items-start justify-between">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
              <product.icon className="h-6 w-6 text-pink-500" />
            </div>

            <p className="mt-4 text-xl font-semibold text-gray-900">{formatCurrency(product.price)}</p>

            <div className="mt-4">
              <p className="text-gray-700">{product.description}</p>
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="text-sm font-medium text-gray-900">Category</h3>
              <Badge variant="outline" className="capitalize">
                {product.category}
              </Badge>
            </div>

            <div className="mt-8">
              <AddToCartButton
                id={product.id}
                type="product"
                className="w-full bg-pink-600 hover:bg-pink-700 py-6 text-lg"
              />
            </div>

            <Separator className="my-8" />

            <Tabs defaultValue="details">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
                <TabsTrigger value="how-to-use">How to Use</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="mt-4">
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {product.details?.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="ingredients" className="mt-4">
                {product.ingredients && product.ingredients.length > 0 ? (
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {product.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 italic">Ingredients information not available.</p>
                )}
              </TabsContent>
              <TabsContent value="how-to-use" className="mt-4">
                {product.howToUse && product.howToUse.length > 0 ? (
                  <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                    {product.howToUse.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                ) : (
                  <p className="text-gray-500 italic">Usage instructions not available.</p>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">You May Also Like</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.id} href={`/shop/${relatedProduct.id}`} className="group">
                  <Card className="overflow-hidden transition-all hover:shadow-md h-full">
                    <div className="relative h-40 bg-gray-100">
                      <Image
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader className="pb-2 pt-4">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-base group-hover:text-pink-600 transition-colors">
                          {relatedProduct.name}
                        </CardTitle>
                        <relatedProduct.icon className="h-4 w-4 text-pink-500" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <p className="font-medium text-pink-600">{formatCurrency(relatedProduct.price)}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}
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
