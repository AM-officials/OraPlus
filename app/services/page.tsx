"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Head from "next/head"
import {
  Smile,
  Sparkles,
  Shield,
  Zap,
  Gem,
  Heart,
  Clock,
  User,
  Stethoscope,
  Activity,
  ArrowRight,
  CheckCircle2,
  Star
} from "lucide-react"

const services = {
  general: [
    {
      icon: Shield,
      title: "Preventive Care",
      description: "Regular checkups, cleanings, and fluoride treatments to prevent issues before they start.",
      features: ["Deep Cleaning", "Fluoride Treatment", "Sealants", "Oral Cancer Screening"],
      gradient: "from-teal-500 to-emerald-500",
      bgGradient: "from-teal-50 to-emerald-50",
      borderColor: "border-teal-200",
    },
    {
      icon: Stethoscope,
      title: "Oral Exams",
      description: "Comprehensive examinations including digital X-rays to monitor your oral health.",
      features: ["Digital X-rays", "3D Imaging", "Periodontal Assessment", "Treatment Planning"],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
    },
    {
      icon: Heart,
      title: "Gum Disease Treatment",
      description: "Non-surgical and surgical treatments for periodontal disease to protect your gums.",
      features: ["Scaling & Root Planing", "Laser Therapy", "Gum Grafting", "Pocket Reduction"],
      gradient: "from-rose-500 to-pink-500",
      bgGradient: "from-rose-50 to-pink-50",
      borderColor: "border-rose-200",
    },
    {
      icon: User,
      title: "Pediatric Dentistry",
      description: "Specialized care for children, focusing on building healthy habits for a lifetime.",
      features: ["Child-Friendly Care", "Early Orthodontics", "Habit Counseling", "Preventive Sealants"],
      gradient: "from-purple-500 to-violet-500",
      bgGradient: "from-purple-50 to-violet-50",
      borderColor: "border-purple-200",
    },
  ],
  cosmetic: [
    {
      icon: Sparkles,
      title: "Teeth Whitening",
      description: "Professional whitening treatments to brighten your smile safely and effectively.",
      features: ["In-Office Whitening", "Take-Home Kits", "Laser Whitening", "Sensitivity-Free"],
      gradient: "from-amber-500 to-yellow-500",
      bgGradient: "from-amber-50 to-yellow-50",
      borderColor: "border-amber-200",
    },
    {
      icon: Smile,
      title: "Veneers",
      description: "Custom-made porcelain shells to correct imperfections and create a flawless smile.",
      features: ["Porcelain Veneers", "Composite Veneers", "Minimal Prep", "Natural Look"],
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50",
      borderColor: "border-pink-200",
    },
    {
      icon: Zap,
      title: "Invisalign",
      description: "Clear aligners to straighten your teeth discreetly without traditional metal braces.",
      features: ["Custom Aligners", "Removable Design", "Faster Treatment", "Digital Planning"],
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50",
      borderColor: "border-indigo-200",
    },
    {
      icon: Gem,
      title: "Smile Makeovers",
      description: "A combination of cosmetic procedures tailored to transform your smile completely.",
      features: ["Full Mouth Rehab", "Gum Contouring", "Tooth Reshaping", "Custom Design"],
      gradient: "from-cyan-500 to-teal-500",
      bgGradient: "from-cyan-50 to-teal-50",
      borderColor: "border-cyan-200",
    },
  ],
  restorative: [
    {
      icon: Gem,
      title: "Dental Implants",
      description: "The gold standard for replacing missing teeth, looking and feeling just like natural teeth.",
      features: ["Titanium Implants", "Same-Day Implants", "All-on-4", "Bone Grafting"],
      gradient: "from-blue-600 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200",
    },
    {
      icon: Activity,
      title: "Crowns & Bridges",
      description: "Restoring damaged teeth or replacing missing ones with durable, natural-looking prosthetics.",
      features: ["Zirconia Crowns", "Porcelain Bridges", "Same-Day CEREC", "Custom Color Match"],
      gradient: "from-emerald-500 to-green-500",
      bgGradient: "from-emerald-50 to-green-50",
      borderColor: "border-emerald-200",
    },
    {
      icon: Zap,
      title: "Root Canal Therapy",
      description: "Saving infected teeth with advanced, pain-free root canal treatments.",
      features: ["Painless Procedure", "Single Visit RCT", "Microscopic Precision", "3D Navigation"],
      gradient: "from-orange-500 to-amber-500",
      bgGradient: "from-orange-50 to-amber-50",
      borderColor: "border-orange-200",
    },
    {
      icon: Clock,
      title: "Emergency Dentistry",
      description: "Immediate care for toothaches, broken teeth, and other dental emergencies.",
      features: ["Same-Day Care", "24/7 On-Call", "Pain Management", "Trauma Care"],
      gradient: "from-red-500 to-rose-500",
      bgGradient: "from-red-50 to-rose-50",
      borderColor: "border-red-200",
    },
  ],
}

function ServiceCard({ service, index }: { service: typeof services.general[0]; index: number }) {
  const Icon = service.icon
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className={`group h-full overflow-hidden bg-white border-2 ${service.borderColor} hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative`}>
        {/* Premium gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        <CardHeader className="relative z-10 pb-4">
          <div className={`mb-6 p-4 bg-gradient-to-br ${service.gradient} rounded-2xl w-fit shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}>
            <Icon className="h-7 w-7 text-white" />
          </div>
          <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gray-900">{service.title}</CardTitle>
          <CardDescription className="text-base text-gray-600 leading-relaxed">
            {service.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="relative z-10 pt-0">
          <div className="space-y-3">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className={`p-1 rounded-full bg-gradient-to-br ${service.gradient}`}>
                  <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                </div>
                <span className="text-sm text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-100">
            <Button 
              variant="ghost" 
              className={`w-full justify-between group/btn hover:bg-gradient-to-r ${service.gradient} hover:text-white transition-all duration-300`}
              asChild
            >
              <Link href="https://wa.me/918249736036" target="_blank">
                <span>Book Consultation</span>
                <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function ServicesPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div className="flex flex-col min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative py-24 md:py-36 lg:py-44 overflow-hidden">
        {/* Premium gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950" />
        
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-slate-950/80" />
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Premium badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-5 py-2.5 text-sm font-medium text-blue-200 border border-white/10"
            >
              <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
              <span>Premium Dental Services in Bhubaneswar</span>
            </motion.div>
            
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-white">World-Class </span>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Dental Care
              </span>
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-blue-100/80 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Experience the perfect blend of advanced technology and compassionate care. 
              Our comprehensive treatments are designed to give you the smile you deserve.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap justify-center gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
                asChild
              >
                <Link href="https://wa.me/918249736036" target="_blank">
                  Book Appointment
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
            </motion.div>
          </div>
        </div>
        
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-white" ref={ref}>
        <div className="container px-4 md:px-6">
          {/* Section header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Specializations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From routine checkups to advanced cosmetic procedures, we offer a complete range of dental services.
            </p>
          </motion.div>
          
          <Tabs defaultValue="general" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-lg grid-cols-3 h-auto p-1.5 bg-gray-100/80 backdrop-blur-sm rounded-2xl shadow-inner">
                <TabsTrigger 
                  value="general" 
                  className="rounded-xl py-4 px-6 text-sm font-semibold data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:shadow-gray-200/50 transition-all duration-300"
                >
                  General
                </TabsTrigger>
                <TabsTrigger 
                  value="cosmetic" 
                  className="rounded-xl py-4 px-6 text-sm font-semibold data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:shadow-gray-200/50 transition-all duration-300"
                >
                  Cosmetic
                </TabsTrigger>
                <TabsTrigger 
                  value="restorative" 
                  className="rounded-xl py-4 px-6 text-sm font-semibold data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:shadow-gray-200/50 transition-all duration-300"
                >
                  Restorative
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="general">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {services.general.map((service, index) => (
                  <ServiceCard key={index} service={service} index={index} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="cosmetic">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {services.cosmetic.map((service, index) => (
                  <ServiceCard key={index} service={service} index={index} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="restorative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {services.restorative.map((service, index) => (
                  <ServiceCard key={index} service={service} index={index} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose OraPlus?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;re committed to providing exceptional dental care with the latest technology and techniques.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Sterilization First", desc: "Hospital-grade sterilization protocols for your safety", color: "from-blue-500 to-cyan-500" },
              { icon: Zap, title: "Latest Technology", desc: "Digital X-rays, 3D imaging & laser dentistry", color: "from-purple-500 to-pink-500" },
              { icon: Clock, title: "Minimal Wait Time", desc: "Efficient scheduling to respect your time", color: "from-amber-500 to-orange-500" },
              { icon: Heart, title: "Gentle Care", desc: "Pain-free treatments with compassionate approach", color: "from-rose-500 to-red-500" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-center group"
              >
                <div className={`mx-auto mb-6 p-5 bg-gradient-to-br ${item.color} rounded-3xl w-fit shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}>
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
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
              Ready to Transform Your Smile?
            </h2>
            <p className="text-lg md:text-xl text-blue-100">
              Book your consultation today and take the first step towards the smile you&apos;ve always wanted.
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
                <a href="tel:+918249736036">
                  Call Now
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
