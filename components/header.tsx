"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Menu, Phone, X, Calendar, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false)
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [time, setTime] = useState("10:00")
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleCheckAvailability = () => {
    if (!date) return
    const formattedDate = date.toLocaleDateString()
    const message = `I want to book a consultation on ${formattedDate} at ${time} what is the availability status.`
    window.open(`https://wa.me/918249736036?text=${encodeURIComponent(message)}`, '_blank')
  }

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Meet Dr. Kanhu", href: "/doctors" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isScrolled 
          ? "glass-ultra shadow-3d border-b border-white/30" 
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 blur-lg opacity-50 group-hover:opacity-80 transition-all duration-300 group-hover:scale-110`}></div>
            <div className="relative">
              <Logo />
            </div>
          </div>
          <span className={`text-2xl font-bold text-gradient-animated`}>
            OraPlus
          </span>
        </Link>
        <nav className="hidden md:flex gap-10">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`text-sm font-semibold transition-all duration-300 hover:text-blue-600 relative group ${
                pathname === item.href ? "text-blue-600" : "text-gray-700"
              }`}
            >
              {item.name}
              <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${
                pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button 
            onClick={() => setIsAppointmentOpen(true)}
            className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-3d-lg hover:shadow-glow-gradient transition-all duration-500 hover:scale-105 px-6 py-5 rounded-full overflow-hidden"
          >
            <Calendar className="mr-2 h-4 w-4 group-hover:animate-pulse" />
            Check Availability
          </Button>
          
          <Dialog open={isAppointmentOpen} onOpenChange={setIsAppointmentOpen}>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Check Availability</DialogTitle>
                <DialogDescription>
                  Select your preferred date and time to check availability with Dr. Kanhu.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label>Date</Label>
                  <div className="flex justify-center border rounded-md p-2">
                    <CalendarComponent
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border shadow-sm"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="time">Preferred Time</Label>
                  <Input
                    id="time"
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="col-span-3"
                  />
                </div>
              </div>
              <Button onClick={handleCheckAvailability} className="w-full bg-green-600 hover:bg-green-700">
                Check on WhatsApp
              </Button>
            </DialogContent>
          </Dialog>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu" className="hover:bg-blue-50">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white/95 backdrop-blur-xl">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <SheetDescription className="sr-only">
              Mobile navigation menu for accessing different sections of the website.
            </SheetDescription>
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between pb-4 border-b">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <Logo />
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    OraPlus
                  </span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <nav className="flex flex-col gap-4 py-6">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={`text-lg font-semibold transition-colors hover:text-blue-600 ${
                      pathname === item.href ? "text-blue-600" : "text-gray-700"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto pt-6 border-t space-y-3">
                <Button 
                  onClick={() => {
                    setIsOpen(false)
                    setIsAppointmentOpen(true)
                  }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
                >
                  Check Availability
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

function Logo() {
  return (
    <div className="relative w-10 h-10 flex items-center justify-center">
      {/* Glow effect behind logo */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-500/40 to-purple-500/40 rounded-xl blur-lg"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Logo container with gradient background */}
      <motion.div 
        className="relative w-full h-full rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 p-1.5 shadow-lg shadow-blue-500/30"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="toothGradientHeader" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#e0f2fe" />
            </linearGradient>
            <filter id="toothGlowHeader">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Main tooth body */}
          <path
            d="M50 12 C32 12 22 26 22 40 C22 50 26 56 29 66 L34 88 C34 93 40 93 42 88 L47 68 C49 64 51 64 53 68 L58 88 C60 93 66 93 66 88 L71 66 C74 56 78 50 78 40 C78 26 68 12 50 12 Z"
            fill="url(#toothGradientHeader)"
            filter="url(#toothGlowHeader)"
          />
          
          {/* Shine effect on tooth */}
          <path
            d="M36 26 Q42 20 52 23 Q46 32 36 26"
            fill="rgba(255,255,255,0.7)"
          />

          {/* Sparkle cross/plus sign */}
          <motion.g
            animate={{
              opacity: [1, 0.6, 1],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path
              d="M76 22 L76 36 M69 29 L83 29"
              stroke="#4ade80"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
              filter="url(#toothGlowHeader)"
            />
          </motion.g>
        </svg>
      </motion.div>
    </div>
  )
}
