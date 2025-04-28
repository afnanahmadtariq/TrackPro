"use client"

import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { mockVehicles } from '../lib/mock-data'

// Create SVG marker icons instead of using image files
const createMarkerIcon = (selectedVehicleId: string | null, vehicleId: string) => {
  return L.divIcon({
    html: `
      <div class="flex flex-col items-center">
        <div class="${selectedVehicleId === vehicleId ? "text-blue-600 animate-bounce" : "text-gray-700"}">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${selectedVehicleId === vehicleId ? "w-8 h-8" : "w-6 h-6"}">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </div>
        ${selectedVehicleId === vehicleId ? `<div class="bg-white text-xs font-medium px-2 py-1 rounded shadow mt-1">Vehicle ${vehicleId.substring(1)}</div>` : ""}
      </div>
    `,
    className: '',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
};

// Component to recenter map when selected vehicle changes
function MapController({ selectedVehicle }: { selectedVehicle: string | null }) {
  const map = useMap()
  
  useEffect(() => {
    if (selectedVehicle) {
      const vehicle = mockVehicles.find(v => v.id === selectedVehicle)
      if (vehicle) {
        map.setView([vehicle.location.latitude, vehicle.location.longitude], 14)
      }
    } else {
      // Default view showing all vehicles - Karachi, Pakistan
      map.setView([24.8607, 67.0011], 11)
    }
  }, [selectedVehicle, map])
  
  return null
}

export function VehicleMap({ selectedVehicle }: { selectedVehicle: string | null }) {
  const [mounted, setMounted] = useState(false)
  
  // Handle hydration issues with Leaflet in Next.js
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className="h-full w-full bg-gray-200 flex items-center justify-center">Loading map...</div>

  return (
    <MapContainer
      center={[24.8607, 67.0011]}  // Default center (Karachi, Pakistan)
      zoom={11}
      style={{ height: '100%', width: '100%' }}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      <MapController selectedVehicle={selectedVehicle} />
      
      {mockVehicles.map(vehicle => (
        <Marker 
          key={vehicle.id}
          position={[vehicle.location.latitude, vehicle.location.longitude]}
          icon={createMarkerIcon(selectedVehicle, vehicle.id)}
        >
          <Popup>
            <div>
              <strong>{vehicle.name}</strong><br />
              Status: {vehicle.status}<br />
              Speed: {vehicle.currentSpeed} mph
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
