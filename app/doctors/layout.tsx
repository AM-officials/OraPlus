import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dr. Kanhu Keshav Mahapatra - Best Dentist in Bhubaneswar | MDS Endodontist",
  description: "Meet Dr. Kanhu Keshav Mahapatra, MDS Endodontist at OraPlus Dental Clinic Bhubaneswar. 5+ years experience, 20+ certifications. Expert in root canal, cosmetic dentistry & smile makeovers. Book appointment now!",
  keywords: [
    "Dr. Kanhu Keshav Mahapatra",
    "best dentist Bhubaneswar",
    "endodontist Bhubaneswar",
    "MDS dentist Patia",
    "root canal specialist Bhubaneswar",
    "cosmetic dentist Odisha",
    "smile makeover expert Bhubaneswar",
    "best dental doctor near KIIT",
    "experienced dentist Bhubaneswar",
    "top dentist Patia"
  ],
  openGraph: {
    title: "Dr. Kanhu Keshav Mahapatra - Best Dentist in Bhubaneswar",
    description: "MDS Endodontist with 5+ years experience. Expert in root canal & cosmetic dentistry. Book appointment!",
    url: "https://oraplus.in/doctors",
    images: [
      {
        url: "/images/doctor1.png",
        width: 800,
        height: 1000,
        alt: "Dr. Kanhu Keshav Mahapatra - Best Dentist in Bhubaneswar",
      }
    ],
  },
  alternates: {
    canonical: "https://oraplus.in/doctors",
  },
}

export default function DoctorsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
