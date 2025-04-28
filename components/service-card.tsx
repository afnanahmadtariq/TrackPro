import {
  MapPin,
  Truck,
  Shield,
  Bell,
  BarChart,
  Users,
  Clock,
  Smartphone,
  Settings,
  type LucideIcon,
} from "lucide-react"
import Link from "next/link"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  link?: string
}

export function ServiceCard({ title, description, icon, link = "/services" }: ServiceCardProps) {
  const getIcon = (iconName: string) => {
    const icons: Record<string, LucideIcon> = {
      "map-pin": MapPin,
      truck: Truck,
      shield: Shield,
      bell: Bell,
      "bar-chart": BarChart,
      users: Users,
      clock: Clock,
      smartphone: Smartphone,
      settings: Settings,
    }

    const IconComponent = icons[iconName] || MapPin
    return <IconComponent className="h-6 w-6 text-white" />
  }

  return (
    <Card className="card-hover-effect border-none overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary"></div>
      <CardHeader className="pb-2">
        <div className="h-14 w-14 bg-primary rounded-2xl flex items-center justify-center mb-4 shadow-lg">
          {getIcon(icon)}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-600">{description}</p>
        <Link href={link}>
          <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent">
            Learn more →
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
