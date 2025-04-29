import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Clock, DollarSign } from "lucide-react"
import { getServiceBySlug, getRelatedServices } from "@/lib/services"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Header } from "@/components/header"
import { AddToCartButton } from "@/components/add-to-cart-button"

interface ServicePageProps {
  params: {
    slug: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  const relatedServices = getRelatedServices(service.id)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back button */}
        <div className="mb-8">
          <Button asChild variant="ghost" size="sm" className="gap-2">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back to all services
            </Link>
          </Button>
        </div>

        {/* Service header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{service.name}</h1>
            <p className="mt-2 text-lg text-gray-600">{service.shortDescription}</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700">{service.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700">{service.price}</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="md:col-span-2">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold mb-4">About this service</h2>
              <p className="text-gray-700 mb-6">{service.fullDescription}</p>

              <h3 className="text-xl font-semibold mb-3">What to expect</h3>
              <ol className="list-decimal pl-5 mb-6 space-y-2">
                {service.process.map((step, index) => (
                  <li key={index} className="text-gray-700">
                    {step}
                  </li>
                ))}
              </ol>

              <h3 className="text-xl font-semibold mb-3">Benefits</h3>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="text-gray-700">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing options */}
            <div className="mt-10">
              <h2 className="text-2xl font-semibold mb-6">Pricing Options</h2>
              <div className="grid gap-4">
                {service.priceOptions.map((option, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg"
                  >
                    <div>
                      <h3 className="font-medium text-lg">{option.name}</h3>
                      <p className="text-gray-600 text-sm">{option.description}</p>
                    </div>
                    <div className="flex items-center gap-4 mt-3 sm:mt-0">
                      <span className="text-gray-500 text-sm">{option.duration}</span>
                      <span className="font-semibold text-pink-600">{option.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="mt-10">
              <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {service.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="sticky top-8">
              {/* Booking card */}
              <Card>
                <CardHeader>
                  <CardTitle>Book this service</CardTitle>
                  <CardDescription>Select a date and time that works for you</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button asChild className="w-full bg-pink-600 hover:bg-pink-700">
                    <Link href={`/#booking?service=${service.slug}`}>Book Appointment</Link>
                  </Button>

                  <div className="text-center">
                    <span className="text-sm text-gray-500">or</span>
                  </div>

                  <AddToCartButton id={service.slug} type="service" className="w-full" variant="outline" />
                </CardContent>
              </Card>

              {/* Related services */}
              {relatedServices.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">You might also like</h3>
                  <div className="grid gap-4">
                    {relatedServices.map((relatedService) => (
                      <Link key={relatedService.id} href={`/services/${relatedService.slug}`} className="group">
                        <Card className="overflow-hidden transition-all hover:shadow-md">
                          <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-base group-hover:text-pink-600 transition-colors">
                                {relatedService.name}
                              </CardTitle>
                              <relatedService.icon className="h-4 w-4 text-pink-500" />
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="flex justify-between items-center">
                              <p className="font-medium text-pink-600 text-sm">{relatedService.price}</p>
                              <p className="text-xs text-gray-500">{relatedService.duration}</p>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
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
