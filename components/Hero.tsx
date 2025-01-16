import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Global Logistics Simplified
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Seamless. Efficient. Worldwide.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Get Started</Link>
        </Button>
      </div>
    </section>
  )
}

