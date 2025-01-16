import { CheckCircle } from 'lucide-react'

export default function Services() {
  const services = [
    "Professional Entry Processing",
    "Total Compliance Management",
    "Classification and Valuation Assistance",
    "Import and Compliance Consulting",
    "Specialist for earth moving equipments, Tower cranes, Over dimensional Cargo",
    "Second hand Machinery & Import clearance through incentive schemes",
    "DG goods handling",
    "Customs Information Services",
    "Licensed Customs Brokers (Own CHA)",
    "Advanced Automation Tools",
    "Daily Status Report",
    "Tracking report from Door to Door",
    "Warehousing facility with competitive rates"
  ]

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
              <p className="text-gray-700">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

