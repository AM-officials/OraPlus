"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Award, 
  Star, 
  GraduationCap, 
  Stethoscope, 
  Heart, 
  CheckCircle2,
  ArrowRight,
  Quote,
  Calendar,
  Phone
} from "lucide-react"

const achievements = [
  { icon: GraduationCap, label: "Education", value: "MDS Endodontist", sublabel: "KIDS, Bhubaneswar" },
  { icon: Award, label: "Certifications", value: "20+", sublabel: "Advanced Training" },
  { icon: Stethoscope, label: "Experience", value: "5+ Years", sublabel: "Clinical Practice" },
  { icon: Star, label: "Patient Rating", value: "4.9/5", sublabel: "Google Reviews" },
]

const specializations = [
  "Root Canal Treatment (RCT)",
  "Smile Design & Makeovers",
  "Cosmetic Dentistry",
  "Dental Implants",
  "Teeth Whitening",
  "Full Mouth Rehabilitation",
  "Pediatric Dentistry",
  "Emergency Dental Care",
]

const testimonials = [
  {
    name: "Priya Sharma",
    text: "Dr. Kanhu is the most gentle dentist I have ever visited. His root canal treatment was completely painless!",
    rating: 5,
  },
  {
    name: "Rajesh Mohanty",
    text: "Got my smile makeover done here. The results are amazing! Highly recommend OraPlus.",
    rating: 5,
  },
  {
    name: "Ananya Das",
    text: "Finally found a dentist my kids love! Dr. Kanhu is so patient and kind with children.",
    rating: 5,
  },
]

export default function DoctorsPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div className="min-h-screen bg-white">
      {/* Premium Hero Section */}
      <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
        {/* Premium gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950" />
        
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Premium badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-5 py-2.5 text-sm font-medium text-blue-200 border border-white/10"
            >
              <Award className="h-4 w-4 text-amber-400" />
              <span>Meet Your Expert Dentist</span>
            </motion.div>
            
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-white">Dr. Kanhu Keshav </span>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Mahapatra
              </span>
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-blue-100/80 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              MDS Endodontist | Cosmetic & Restorative Dentistry Specialist
            </motion.p>
          </div>
        </div>
        
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Main Content Section */}
      <section className="py-20 md:py-28 bg-white" ref={ref}>
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Doctor Image */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="relative"
            >
              <div className="relative aspect-[3/4] w-full max-w-lg mx-auto">
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-3xl -z-10 blur-2xl opacity-50" />
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full -z-10 blur-2xl opacity-50" />
                
                {/* Main image container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full min-h-[500px] md:min-h-[600px]">
                  <Image 
                    src="/images/doctor1.png" 
                    alt="Dr. Kanhu Keshav Mahapatra - Best Dentist in Bhubaneswar" 
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  {/* Premium overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />
                </div>
                
                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute -bottom-4 -right-4 md:right-4 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl">
                      <Star className="h-6 w-6 text-white fill-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">4.9</p>
                      <p className="text-sm text-gray-500">100+ Reviews</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Doctor Info */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                  A Passion for Perfect Smiles
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Dr. Kanhu Keshav Mahapatra is an MDS Endodontist with over 5 years of experience 
                  in cosmetic and restorative dentistry. He combines precision endodontics with 
                  smile design to deliver comfortable, long-lasting results for every patient.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  A graduate of Kalinga Institute for Dental Sciences (KIDS), Bhubaneswar, 
                  Dr. Mahapatra has earned 20+ advanced certifications and continues to ground 
                  his care in both expertise and empathy.
                </p>
              </div>
              
              {/* Achievement Cards */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {achievements.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + idx * 0.1 }}
                    className="group p-3 sm:p-5 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl w-fit mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <p className="font-bold text-gray-900 text-sm sm:text-lg truncate">{item.value}</p>
                    <p className="text-xs sm:text-sm text-gray-600 truncate">{item.label}</p>
                    <p className="text-xs text-gray-500 mt-1 truncate hidden sm:block">{item.sublabel}</p>
                  </motion.div>
                ))}
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <Link href="https://wa.me/918249736036" target="_blank">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Appointment
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-gray-200 hover:border-blue-500 px-8 py-6 text-lg rounded-full"
                  asChild
                >
                  <Link href="tel:+918249736036">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Areas of Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive dental care backed by years of specialized training and experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {specializations.map((spec, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group flex items-center gap-3 p-4 md:p-5 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="p-1.5 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm md:text-base font-medium text-gray-700 group-hover:text-gray-900">
                  {spec}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Patients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories from real patients who trusted us with their smiles.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card className="h-full bg-gradient-to-br from-gray-50 to-white border-gray-100 hover:shadow-xl transition-all duration-500">
                  <CardContent className="p-6 md:p-8">
                    <Quote className="h-8 w-8 text-blue-500/30 mb-4" />
                    <p className="text-gray-600 leading-relaxed mb-6">
                      &quot;{testimonial.text}&quot;
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <div className="flex gap-1 mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-400">Verified Patient</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button variant="outline" size="lg" className="rounded-full" asChild>
              <Link href="https://maps.app.goo.gl/eUEASqsKF1wBzBVs8" target="_blank">
                Read More Reviews on Google
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Schedule Your Visit Today
            </h2>
            <p className="text-lg md:text-xl text-blue-100">
              Experience the OraPlus difference. Book your appointment with Dr. Kanhu and start your journey to a perfect smile.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                asChild
              >
                <Link href="https://wa.me/918249736036" target="_blank">
                  Book on WhatsApp
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg rounded-full transition-all duration-300"
                asChild
              >
                <Link href="/contact">
                  Visit Clinic
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
