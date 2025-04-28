import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative bg-mesh-gradient text-white overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-20 mix-blend-overlay"></div>
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-secondary/30 rounded-full blur-3xl"></div>
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-accent/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1 mb-6 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm font-medium">Next-Generation Vehicle Tracking</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Advanced <span className="text-secondary">Vehicle Tracking</span> Solutions
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
              Keep track of your fleet in real-time with our state-of-the-art GPS tracking technology. Improve
              efficiency, reduce costs, and enhance security.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/tracking-demo">
                <Button size="lg" className="gap-2 bg-white text-primary hover:bg-white/90 hover:text-primary">
                  Try Live Demo
                  <ArrowRight className="h-4 w-4" />
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

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-300"></div>
                ))}
              </div>
              <p className="text-sm text-white/80">
                Trusted by <span className="font-bold">500+</span> companies worldwide
              </p>
            </div>
          </div>

          {/* Vehicle Tracking Illustration */}
          <div className="hidden lg:flex justify-end items-center">
            <div className="relative w-full max-w-lg h-[400px]">
              {/* Map Background */}
              <div className="absolute inset-0 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 overflow-hidden">
                {/* Map Grid Lines */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                ></div>

                {/* Vehicles with Tracking Signals */}
                <div className="absolute top-1/4 left-1/4 animate-pulse">
                  <div className="relative">
                    <div className="w-4 h-4 bg-secondary rounded-full"></div>
                    <div className="absolute inset-0 bg-secondary/50 rounded-full animate-ping"></div>
                    <div className="absolute top-6 left-6 text-xs text-white bg-secondary/80 px-2 py-1 rounded">
                      Truck #1
                    </div>
                  </div>
                </div>

                <div className="absolute top-2/3 right-1/3 animate-pulse">
                  <div className="relative">
                    <div className="w-4 h-4 bg-accent rounded-full"></div>
                    <div className="absolute inset-0 bg-accent/50 rounded-full animate-ping"></div>
                    <div className="absolute top-6 left-6 text-xs text-white bg-accent/80 px-2 py-1 rounded">
                      Van #3
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-1/4 right-1/4 animate-pulse">
                  <div className="relative">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                    <div className="absolute inset-0 bg-primary/50 rounded-full animate-ping"></div>
                    <div className="absolute top-6 left-6 text-xs text-white bg-primary/80 px-2 py-1 rounded">
                      Car #7
                    </div>
                  </div>
                </div>

                {/* Tracking Path Lines */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 400 400"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100,100 Q150,50 200,150 T300,250"
                    fill="none"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                  <path
                    d="M300,100 Q250,200 150,250"
                    fill="none"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                </svg>

                {/* Central Hub */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white bg-white/20 px-2 py-1 rounded whitespace-nowrap">
                    Control Center
                  </div>
                </div>

                {/* Radar Animation */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-40 h-40 border-2 border-white/10 rounded-full"></div>
                  <div className="w-60 h-60 border border-white/10 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="w-80 h-80 border border-white/5 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 origin-bottom rotate-0 animate-[spin_4s_linear_infinite]">
                    <div className="w-1 h-40 bg-gradient-to-t from-white/40 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/10 to-transparent"></div>
    </section>
  )
}
