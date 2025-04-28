import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Truck, BarChart, AlertTriangle, Gauge, Fuel, PenToolIcon as Tool, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FleetManagementPage() {
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
                <span className="text-sm font-medium">Fleet Management Service</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Comprehensive Fleet Management Solutions
              </h1>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Optimize your fleet operations with our all-in-one management system. Monitor vehicle performance, track
                maintenance needs, analyze driver behavior, and reduce operational costs.
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
                        <Truck className="h-6 w-6 text-white pulse-dot" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Fleet Management Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our fleet management solution provides all the tools you need to optimize operations and reduce costs.
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

      {/* Benefits Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50 bg-dot-pattern">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 mb-4 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">Benefits</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Fleet Management</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our solution delivers measurable benefits that directly impact your bottom line.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Fleet Management Dashboard"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Measurable Results</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-3 w-3 rounded-full bg-primary"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Fleet Management For Every Industry</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our fleet management solution is adaptable to the unique needs of various industries.
            </p>
          </div>

          <Tabs defaultValue="transportation" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="transportation">Transportation</TabsTrigger>
              <TabsTrigger value="delivery">Delivery</TabsTrigger>
              <TabsTrigger value="field-service">Field Service</TabsTrigger>
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
                      src="/placeholder.svg?height=250&width=400"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Optimize Your Fleet?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Get started with our fleet management solution today and transform your operations.
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
    title: "Driver Behavior Monitoring",
    description: "Track and analyze driver behavior including speeding, harsh braking, and rapid acceleration.",
    icon: Users,
  },
  {
    title: "Performance Analytics",
    description: "Comprehensive analytics dashboard with customizable reports on fleet performance metrics.",
    icon: BarChart,
  },
  {
    title: "Maintenance Management",
    description: "Schedule and track vehicle maintenance to prevent breakdowns and extend vehicle lifespan.",
    icon: Tool,
  },
  {
    title: "Fuel Monitoring",
    description: "Track fuel consumption, identify inefficiencies, and detect potential fuel theft.",
    icon: Fuel,
  },
  {
    title: "Safety Alerts",
    description: "Receive immediate notifications for safety concerns and potential vehicle issues.",
    icon: AlertTriangle,
  },
  {
    title: "Speed Monitoring",
    description: "Monitor vehicle speeds to ensure compliance with speed limits and company policies.",
    icon: Gauge,
  },
]

const benefits = [
  {
    title: "Reduce Fuel Costs by 15-20%",
    description: "Optimize routes, reduce idling time, and improve driver behavior to significantly cut fuel expenses.",
  },
  {
    title: "Increase Productivity by 10-15%",
    description: "Better route planning and real-time dispatching help your team complete more jobs in less time.",
  },
  {
    title: "Extend Vehicle Lifespan",
    description:
      "Proactive maintenance scheduling and monitoring helps prevent major repairs and extends vehicle life.",
  },
  {
    title: "Improve Safety & Reduce Accidents",
    description: "Driver behavior monitoring and coaching leads to safer driving practices and fewer accidents.",
  },
]

const useCases = [
  {
    id: "transportation",
    title: "Transportation & Logistics",
    description:
      "Optimize routes, reduce fuel costs, and improve delivery times for transportation and logistics companies.",
    benefits: [
      "Reduce empty miles and optimize capacity utilization",
      "Improve on-time delivery performance",
      "Reduce fuel costs through route optimization",
      "Monitor driver hours of service compliance",
      "Streamline maintenance scheduling and reduce downtime",
    ],
  },
  {
    id: "delivery",
    title: "Last-Mile Delivery",
    description:
      "Enhance delivery efficiency, improve customer satisfaction, and reduce operational costs for delivery fleets.",
    benefits: [
      "Optimize delivery routes for maximum efficiency",
      "Provide accurate ETAs to customers",
      "Monitor driver performance and delivery times",
      "Reduce fuel consumption and vehicle wear",
      "Improve proof of delivery and customer communication",
    ],
  },
  {
    id: "field-service",
    title: "Field Service Operations",
    description:
      "Improve response times, optimize technician dispatching, and enhance service delivery for field service teams.",
    benefits: [
      "Dispatch the nearest qualified technician to service calls",
      "Optimize service routes for multiple appointments",
      "Track service time at customer locations",
      "Improve first-time fix rates with better preparation",
      "Enhance customer satisfaction with accurate arrival times",
    ],
  },
]
