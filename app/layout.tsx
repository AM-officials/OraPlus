import type React from "react"
import type { Metadata, Viewport } from "next"
import "@/app/globals.css"
import { Inter, Playfair_Display, DM_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import LoadingScreen from "@/components/loading-screen"
import { LoadingProvider } from "@/contexts/loading-context"

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair"
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"]
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3b82f6",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://oraplus.in"),
  title: {
    default: "OraPlus Dental Clinic - Best Dentist in Bhubaneswar, Patia | Dr. Kanhu Keshav Mahapatra",
    template: "%s | OraPlus Dental - Best Dentist in Bhubaneswar"
  },
  description: "OraPlus Dental Clinic offers premium dental care in Bhubaneswar, Patia near KIIT. Services include root canal, dental implants, teeth whitening, Invisalign, cosmetic dentistry by Dr. Kanhu Keshav Mahapatra (MDS Endodontist). Book appointment now!",
  keywords: [
    "dentist in Bhubaneswar",
    "best dentist in Bhubaneswar",
    "dentist near KIIT",
    "dentist in Patia",
    "dental clinic Bhubaneswar",
    "root canal treatment Bhubaneswar",
    "dental implants Bhubaneswar",
    "teeth whitening Bhubaneswar",
    "Invisalign Bhubaneswar",
    "cosmetic dentistry Bhubaneswar",
    "smile makeover Bhubaneswar",
    "OraPlus dental",
    "Dr. Kanhu Keshav Mahapatra",
    "endodontist Bhubaneswar",
    "best dental clinic near me",
    "painless root canal",
    "dental clinic Patia",
    "tooth extraction Bhubaneswar",
    "dental braces Bhubaneswar",
    "orthodontist Bhubaneswar",
    "kids dentist Bhubaneswar",
    "pediatric dentist Bhubaneswar",
    "emergency dentist Bhubaneswar",
    "dental clinic near KIIT University",
    "dentist Kanan Vihar"
  ],
  authors: [{ name: "Dr. Kanhu Keshav Mahapatra", url: "https://oraplus.in/doctors" }],
  creator: "OraPlus Dental Clinic",
  publisher: "OraPlus Dental Clinic",
  category: "Healthcare",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://oraplus.in",
    siteName: "OraPlus Dental Clinic",
    title: "OraPlus Dental - Best Dentist in Bhubaneswar, Patia | Premium Dental Care",
    description: "Experience world-class dental care at OraPlus Dental Clinic in Bhubaneswar. Root canal, implants, cosmetic dentistry & more by Dr. Kanhu Keshav Mahapatra. Book now!",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OraPlus Dental Clinic - Premium Dental Care in Bhubaneswar",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OraPlus Dental - Best Dentist in Bhubaneswar",
    description: "Premium dental care in Bhubaneswar by Dr. Kanhu Keshav Mahapatra. Root canal, implants, Invisalign & cosmetic dentistry.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://oraplus.in",
  },
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "geo.region": "IN-OR",
    "geo.placename": "Bhubaneswar",
    "geo.position": "20.3464;85.8257",
    "ICBM": "20.3464, 85.8257",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              "name": "OraPlus Dental Clinic",
              "image": "https://oraplus.in/images/clinic-exterior.jpg",
              "url": "https://oraplus.in",
              "telephone": "+91-8249736036",
              "priceRange": "₹₹",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Plot no 421, Kanan Vihar, Patia",
                "addressLocality": "Bhubaneswar",
                "addressRegion": "Odisha",
                "postalCode": "751031",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 20.3464,
                "longitude": 85.8257
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "10:00",
                "closes": "21:00"
              },
              "sameAs": [
                "https://www.instagram.com/oraplus_dental",
                "https://maps.app.goo.gl/eUEASqsKF1wBzBVs8"
              ],
              "founder": {
                "@type": "Person",
                "name": "Dr. Kanhu Keshav Mahapatra",
                "jobTitle": "MDS Endodontist"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "100",
                "bestRating": "5"
              },
              "medicalSpecialty": [
                "Root Canal Treatment",
                "Dental Implants",
                "Cosmetic Dentistry",
                "Orthodontics",
                "Teeth Whitening",
                "Pediatric Dentistry"
              ],
              "areaServed": {
                "@type": "City",
                "name": "Bhubaneswar"
              }
            })
          }}
        />
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Where is OraPlus Dental Clinic located?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "OraPlus Dental Clinic is located at Plot no 421, Kanan Vihar, Patia, Bhubaneswar, Odisha 751031, near KIIT University."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are the clinic timings?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "OraPlus Dental Clinic is open 7 days a week from 10:00 AM to 9:00 PM."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What services does OraPlus offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "OraPlus offers comprehensive dental services including root canal treatment, dental implants, teeth whitening, Invisalign, cosmetic dentistry, smile makeovers, and pediatric dentistry."
                  }
                }
              ]
            })
          }}
        />
        {/* Favicons - SVG first for modern browsers (better scaling) */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#4F46E5" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${dmSans.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <LoadingProvider>
            <LoadingScreen />
            <Header />
            {children}
            <Footer />
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
