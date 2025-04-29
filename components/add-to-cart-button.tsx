"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { useState } from "react"

interface AddToCartButtonProps {
  id: string
  type: "product" | "service"
  className?: string
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
}

export function AddToCartButton({ id, type, className, variant = "default" }: AddToCartButtonProps) {
  const { addItem } = useCart()
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)
    addItem(id, type)

    // Reset animation after a short delay
    setTimeout(() => {
      setIsAdding(false)
    }, 1000)
  }

  return (
    <Button onClick={handleAddToCart} className={className} variant={variant} disabled={isAdding}>
      <ShoppingCart className="mr-2 h-4 w-4" />
      {isAdding ? "Added!" : "Add to Cart"}
    </Button>
  )
}
