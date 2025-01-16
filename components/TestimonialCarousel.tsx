'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "John Doe",
    company: "Global Imports Inc.",
    text: "T.K. LOGISTICS streamlined our import processes, saving time and money."
  },
  {
    name: "Jane Smith",
    company: "Tech Innovations Ltd.",
    text: "Unmatched attention to detail and commitment to timely delivery."
  },
  {
    name: "Robert Johnson",
    company: "Machinery Exports Co.",
    text: "Exceptional service in handling complex, oversized shipments."
  }
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="max-w-2xl mx-auto relative">
      <div className="text-center mb-8">
        <p className="text-lg mb-4">{testimonials[currentIndex].text}</p>
        <p className="font-semibold">{testimonials[currentIndex].name}</p>
        <p className="text-sm text-muted-foreground">{testimonials[currentIndex].company}</p>
      </div>
      <div className="flex justify-center space-x-4">
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

