import { Suspense } from "react"
import type { Metadata } from "next"
import BookingForm from "@/components/booking-form"
import { Header } from "@/components/header"
import { ServicesList } from "@/components/services-list"
import { TestimonialSection } from "@/components/testimonial-section"

export const metadata: Metadata = {
  title: "Elegance Salon | Book Your Appointment",
  description: "Book your appointment at Elegance Salon. Hair, nails, makeup, and spa services.",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-purple-100 opacity-50" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Beauty & Relaxation</span>
                <span className="block text-pink-600">at Elegance Salon</span>
              </h1>
              <p className="mt-6 text-xl text-gray-500">
                Experience luxury treatments and expert care from our professional stylists and therapists.
              </p>
              <div className="mt-8">
                <a
                  href="#booking"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Services</h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                Choose from our wide range of premium beauty and wellness services.
              </p>
            </div>
            <ServicesList />
          </div>
        </section>

        {/* Booking Section */}
        <section id="booking" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Book Your Appointment</h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                Select your preferred service, date, and time to schedule your visit.
              </p>
            </div>
            <Suspense fallback={<div className="text-center py-8">Loading booking form...</div>}>
              <BookingForm />
            </Suspense>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialSection />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Elegance Salon</h3>
              <p className="text-gray-300">
                123 Beauty Street
                <br />
                New York, NY 10001
                <br />
                (555) 123-4567
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Hours</h3>
              <p className="text-gray-300">
                Monday - Friday: 9am - 8pm
                <br />
                Saturday: 9am - 6pm
                <br />
                Sunday: 10am - 5pm
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  Instagram
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  Facebook
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} Elegance Salon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
