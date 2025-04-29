import { format } from "date-fns"
import type { BookingFormData } from "@/lib/types"
import { getServiceBySlug } from "@/lib/services"

export function generateBookingConfirmationEmail(booking: BookingFormData): {
  subject: string
  html: string
  text: string
} {
  const service = getServiceBySlug(booking.service)
  const serviceName = service?.name || booking.service
  const formattedDate = format(booking.date, "EEEE, MMMM d, yyyy")

  const subject = `Your Appointment Confirmation - Elegance Salon`

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Appointment Confirmation</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
        }
        .header {
          background-color: #fbcfe8;
          padding: 20px;
          text-align: center;
        }
        .content {
          padding: 20px;
          background-color: #fff;
        }
        .footer {
          background-color: #f9f9f9;
          padding: 15px;
          text-align: center;
          font-size: 12px;
          color: #666;
        }
        h1 {
          color: #db2777;
          margin: 0;
        }
        h2 {
          color: #db2777;
        }
        .appointment-details {
          background-color: #f9f9f9;
          padding: 15px;
          border-radius: 5px;
          margin: 20px 0;
        }
        .appointment-details p {
          margin: 5px 0;
        }
        .cta-button {
          display: inline-block;
          background-color: #db2777;
          color: white;
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 5px;
          margin: 20px 0;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Elegance Salon</h1>
        <p>Your appointment has been confirmed!</p>
      </div>
      
      <div class="content">
        <p>Dear ${booking.name},</p>
        
        <p>Thank you for booking an appointment with Elegance Salon. We're looking forward to seeing you!</p>
        
        <div class="appointment-details">
          <h2>Appointment Details</h2>
          <p><strong>Service:</strong> ${serviceName}</p>
          <p><strong>Date:</strong> ${formattedDate}</p>
          <p><strong>Time:</strong> ${booking.time}</p>
          <p><strong>Stylist:</strong> Will be assigned and confirmed</p>
        </div>
        
        <h2>Your Information</h2>
        <p><strong>Name:</strong> ${booking.name}</p>
        <p><strong>Email:</strong> ${booking.email}</p>
        <p><strong>Phone:</strong> ${booking.phone}</p>
        
        ${booking.notes ? `<p><strong>Special Requests:</strong> ${booking.notes}</p>` : ""}
        
        <h2>Location</h2>
        <p>
          Elegance Salon<br>
          123 Beauty Street<br>
          New York, NY 10001
        </p>
        
        <p>If you need to reschedule or cancel your appointment, please contact us at least 24 hours in advance at (555) 123-4567.</p>
        
        <a href="https://elegancesalon.com/manage-booking" class="cta-button">Manage Your Booking</a>
        
        <p>We look forward to providing you with an exceptional salon experience!</p>
        
        <p>
          Best regards,<br>
          The Elegance Salon Team
        </p>
      </div>
      
      <div class="footer">
        <p>© ${new Date().getFullYear()} Elegance Salon. All rights reserved.</p>
        <p>123 Beauty Street, New York, NY 10001 | (555) 123-4567</p>
        <p>
          <a href="https://elegancesalon.com/privacy-policy">Privacy Policy</a> | 
          <a href="https://elegancesalon.com/terms">Terms of Service</a>
        </p>
      </div>
    </body>
    </html>
  `

  const text = `
    APPOINTMENT CONFIRMATION - ELEGANCE SALON
    
    Dear ${booking.name},
    
    Thank you for booking an appointment with Elegance Salon. We're looking forward to seeing you!
    
    APPOINTMENT DETAILS
    Service: ${serviceName}
    Date: ${formattedDate}
    Time: ${booking.time}
    Stylist: Will be assigned and confirmed
    
    YOUR INFORMATION
    Name: ${booking.name}
    Email: ${booking.email}
    Phone: ${booking.phone}
    ${booking.notes ? `Special Requests: ${booking.notes}` : ""}
    
    LOCATION
    Elegance Salon
    123 Beauty Street
    New York, NY 10001
    
    If you need to reschedule or cancel your appointment, please contact us at least 24 hours in advance at (555) 123-4567.
    
    We look forward to providing you with an exceptional salon experience!
    
    Best regards,
    The Elegance Salon Team
    
    © ${new Date().getFullYear()} Elegance Salon. All rights reserved.
    123 Beauty Street, New York, NY 10001 | (555) 123-4567
  `

  return {
    subject,
    html,
    text,
  }
}
