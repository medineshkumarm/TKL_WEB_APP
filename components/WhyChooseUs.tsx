import { Shield, Globe, Clock, TrendingUp } from 'lucide-react'

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Expert Compliance",
      description: "Ensuring regulatory adherence"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Supporting international operations"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Timely Service",
      description: "Eliminating supply chain delays"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Continuous Improvement",
      description: "Constantly updating our services"
    }
  ]

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

