"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Mail, Award, Star, TrendingUp, GraduationCap, Stethoscope } from "lucide-react"

const doctors = [
  {
    image: "/images/doctor1.png",
    name: "Dr. Kanhu Keshav Mahapatra",
    specialty: "MDS Endodontist",
    description: "Specializing in root canal treatments and smile makeovers with over 5 years of experience.",
    rating: 4.9,
    patients: "1,000+",
    achievement: "20+ Certifications"
  }
]

export default function DoctorsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  return (
    <section className="relative w-full py-20 md:py-28 lg:py-40 bg-gradient-to-b from-white via-blue-50/20 to-white overflow-hidden" ref={ref}>
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[700px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] bg-blue-200/20 rounded-full blur-3xl animate-morph"></div>
        <div className="absolute bottom-0 left-0 w-[250px] sm:w-[350px] md:w-[450px] lg:w-[600px] h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] bg-purple-200/20 rounded-full blur-3xl animate-morph" style={{ animationDelay: '-4s' }}></div>
        <div className="bg-dots absolute inset-0 opacity-20"></div>
      </div>

      <div className="container px-5 sm:px-6 md:px-8 lg:px-6 relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 text-center mb-12 md:mb-16 lg:mb-20">
          <motion.div 
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold border border-blue-200/50 backdrop-blur-sm shadow-3d"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Award className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600 animate-pulse" />
            <span className="text-gradient-blue">Meet Your Dentist</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="block sm:inline">Dr. Kanhu Keshav</span>{" "}
            <span className="text-gradient-animated">Mahapatra</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="relative perspective-2000"
            >
                <div className="relative aspect-[3/4] w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto rounded-3xl overflow-hidden shadow-3d-xl card-3d-tilt">
                    <Image 
                        src="/images/doctor1.png" 
                        alt="Dr. Kanhu Keshav Mahapatra" 
                        fill
                        className="object-cover transition-transform duration-1000 hover:scale-110"
                        sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, 50vw"
                    />
                    {/* Premium overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 mix-blend-overlay"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                        <div className="glass-premium rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 border border-white/30">
                            <p className="font-bold text-base sm:text-lg md:text-xl text-gray-900">Dr. Kanhu Keshav Mahapatra</p>
                            <p className="text-xs sm:text-sm text-gray-600 font-medium">MDS Endodontist, KIDS</p>
                        </div>
                    </div>
                </div>
                {/* Premium decorative elements - hidden on very small screens */}
                <div className="hidden sm:block absolute -top-6 md:-top-8 -left-6 md:-left-8 w-20 md:w-32 h-20 md:h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-3xl -z-10 blur-2xl opacity-50 animate-float"></div>
                <div className="hidden sm:block absolute -bottom-6 md:-bottom-8 -right-6 md:-right-8 w-24 md:w-40 h-24 md:h-40 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full -z-10 blur-2xl opacity-50 animate-float-slow"></div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className="space-y-5 sm:space-y-6 md:space-y-8"
            >
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">A Passion for Perfect Smiles</h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Dr. Kanhu Keshav Mahapatra is an MDS Endodontist with over 5 years of experience in cosmetic and restorative dentistry. He combines precision endodontics with smile design to deliver comfortable, long-lasting results for every patient.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  A graduate of Kalinga Institute for Dental Sciences (KIDS), Bhubaneswar, Dr. Mahapatra has earned 20+ advanced certifications and continues to ground his care in both expertise and empathy.
                </p>

                <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 pt-2 sm:pt-4">
                    <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl glass-ultra border border-blue-100/50 shadow-3d hover:shadow-3d-lg transition-all duration-300 hover:-translate-y-1">
                        <div className="p-2 sm:p-2.5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl shadow-lg text-white flex-shrink-0">
                            <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="font-bold text-gray-900 text-xs sm:text-sm">Education</p>
                            <p className="text-[10px] sm:text-xs text-gray-600 truncate">MDS Endodontist</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl glass-ultra border border-purple-100/50 shadow-3d hover:shadow-3d-lg transition-all duration-300 hover:-translate-y-1">
                        <div className="p-2 sm:p-2.5 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg sm:rounded-xl shadow-lg text-white flex-shrink-0">
                            <Award className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="font-bold text-gray-900 text-xs sm:text-sm">Certifications</p>
                            <p className="text-[10px] sm:text-xs text-gray-600 truncate">20+ Advanced</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl glass-ultra border border-cyan-100/50 shadow-3d hover:shadow-3d-lg transition-all duration-300 hover:-translate-y-1">
                        <div className="p-2 sm:p-2.5 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg sm:rounded-xl shadow-lg text-white flex-shrink-0">
                            <Stethoscope className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="font-bold text-gray-900 text-xs sm:text-sm">Experience</p>
                            <p className="text-[10px] sm:text-xs text-gray-600 truncate">5+ Years</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl glass-ultra border border-amber-100/50 shadow-3d hover:shadow-3d-lg transition-all duration-300 hover:-translate-y-1">
                        <div className="p-2 sm:p-2.5 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg sm:rounded-xl shadow-lg text-white flex-shrink-0">
                            <Star className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="font-bold text-gray-900 text-xs sm:text-sm">Rating</p>
                            <p className="text-[10px] sm:text-xs text-gray-600 truncate">4.9/5</p>
                        </div>
                    </div>
                </div>

                <div className="pt-4 sm:pt-6 md:pt-8">
                    <Button 
                        className="w-full sm:w-auto group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 text-sm sm:text-base md:text-lg rounded-full shadow-3d-lg hover:shadow-glow-gradient transition-all duration-500 hover:scale-105 overflow-hidden"
                        asChild
                    >
                        <a href="https://wa.me/918249736036" target="_blank" rel="noopener noreferrer">
                            <span className="relative z-10">Book an Appointment with Dr. Kanhu</span>
                        </a>
                    </Button>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  )
}
