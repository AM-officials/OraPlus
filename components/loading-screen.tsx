"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLoading } from "@/contexts/loading-context"

// Pre-defined particle positions to avoid hydration mismatch
const PARTICLE_POSITIONS = [
  { left: 10, top: 20, duration: 3.5, delay: 0.2 },
  { left: 25, top: 80, duration: 4.0, delay: 0.5 },
  { left: 40, top: 15, duration: 3.2, delay: 0.8 },
  { left: 55, top: 60, duration: 4.5, delay: 0.1 },
  { left: 70, top: 35, duration: 3.8, delay: 1.0 },
  { left: 85, top: 75, duration: 4.2, delay: 0.3 },
  { left: 15, top: 45, duration: 3.6, delay: 0.7 },
  { left: 30, top: 90, duration: 4.1, delay: 0.4 },
  { left: 45, top: 25, duration: 3.3, delay: 0.9 },
  { left: 60, top: 55, duration: 4.4, delay: 0.6 },
  { left: 75, top: 10, duration: 3.7, delay: 1.2 },
  { left: 90, top: 50, duration: 4.3, delay: 0.0 },
  { left: 5, top: 65, duration: 3.4, delay: 1.1 },
  { left: 20, top: 5, duration: 4.0, delay: 0.3 },
  { left: 35, top: 70, duration: 3.9, delay: 0.8 },
  { left: 50, top: 40, duration: 4.2, delay: 0.5 },
  { left: 65, top: 85, duration: 3.5, delay: 1.0 },
  { left: 80, top: 30, duration: 4.1, delay: 0.2 },
  { left: 95, top: 95, duration: 3.8, delay: 0.7 },
  { left: 12, top: 55, duration: 4.0, delay: 0.4 },
]

// Pre-calculated progress increments to avoid hydration mismatch
const PROGRESS_INCREMENTS = [12, 8, 14, 10, 11, 9, 13, 15, 8, 10]

export default function LoadingScreen() {
  const { isLoading } = useLoading()
  const [progress, setProgress] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    let incrementIndex = 0
    // Simulate loading progress with pre-calculated increments
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        const increment = PROGRESS_INCREMENTS[incrementIndex % PROGRESS_INCREMENTS.length]
        incrementIndex++
        return Math.min(prev + increment, 100)
      })
    }, 100)

    return () => {
      clearInterval(interval)
    }
  }, [mounted])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] }
          }}
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Morphing gradient orbs */}
            <motion.div 
              className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-600/30 to-cyan-400/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, -30, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-600/30 to-pink-400/20 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                x: [0, -40, 0],
                y: [0, 40, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Floating particles - using pre-defined positions */}
            {PARTICLE_POSITIONS.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Animated Tooth Logo */}
            <motion.div
              className="relative mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            >
              {/* Glow rings */}
              <motion.div 
                className="absolute inset-0 -m-8 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-2xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="absolute inset-0 -m-4 rounded-full border-2 border-blue-400/30"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
              />

              {/* Main Logo Container */}
              <motion.div 
                className="relative w-32 h-32 flex items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl shadow-blue-500/50"
                animate={{
                  boxShadow: [
                    "0 0 60px rgba(59, 130, 246, 0.5)",
                    "0 0 100px rgba(147, 51, 234, 0.5)",
                    "0 0 60px rgba(59, 130, 246, 0.5)",
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {/* Animated Tooth SVG */}
                <motion.svg
                  viewBox="0 0 100 100"
                  className="w-20 h-20"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                >
                  {/* Tooth shape with glow effect */}
                  <defs>
                    <linearGradient id="toothGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#e0f2fe" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Main tooth body */}
                  <motion.path
                    d="M50 10 C30 10 20 25 20 40 C20 50 25 55 28 65 L32 90 C32 95 38 95 40 90 L45 70 C47 65 53 65 55 70 L60 90 C62 95 68 95 68 90 L72 65 C75 55 80 50 80 40 C80 25 70 10 50 10 Z"
                    fill="url(#toothGradient)"
                    filter="url(#glow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                  
                  {/* Shine effect */}
                  <motion.path
                    d="M35 25 Q40 20 50 22 Q45 30 35 25"
                    fill="rgba(255,255,255,0.6)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0.6] }}
                    transition={{ duration: 1, delay: 1 }}
                  />

                  {/* Sparkle cross/plus sign */}
                  <motion.g
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    <motion.path
                      d="M75 20 L75 35 M67.5 27.5 L82.5 27.5"
                      stroke="#4ade80"
                      strokeWidth="4"
                      strokeLinecap="round"
                      fill="none"
                      animate={{
                        filter: ["drop-shadow(0 0 3px #4ade80)", "drop-shadow(0 0 8px #4ade80)", "drop-shadow(0 0 3px #4ade80)"]
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </motion.g>
                </motion.svg>
              </motion.div>
            </motion.div>

            {/* Brand Name */}
            <motion.div
              className="flex items-center gap-1 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Ora
              </span>
              <span className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Plus
              </span>
            </motion.div>

            {/* Tagline with typing effect */}
            <motion.p
              className="text-blue-200/80 text-lg tracking-widest uppercase mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Crafting Perfect Smiles
            </motion.p>

            {/* Premium Progress Bar */}
            <motion.div
              className="relative w-64 h-1.5 bg-white/10 rounded-full overflow-hidden"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-full"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* Loading text */}
            <motion.p
              className="mt-4 text-white/50 text-sm tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {progress < 100 ? "Loading experience..." : "Welcome"}
            </motion.p>
          </div>

          {/* Corner decorations */}
          <motion.div 
            className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-blue-400/30"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          />
          <motion.div 
            className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-purple-400/30"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          />
          <motion.div 
            className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-purple-400/30"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          />
          <motion.div 
            className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-blue-400/30"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
