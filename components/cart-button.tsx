"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { Badge } from "@/components/ui/badge"

export function CartButton() {
  const { openCart, itemCount } = useCart()

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative"
      onClick={openCart}
      aria-label={`Shopping cart with ${itemCount} items`}
    >
      <ShoppingCart className="h-5 w-5" />
      {itemCount > 0 && (
        <Badge className="absolute -top-2 -right-2 px-1.5 py-0.5 min-w-[1.25rem] h-5 flex items-center justify-center bg-pink-600">
          {itemCount}
        </Badge>
      )}
    </Button>
  )
}
