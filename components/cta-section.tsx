"use client"

import { useState } from "react"
import { Calendar, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import AppointmentForm from "@/components/appointment-form"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function CtaSection() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [time, setTime] = useState("10:00")

  const handleCheckAvailability = () => {
    if (!date) return
    const formattedDate = date.toLocaleDateString()
    const message = `I want to book a consultation on ${formattedDate} at ${time} what is the availability status.`
    window.open(`https://wa.me/918249736036?text=${encodeURIComponent(message)}`, '_blank')
  }

  const handleCallUs = () => {
    window.open("tel:+918249736036", "_self")
  }

  return (
    <section className="relative py-16 md:py-28 lg:py-36 overflow-hidden">
      {/* Premium Multi-Layer Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/30"></div>
      <div className="absolute inset-0 bg-aurora"></div>
      <div className="absolute top-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-200/30 rounded-full blur-3xl animate-morph"></div>
      <div className="absolute bottom-0 right-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-purple-200/30 rounded-full blur-3xl animate-morph" style={{ animationDelay: '-4s' }}></div>
      <div className="bg-dots absolute inset-0 opacity-30"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-5 md:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 md:px-5 py-2 md:py-2.5 text-xs md:text-sm font-semibold border border-blue-200/50 shadow-3d">
              <Calendar className="h-3.5 w-3.5 md:h-4 md:w-4 text-blue-600" />
              <span className="text-gradient-blue">Book Your Visit</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter">
              Ready for Your <span className="text-gradient-animated">New Smile?</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
              Scheduling your dental appointment is easier than ever. 
              Book online or give us a call to start your journey to a healthier, brighter smile.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button 
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-3d-lg hover:shadow-glow-gradient transition-all duration-500 hover:scale-105 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-full overflow-hidden w-full sm:w-auto" 
                onClick={handleCallUs}
              >
                <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:animate-pulse" />
                Call Us Now
              </Button>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-400 shadow-3d hover:shadow-3d-lg transition-all duration-300 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-full w-full sm:w-auto">
                    <Calendar className="mr-2 h-5 w-5" />
                    Check Availability
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] rounded-3xl border-0 shadow-3d-xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">Check Availability</DialogTitle>
                    <DialogDescription>
                      Select your preferred date and time to check availability with Dr. Kanhu.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label className="font-semibold">Date</Label>
                      <div className="flex justify-center border rounded-2xl p-3 shadow-inner bg-gray-50/50">
                        <CalendarComponent
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          className="rounded-xl"
                        />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="cta-time" className="font-semibold">Preferred Time</Label>
                      <Input
                        id="cta-time"
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="h-12 rounded-xl"
                      />
                    </div>
                  </div>
                  <Button onClick={handleCheckAvailability} className="w-full h-12 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-xl text-lg shadow-lg">
                    Check on WhatsApp
                  </Button>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="relative perspective-1000">
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl rotate-12 blur-xl opacity-50"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-xl opacity-50"></div>
            
            <div className="rounded-3xl border-0 glass-ultra p-8 shadow-3d-xl hover:shadow-glow-gradient transition-all duration-500">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
