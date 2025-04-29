import type { BookingFormData, EmailResponse } from "@/lib/types"
import { generateBookingConfirmationEmail } from "@/lib/email-templates"

// In a real application, you would use a service like SendGrid, Mailgun, or Amazon SES
// This is a simulated email sending function for demonstration purposes
export async function sendEmail(to: string, subject: string, html: string, text: string): Promise<EmailResponse> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Log the email content (for demonstration)
  console.log("Sending email to:", to)
  console.log("Subject:", subject)
  console.log("Text content:", text.substring(0, 100) + "...")

  // In a real application, you would call your email service API here
  // For example, with SendGrid:
  // const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
  //   method: 'POST',
  //   headers: {
  //     'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     personalizations: [{ to: [{ email: to }] }],
  //     from: { email: 'appointments@elegancesalon.com', name: 'Elegance Salon' },
  //     subject,
  //     content: [
  //       { type: 'text/plain', value: text },
  //       { type: 'text/html', value: html },
  //     ],
  //   }),
  // })

  // Simulate successful email sending (95% success rate)
  const isSuccess = Math.random() < 0.95

  if (isSuccess) {
    return {
      success: true,
      message: "Email sent successfully",
    }
  } else {
    return {
      success: false,
      message: "Failed to send email. Please try again.",
    }
  }
}

export async function sendBookingConfirmationEmail(booking: BookingFormData): Promise<EmailResponse> {
  const { subject, html, text } = generateBookingConfirmationEmail(booking)
  return sendEmail(booking.email, subject, html, text)
}
