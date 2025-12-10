"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CalendarIcon, CheckCircle2, User, Mail, Phone, Clock, MessageSquare, Sparkles, ArrowRight } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export default function AppointmentForm() {
  const [date, setDate] = useState<Date>()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    time: "",
    message: ""
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const formattedDate = date ? format(date, "PPP") : "Not selected"
    
    const whatsappMessage = `New Appointment Request:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}
Date: ${formattedDate}
Time: ${formData.time}
Message: ${formData.message}`

    window.open(`https://wa.me/918249736036?text=${encodeURIComponent(whatsappMessage)}`, '_blank')

    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center py-16 text-center space-y-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
          className="p-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-lg shadow-green-500/30"
        >
          <CheckCircle2 className="h-12 w-12 text-white" />
        </motion.div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-gray-900">Appointment Scheduled!</h3>
          <p className="text-gray-500 max-w-sm">
            We&apos;ve received your request. You&apos;ll be redirected to WhatsApp to finalize the booking.
          </p>
        </div>
        <Button 
          onClick={() => setSubmitted(false)} 
          variant="outline" 
          className="mt-4 rounded-full px-6"
        >
          Book Another Appointment
        </Button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Header */}
      <div className="text-center pb-4 border-b border-gray-100">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full mb-4">
          <Sparkles className="h-4 w-4 text-blue-600" />
          <span className="text-sm font-medium text-blue-700">Quick & Easy</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900">Book Your Appointment</h3>
        <p className="text-gray-500 mt-1">Fill in your details and we&apos;ll get back to you shortly</p>
      </div>

      <div className="grid grid-cols-1 gap-5">
        {/* Name Field */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <User className="h-4 w-4 text-gray-400" />
            Full Name
          </Label>
          <Input 
            id="name" 
            name="name" 
            placeholder="Enter your full name" 
            required 
            autoComplete="name"
            value={formData.name}
            onChange={handleInputChange}
            className="h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all placeholder:text-gray-400"
          />
        </div>

        {/* Email & Phone - Side by Side on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Mail className="h-4 w-4 text-gray-400" />
              Email
            </Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              placeholder="your@email.com" 
              required 
              autoComplete="email"
              value={formData.email}
              onChange={handleInputChange}
              className="h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all placeholder:text-gray-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Phone className="h-4 w-4 text-gray-400" />
              Phone
            </Label>
            <Input 
              id="phone" 
              name="phone" 
              placeholder="+91 9876543210" 
              required 
              autoComplete="tel"
              value={formData.phone}
              onChange={handleInputChange}
              className="h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Service Selection */}
        <div className="space-y-2">
          <Label htmlFor="service" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-gray-400" />
            Service Required
          </Label>
          <Select name="service" onValueChange={(value) => handleSelectChange("service", value)}>
            <SelectTrigger id="service" className="h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500/20">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-gray-200 shadow-xl">
              <SelectItem value="checkup" className="py-3">🦷 General Checkup</SelectItem>
              <SelectItem value="cleaning" className="py-3">✨ Teeth Cleaning</SelectItem>
              <SelectItem value="whitening" className="py-3">💎 Teeth Whitening</SelectItem>
              <SelectItem value="ortho" className="py-3">😁 Orthodontics (Braces/Invisalign)</SelectItem>
              <SelectItem value="implant" className="py-3">🔩 Dental Implant</SelectItem>
              <SelectItem value="rct" className="py-3">🩺 Root Canal Treatment</SelectItem>
              <SelectItem value="cosmetic" className="py-3">🌟 Cosmetic Dentistry</SelectItem>
              <SelectItem value="pain" className="py-3">⚡ Tooth Pain / Emergency</SelectItem>
              <SelectItem value="other" className="py-3">📋 Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Date & Time - Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="date" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <CalendarIcon className="h-4 w-4 text-gray-400" />
              Preferred Date
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant="outline"
                  className={cn(
                    "w-full h-12 justify-start text-left font-normal rounded-xl border-gray-200 hover:border-blue-500 hover:bg-blue-50/50 transition-all", 
                    !date && "text-gray-400"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Select date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 rounded-xl shadow-xl border-gray-200">
                <Calendar 
                  mode="single" 
                  selected={date} 
                  onSelect={setDate} 
                  initialFocus 
                  disabled={(date) => date < new Date()}
                  className="rounded-xl"
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-2">
            <Label htmlFor="time" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Clock className="h-4 w-4 text-gray-400" />
              Preferred Time
            </Label>
            <Select name="time" onValueChange={(value) => handleSelectChange("time", value)}>
              <SelectTrigger id="time" className="h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500/20">
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-gray-200 shadow-xl">
                <SelectItem value="10am" className="py-3">🌅 10:00 AM</SelectItem>
                <SelectItem value="11am" className="py-3">🌅 11:00 AM</SelectItem>
                <SelectItem value="12pm" className="py-3">☀️ 12:00 PM</SelectItem>
                <SelectItem value="2pm" className="py-3">🌤️ 2:00 PM</SelectItem>
                <SelectItem value="3pm" className="py-3">🌤️ 3:00 PM</SelectItem>
                <SelectItem value="4pm" className="py-3">🌤️ 4:00 PM</SelectItem>
                <SelectItem value="5pm" className="py-3">🌆 5:00 PM</SelectItem>
                <SelectItem value="6pm" className="py-3">🌆 6:00 PM</SelectItem>
                <SelectItem value="7pm" className="py-3">🌙 7:00 PM</SelectItem>
                <SelectItem value="8pm" className="py-3">🌙 8:00 PM</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-gray-400" />
            Additional Information
            <span className="text-gray-400 font-normal">(Optional)</span>
          </Label>
          <Textarea 
            id="message" 
            name="message"
            placeholder="Describe your symptoms or any specific concerns..." 
            value={formData.message}
            onChange={handleInputChange}
            className="min-h-[100px] rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all placeholder:text-gray-400 resize-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <Button 
        type="submit" 
        className="w-full h-14 text-lg font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300" 
        disabled={loading}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
            />
            Processing...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            Schedule Appointment
            <ArrowRight className="h-5 w-5" />
          </span>
        )}
      </Button>

      {/* Footer Note */}
      <p className="text-center text-sm text-gray-400">
        You&apos;ll be redirected to WhatsApp to confirm your booking
      </p>
    </form>
  )
}
