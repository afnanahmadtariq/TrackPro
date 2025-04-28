import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ServiceFeature } from "@/components/service-feature"

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Link href="/">
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <h1 className="text-3xl font-bold ml-4">Our Services</h1>
      </div>

      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-gray-600 text-lg">
          We offer comprehensive vehicle tracking solutions designed to meet the needs of businesses of all sizes. Our
          cutting-edge technology provides real-time insights into your fleet's operations, helping you improve
          efficiency, reduce costs, and enhance security.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => (
          <Card key={index} className="h-full flex flex-col">
            <CardHeader>
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.shortDescription}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <ServiceFeature key={idx} feature={feature} />
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/contact" className="w-full">
                <Button className="w-full">Learn More</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="bg-gray-50 rounded-xl p-8 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Custom Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't see exactly what you need? We offer custom tracking solutions tailored to your specific requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4">Enterprise Solutions</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive tracking systems for large fleets with advanced analytics, custom reporting, and dedicated
              support.
            </p>
            <Link href="/contact">
              <Button variant="outline">Contact Sales</Button>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4">Integration Services</h3>
            <p className="text-gray-600 mb-4">
              Seamlessly integrate our tracking system with your existing software and management tools.
            </p>
            <Link href="/contact">
              <Button variant="outline">Learn More</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const services = [
  {
    title: "Real-Time GPS Tracking",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    shortDescription: "Monitor your vehicles in real-time",
    description:
      "Our advanced GPS tracking system provides real-time location updates for all your vehicles. Know exactly where your assets are at all times, with accurate location data updated every 30 seconds.",
    features: [
      "Live location tracking with 30-second updates",
      "Historical route playback",
      "Geofencing capabilities",
      "Mobile app access",
      "Detailed trip reports",
    ],
  },
  {
    title: "Fleet Management",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M10 17h4V5H2v12h3" />
        <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" />
        <path d="M14 17h1" />
        <circle cx="7.5" cy="17.5" r="2.5" />
        <circle cx="17.5" cy="17.5" r="2.5" />
      </svg>
    ),
    shortDescription: "Efficiently manage your entire fleet",
    description:
      "Our comprehensive fleet management solution helps you optimize operations, reduce costs, and improve efficiency. Monitor driver behavior, track maintenance needs, and analyze performance metrics all in one place.",
    features: [
      "Driver behavior monitoring",
      "Maintenance scheduling and alerts",
      "Fuel consumption tracking",
      "Performance analytics dashboard",
      "Custom reporting tools",
    ],
  },
  {
    title: "Theft Recovery",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      </svg>
    ),
    shortDescription: "Quickly recover stolen vehicles",
    description:
      "Our theft recovery system provides immediate alerts and precise location tracking to help you recover stolen vehicles quickly. With 24/7 monitoring and instant notifications, you can take action immediately if a theft occurs.",
    features: [
      "Instant theft alerts",
      "Remote engine immobilization",
      "24/7 monitoring center support",
      "Law enforcement coordination",
      "Recovery success rate over 95%",
    ],
  },
]
