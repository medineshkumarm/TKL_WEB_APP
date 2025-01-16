import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">B. THIRUMALAICHAMY</h3>
            <div className="flex items-center mb-2">
              <MapPin className="w-5 h-5 mr-2 text-blue-500" />
              <p>NO.12, KUMARAN STREET, MEENAMBAKKAM, CHENNAI – 600027</p>
            </div>
            <div className="flex items-center mb-2">
              <Phone className="w-5 h-5 mr-2 text-blue-500" />
              <p>09500078157</p>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2 text-blue-500" />
              <p>thirumalai@tklogistics.co.in</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">T. ASHOK</h3>
            <div className="flex items-center mb-2">
              <MapPin className="w-5 h-5 mr-2 text-blue-500" />
              <p>NO.12, KUMARAN STREET, MEENAMBAKKAM, CHENNAI - 600027</p>
            </div>
            <div className="flex items-center mb-2">
              <Phone className="w-5 h-5 mr-2 text-blue-500" />
              <p>9444377422</p>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2 text-blue-500" />
              <p>ashokthiyagarajan67@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

