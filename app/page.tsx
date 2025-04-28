import Link from "next/link"
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { ServiceCard } from "@/components/service-card"
import { TestimonialSection } from "@/components/testimonial-section"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Services Overview */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 mb-4 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Vehicle Tracking Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive vehicle tracking solutions for businesses of all sizes. Our cutting-edge
              technology ensures you always know where your assets are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Real-Time GPS Tracking"
              description="Monitor your vehicles in real-time with our advanced GPS tracking system. Get instant location updates and route history."
              icon="map-pin"
              link="/services/gps-tracking"
            />
            <ServiceCard
              title="Fleet Management"
              description="Efficiently manage your entire fleet with comprehensive analytics, maintenance alerts, and driver behavior monitoring."
              icon="truck"
              link="/services/fleet-management"
            />
            <ServiceCard
              title="Theft Recovery"
              description="Quickly recover stolen vehicles with our advanced tracking technology and immediate alert system."
              icon="shield"
              link="/services/theft-recovery"
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button className="gap-2 bg-primary hover:bg-primary/90">
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tracking Demo CTA */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50 bg-dot-pattern">
        <div className="container mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden animated-border">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Experience Real-Time Vehicle Tracking</h2>
                <p className="text-gray-600 mb-6">
                  Try our interactive demo to see how our tracking system works. Monitor vehicles in real-time, view
                  detailed reports, and experience the power of our platform.
                </p>
                <Link href="/tracking-demo">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Try Live Demo
                  </Button>
                </Link>
              </div>
              <div className="bg-primary h-64 md:h-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=800')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="h-20 w-20 rounded-full bg-white/10 flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
                        <div className="h-12 w-12 rounded-full bg-white/30 flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-white pulse-dot" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSection />

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions about our vehicle tracking solutions? Contact our team for more information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium text-lg mb-2">Call Us</h3>
              <p className="text-gray-600 text-center">(555) 123-4567</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium text-lg mb-2">Email Us</h3>
              <p className="text-gray-600 text-center">info@trackingcompany.com</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium text-lg mb-2">Visit Us</h3>
              <p className="text-gray-600 text-center">123 Tracking Street, City, State 12345</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button className="gap-2">
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
