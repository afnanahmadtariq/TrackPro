import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Shield, Bell, Clock, MapPin, Lock, Smartphone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function TheftRecoveryPage() {
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
                <span className="text-sm font-medium">Theft Recovery Service</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Advanced Vehicle Theft Recovery
              </h1>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Protect your valuable assets with our state-of-the-art theft recovery system. Get immediate alerts,
                precise location tracking, and rapid recovery assistance when theft occurs.
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
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=600')] bg-cover bg-center opacity-60 mix-blend-overlay"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="h-20 w-20 rounded-full bg-white/10 flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
                      <div className="h-12 w-12 rounded-full bg-white/30 flex items-center justify-center">
                        <Shield className="h-6 w-6 text-white pulse-dot" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Theft Protection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our theft recovery solution includes advanced features designed to protect your vehicles and recover them
              quickly if stolen.
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
              <span className="text-sm font-medium text-primary">Recovery Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Our Recovery System Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our theft recovery process is designed to be fast, efficient, and effective, helping you recover your
              vehicles quickly.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {recoverySteps.map((step, index) => (
                <div key={index} className="flex mb-12 last:mb-0">
                  <div className="mr-6 relative">
                    <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold">
                      {index + 1}
                    </div>
                    {index < recoverySteps.length - 1 && (
                      <div className="absolute top-12 bottom-0 left-1/2 w-0.5 -translate-x-1/2 bg-primary/20 h-[calc(100%-48px)]"></div>
                    )}
                  </div>
                  <div className="flex-1 pt-1.5">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div className="bg-white p-4 rounded-lg shadow-sm border">
                      <h4 className="font-medium text-primary mb-2">Key Benefit:</h4>
                      <p className="text-gray-700">{step.benefit}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 mb-4 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">Success Stories</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Recovery Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read about real cases where our theft recovery system helped customers recover their stolen vehicles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {successStories.map((story, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary"></div>
                <div className="relative h-48">
                  <Image src="/placeholder.svg?height=200&width=400" alt={story.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <div className="bg-primary text-white text-xs font-bold px-2 py-1 rounded-full inline-block mb-2">
                      {story.location}
                    </div>
                    <h3 className="text-xl font-bold text-white">{story.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{story.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Recovery Time: {story.recoveryTime}</span>
                    </div>
                    <div className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Recovered
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Protect Your Fleet Today</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Don't wait until theft occurs. Implement our recovery system now and gain peace of mind.
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
    title: "Instant Theft Alerts",
    description: "Receive immediate notifications when unauthorized movement or tampering is detected.",
    icon: Bell,
  },
  {
    title: "Real-Time Tracking",
    description: "Pinpoint the exact location of your stolen vehicle with continuous real-time updates.",
    icon: MapPin,
  },
  {
    title: "Remote Immobilization",
    description: "Remotely disable the vehicle's engine to prevent further movement and aid recovery.",
    icon: Lock,
  },
  {
    title: "24/7 Recovery Support",
    description: "Our dedicated recovery team works around the clock to assist with vehicle recovery.",
    icon: Clock,
  },
  {
    title: "Law Enforcement Coordination",
    description: "We work directly with local authorities to expedite the recovery process.",
    icon: Shield,
  },
  {
    title: "Mobile Alerts & Control",
    description: "Manage alerts and track recovery efforts from anywhere using our mobile app.",
    icon: Smartphone,
  },
]

const recoverySteps = [
  {
    title: "Theft Detection",
    description: "Our system immediately detects unauthorized movement, tampering, or ignition attempts.",
    benefit:
      "The faster theft is detected, the higher the recovery rate. Our system typically detects theft within seconds of occurrence.",
  },
  {
    title: "Alert Notification",
    description: "You receive instant alerts via mobile app, SMS, and email with initial location information.",
    benefit:
      "Multi-channel alerts ensure you're notified immediately, regardless of where you are or what you're doing.",
  },
  {
    title: "Recovery Activation",
    description: "Our 24/7 recovery team is activated and begins coordinating with you and local authorities.",
    benefit:
      "Professional recovery specialists handle the process, allowing you to focus on your business while we recover your vehicle.",
  },
  {
    title: "Real-Time Tracking",
    description: "Continuous location updates are provided to you and authorities to facilitate quick recovery.",
    benefit:
      "Precise location data significantly increases recovery speed and success rate, with most vehicles recovered within hours.",
  },
]

const successStories = [
  {
    title: "Delivery Van Recovered in 45 Minutes",
    location: "Chicago, IL",
    description:
      "A delivery company's van was stolen during a scheduled stop. Our system detected the theft immediately, and the vehicle was recovered just 45 minutes later with all packages intact.",
    recoveryTime: "45 minutes",
  },
  {
    title: "Construction Equipment Recovered Overnight",
    location: "Dallas, TX",
    description:
      "Thieves attempted to steal an excavator from a construction site after hours. The system alerted the owner, who coordinated with police to recover the equipment before dawn.",
    recoveryTime: "6 hours",
  },
  {
    title: "Fleet Vehicle Recovered Across State Lines",
    location: "Atlanta, GA",
    description:
      "A company vehicle was stolen and driven across state lines. Despite the distance, our tracking system provided continuous updates, leading to recovery in a neighboring state.",
    recoveryTime: "12 hours",
  },
  {
    title: "Luxury Vehicle Recovered Undamaged",
    location: "Miami, FL",
    description:
      "A high-value executive vehicle was stolen from a parking garage. Thanks to immediate alerts and precise tracking, the vehicle was recovered without damage before it could be stripped or shipped.",
    recoveryTime: "3 hours",
  },
]
