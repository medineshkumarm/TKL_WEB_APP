import Link from 'next/link'
import { Truck, Facebook, Twitter, Linkedin } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <Truck className="h-6 w-6 mr-2" />
              <span className="text-lg font-semibold">T.K. LOGISTICS</span>
            </Link>
            <p className="text-sm text-muted-foreground">Your trusted partner in global logistics</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="text-sm text-muted-foreground not-italic">
              NO.12, KUMARAN STREET,<br />
              MEENAMBAKKAM, CHENNAI – 600027<br />
              Office: 044 4510 4050 / 044 2256 0457<br />
              Email: info@tklogistics.co.in
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <div className="aspect-video w-full max-w-2xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3551865837!2d80.16976911482233!3d13.010569990830625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52611144f2a0c7%3A0x8dc1574d8a4e2d9e!2sKumaran%20St%2C%20Meenambakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600027!5e0!3m2!1sen!2sin!4v1652345678901!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className="text-sm text-muted-foreground text-center mt-4">&copy; {new Date().getFullYear()} T.K. LOGISTICS. All rights reserved.</p>
          <p className="text-sm text-muted-foreground text-center mt-2">CHA LICENCE NO. R98/2010 & AAFFT6944DCH001</p>
        </div>
      </div>
    </footer>
  )
}

