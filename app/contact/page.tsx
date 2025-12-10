"use client"

import React, { useState, ChangeEvent, FormEvent } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Clock, Instagram, Star, Navigation } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const { firstName, lastName, email, message } = formData
    const whatsappMessage = `New Message from Website:
Name: ${firstName} ${lastName}
Email: ${email}
Message: ${message}`
    
    window.open(`https://wa.me/918249736036?text=${encodeURIComponent(whatsappMessage)}`, '_blank')
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pb-16 md:pb-24">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 lg:py-36 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-400/20 via-transparent to-transparent"></div>
        <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-500/20 rounded-full blur-3xl animate-morph"></div>
        <div className="absolute bottom-0 left-0 w-[350px] md:w-[700px] h-[350px] md:h-[700px] bg-purple-500/20 rounded-full blur-3xl animate-morph" style={{ animationDelay: '-4s' }}></div>
        
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
        
        <div className="container px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
              Visit OraPlus
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 max-w-2xl mx-auto leading-relaxed px-2">
              Experience world-class dental care in our modern, state-of-the-art facility. 
              We can't wait to welcome you to our family.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container px-4 md:px-6 -mt-12 md:-mt-20 relative z-20">
        {/* Contact Info Cards */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Card className="shadow-3d-xl border-0 h-full hover:shadow-glow-gradient transition-all duration-500 hover:-translate-y-3 rounded-2xl md:rounded-3xl overflow-hidden glass-ultra">
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="flex items-center gap-2 md:gap-3 text-blue-600 text-base md:text-lg">
                  <div className="p-2 md:p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl md:rounded-2xl shadow-lg shadow-blue-500/30">
                    <Phone className="h-4 w-4 md:h-6 md:w-6 text-white" />
                  </div>
                  Contact Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 md:space-y-6 p-4 md:p-6 pt-0 md:pt-0">
                <div className="flex items-start gap-3 md:gap-4 group">
                  <div className="mt-1 p-2 md:p-3 bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg md:rounded-xl group-hover:from-blue-100 group-hover:to-blue-50 transition-colors shadow-inner">
                    <MapPin className="h-5 w-5 text-gray-500 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Address</p>
                    <p className="text-gray-600 leading-relaxed">Plot no 421, Kanan Vihar,<br />Patia, Bhubaneswar, Odisha 751031</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="mt-1 p-3 bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl group-hover:from-blue-100 group-hover:to-blue-50 transition-colors shadow-inner">
                    <Phone className="h-5 w-5 text-gray-500 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Phone</p>
                    <p className="text-gray-600">+91 8249736036</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="shadow-3d-xl border-0 h-full hover:shadow-glow-gradient transition-all duration-500 hover:-translate-y-3 rounded-3xl overflow-hidden glass-ultra">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-purple-600">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg shadow-purple-500/30">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  Opening Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-5 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100 mb-4 shadow-inner">
                  <p className="text-green-700 font-semibold">Open 7 Days a Week</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">10:00 AM - 9:00 PM</p>
                </div>
                {[
                  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                ].map((day, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-gray-100 last:border-0 pb-2 last:pb-0">
                    <span className="text-gray-600 font-medium">{day}</span>
                    <span className="font-semibold text-green-600">Open</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="shadow-3d-xl border-0 h-full bg-gradient-to-br from-blue-600 to-purple-700 text-white hover:shadow-glow-gradient transition-all duration-500 hover:-translate-y-3 rounded-3xl overflow-hidden relative">
              {/* Premium overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-3 text-white">
                  <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm shadow-lg">
                    <Star className="h-6 w-6" />
                  </div>
                  Patient Reviews
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <div className="text-center p-7 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 shadow-inner">
                  <div className="flex justify-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-7 w-7 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-5xl font-bold mb-1">4.9</div>
                  <div className="text-blue-100 font-medium text-lg">Average Rating</div>
                  <div className="text-sm text-blue-200 mt-2">Based on 100+ Google Reviews</div>
                </div>
                <div className="text-center">
                  <Link 
                    href="https://maps.app.goo.gl/eUEASqsKF1wBzBVs8" 
                    target="_blank"
                    className="inline-flex items-center gap-2 text-white hover:text-blue-200 transition-colors font-semibold group"
                  >
                    Read all reviews on Google
                    <Navigation className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Clinic Tour Section */}
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tour Our Clinic</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Designed for your comfort and safety, our clinic combines modern technology with a relaxing atmosphere.
            </p>
          </div>

          <div className="space-y-24">
            {/* Section 1: Exterior (Portrait Image Left, Content Right) */}
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2 lg:w-5/12">
                <div className="group relative overflow-hidden rounded-3xl shadow-2xl aspect-[3/4]">
                  <Image 
                    src="/clinic/IMG_20251209_101734-min.png" 
                    alt="OraPlus Dental Clinic Exterior" 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-7/12 space-y-6">
                <div className="inline-block p-3 bg-blue-50 rounded-2xl mb-2">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Easy Access Location</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our clinic is conveniently located in the heart of the city, making it easily accessible for all our patients. 
                  We offer ample parking space right in front of the clinic, ensuring a hassle-free arrival for your appointments.
                  The exterior is designed to be welcoming and easy to find.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    Ground floor access
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    Wheelchair accessible
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    Free parking available
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 2: Interior (Content Left, Landscape Image Right) */}
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2 lg:w-5/12 order-2 md:order-1 space-y-6">
                <div className="inline-block p-3 bg-purple-50 rounded-2xl mb-2">
                  <Star className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Modern Treatment Rooms</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Step into our state-of-the-art treatment rooms, designed with your comfort and safety in mind. 
                  We utilize the latest dental technology to provide precise and efficient care. 
                  The calming green interiors are chosen to help you relax during your visit.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                    Advanced sterilization protocols
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                    Ergonomic dental chairs
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                    Digital X-ray equipment
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 lg:w-7/12 order-1 md:order-2">
                <div className="group relative overflow-hidden rounded-3xl shadow-2xl aspect-video">
                  <Image 
                    src="/clinic/Gemini_Generated_Image_e2jho2e2jho2e2jh-min.png" 
                    alt="OraPlus Dental Clinic Interior" 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Location Map */}
            <Card className="overflow-hidden border-0 shadow-2xl rounded-3xl h-[500px] relative group">
              <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  <span className="font-bold text-gray-900">Find Us</span>
                </div>
              </div>
              <iframe 
                src="https://maps.google.com/maps?q=OraPlus+Dental+Clinic&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              ></iframe>
              <div className="absolute bottom-6 left-6 right-6 bg-white p-4 rounded-xl shadow-xl transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="https://maps.app.goo.gl/eUEASqsKF1wBzBVs8" target="_blank">
                    Get Directions
                  </Link>
                </Button>
              </div>
            </Card>

            {/* 360 View */}
            <Card className="overflow-hidden border-0 shadow-2xl rounded-3xl h-[500px] relative group">
              <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <div className="flex items-center gap-2">
                  <Navigation className="h-4 w-4 text-purple-600" />
                  <span className="font-bold text-gray-900">Virtual Tour</span>
                </div>
              </div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!4v1765263962766!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ01uOWI5ZlE.!2m2!1d20.34674541180787!2d85.82563960761978!3f329.2338690743637!4f-15.8638768124559!5f0.4000000000000002" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-4 border-white/20 rounded-3xl"></div>
            </Card>
          </div>
        </motion.div>

        {/* Instagram Section */}
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center text-center mb-12">
            <div className="p-3 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-2xl mb-4 shadow-lg">
              <Instagram className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Follow Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Join our community on Instagram <Link href="https://www.instagram.com/oraplus_dental" className="text-blue-600 font-semibold hover:underline">@oraplus_dental</Link> for daily smiles, tips, and behind-the-scenes moments.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/insta/Screenshot 2025-12-09 123829.png",
              "/insta/Screenshot 2025-12-09 123906.png",
              "/insta/Screenshot 2025-12-09 123930.png",
              "/clinic/IMG_20251209_101734-min.png"
            ].map((src, idx) => (
              <Link 
                key={idx} 
                href="https://www.instagram.com/oraplus_dental" 
                target="_blank"
                className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100"
              >
                <Image 
                  src={src} 
                  alt="Instagram Post" 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <Instagram className="h-8 w-8 text-white" />
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" className="border-2 hover:bg-gray-50" asChild>
              <Link href="https://www.instagram.com/oraplus_dental" target="_blank">
                View Full Gallery
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-2xl border-0 overflow-hidden rounded-3xl">
            {/* Premium header bar */}
            <div className="h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600" />
            
            <CardHeader className="text-center pt-10 pb-2 px-8">
              <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full mx-auto mb-4">
                <Star className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">Get in Touch</span>
              </div>
              <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Send us a Message
              </CardTitle>
              <p className="text-gray-500 mt-3 text-lg">We usually respond within 24 hours</p>
            </CardHeader>
            
            <CardContent className="p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      First Name
                    </label>
                    <Input 
                      id="firstName" 
                      name="firstName" 
                      placeholder="John" 
                      autoComplete="given-name" 
                      className="h-14 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all text-base placeholder:text-gray-400" 
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      Last Name
                    </label>
                    <Input 
                      id="lastName" 
                      name="lastName" 
                      placeholder="Doe" 
                      autoComplete="family-name" 
                      className="h-14 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all text-base placeholder:text-gray-400" 
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    autoComplete="email" 
                    className="h-14 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all text-base placeholder:text-gray-400" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-700">Your Message</label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="How can we help you today?" 
                    className="min-h-[150px] rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all text-base resize-none p-4 placeholder:text-gray-400" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full h-14 text-lg font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
                >
                  Send Message
                  <Navigation className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-center text-sm text-gray-400">
                  You&apos;ll be redirected to WhatsApp to send your message
                </p>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
