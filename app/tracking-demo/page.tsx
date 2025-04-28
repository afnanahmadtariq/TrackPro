"use client"

import { useState } from "react"
import { ArrowLeft, Truck, Info } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { VehicleMap } from "@/components/vehicle-map"
import { VehicleList } from "@/components/vehicle-list"
import { VehicleDetails } from "@/components/vehicle-details"
import dynamic from "next/dynamic"

// Dynamically import the map component with no SSR to avoid hydration issues
const DynamicVehicleMap = dynamic(
  () => import("@/components/vehicle-map").then((mod) => mod.VehicleMap),
  { ssr: false }
)

export default function TrackingDemoPage() {
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Link href="/">
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <h1 className="text-3xl font-bold ml-4">Real-Time Vehicle Tracking Demo</h1>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8 flex items-start gap-3">
        <Info className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
        <p className="text-yellow-700 text-sm">
          This is a demonstration of our vehicle tracking interface. In a real implementation, this would display your
          actual vehicles with real-time GPS data. For this demo, we're showing simulated vehicles and data.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Vehicles</CardTitle>
              <CardDescription>Select a vehicle to view details</CardDescription>
            </CardHeader>
            <CardContent>
              <VehicleList onSelectVehicle={setSelectedVehicle} selectedVehicle={selectedVehicle} />
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-3">
          <Card className="mb-6">
            <CardHeader className="pb-3">
              <CardTitle>Live Map</CardTitle>
              <CardDescription>Current location of all vehicles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] rounded-md overflow-hidden">
                <DynamicVehicleMap selectedVehicle={selectedVehicle} />
              </div>
            </CardContent>
          </Card>

          {selectedVehicle && (
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Vehicle Details</CardTitle>
                    <CardDescription>Comprehensive information and analytics</CardDescription>
                  </div>
                  <div className="flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full">
                    <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-700 text-xs font-medium">Active</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="details">
                  <TabsList className="mb-4">
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="history">History</TabsTrigger>
                    <TabsTrigger value="analytics">Analytics</TabsTrigger>
                  </TabsList>
                  <TabsContent value="details">
                    <VehicleDetails vehicleId={selectedVehicle} />
                  </TabsContent>
                  <TabsContent value="history">
                    <div className="text-center py-8 text-gray-500">
                      <Truck className="h-12 w-12 mx-auto mb-4 opacity-20" />
                      <p>Trip history would be displayed here in a real implementation.</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="analytics">
                    <div className="text-center py-8 text-gray-500">
                      <Truck className="h-12 w-12 mx-auto mb-4 opacity-20" />
                      <p>Vehicle analytics and performance metrics would be displayed here.</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
