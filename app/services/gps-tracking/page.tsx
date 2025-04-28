import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin, Route, Clock, Bell, Shield, Smartphone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GPSTrackingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-20 mix-blend-overlay"></div>
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-secondary/30 rounded-full blur-3xl"></div>
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-accent/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="flex items-center mb-8">
            <Link href="/services">
              <Button variant="ghost" size="sm" className="gap-2 text-white hover:bg-white/10">
                <ArrowLeft className="h-4 w-4" />
                Back to Services
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 mb-6 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm font-medium">GPS Tracking Service</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Real-Time GPS Vehicle Tracking
              </h1>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Know exactly where your vehicles are at all times with our advanced GPS tracking system. Get real-time
                updates, historical data, and comprehensive reporting to optimize your fleet operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/tracking-demo">
                  <Button size="lg" className="gap-2 bg-white text-primary hover:bg-white/90 hover:text-primary">
                    Try Live Demo
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                  >
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1538905386057-4a5a580c45a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center opacity-60 mix-blend-overlay"></div>
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
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 mb-4 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">Key Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced GPS Tracking Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our GPS tracking solution comes packed with features designed to give you complete visibility and control
              over your fleet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover-effect border-none overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary"></div>
                <CardContent className="p-6">
                  <div className="h-14 w-14 bg-primary rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50 bg-dot-pattern">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 mb-4 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">How It Works</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple & Effective Tracking</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our GPS tracking system is designed to be easy to use while providing powerful insights into your fleet
              operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary/20"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 mb-4 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">Use Cases</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perfect For Various Industries</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our GPS tracking solution is versatile and can be tailored to meet the needs of various industries.
            </p>
          </div>

          <Tabs defaultValue="logistics" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="logistics">Logistics</TabsTrigger>
              <TabsTrigger value="construction">Construction</TabsTrigger>
              <TabsTrigger value="services">Service Fleets</TabsTrigger>
            </TabsList>

            {useCases.map((useCase) => (
              <TabsContent key={useCase.id} value={useCase.id} className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                    <p className="text-gray-600 mb-6">{useCase.description}</p>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                          </div>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative h-[250px] rounded-xl overflow-hidden shadow-md">
                    <Image
                      src={useCase.id === "logistics" 
                        ? "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        : useCase.id === "construction"
                        ? "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        : "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                      }
                      alt={useCase.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Track Your Fleet?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Get started with our GPS tracking solution today and take control of your fleet operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tracking-demo">
              <Button size="lg" className="gap-2 bg-white text-primary hover:bg-white/90 hover:text-primary">
                Try Live Demo
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    title: "Real-Time Tracking",
    description: "Monitor your vehicles in real-time with 30-second location updates and live map visualization.",
    icon: MapPin,
  },
  {
    title: "Route History",
    description: "Access detailed historical route data to analyze past trips and driver behavior.",
    icon: Route,
  },
  {
    title: "Instant Alerts",
    description: "Receive immediate notifications for speeding, unauthorized use, or entering/exiting geofenced areas.",
    icon: Bell,
  },
  {
    title: "Geofencing",
    description: "Create virtual boundaries and get alerts when vehicles enter or exit designated areas.",
    icon: Shield,
  },
  {
    title: "Mobile Access",
    description: "Access your tracking dashboard from anywhere using our mobile app for iOS and Android.",
    icon: Smartphone,
  },
  {
    title: "Detailed Reports",
    description: "Generate comprehensive reports on vehicle usage, idle time, mileage, and more.",
    icon: Clock,
  },
]

const steps = [
  {
    title: "Install Trackers",
    description: "Our compact GPS trackers are easily installed in your vehicles by our professional technicians.",
  },
  {
    title: "Connect to Platform",
    description: "The trackers automatically connect to our secure cloud platform, providing immediate data access.",
  },
  {
    title: "Monitor & Analyze",
    description: "Use our intuitive dashboard to monitor your fleet in real-time and analyze performance data.",
  },
]

const useCases = [
  {
    id: "logistics",
    title: "Logistics & Delivery",
    description: "Optimize delivery routes, improve ETAs, and enhance customer satisfaction with real-time tracking.",
    benefits: [
      "Reduce fuel costs by optimizing routes",
      "Improve delivery time estimates",
      "Enhance customer satisfaction with accurate ETAs",
      "Monitor driver behavior and safety",
      "Reduce unauthorized vehicle use",
    ],
  },
  {
    id: "construction",
    title: "Construction & Heavy Equipment",
    description: "Keep track of valuable equipment, prevent theft, and optimize utilization across job sites.",
    benefits: [
      "Prevent equipment theft and unauthorized use",
      "Track equipment utilization across job sites",
      "Optimize maintenance schedules",
      "Improve billing accuracy for equipment usage",
      "Enhance job site coordination",
    ],
  },
  {
    id: "services",
    title: "Service Fleets",
    description: "Improve response times, optimize technician dispatching, and enhance service delivery efficiency.",
    benefits: [
      "Dispatch the nearest technician to service calls",
      "Improve response times and customer satisfaction",
      "Optimize service routes for multiple appointments",
      "Track service time at customer locations",
      "Reduce overtime and unauthorized vehicle use",
    ],
  },
]
