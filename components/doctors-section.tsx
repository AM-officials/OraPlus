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
    <section className="relative w-full py-28 md:py-40 bg-gradient-to-b from-white via-blue-50/20 to-white overflow-hidden overflow-x-clip" ref={ref}>
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-blue-200/20 rounded-full blur-3xl animate-morph"></div>
        <div className="absolute bottom-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-purple-200/20 rounded-full blur-3xl animate-morph" style={{ animationDelay: '-4s' }}></div>
        <div className="bg-dots absolute inset-0 opacity-20"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-20">
          <motion.div 
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-6 py-3 text-sm font-semibold border border-blue-200/50 backdrop-blur-sm shadow-3d"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Award className="h-4 w-4 text-blue-600 animate-pulse" />
            <span className="text-gradient-blue">Meet Your Dentist</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Dr. Kanhu Keshav <span className="text-gradient-animated">Mahapatra</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="relative perspective-2000"
            >
                <div className="relative aspect-[3/4] w-full max-w-lg mx-auto rounded-3xl overflow-hidden shadow-3d-xl card-3d-tilt">
                    <Image 
                        src="/images/doctor1.png" 
                        alt="Dr. Kanhu Keshav Mahapatra" 
                        fill
                        className="object-cover transition-transform duration-1000 hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Premium overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 mix-blend-overlay"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="glass-premium rounded-2xl p-5 border border-white/30">
                            <p className="font-bold text-xl text-gray-900">Dr. Kanhu Keshav Mahapatra</p>
                            <p className="text-sm text-gray-600 font-medium">MDS Endodontist, KIDS</p>
                        </div>
                    </div>
                </div>
                {/* Premium decorative elements */}
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-3xl -z-10 blur-2xl opacity-50 animate-float"></div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full -z-10 blur-2xl opacity-50 animate-float-slow"></div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className="space-y-8"
            >
                <h3 className="text-4xl font-bold text-gray-900">A Passion for Perfect Smiles</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Dr. Kanhu Keshav Mahapatra is an MDS Endodontist with over 5 years of experience in cosmetic and restorative dentistry. He combines precision endodontics with smile design to deliver comfortable, long-lasting results for every patient.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  A graduate of Kalinga Institute for Dental Sciences (KIDS), Bhubaneswar, Dr. Mahapatra has earned 20+ advanced certifications and continues to ground his care in both expertise and empathy.
                </p>

                <div className="grid grid-cols-2 gap-3 sm:gap-5 pt-4">
                    <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl glass-ultra border border-blue-100/50 shadow-3d hover:shadow-3d-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                        <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg text-white flex-shrink-0">
                            <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                        <div className="min-w-0">
                            <p className="font-bold text-gray-900 text-sm sm:text-base">Education</p>
                            <p className="text-xs sm:text-sm text-gray-600 truncate">MDS Endodontist, KIDS</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl glass-ultra border border-purple-100/50 shadow-3d hover:shadow-3d-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                        <div className="p-2 sm:p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg text-white flex-shrink-0">
                            <Award className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                        <div className="min-w-0">
                            <p className="font-bold text-gray-900 text-sm sm:text-base">Certifications</p>
                            <p className="text-xs sm:text-sm text-gray-600 truncate">20+ Advanced</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl glass-ultra border border-cyan-100/50 shadow-3d hover:shadow-3d-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                        <div className="p-2 sm:p-3 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl shadow-lg text-white flex-shrink-0">
                            <Stethoscope className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                        <div className="min-w-0">
                            <p className="font-bold text-gray-900 text-sm sm:text-base">Experience</p>
                            <p className="text-xs sm:text-sm text-gray-600 truncate">5+ Years Practice</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl glass-ultra border border-amber-100/50 shadow-3d hover:shadow-3d-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                        <div className="p-2 sm:p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl shadow-lg text-white flex-shrink-0">
                            <Star className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                        <div className="min-w-0">
                            <p className="font-bold text-gray-900 text-sm sm:text-base">Rating</p>
                            <p className="text-xs sm:text-sm text-gray-600 truncate">4.9/5 from Patients</p>
                        </div>
                    </div>
                </div>

                <div className="pt-8">
                    <Button 
                        className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-7 text-lg rounded-full shadow-3d-lg hover:shadow-glow-gradient transition-all duration-500 hover:scale-105 overflow-hidden"
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
