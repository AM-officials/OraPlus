"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Smile, Calendar, Star } from "lucide-react"

const stats = [
  { icon: <Smile className="h-8 w-8" />, value: 1000, suffix: "+", label: "Happy Smiles", description: "Transformed lives through dental care", color: "from-blue-500 to-cyan-500" },
  { icon: <Calendar className="h-8 w-8" />, value: 5, suffix: "+", label: "Years Experience", description: "Dedicated to excellence in dentistry", color: "from-purple-500 to-indigo-500" },
  { icon: <Award className="h-8 w-8" />, value: 20, suffix: "+", label: "Certifications", description: "Advanced training and specializations", color: "from-amber-500 to-orange-500" },
  { icon: <Star className="h-8 w-8" />, value: 100, suffix: "+", label: "Positive Reviews", description: "Consistently rated highly by patients", color: "from-green-500 to-emerald-500" },
]

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const duration = 2000
      const increment = end / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [isInView, end])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }
  const itemVariants = { hidden: { opacity: 0, y: 40, scale: 0.9 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8 } } }

  return (
    <section className="relative w-full py-16 md:py-28 lg:py-40 overflow-hidden" ref={ref}>
      {/* Premium Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 animate-gradient-xy"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/30 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-400/30 via-transparent to-transparent"></div>
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      
      {/* Floating orbs - Hidden on small mobile */}
      <div className="hidden sm:block absolute top-20 left-10 md:left-20 w-20 md:w-32 h-20 md:h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
      <div className="hidden sm:block absolute bottom-20 right-10 md:right-20 w-28 md:w-48 h-28 md:h-48 bg-white/10 rounded-full blur-2xl animate-float-slow"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 md:w-64 h-40 md:h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="group flex flex-col items-center text-center p-4 sm:p-6 md:p-8 lg:p-10 glass-ultra rounded-2xl md:rounded-3xl shadow-3d-xl hover:shadow-glow-gradient transition-all duration-700 hover:scale-105 hover:-translate-y-4 border border-white/30" 
              variants={itemVariants}
            >
              <div className={`rounded-xl md:rounded-2xl lg:rounded-3xl bg-gradient-to-br ${stat.color} p-3 sm:p-4 md:p-5 lg:p-6 shadow-2xl mb-3 sm:mb-4 md:mb-6 lg:mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                <div className="text-white [&_svg]:h-5 [&_svg]:w-5 sm:[&_svg]:h-6 sm:[&_svg]:w-6 md:[&_svg]:h-7 md:[&_svg]:w-7 lg:[&_svg]:h-8 lg:[&_svg]:w-8">{stat.icon}</div>
              </div>
              <h3 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 sm:mb-2 md:mb-3`}>
                <Counter end={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="font-bold text-gray-900 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-1 md:mb-2">{stat.label}</p>
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 leading-relaxed hidden sm:block">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
