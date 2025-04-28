import { Check } from "lucide-react"

interface ServiceFeatureProps {
  feature: string
}

export function ServiceFeature({ feature }: ServiceFeatureProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
        <Check className="h-3 w-3 text-primary" />
      </div>
      <span className="text-sm text-gray-700">{feature}</span>
    </div>
  )
}
