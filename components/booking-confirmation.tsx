"use client"

import { format } from "date-fns"
import { CheckCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { BookingFormData } from "@/lib/types"
import { getServiceBySlug } from "@/lib/services"

interface BookingConfirmationProps {
  booking: BookingFormData
  onReset: () => void
}

export function BookingConfirmation({ booking, onReset }: BookingConfirmationProps) {
  const service = getServiceBySlug(booking.service)

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-2">
          <CheckCircle className="h-6 w-6 text-green-600" />
          <CardTitle className="text-2xl text-green-600">Booking Confirmed!</CardTitle>
        </div>
        <CardDescription>Thank you for booking with Elegance Salon</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert className="bg-green-50 border-green-200">
          <AlertTitle>Confirmation Email Sent</AlertTitle>
          <AlertDescription>
            We've sent a confirmation email to <span className="font-medium">{booking.email}</span> with your
            appointment details.
          </AlertDescription>
        </Alert>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-lg mb-2">Appointment Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <p className="text-sm text-gray-500">Service</p>
              <p className="font-medium">{service?.name || booking.service}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Date & Time</p>
              <p className="font-medium">
                {format(booking.date, "EEEE, MMMM d, yyyy")} at {booking.time}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="font-medium">{booking.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-medium">{booking.phone}</p>
            </div>
          </div>
          {booking.notes && (
            <div className="mt-2">
              <p className="text-sm text-gray-500">Special Requests</p>
              <p>{booking.notes}</p>
            </div>
          )}
        </div>

        <p className="text-gray-600">
          If you need to make any changes to your appointment, please call us at (555) 123-4567.
        </p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button onClick={onReset}>Book Another Appointment</Button>
      </CardFooter>
    </Card>
  )
}
