import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Page Not Found | OraPlus Dental Clinic",
  description: "The page you are looking for does not exist. Visit OraPlus Dental Clinic in Bhubaneswar for premium dental care.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-slate-50 to-white">
      <div className="container px-4 md:px-6 text-center space-y-8 py-20">
        {/* Large 404 */}
        <div className="relative">
          <h1 className="text-[120px] md:text-[180px] font-bold text-gray-100 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg shadow-blue-500/30">
              <svg className="w-10 h-10 md:w-14 md:h-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-4 max-w-lg mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-600 text-lg">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. 
            Let us help you find what you need.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all duration-300"
          >
            Go Home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 border-2 border-gray-200 hover:border-blue-400 hover:text-blue-600 rounded-full transition-all duration-300"
          >
            View Services
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 border-2 border-gray-200 hover:border-blue-400 hover:text-blue-600 rounded-full transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
