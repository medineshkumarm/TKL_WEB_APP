'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      title: "Professional Entry Processing",
      description: "Efficient and accurate customs entry processing to ensure smooth clearance of your goods."
    },
    {
      title: "Total Compliance Management",
      description: "Comprehensive compliance services to keep your operations in line with all relevant regulations."
    },
    {
      title: "Classification and Valuation Assistance",
      description: "Expert guidance on proper classification and valuation of goods for customs purposes."
    },
    {
      title: "Import and Compliance Consulting",
      description: "Strategic advice to optimize your import processes and ensure regulatory compliance."
    },
    {
      title: "Specialist Cargo Handling",
      description: "Expertise in handling earth moving equipment, tower cranes, and over-dimensional cargo."
    },
    {
      title: "Break bulk and used Machinery Import",
      description: "Specialized services for importing second-hand machinery through incentive schemes."
    },

    {
      title: "Customs Information Services",
      description: "Up-to-date information on customs regulations and procedures to keep you informed."
    },
    {
      title: "Licensed Customs Brokers",
      description: "In-house licensed customs brokers to handle all your customs-related needs."
    },
    {
      title: "Daily Status Updates",
      description: "Comprehensive daily updates to keep you updated on the status of your shipments."
    },
    
    {
      title: "Warehousing Solutions",
      description: "Secure and efficient warehousing facilities at competitive rates."
    }
  ]

  return (
    <div className="py-16 container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              opacity: { duration: 0.6, delay: index * 0.1 },
              y: { duration: 0.6, delay: index * 0.1, ease: 'easeOut' },
              scale: { duration: 0.4, delay: index * 0.1 },
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
          >
            <Card className="transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
