import { Truck, Calendar, Clock, Fuel, Gauge, MapPin, BarChart, User, AlertTriangle } from "lucide-react"

interface VehicleDetailsProps {
  vehicleId: string
}

export function VehicleDetails({ vehicleId }: VehicleDetailsProps) {
  // In a real implementation, this data would come from your API based on the vehicleId
  const vehicleDetails = {
    id: vehicleId,
    name: `Vehicle ${vehicleId.substring(1)}`,
    driver: "John Smith",
    licensePlate: "ABC-1234",
    lastUpdated: "2 minutes ago",
    location: "123 Main St, City",
    speed: "45 mph",
    fuelLevel: "68%",
    odometer: "24,567 miles",
    engineStatus: "Running",
    alerts: [{ type: "warning", message: "Maintenance due in 500 miles" }],
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
            <Truck className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium">{vehicleDetails.name}</h3>
            <p className="text-sm text-gray-500">{vehicleDetails.licensePlate}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center">
            <User className="h-5 w-5 text-gray-600" />
          </div>
          <div>
            <h3 className="font-medium">Driver</h3>
            <p className="text-sm text-gray-500">{vehicleDetails.driver}</p>
          </div>
        </div>
      </div>

      {vehicleDetails.alerts.length > 0 && (
        <div className="mb-6 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          {vehicleDetails.alerts.map((alert, index) => (
            <div key={index} className="flex items-center gap-2 text-yellow-700">
              <AlertTriangle className="h-4 w-4" />
              <span className="text-sm">{alert.message}</span>
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <MapPin className="h-4 w-4" />
            <span className="text-xs">Location</span>
          </div>
          <p className="text-sm font-medium truncate">{vehicleDetails.location}</p>
        </div>

        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <Gauge className="h-4 w-4" />
            <span className="text-xs">Speed</span>
          </div>
          <p className="text-sm font-medium">{vehicleDetails.speed}</p>
        </div>

        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <Fuel className="h-4 w-4" />
            <span className="text-xs">Fuel Level</span>
          </div>
          <p className="text-sm font-medium">{vehicleDetails.fuelLevel}</p>
        </div>

        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <BarChart className="h-4 w-4" />
            <span className="text-xs">Odometer</span>
          </div>
          <p className="text-sm font-medium">{vehicleDetails.odometer}</p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          <span>Last updated: {vehicleDetails.lastUpdated}</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          <span>Today, {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
        </div>
      </div>
    </div>
  )
}
