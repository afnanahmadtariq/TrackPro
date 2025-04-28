"use client"

import { Truck, Battery, AlertCircle } from "lucide-react"

interface VehicleListProps {
  onSelectVehicle: (id: string) => void
  selectedVehicle: string | null
}

export function VehicleList({ onSelectVehicle, selectedVehicle }: VehicleListProps) {
  // In a real implementation, this data would come from your API
  const vehicles = [
    { id: "v1", name: "Delivery Truck 1", status: "active", battery: 85 },
    { id: "v2", name: "Delivery Truck 2", status: "active", battery: 72 },
    { id: "v3", name: "Service Van 1", status: "active", battery: 93 },
    { id: "v4", name: "Service Van 2", status: "warning", battery: 31 },
    { id: "v5", name: "Executive Car", status: "active", battery: 64 },
  ]

  return (
    <div className="space-y-2">
      {vehicles.map((vehicle) => (
        <div
          key={vehicle.id}
          className={`p-3 rounded-lg cursor-pointer transition-colors ${
            selectedVehicle === vehicle.id
              ? "bg-primary/10 border-primary/20 border"
              : "hover:bg-gray-100 border border-transparent"
          }`}
          onClick={() => onSelectVehicle(vehicle.id)}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-gray-500" />
              <span className="font-medium">{vehicle.name}</span>
            </div>
            <div
              className={`h-2 w-2 rounded-full ${vehicle.status === "active" ? "bg-green-500" : "bg-yellow-500"}`}
            ></div>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Battery className="h-3 w-3" />
              <span>{vehicle.battery}%</span>
            </div>

            {vehicle.status === "warning" && (
              <div className="flex items-center gap-1 text-yellow-600">
                <AlertCircle className="h-3 w-3" />
                <span>Low Battery</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
