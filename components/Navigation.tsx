'use client';
import imgDark from "@/components/images/tkl.png"
import imgLight from "@/components/images/tkl.png"
import Link from 'next/link'
import { Truck } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from './mode-toggle'
import Image from "next/image"
import { useTheme } from 'next-themes'  // Assuming you're using next-themes for dark/light mode

export default function Navigation() {
  const { theme } = useTheme();  // Get the current theme

  // Choose logo based on the theme
  const logo = theme === 'dark' ? imgDark : imgLight;

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="tklogistics" width={50} height={50} className=" bg-transparent rounded-full mr-1" />
            <span className="text-lg font-semibold">T.K. LOGISTICS</span>
          </Link>
          <div className="hidden sm:flex sm:space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/about">About</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/services">Services</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/faq">FAQ</Link>
            </Button>
            <Button variant="default" asChild>
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            {/* theme toggle */}
            <ModeToggle />

            {/* mobile nav bar */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="sm:hidden">
                  <Truck className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-4">
                  <Button variant="ghost" asChild>
                    <Link href="/">Home</Link>
                  </Button>
                  <Button variant="ghost" asChild>
                    <Link href="/about">About</Link>
                  </Button>
                  <Button variant="ghost" asChild>
                    <Link href="/services">Services</Link>
                  </Button>
                  <Button variant="ghost" asChild>
                    <Link href="/faq">FAQ</Link>
                  </Button>
                  <Button variant="ghost" asChild>
                    <Link href="/contact">Contact</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
