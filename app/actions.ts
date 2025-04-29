"use server"

import { z } from "zod"
import { sendBookingConfirmationEmail } from "@/lib/email"
import type { BookingFormData } from "@/lib/types"

const bookingSchema = z.object({
  service: z.string({
    required_error: "Please select a service",
  }),
  date: z.date({
    required_error: "Please select a date",
  }),
  time: z.string({
    required_error: "Please select a time",
  }),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number",
  }),
  notes: z.string().optional(),
})

export type BookingActionState = {
  success?: boolean
  message?: string
  data?: BookingFormData
  errors?: {
    service?: string[]
    date?: string[]
    time?: string[]
    name?: string[]
    email?: string[]
    phone?: string[]
    notes?: string[]
  }
}

export async function createBooking(prevState: BookingActionState, formData: FormData): Promise<BookingActionState> {
  // Validate form data
  const validatedFields = bookingSchema.safeParse({
    service: formData.get("service"),
    date: new Date(formData.get("date") as string),
    time: formData.get("time"),
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    notes: formData.get("notes"),
  })

  // If validation fails, return errors
  if (!validatedFields.success) {
    return {
      success: false,
      message: "Please check the form for errors",
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const bookingData = validatedFields.data

  try {
    // In a real application, you would save the booking to a database here
    console.log("Booking data:", bookingData)

    // Send confirmation email
    const emailResult = await sendBookingConfirmationEmail(bookingData)

    if (!emailResult.success) {
      return {
        success: false,
        message:
          "Your booking was created, but we couldn't send a confirmation email. Please check your email address.",
        data: bookingData,
      }
    }

    // Return success state
    return {
      success: true,
      message: "Your appointment has been booked successfully! A confirmation email has been sent to your inbox.",
      data: bookingData,
    }
  } catch (error) {
    // Handle any errors
    console.error("Booking error:", error)
    return {
      success: false,
      message: "There was an error processing your booking. Please try again.",
    }
  }
}
