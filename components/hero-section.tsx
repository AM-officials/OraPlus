"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, HeartPulse, Shield, Sparkles, Award, Users } from "lucide-react"
import { useLoading } from "@/contexts/loading-context"

export default function HeroSection() {
  const { isLoading } = useLoading()
  const [isVisible, setIsVisible] = useState(false)
  const heroImageSrc = "/images/doctor1.png"

  // Wait for loading screen to complete before starting animations
  useEffect(() => {
    if (!isLoading) {
      // Small delay after loading completes for smooth transition
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [isLoading])

  return (
    <section className="relative w-full min-h-screen py-16 md:py-20 lg:py-32 xl:py-40 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
      {/* Premium Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Morphing Gradient Blobs - Smaller on mobile */}
        <div className="absolute top-10 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-br from-blue-400/30 via-cyan-300/20 to-purple-400/20 rounded-full blur-3xl animate-morph"></div>
        <div className="absolute bottom-10 right-0 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-gradient-to-br from-purple-400/25 via-pink-300/15 to-blue-400/20 rounded-full blur-3xl animate-morph" style={{ animationDelay: '-4s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-gradient-to-br from-cyan-400/10 via-blue-300/10 to-purple-300/10 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="bg-grid absolute inset-0 opacity-30"></div>
        
        {/* Floating Particles - Hidden on mobile for performance */}
        <div className="hidden md:block absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-float opacity-60"></div>
        <div className="hidden md:block absolute top-1/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-float-slow opacity-50"></div>
        <div className="hidden md:block absolute bottom-1/4 left-1/3 w-4 h-4 bg-cyan-400 rounded-full animate-float opacity-40" style={{ animationDelay: '-2s' }}></div>
        <div className="hidden md:block absolute top-2/3 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-float-slow opacity-50" style={{ animationDelay: '-3s' }}></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            className="space-y-6 md:space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 md:px-5 py-2 md:py-2.5 text-xs md:text-sm font-medium border border-blue-200/50 backdrop-blur-sm shadow-3d"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Sparkles className="h-3.5 w-3.5 md:h-4 md:w-4 text-blue-600 animate-pulse" />
              <span className="text-gradient-blue font-semibold">Premium Dental Care</span>
            </motion.div>
            
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-shadow-premium">Crafting Smiles,</span> <br />
              <span className="relative inline-block">
                <span className="text-gradient-animated bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  Changing Lives
                </span>
                <motion.div 
                  className="absolute -bottom-2 md:-bottom-3 left-0 right-0 h-1 md:h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isVisible ? 1 : 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </span>
            </motion.h1>
            
            <motion.p
              className="max-w-[600px] mx-auto lg:mx-0 text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Experience world-class dental care with Dr. Kanhu Keshav Mahapatra. 
              Advanced technology, personalized treatments, and a gentle touch for your perfect smile.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button 
                size="lg"
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-3d-lg hover:shadow-glow-gradient transition-all duration-500 hover:scale-105 px-6 md:px-8 py-5 md:py-6 text-base md:text-lg rounded-full overflow-hidden w-full sm:w-auto"
                asChild
              >
                <a href="https://wa.me/918249736036" target="_blank" rel="noopener noreferrer">
                    <span className="relative z-10 flex items-center justify-center">
                      Book Appointment
                      <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-400 transition-all duration-300 hover:scale-105 backdrop-blur-sm px-6 md:px-8 py-5 md:py-6 text-base md:text-lg rounded-full shadow-3d hover:shadow-3d-lg w-full sm:w-auto"
                asChild
              >
                <a href="/services">
                    Explore Services
                </a>
              </Button>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-3 gap-3 md:gap-6 pt-6 md:pt-8 border-t border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="flex flex-col gap-1 md:gap-2 group cursor-pointer items-center lg:items-start">
                <div className="flex items-center gap-1 md:gap-2 text-blue-600 group-hover:text-blue-700 transition-colors">
                  <HeartPulse className="h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-xs md:text-base">Expert</span>
                </div>
                <span className="text-[10px] md:text-xs text-gray-500">Medical Care</span>
              </div>
              <div className="flex flex-col gap-1 md:gap-2 group cursor-pointer items-center lg:items-start">
                <div className="flex items-center gap-1 md:gap-2 text-purple-600 group-hover:text-purple-700 transition-colors">
                  <Calendar className="h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-xs md:text-base">24/7</span>
                </div>
                <span className="text-[10px] md:text-xs text-gray-500">Available</span>
              </div>
              <div className="flex flex-col gap-1 md:gap-2 group cursor-pointer items-center lg:items-start">
                <div className="flex items-center gap-1 md:gap-2 text-cyan-600 group-hover:text-cyan-700 transition-colors">
                  <Shield className="h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-xs md:text-base">Trusted</span>
                </div>
                <span className="text-[10px] md:text-xs text-gray-500">Professionals</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative lg:ml-auto perspective-2000 mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Floating Decorative Elements - Hidden on mobile */}
            <div className="hidden md:block absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl rotate-12 blur-2xl opacity-40 animate-float-3d"></div>
            <div className="hidden md:block absolute -bottom-16 -left-16 w-52 h-52 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-40 animate-morph"></div>
            
            {/* Main Image Card with 3D Effect */}
            <div className="relative z-20 overflow-hidden rounded-2xl md:rounded-[2rem] border-2 border-white/80 shadow-3d-xl backdrop-blur-sm bg-white/30 card-3d-tilt mx-auto max-w-md lg:max-w-none">
              <div className="aspect-[4/5] overflow-hidden relative group">
                <Image
                  src={heroImageSrc}
                  alt="Dr. Kanhu Keshav Mahapatra"
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(min-width: 1024px) 40vw, 80vw"
                  priority
                />
                {/* Premium Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 mix-blend-overlay"></div>
                
                {/* Doctor Info Card */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-white">
                  <motion.div 
                    className="glass-premium rounded-xl md:rounded-2xl p-4 md:p-5 border border-white/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                    transition={{ delay: 1.2 }}
                  >
                    <h3 className="text-lg md:text-2xl font-bold mb-1 text-gray-900">Dr. Kanhu Keshav Mahapatra</h3>
                    <p className="text-xs md:text-sm text-gray-600 font-medium">Lead Dentist & Cosmetic Specialist</p>
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* Floating Stats Cards - Premium 3D - Hidden on small screens, repositioned on tablet */}
            <motion.div 
              className="hidden sm:block absolute -bottom-4 md:-bottom-8 -left-4 md:-left-8 z-30 rounded-xl md:rounded-2xl glass-ultra p-3 md:p-5 shadow-3d-xl hover:shadow-glow-gradient transition-all duration-500 hover:-translate-y-3 hover:scale-105 border border-white/40"
              initial={{ opacity: 0, x: -30, rotateY: -10 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <div className="flex items-center gap-2 md:gap-4">
                <div className="rounded-xl md:rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 p-2.5 md:p-4 shadow-lg shadow-green-500/30">
                  <HeartPulse className="h-5 w-5 md:h-7 md:w-7 text-white" />
                </div>
                <div>
                  <p className="text-sm md:text-xl font-bold text-gray-900">99% Success</p>
                  <p className="text-xs md:text-sm text-gray-600 font-medium">1,000+ Patients</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="hidden md:block absolute -top-8 -right-8 z-30 rounded-2xl glass-ultra p-4 shadow-3d-xl hover:shadow-glow-gradient transition-all duration-500 hover:-translate-y-3 hover:scale-105 border border-white/40"
              initial={{ opacity: 0, x: 30, rotateY: 10 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500 p-3 shadow-lg shadow-purple-500/30">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-base font-bold text-gray-900">Award Winning</p>
                  <p className="text-xs text-gray-600 font-medium">Excellence in Care</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="hidden lg:block absolute top-1/2 -right-6 z-30 rounded-2xl glass-ultra p-4 shadow-3d-xl hover:shadow-glow-gradient transition-all duration-500 hover:-translate-y-3 hover:scale-105 border border-white/40"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 p-3 shadow-lg shadow-cyan-500/30">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-base font-bold text-gray-900">20+ Certifications</p>
                  <p className="text-xs text-gray-600 font-medium">Expert Professional</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

