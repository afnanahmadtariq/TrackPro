"use client"

import { useEffect, useRef } from "react"
import { MapPin } from "lucide-react"

interface VehicleMapProps {
  selectedVehicle: string | null
}

export function VehicleMap({ selectedVehicle }: VehicleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // In a real implementation, this would initialize a map library like Google Maps, Mapbox, or Leaflet
    // and display actual vehicle locations

    if (!mapRef.current) return

    const mapContainer = mapRef.current

    // Simulate a map with vehicle markers
    mapContainer.innerHTML = ""
    const mapElement = document.createElement("div")
    mapElement.className = 'relative w-full h-full bg-[url("/placeholder.svg?height=400&width=800")] bg-cover bg-center'

    // Add some simulated vehicle markers
    const vehicles = [
      { id: "v1", x: 20, y: 30 },
      { id: "v2", x: 50, y: 60 },
      { id: "v3", x: 70, y: 40 },
      { id: "v4", x: 30, y: 70 },
      { id: "v5", x: 80, y: 20 },
    ]

    vehicles.forEach((vehicle) => {
      const marker = document.createElement("div")
      marker.className = "absolute transform -translate-x-1/2 -translate-y-1/2"
      marker.style.left = `${vehicle.x}%`
      marker.style.top = `${vehicle.y}%`

      const isSelected = vehicle.id === selectedVehicle

      marker.innerHTML = `
        <div class="flex flex-col items-center">
          <div class="${isSelected ? "text-primary animate-bounce" : "text-gray-700"}">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="${isSelected ? "w-8 h-8" : "w-6 h-6"}">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          ${isSelected ? `<div class="bg-white text-xs font-medium px-2 py-1 rounded shadow mt-1">Vehicle ${vehicle.id.substring(1)}</div>` : ""}
        </div>
      `

      mapElement.appendChild(marker)
    })

    mapContainer.appendChild(mapElement)

    // Add a simulated map attribution
    const attribution = document.createElement("div")
    attribution.className = "absolute bottom-2 right-2 text-xs text-gray-600 bg-white/80 px-2 py-1 rounded"
    attribution.textContent = "Map data © Demo Map Provider"
    mapElement.appendChild(attribution)
  }, [selectedVehicle])

  return (
    <div ref={mapRef} className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col items-center text-gray-400">
        <MapPin className="h-8 w-8 mb-2" />
        <p>Loading map...</p>
      </div>
    </div>
  )
}
