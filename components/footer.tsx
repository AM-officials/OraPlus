import Link from "next/link"
import { Instagram, MapPin, Phone, Heart, Sparkles } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-300 overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl animate-morph"></div>
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-3xl animate-morph" style={{ animationDelay: '-4s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      <div className="container px-4 md:px-6 py-12 md:py-20 lg:py-28 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 md:gap-3 mb-5 md:mb-8 group">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/30 p-1.5">
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <defs>
                      <linearGradient id="toothGradientFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="100%" stopColor="#e0f2fe" />
                      </linearGradient>
                      <filter id="toothGlowFooter">
                        <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <path
                      d="M50 12 C32 12 22 26 22 40 C22 50 26 56 29 66 L34 88 C34 93 40 93 42 88 L47 68 C49 64 51 64 53 68 L58 88 C60 93 66 93 66 88 L71 66 C74 56 78 50 78 40 C78 26 68 12 50 12 Z"
                      fill="url(#toothGradientFooter)"
                      filter="url(#toothGlowFooter)"
                    />
                    <path
                      d="M36 26 Q42 20 52 23 Q46 32 36 26"
                      fill="rgba(255,255,255,0.7)"
                    />
                    <path
                      d="M76 22 L76 36 M69 29 L83 29"
                      stroke="#4ade80"
                      strokeWidth="5"
                      strokeLinecap="round"
                      fill="none"
                      filter="url(#toothGlowFooter)"
                    />
                  </svg>
                </div>
              </div>
              <span className="text-xl md:text-2xl font-bold text-gradient-animated">
                OraPlus
              </span>
            </Link>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-5 md:mb-8">
              Creating beautiful smiles with advanced dental technology and compassionate care. Your journey to perfect oral health starts here.
            </p>
            <div className="flex space-x-4">
              <Link 
                  href="https://www.instagram.com/oraplus_dental" 
                  target="_blank"
                  className="group relative w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 hover:from-pink-500 hover:to-purple-600 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/30"
                >
                  <Instagram className="h-4 w-4 md:h-5 md:w-5 text-gray-400 group-hover:text-white transition-colors" />
                </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-4 md:mb-8 text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
            </h3>
            <ul className="space-y-2 md:space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "Meet Dr. Kanhu", href: "/doctors" },
                { name: "Contact Us", href: "/contact" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="text-sm md:text-base text-gray-400 hover:text-blue-400 transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-2 group">
                    <span className="w-0 h-0.5 bg-blue-500 group-hover:w-3 transition-all duration-300"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="hidden md:block">
            <h3 className="text-base md:text-lg font-bold mb-4 md:mb-8 text-white relative inline-block">
              Services
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
            </h3>
            <ul className="space-y-2 md:space-y-4">
              {["General Dentistry", "Cosmetic Dentistry", "Orthodontics", "Implants", "Pediatric Dentistry", "Emergency Care"].map((dept, idx) => (
                <li key={idx}>
                  <Link href={`/services`} className="text-sm md:text-base text-gray-400 hover:text-blue-400 transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-2 group">
                    <span className="w-0 h-0.5 bg-blue-500 group-hover:w-3 transition-all duration-300"></span>
                    {dept}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-4 md:mb-8 text-white relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
            </h3>
            <ul className="space-y-4 md:space-y-6">
              <li className="flex items-start group">
                <div className="rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-600/20 to-blue-500/10 p-2 md:p-3 mr-3 md:mr-4 group-hover:from-blue-600/30 group-hover:to-blue-500/20 transition-colors shadow-inner">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5 text-blue-400" />
                </div>
                <span className="text-sm md:text-base text-gray-400 leading-relaxed">
                  Plot no 421, Kanan Vihar,<br />Patia, Bhubaneswar, Odisha 751031
                </span>
              </li>
              <li className="flex items-center group">
                <div className="rounded-xl md:rounded-2xl bg-gradient-to-br from-purple-600/20 to-purple-500/10 p-2 md:p-3 mr-3 md:mr-4 group-hover:from-purple-600/30 group-hover:to-purple-500/20 transition-colors shadow-inner">
                  <Phone className="h-4 w-4 md:h-5 md:w-5 text-purple-400" />
                </div>
                <span className="text-sm md:text-base text-gray-400">+91 8249736036</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/50 mt-10 md:mt-20 pt-6 md:pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            <p className="text-xs md:text-sm text-gray-500">
              &copy; {new Date().getFullYear()} OraPlus. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" />
              <span>for better healthcare</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
