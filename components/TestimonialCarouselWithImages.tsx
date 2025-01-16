'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "John Doe",
    company: "Global Imports Inc.",
    text: "T.K. LOGISTICS has revolutionized our import processes. Their expertise in customs compliance has not only saved us time but also significantly reduced our costs. Their attention to detail is unparalleled.",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Jane Smith",
    company: "Tech Innovations Ltd.",
    text: "We've been working with T.K. LOGISTICS for over 5 years now, and their service has been consistently excellent. Their commitment to timely delivery and their use of advanced tracking systems have greatly improved our supply chain efficiency.",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Robert Johnson",
    company: "Machinery Exports Co.",
    text: "As a specialist in oversized cargo, T.K. LOGISTICS has consistently delivered exceptional service. Their team's knowledge in handling complex shipments is truly impressive. They've become an invaluable partner in our global operations.",
    image: "/placeholder.svg?height=100&width=100"
  }
]

export default function TestimonialCarouselWithImages() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="max-w-4xl mx-auto relative">
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Image
              src={testimonials[currentIndex].image || "/placeholder.svg"}
              alt={testimonials[currentIndex].name}
              width={100}
              height={100}
              className="rounded-full"
            />
            <div>
              <p className="text-lg mb-4 italic">{testimonials[currentIndex].text}</p>
              <p className="font-semibold">{testimonials[currentIndex].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[currentIndex].company}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-center mt-4 space-x-4">
        <Button variant="outline" size="icon" onClick={prevTestimonial}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={nextTestimonial}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

