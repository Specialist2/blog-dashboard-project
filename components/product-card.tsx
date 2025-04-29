import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AddToCartButton } from "@/components/add-to-cart-button"
import { formatCurrency } from "@/lib/utils"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <Link href={`/shop/${product.id}`} className="relative h-48 bg-gray-100">
        <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          {product.new && <Badge className="bg-blue-500 hover:bg-blue-600">New</Badge>}
          {product.bestSeller && <Badge className="bg-amber-500 hover:bg-amber-600">Best Seller</Badge>}
        </div>
      </Link>
      <CardHeader className="pb-2 pt-4">
        <Link href={`/shop/${product.id}`} className="group">
          <div className="flex items-start justify-between">
            <CardTitle className="text-lg group-hover:text-pink-600 transition-colors">{product.name}</CardTitle>
            <product.icon className="h-4 w-4 text-pink-500 mt-1" />
          </div>
        </Link>
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
