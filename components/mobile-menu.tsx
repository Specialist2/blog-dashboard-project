"use client"

import { useState } from "react"
import Link from "next/link"
import { X, Menu, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/services"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleServices = () => setIsServicesOpen(!isServicesOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
        <Menu className="h-6 w-6" />
      </Button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex justify-between items-center p-4 border-b">
            <Link href="/" className="flex items-center" onClick={closeMenu}>
              <span className="text-xl font-bold text-gray-900">Elegance Salon</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Close menu">
              <X className="h-6 w-6" />
            </Button>
          </div>

          <nav className="p-4">
            <ul className="space-y-4">
              <li>
                <Link href="/" className="block py-2 text-lg font-medium" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <button
                  className="flex items-center justify-between w-full py-2 text-lg font-medium"
                  onClick={toggleServices}
                >
                  Services
                  {isServicesOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </button>

                {isServicesOpen && (
                  <ul className="pl-4 mt-2 space-y-2 border-l-2 border-pink-200">
                    {services.map((service) => (
                      <li key={service.id}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="flex items-center gap-2 py-2"
                          onClick={closeMenu}
                        >
                          <service.icon className="h-4 w-4 text-pink-500" />
                          <span>{service.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <Link href="/#booking" className="block py-2 text-lg font-medium" onClick={closeMenu}>
                  Book Now
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="block py-2 text-lg font-medium" onClick={closeMenu}>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="block py-2 text-lg font-medium" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
            <Button asChild className="w-full bg-pink-600 hover:bg-pink-700">
              <Link href="/#booking" onClick={closeMenu}>
                Book Appointment
              </Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
