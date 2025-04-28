import { Quote } from "lucide-react"
import Image from "next/image" // Import Image component

export function TestimonialSection() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-primary/5">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 mb-4 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-primary">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from businesses that have transformed their operations with our vehicle tracking solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md card-hover-effect relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary"></div>
              <div className="mb-4 text-primary">
                <Quote className="h-8 w-8 opacity-50" />
              </div>
              <p className="text-gray-600 mb-6 italic">{testimonial.quote}</p>
              <div className="flex items-center">
                {/* Replace placeholder div with Image component */}
                <div className="relative h-12 w-12 rounded-full mr-4 overflow-hidden">
                   <Image
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    quote:
      "Since implementing this tracking system, we've reduced fuel costs by 20% and improved delivery times significantly.",
    name: "Sarah Johnson",
    position: "Fleet Manager, Logistics Co.",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D", // Replaced with Unsplash URL
  },
  {
    quote:
      "The real-time tracking has been a game-changer for our business. Customer satisfaction has improved dramatically.",
    name: "Michael Chen",
    position: "Operations Director, Delivery Inc.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D", // Replaced with Unsplash URL
  },
  {
    quote:
      "We recovered two stolen vehicles within hours thanks to the tracking system. The investment has paid for itself already.",
    name: "David Rodriguez",
    position: "Security Manager, Transport Ltd.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnRyYWl0fGVufDB8fDB8fHww", // Replaced with Unsplash URL
  },
]
