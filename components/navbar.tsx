"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <span className="hidden font-bold sm:inline-block text-xl">TrackPro</span>
          </Link>
        </div>

        <div className="flex-1" />

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 transition-colors hover:text-primary">
                Services
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/services">All Services</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/gps-tracking">GPS Tracking</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/fleet-management">Fleet Management</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/theft-recovery">Theft Recovery</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/tracking-demo" className="transition-colors hover:text-primary">
            Demo
          </Link>
          <Link href="/contact" className="transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
            </Link>
          </div>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-6 mt-8">
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">
                  Home
                </Link>
                <Link href="/services" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">
                  Services
                </Link>
                <Link
                  href="/services/gps-tracking"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium pl-4 text-gray-600"
                >
                  GPS Tracking
                </Link>
                <Link
                  href="/services/fleet-management"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium pl-4 text-gray-600"
                >
                  Fleet Management
                </Link>
                <Link
                  href="/services/theft-recovery"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium pl-4 text-gray-600"
                >
                  Theft Recovery
                </Link>
                <Link href="/tracking-demo" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">
                  Demo
                </Link>
                <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">
                  Contact
                </Link>
                <div className="pt-4">
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full bg-primary hover:bg-primary/90">Get Started</Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
