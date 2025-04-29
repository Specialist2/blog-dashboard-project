export interface BookingFormData {
  service: string
  date: Date
  time: string
  name: string
  email: string
  phone: string
  notes?: string
}

export interface EmailResponse {
  success: boolean
  message: string
}

export interface CartItem {
  id: string
  quantity: number
  type: "product" | "service"
}

export interface CartState {
  items: CartItem[]
  isOpen: boolean
}
