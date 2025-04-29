import Link from "next/link"
import { Scissors } from "lucide-react"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/services"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MobileMenu } from "@/components/mobile-menu"
import { CartButton } from "@/components/cart-button"

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Scissors className="h-8 w-8 text-pink-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Elegance Salon</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-500 hover:text-gray-900 font-medium">
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-gray-500 hover:text-gray-900 font-medium">Services</button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56">
                {services.map((service) => (
                  <DropdownMenuItem key={service.id} asChild>
                    <Link href={`/services/${service.slug}`} className="flex items-center gap-2 cursor-pointer">
                      <service.icon className="h-4 w-4 text-pink-500" />
                      <span>{service.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/shop" className="text-gray-500 hover:text-gray-900 font-medium">
              Shop
            </Link>

            <Link href="/#booking" className="text-gray-500 hover:text-gray-900 font-medium">
              Book Now
            </Link>
            <Link href="/#testimonials" className="text-gray-500 hover:text-gray-900 font-medium">
              Testimonials
            </Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <CartButton />
            <Button asChild variant="outline" className="mr-4">
              <Link href="/#contact">Contact</Link>
            </Button>
            <Button asChild className="bg-pink-600 hover:bg-pink-700">
              <Link href="/#booking">Book Now</Link>
            </Button>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden flex items-center space-x-4">
            <CartButton />
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
