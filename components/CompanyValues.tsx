import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Target, Lightbulb, Users } from 'lucide-react'

export function CompanyValues() {
  const values = [
    { title: "Integrity", icon: Shield, description: "We uphold the highest standards of honesty and ethical conduct in all our operations." },
    { title: "Excellence", icon: Target, description: "We strive for excellence in every aspect of our service delivery." },
    { title: "Innovation", icon: Lightbulb, description: "We continuously seek innovative solutions to meet the evolving needs of our clients." },
    { title: "Customer-Centric", icon: Users, description: "Our clients' success is at the heart of everything we do." },
  ]

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index}>
              <CardHeader>
                <value.icon className="w-8 h-8 mb-2 text-primary" />
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

