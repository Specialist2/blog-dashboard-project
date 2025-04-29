"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Minus, Plus, ShoppingCart, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useCart } from "@/context/cart-context"
import { getProductById } from "@/lib/products"
import { getServiceBySlug } from "@/lib/services"
import { formatCurrency } from "@/lib/utils"

export function CartDrawer() {
  const { cart, closeCart, removeItem, updateQuantity, clearCart } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const handleCheckout = () => {
    setIsCheckingOut(true)
    // Simulate checkout process
    setTimeout(() => {
      clearCart()
      setIsCheckingOut(false)
    }, 2000)
  }

  const calculateSubtotal = () => {
    return cart.items.reduce((total, item) => {
      if (item.type === "product") {
        const product = getProductById(item.id)
        return total + (product?.price || 0) * item.quantity
      } else {
        const service = getServiceBySlug(item.id)
        // For services, we'll use the lowest price from price options as a starting point
        if (service?.priceOptions && service.priceOptions.length > 0) {
          const lowestPrice = Math.min(
            ...service.priceOptions.map((option) => Number.parseFloat(option.price.replace(/[^0-9.]/g, ""))),
          )
          return total + lowestPrice * item.quantity
        }
        return total
      }
    }, 0)
  }

  const subtotal = calculateSubtotal()
  const tax = subtotal * 0.08 // 8% tax
  const total = subtotal + tax

  return (
    <Sheet open={cart.isOpen} onOpenChange={closeCart}>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle className="flex items-center">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Your Cart
          </SheetTitle>
        </SheetHeader>

        {cart.items.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 py-12">
            <ShoppingCart className="h-12 w-12 text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-gray-900">Your cart is empty</h3>
            <p className="text-gray-500 mt-1 text-center">Looks like you haven't added any items to your cart yet.</p>
            <Button className="mt-6 bg-pink-600 hover:bg-pink-700" onClick={closeCart} asChild>
              <Link href="/shop">Browse Products</Link>
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 pr-4">
              <ul className="divide-y">
                {cart.items.map((item) => {
                  const isProduct = item.type === "product"
                  const product = isProduct ? getProductById(item.id) : null
                  const service = !isProduct ? getServiceBySlug(item.id) : null
                  const itemData = product || service

                  if (!itemData) return null

                  // Calculate price
                  let price = 0
                  if (isProduct) {
                    price = product?.price || 0
                  } else if (service?.priceOptions && service.priceOptions.length > 0) {
                    price = Number.parseFloat(service.priceOptions[0].price.replace(/[^0-9.]/g, ""))
                  }

                  return (
                    <li key={item.id} className="py-4">
                      <div className="flex items-start gap-4">
                        <div className="h-16 w-16 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                          {isProduct ? (
                            <Image
                              src={product?.image || "/placeholder.svg"}
                              alt={product?.name || ""}
                              width={64}
                              height={64}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="h-full w-full flex items-center justify-center bg-pink-100">
                              {service?.icon && <service.icon className="h-8 w-8 text-pink-600" />}
                            </div>
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-900 truncate">{itemData.name}</h4>
                          <p className="mt-1 text-sm text-gray-500 truncate">{isProduct ? "Product" : "Service"}</p>
                          <div className="mt-2 flex items-center">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-6 w-6"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-3 w-3" />
                              <span className="sr-only">Decrease quantity</span>
                            </Button>
                            <span className="mx-2 text-sm">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-6 w-6"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                              <span className="sr-only">Increase quantity</span>
                            </Button>
                          </div>
                        </div>

                        <div className="flex flex-col items-end">
                          <p className="text-sm font-medium text-gray-900">{formatCurrency(price * item.quantity)}</p>
                          <button
                            type="button"
                            className="mt-1 text-xs text-gray-500 hover:text-red-600"
                            onClick={() => removeItem(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>

              {!isCheckingOut && cart.items.some((item) => item.type === "service") && (
                <Alert className="mt-4 bg-amber-50 border-amber-200">
                  <AlertCircle className="h-4 w-4 text-amber-600" />
                  <AlertDescription className="text-amber-800 text-sm">
                    Service prices may vary based on options selected during your appointment.
                  </AlertDescription>
                </Alert>
              )}
            </ScrollArea>

            <div className="pt-4">
              <Separator className="mb-4" />

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-medium">{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Tax (8%)</span>
                  <span className="font-medium">{formatCurrency(tax)}</span>
                </div>
                <div className="flex justify-between text-base font-medium pt-2">
                  <span>Total</span>
                  <span>{formatCurrency(total)}</span>
                </div>
              </div>

              <SheetFooter className="mt-6 flex-col sm:flex-col gap-2">
                <Button
                  className="w-full bg-pink-600 hover:bg-pink-700"
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                >
                  {isCheckingOut ? "Processing..." : "Checkout"}
                </Button>
                <Button variant="outline" className="w-full" onClick={closeCart}>
                  Continue Shopping
                </Button>
              </SheetFooter>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
