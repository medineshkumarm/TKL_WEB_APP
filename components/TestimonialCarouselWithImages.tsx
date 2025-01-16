// Automatic Testimonial Carousel
'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { User2 } from 'lucide-react'

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

export function AutomaticTestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="max-w-4xl mx-auto relative">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6 border rounded-lg shadow-lg"
      >
        {/* <Image
          src={testimonials[currentIndex].image}
          alt={testimonials[currentIndex].name}
          width={100}
          height={100}
          className="rounded-full mb-4"
        /> */}
        <User2 width={100} height={100} className="rounded-full mb-4 bg-orange-400"/>
        <p className="text-lg italic">{testimonials[currentIndex].text}</p>
        <p className="font-semibold mt-2">{testimonials[currentIndex].name}</p>
        <p className="text-sm text-muted-foreground">{testimonials[currentIndex].company}</p>
      </motion.div>
    </div>
  )
}

// Continuous Backqueue Testimonial Carousel
export function ContinuousBackqueueTestimonialCarousel() {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className="inline-flex"
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: testimonials.length * 5,
            ease: 'backIn'
          }
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex-none w-full p-6 border rounded-lg shadow-lg">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={100}
              height={100}
              className="rounded-full mb-4"
            />
            <p className="text-lg italic">{testimonial.text}</p>
            <p className="font-semibold mt-2">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">{testimonial.company}</p>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
