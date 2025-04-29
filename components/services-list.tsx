import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { services } from "@/lib/services"

export function ServicesList() {
  return (
    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <Link href={`/services/${service.slug}`} key={service.id} className="block group">
          <Card className="overflow-hidden transition-all hover:shadow-lg h-full">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl group-hover:text-pink-600 transition-colors">{service.name}</CardTitle>
                <service.icon className="h-5 w-5 text-pink-500" />
              </div>
              <CardDescription>{service.shortDescription}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <p className="font-semibold text-pink-600">{service.price}</p>
                <p className="text-sm text-gray-500">{service.duration}</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
