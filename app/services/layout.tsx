import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dental Services - Root Canal, Implants, Whitening | OraPlus Bhubaneswar",
  description: "Premium dental services in Bhubaneswar: Root Canal Treatment, Dental Implants, Teeth Whitening, Invisalign, Cosmetic Dentistry, Smile Makeovers. Book appointment at OraPlus Dental near KIIT, Patia.",
  keywords: [
    "dental services Bhubaneswar",
    "root canal treatment Bhubaneswar",
    "dental implants Patia",
    "teeth whitening near KIIT",
    "Invisalign Bhubaneswar",
    "cosmetic dentistry Odisha",
    "smile makeover Bhubaneswar",
    "dental braces Patia",
    "dental crown Bhubaneswar",
    "tooth extraction Bhubaneswar"
  ],
  openGraph: {
    title: "Dental Services - Root Canal, Implants, Whitening | OraPlus Bhubaneswar",
    description: "Premium dental services in Bhubaneswar: Root Canal, Implants, Whitening, Invisalign & more. Book now!",
    url: "https://oraplus.in/services",
  },
  alternates: {
    canonical: "https://oraplus.in/services",
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
