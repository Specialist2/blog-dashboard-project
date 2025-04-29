"use client"

import { createContext, useContext, useReducer, type ReactNode, useEffect } from "react"
import type { CartState } from "@/lib/types"

type CartAction =
  | { type: "ADD_ITEM"; payload: { id: string; type: "product" | "service" } }
  | { type: "REMOVE_ITEM"; payload: { id: string } }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "OPEN_CART" }
  | { type: "CLOSE_CART" }

const initialState: CartState = {
  items: [],
  isOpen: false,
}

const loadCartFromStorage = (): CartState => {
  if (typeof window === "undefined") return initialState

  try {
    const savedCart = localStorage.getItem("eleganceSalonCart")
    return savedCart ? JSON.parse(savedCart) : initialState
  } catch (error) {
    console.error("Failed to load cart from localStorage:", error)
    return initialState
  }
}

const saveCartToStorage = (cart: CartState) => {
  if (typeof window === "undefined") return

  try {
    localStorage.setItem("eleganceSalonCart", JSON.stringify(cart))
  } catch (error) {
    console.error("Failed to save cart to localStorage:", error)
  }
}

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const { id, type } = action.payload
      const existingItemIndex = state.items.findIndex((item) => item.id === id)

      if (existingItemIndex >= 0) {
        // Item exists, increment quantity
        const updatedItems = [...state.items]
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        }
        return { ...state, items: updatedItems, isOpen: true }
      } else {
        // New item
        return {
          ...state,
          items: [...state.items, { id, quantity: 1, type }],
          isOpen: true,
        }
      }
    }

    case "REMOVE_ITEM": {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      }
    }

    case "UPDATE_QUANTITY": {
      const { id, quantity } = action.payload

      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((item) => item.id !== id),
        }
      }

      return {
        ...state,
        items: state.items.map((item) => (item.id === id ? { ...item, quantity } : item)),
      }
    }

    case "CLEAR_CART": {
      return {
        ...state,
        items: [],
      }
    }

    case "OPEN_CART": {
      return {
        ...state,
        isOpen: true,
      }
    }

    case "CLOSE_CART": {
      return {
        ...state,
        isOpen: false,
      }
    }

    default:
      return state
  }
}

type CartContextType = {
  cart: CartState
  addItem: (id: string, type: "product" | "service") => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  itemCount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState, loadCartFromStorage)

  useEffect(() => {
    saveCartToStorage(cart)
  }, [cart])

  const addItem = (id: string, type: "product" | "service") => {
    dispatch({ type: "ADD_ITEM", payload: { id, type } })
  }

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } })
  }

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  const openCart = () => {
    dispatch({ type: "OPEN_CART" })
  }

  const closeCart = () => {
    dispatch({ type: "CLOSE_CART" })
  }

  const itemCount = cart.items.reduce((total, item) => total + item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        openCart,
        closeCart,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
