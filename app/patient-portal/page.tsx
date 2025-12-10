"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, Calendar, ClipboardList, FileText, Lock, User } from "lucide-react"

export default function PatientPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoggedIn(true)
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
        {/* Premium Hero Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-purple-200/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container flex items-center justify-center min-h-[calc(100vh-4rem)] py-12 relative z-10">
          <motion.div
            className="w-full max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden backdrop-blur-sm bg-white/90">
              {/* Premium header bar */}
              <div className="h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600" />
              
              <CardHeader className="space-y-4 pt-8 pb-4 text-center">
                <div className="mx-auto p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl w-fit shadow-lg shadow-blue-500/30">
                  <Lock className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Patient Portal
                </CardTitle>
                <CardDescription className="text-gray-500 text-base">
                  Enter your credentials to access your dental records
                </CardDescription>
              </CardHeader>
              
              <CardContent className="px-8">
                <form onSubmit={handleLogin}>
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="login-email" className="text-sm font-semibold text-gray-700">Email Address</Label>
                      <Input 
                        id="login-email" 
                        name="email" 
                        placeholder="your@email.com" 
                        required 
                        type="email" 
                        autoComplete="email"
                        className="h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="login-password" className="text-sm font-semibold text-gray-700">Password</Label>
                        <Button variant="link" className="px-0 text-xs text-blue-600 hover:text-blue-700">
                          Forgot password?
                        </Button>
                      </div>
                      <Input 
                        id="login-password" 
                        name="password" 
                        required 
                        type="password" 
                        autoComplete="current-password"
                        className="h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full h-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all"
                    >
                      Sign In
                    </Button>
                  </div>
                </form>
              </CardContent>
              
              <CardFooter className="flex flex-col space-y-4 px-8 pb-8">
                <div className="text-center text-sm text-gray-500">
                  Don&apos;t have an account?{" "}
                  <Button variant="link" className="px-0 text-blue-600 hover:text-blue-700 font-semibold">
                    Register
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-12">
      <motion.div
        className="flex flex-col space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold">Welcome, John Doe</h1>
          <p className="text-gray-500">Manage your dental health records and appointments</p>
        </div>
        <Tabs defaultValue="dashboard">
          <TabsList className="grid grid-cols-5 w-full max-w-3xl">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="records">Records</TabsTrigger>
            <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>
          <TabsContent value="dashboard" className="pt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-medium">Upcoming Appointment</CardTitle>
                    <Calendar className="w-4 h-4 text-blue-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm">
                      <p className="font-medium">Dr. Kanhu Keshav Mahapatra</p>
                      <p className="text-gray-500">Routine Checkup</p>
                      <p className="text-gray-500">May 25, 2025 - 10:30 AM</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      Reschedule
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-medium">Recent X-Rays</CardTitle>
                    <ClipboardList className="w-4 h-4 text-blue-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm">
                      <p className="font-medium">Full Mouth Series</p>
                      <p className="text-gray-500">Completed on May 15, 2025</p>
                      <p className="text-green-600 font-medium">Results: No Cavities</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      View Images
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-medium">Oral Health Score</CardTitle>
                    <Activity className="w-4 h-4 text-blue-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm space-y-2">
                      <div className="flex justify-between">
                        <p className="text-gray-500">Gum Health:</p>
                        <p>Excellent</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-gray-500">Plaque Index:</p>
                        <p>Low</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-gray-500">Next Cleaning:</p>
                        <p>6 Months</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      View History
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
          </TabsContent>
          <TabsContent value="appointments" className="pt-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Appointments</CardTitle>
                <CardDescription>View and manage your upcoming and past appointments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-blue-50 px-4 py-3 border-b">
                      <h3 className="font-medium">Upcoming Appointments</h3>
                    </div>
                    <div className="divide-y">
                      <div className="p-4 flex justify-between items-center">
                        <div>
                          <p className="font-medium">Dr. Kanhu Keshav Mahapatra - Routine Checkup</p>
                          <p className="text-sm text-gray-500">May 25, 2025 - 10:30 AM</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Reschedule
                          </Button>
                          <Button variant="destructive" size="sm">
                            Cancel
                          </Button>
                        </div>
                      </div>
                      <div className="p-4 flex justify-between items-center">
                        <div>
                          <p className="font-medium">Dr. Kanhu Keshav Mahapatra - Teeth Whitening</p>
                          <p className="text-sm text-gray-500">June 10, 2025 - 2:00 PM</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Reschedule
                          </Button>
                          <Button variant="destructive" size="sm">
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 border-b">
                      <h3 className="font-medium">Past Appointments</h3>
                    </div>
                    <div className="divide-y">
                      <div className="p-4 flex justify-between items-center">
                        <div>
                          <p className="font-medium">Dr. Kanhu Keshav Mahapatra - Cleaning</p>
                          <p className="text-sm text-gray-500">April 15, 2025 - 11:00 AM</p>
                        </div>
                        <Button variant="outline" size="sm">
                          View Summary
                        </Button>
                      </div>
                      <div className="p-4 flex justify-between items-center">
                        <div>
                          <p className="font-medium">Dr. Kanhu Keshav Mahapatra - Consultation</p>
                          <p className="text-sm text-gray-500">March 22, 2025 - 9:30 AM</p>
                        </div>
                        <Button variant="outline" size="sm">
                          View Summary
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Schedule New Appointment</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="records" className="pt-6">
            <Card>
              <CardHeader>
                <CardTitle>Dental Records</CardTitle>
                <CardDescription>Access your complete dental history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium">Annual Dental Exam</p>
                        <p className="text-sm text-gray-500">January 15, 2025</p>
                      </div>
                      <Button variant="ghost" size="sm" className="ml-auto">
                        Download
                      </Button>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium">X-Ray Results</p>
                        <p className="text-sm text-gray-500">May 15, 2025</p>
                      </div>
                      <Button variant="ghost" size="sm" className="ml-auto">
                        Download
                      </Button>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium">Treatment Plan</p>
                        <p className="text-sm text-gray-500">April 15, 2025</p>
                      </div>
                      <Button variant="ghost" size="sm" className="ml-auto">
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="prescriptions" className="pt-6">
            <Card>
              <CardHeader>
                <CardTitle>Prescriptions</CardTitle>
                <CardDescription>View and manage your current and past prescriptions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-blue-50 px-4 py-3 border-b">
                      <h3 className="font-medium">Current Prescriptions</h3>
                    </div>
                    <div className="divide-y">
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <p className="font-medium">Chlorhexidine Rinse</p>
                          <Button variant="outline" size="sm">
                            Refill
                          </Button>
                        </div>
                        <p className="text-sm text-gray-500">Use twice daily</p>
                        <p className="text-sm text-gray-500">Prescribed by: Dr. Kanhu Keshav Mahapatra</p>
                        <p className="text-sm text-gray-500">Refills remaining: 1</p>
                      </div>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 border-b">
                      <h3 className="font-medium">Past Prescriptions</h3>
                    </div>
                    <div className="divide-y">
                      <div className="p-4">
                        <p className="font-medium">Amoxicillin 500mg</p>
                        <p className="text-sm text-gray-500">Take three times daily for 7 days</p>
                        <p className="text-sm text-gray-500">Prescribed by: Dr. Kanhu Keshav Mahapatra</p>
                        <p className="text-sm text-gray-500">Completed: March 15, 2025</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="profile" className="pt-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Profile</CardTitle>
                <CardDescription>Manage your personal information and settings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-medium flex items-center gap-2">
                      <User className="h-4 w-4 text-blue-600" />
                      Personal Information
                    </h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input id="fullName" name="fullName" defaultValue="John Doe" autoComplete="name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dob">Date of Birth</Label>
                        <Input id="dob" name="dob" defaultValue="01/15/1980" autoComplete="bday" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="profile-email">Email</Label>
                        <Input id="profile-email" name="email" defaultValue="john.doe@example.com" autoComplete="email" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" name="phone" defaultValue="(555) 123-4567" autoComplete="tel" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" name="address" defaultValue="123 Main St, Anytown, USA 12345" autoComplete="street-address" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-medium flex items-center gap-2">
                      <Lock className="h-4 w-4 text-blue-600" />
                      Security
                    </h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input id="currentPassword" name="currentPassword" type="password" autoComplete="current-password" />
                      </div>
                      <div></div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input id="newPassword" name="newPassword" type="password" autoComplete="new-password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input id="confirmPassword" name="confirmPassword" type="password" autoComplete="new-password" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button className="bg-blue-600 hover:bg-blue-700">Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}
