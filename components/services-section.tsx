"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Smile, Sparkles, Shield, Zap, Gem, Heart, Clock, User, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  { icon: <Shield className="h-6 w-6" />, title: "General Dentistry", description: "Routine checkups, cleanings, and preventive care to keep your smile healthy.", color: "from-teal-500 to-cyan-600" },
  { icon: <Sparkles className="h-6 w-6" />, title: "Cosmetic Dentistry", description: "Teeth whitening, veneers, and smile makeovers for a radiant look.", color: "from-purple-500 to-indigo-600" },
  { icon: <Gem className="h-6 w-6" />, title: "Dental Implants", description: "Permanent, natural-looking solutions for missing teeth.", color: "from-blue-500 to-sky-600" },
  { icon: <Smile className="h-6 w-6" />, title: "Orthodontics", description: "Invisalign and traditional braces for a perfectly aligned smile.", color: "from-pink-500 to-rose-600" },
  { icon: <Zap className="h-6 w-6" />, title: "Root Canal Therapy", description: "Pain-free treatments to save your natural teeth.", color: "from-amber-500 to-orange-600" },
  { icon: <User className="h-6 w-6" />, title: "Pediatric Dentistry", description: "Gentle and fun dental care for children of all ages.", color: "from-cyan-500 to-blue-600" },
  { icon: <Heart className="h-6 w-6" />, title: "Gum Care", description: "Periodontal treatments to ensure healthy gums and strong foundations.", color: "from-red-500 to-rose-600" },
  { icon: <Clock className="h-6 w-6" />, title: "Emergency Care", description: "Same-day appointments for dental emergencies and pain relief.", color: "from-green-500 to-emerald-600" },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }
  const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

  return (
    <section className="relative w-full py-16 md:py-24 lg:py-36 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden" ref={ref}>
      {/* Premium Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 md:left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-200/20 rounded-full blur-3xl animate-morph"></div>
        <div className="absolute bottom-0 right-0 md:right-1/4 w-[350px] md:w-[700px] h-[350px] md:h-[700px] bg-purple-200/20 rounded-full blur-3xl animate-morph" style={{ animationDelay: '-4s' }}></div>
        <div className="bg-dots absolute inset-0 opacity-40"></div>
      </div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 md:space-y-6 text-center mb-10 md:mb-20">
          <motion.div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-semibold border border-blue-200/50 shadow-3d" initial={{ opacity: 0, y: -20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <Sparkles className="h-3.5 w-3.5 md:h-4 md:w-4 text-blue-600 animate-pulse" />
            <span className="text-gradient-blue">World-Class Treatments</span>
          </motion.div>
          <motion.h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            Comprehensive <span className="text-gradient-animated">Dental Solutions</span>
          </motion.h2>
          <motion.p className="max-w-[700px] text-sm md:text-lg lg:text-xl text-gray-600 px-2" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
            From routine checkups to complex smile makeovers, we provide a full range of dental services tailored to your unique needs.
          </motion.p>
        </div>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="perspective-1000">
              <Card className="group h-full border-0 bg-white/90 backdrop-blur-xl transition-all duration-700 shadow-3d hover:shadow-3d-xl hover:-translate-y-4 relative overflow-hidden rounded-2xl md:rounded-3xl inner-shine">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-700`}></div>
                {/* Border gradient animation */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-br from-gray-100 to-gray-50 -z-10"></div>
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} style={{ background: `linear-gradient(135deg, transparent 40%, ${service.color.includes('teal') ? 'rgba(20, 184, 166, 0.1)' : service.color.includes('purple') ? 'rgba(168, 85, 247, 0.1)' : service.color.includes('blue') ? 'rgba(59, 130, 246, 0.1)' : service.color.includes('pink') ? 'rgba(236, 72, 153, 0.1)' : service.color.includes('amber') ? 'rgba(245, 158, 11, 0.1)' : service.color.includes('cyan') ? 'rgba(6, 182, 212, 0.1)' : service.color.includes('red') ? 'rgba(239, 68, 68, 0.1)' : 'rgba(34, 197, 94, 0.1)'} 100%)` }}></div>
                
                <CardHeader className="pb-3 md:pb-4 pt-5 md:pt-8 px-4 md:px-7">
                  <div className={`inline-flex rounded-xl md:rounded-2xl bg-gradient-to-br ${service.color} p-3 md:p-5 shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-500`}>
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <CardTitle className="text-lg md:text-xl mt-4 md:mt-6 group-hover:text-blue-600 transition-colors font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-4 md:px-7 pb-5 md:pb-8">
                  <CardDescription className="text-gray-600 leading-relaxed text-sm md:text-base">{service.description}</CardDescription>
                  <Button variant="ghost" className="mt-3 md:mt-5 p-0 h-auto text-blue-600 hover:text-blue-700 group-hover:translate-x-2 transition-all duration-300 font-semibold text-sm md:text-base" asChild>
                    <a 
                        href={`https://wa.me/918249736036?text=${encodeURIComponent(`I want to know more about the services provided for ${service.title}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Know More <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
