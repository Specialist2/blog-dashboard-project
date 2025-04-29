import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-6xl font-bold text-pink-600">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Service Not Found</h2>
      <p className="mt-2 text-gray-600 max-w-md">
        We couldn't find the salon service you're looking for. It might have been removed or doesn't exist.
      </p>
      <Button asChild className="mt-8 bg-pink-600 hover:bg-pink-700">
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  )
}
