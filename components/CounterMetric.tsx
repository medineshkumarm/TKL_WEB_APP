'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const metrics = [
  { label: 'Total Shipments Delivered', value: 1000000 },
  { label: 'Countries Served', value: 35 },
  { label: 'Clients Served', value: 5000 },
  { label: 'Shipments Processed Per Day', value: 1000 },
]

export default function CounterMetrics() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface MetricCardProps {
  label: string;
  value: number;
  inView: boolean;
}

function MetricCard({ label, value, inView }: MetricCardProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (inView) {
      let start = 0
      const end = value
      const duration = 2000
      const increment = Math.ceil(end / (duration / 16))
      
      const timer = setInterval(() => {
        start += increment
        if (start > end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(start)
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [inView, value])

  return (
    <motion.div
      className="bg-muted/60 p-6 rounded-lg shadow-md text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <motion.h3
        className="text-4xl font-bold mb-2 text-orange-600"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {count.toLocaleString()}
      </motion.h3>
      <p className="">{label}</p>
    </motion.div>
  )
}

